from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import HttpResponse
from . import tfidf
from django.http import JsonResponse
from dotenv import load_dotenv
import openai

# this line loads the env file 
load_dotenv("./memory_search/.env")

class GetCompleationForCharacter(APIView):

    def post(self, request):
        """
        see the readme under backend for the docs
        """
        query = request.data["userQuestion"]
        memories = request.data["memories"]
        character = request.data["character"]
        n = 4
        subset = tfidf.getMemorySubset(query, memories, n)
        arr = []
        # the list
        for tup in subset:
            arr.append(tup[1])
        prompt = buildPromptForCharacter(character, arr, query)
        response = getCompleation(prompt)
        newMemories = getNewMemories(response)
        data = {
            "response" : response,
            "memories": newMemories,
        }
        return JsonResponse({})
        
def buildPromptForCharacter(character:str, memories:list[str], question:str) -> list[map]:
    """
    given the character and the memories, build the prompt for the character
    """
    result = []
    # add on stock prompts for each character
    if character == "Butler":
        pass
    if character == "Edward Greybook":
        pass
    if character == "Lady Victoria":
        pass
    if character == "Emily Greybook":
        pass
    #add the relavent memories to the prompt
    for mem in memories:
        pass

    result.append({"role": "user",
          "content": question})

    return result

def getCompleation(prompt:list[str]) -> str:
    """given the prompt for the character, call llama and get the result string"""
    maxtokens = 200
    compleation = openai.chat.completions.create(messages=prompt, max_tokens=maxtokens, model="gpt-3.5-turbo")
    return compleation.choices[0].message.content.strip()


def getNewMemories(response:str) -> str:
    """ 
    Given the response from GPT, use a prebuilt prompt to get relavent memories
    """
    messages = []
    maxtokens = 200
    compleation = openai.chat.completions.create(messages=messages, max_tokens=maxtokens, model="gpt-3.5-turbo")
    response = compleation.choices[0].message.content.strip()
    #parse the response somehow

    return None
