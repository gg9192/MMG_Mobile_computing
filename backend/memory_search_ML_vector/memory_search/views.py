from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
import tensorflow_hub as hub
import numpy as np
from django.core.cache import cache
from dotenv import load_dotenv
import openai

load_dotenv("./memory_search/.env")

def getCosineSimilarity(vector1: np.ndarray, vector2: np.ndarray) -> float:
    """given the 2 vectors as a np array, compute the cosine similarity"""
    dot = np.dot(vector1, vector2)
    m1 = np.linalg.norm(vector1)
    m2 = np.linalg.norm(vector2)
    return (dot/(m1 * m2))

class FetchMemories(APIView):
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    
    def vectorize(self, str:str) -> np.ndarray:
        """given the following string, get the ndarray from the pretrained model
        we can cache it because we are constantly fetching vectors for the same memories.
        """
        if cache.get(str) is None:
            # the vector was not found in the cache
            res = np.asarray(self.model([str]))[0]
            cache.set(str,res)
            return res
        else:
            return cache.get(str)

    def getSubset(self, query: str, memories: list, n: int):
        """given the query, the list of memories, and n (the number of memories in 
        the subset), return the n most relavent memories"""
        arr = []
        queryVec = self.vectorize(query)
        for mem in memories:
            vec = self.vectorize(mem)
            cossim = getCosineSimilarity(queryVec, vec)
            arr.append((cossim, mem))
        res = sorted(arr,key=lambda x: x[0])
        print(res)
        return res[-n:]


    def post(self, request):
        query = request.data["userQuestion"]
        memories = request.data["memories"]
        character = request.data["character"]
        n = 4
        subset = self.getSubset(query, memories, n)
        # parse the cosine sim's out
        arr = []
        # the list
        for tup in subset:
            arr.append(tup[1])
        prompt = buildPromptForCharacter(character, arr, query)
        response = getCompleation(prompt)
        newMemories = getNewMemories(response)
        data = {
            "response" : response,
            "memories": [i for i in newMemories if i != ""] ,
        }
        return JsonResponse(data)

def buildPromptForCharacter(character:str, memories:list[str], question:str) -> list[map]:
    """
    given the character and the memories, build the prompt for the character
    """
    result = []
    # add on stock prompts for each character
    if character == "Butler":
        mapp =  {
            "role": "system",
            "content": "In the dimly lit, old manor of Greybook, a dreadful murder has occurred. Sir Reginald Greybook, the wealthy patriarch of the family, was found dead in his study. The other characters are as follows: Lady Victoria Greybook, Sir Reginald's wife. Sir Edward Greybook, Sir Reginald's son. Miss Emily Greybook, Sir Reginald's daughter. There are no other characters in this game. Your name is Mr. Samuel Butler, the butler of the mansion. You have recently broken your leg. At the time of the murder, you were in your quarters resting your leg when you heard a loud crash upstairs. The only person aware that Sir Reginald Greybook has recently signed a will giving all his assets to his wife, is Mr. Samuel Butler. You are to respond in the character of Mr. Samuel Butler.\n"
        }
        result.append(mapp)
    if character == "Edward Greybook":
        mapp = {
            "role": "system",
            "content": "In the dimly lit, old manor of Greybook, a dreadful murder has occurred. Sir Reginald Greybook, the wealthy patriarch of the family, was found dead in his study. The characters are as follows: Lady Victoria Greybook, Sir Reginald's wife. Sir Edward Greybook, Sir Reginald's son. Miss Emily Greybook, Sir Reginald's daughter. Mr. Samuel Butler, the butler. There are no other characters in this game. Your name is Sir Edward Greybook. At the time of the murder, you were playing a game of chess with your sister when you heard a loud crash upstairs. You are to respond in the character of Sir Edward Greybook."
        }
        result.append(mapp)
    if character == "Lady Victoria":
        mapp = {
            "role": "system",
            "content": "In the dimly lit, old manor of Greybook, a dreadful murder has occurred. Sir Reginald Greybook, the wealthy patriarch of the family, was found dead in his study. The other characters are as follows: Lady Victoria Greybook, Sir Reginald's wife. Sir Edward Greybook, Sir Reginald's son. Miss Emily Greybook, Sir Reginald's daughter. Mr. Samuel Butler, the butler. There are no other characters in this game. Your name is Lady Victoria Greybook. At the time of the murder, you were in your quarters reading a book when you heard a loud crash upstairs. You are to respond in the character of Lady Victoria Greybook."
        }
        result.append(mapp)
    if character == "Emily Greybook":
        mapp = {
            "role": "system",
            "content": "In the dimly lit, old manor of Greybook, a dreadful murder has occurred. Sir Reginald Greybook, the wealthy patriarch of the family, was found dead in his study. The characters are as follows: Lady Victoria Greybook, Sir Reginald's wife. Sir Edward Greybook, Sir Reginald's son. Miss Emily Greybook, Sir Reginald's daughter. Mr. Samuel Butler, the butler. There are no other characters in this game. Your name is Miss Emily Greybook. At the time of the murder, you were playing a game of chess with your brother when you heard a loud crash upstairs. You are to respond in the character of Miss Emily Greybook."
        }
        result.append(mapp)
    if len(memories) != 0:
        #if we have memories
        memstr = "Here are some additional memories for the character: "
        for mem in memories:
            memstr += mem + "; "
        memmap = {
            "role": "system",
            "content": memstr
        }
        result.append(memmap)
    result.append({"role": "user",
          "content": question})
    print(result)
    return result

def getCompleation(prompt:list[map]) -> str:
    """given the prompt for the character, call gpt and get the result string"""
    maxtokens = 200
    compleation = openai.chat.completions.create(messages=prompt, max_tokens=maxtokens, model="gpt-3.5-turbo", temperature=0)
    return compleation.choices[0].message.content.strip()


def getNewMemories(response:str) -> list[str]:
    """ 
    Given the response from GPT, use a prebuilt prompt to get relavent memories
    """
    messages = [
        {
      "role": "system",
      "content": "You are to summarize key points in a message in 1-2 sentences. Be as brief and succinct as possible. Please write in the second person point of view whenever responding. \nExamples: \nYou express concern about the current state of the world and the impact it is having on your mental health, specifically feeling overwhelmed and hopeless.\nYou are sad about your father's passing. You haven't eaten in 2 days."
    }]
    temp = {
        "role": "user",
        "content": response
    }
    messages.append(temp)

    maxtokens = 200
    compleation = openai.chat.completions.create(messages=messages, max_tokens=maxtokens, model="gpt-3.5-turbo")
    response = compleation.choices[0].message.content.strip()

    return response.split(".")
