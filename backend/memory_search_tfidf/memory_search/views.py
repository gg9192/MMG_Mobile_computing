from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import HttpResponse
from . import tfidf
from django.http import JsonResponse
from dotenv import load_dotenv
import openai
import os

# this line loads the env file 
load_dotenv("./memory_search/.env")
print(openai.Model.list(), "models")

class FetchMemories(APIView):

    def get(self, request):
        """
        handles the get request 
        Things to send in the request, 
        query: the query memory (what the user asked in react)
        memories: the list of memories without any punctuation
        n: the number of memeories to return in the subset

        ------------------------------------------------------------------------------------
        This is an example, the same example found here
        https://janav.wordpress.com/2013/10/27/tf-idf-and-cosine-similarity/
        In postman, my header is Content-Type: application/json
        I am using the following as a raw string:
        {
            "query" : "life learning", 
            "memories" : ["The game of life is a game of everlasting learning", "The unexamined life is not worth living", "Never stop learning"],
            "n" : 3
        }

        EXAMPLE RESPONSE FROM POSTMAN
        {"memories": ["Never stop learning", "The unexamined life is not worth living", "The game of life is a game of everlasting learning"]}

        """
        query = request.data["query"]
        memories = request.data["memories"]
        n = request.data["n"]
        subset = tfidf.getMemorySubset(query, memories, n)
        arr = []
        for tup in subset:
            arr.append(tup[1])
        data = {
            "memories": arr
        }
        return JsonResponse(data)

    
class GPT(APIView):
    def get(self, request):
        prompt = request.data['prompt']
        maxtokens = request.data['maxtokens']
        print(os.getenv("OPENAI_API_KEY"),"apikey")
        if prompt and maxtokens:
            compleation = openai.completions.create(prompt=prompt, max_tokens=1000, model="gpt-3.5-turbo")
            return JsonResponse(compleation)
        else:
            res = HttpResponse("bad request")
            res.status_code = 400
            return res
    