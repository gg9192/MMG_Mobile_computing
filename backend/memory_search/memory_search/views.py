from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import JsonResponse
import tensorflow_hub as hub
import numpy as np
from django.core.cache import cache

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
        subset = self.getSubset(query, memories, n)
        # parse the cosine sim's out
        res = []
        for el in subset:
            res.append(el[1])
        data = {
            "memories": res
        }
        response = JsonResponse(data)
        return response

    # 2. Create
    def post(self, request):
        """handles the post request"""
        response = HttpResponse()
        response.status_code = 405
        response.content = "Operation not supported, use get"
        return response