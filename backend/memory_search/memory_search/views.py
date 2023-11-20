from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import HttpResponse
from . import tfidf

class FetchMemories(APIView):

    def get(self, request):
        """
        handles the get request 
        Things to send in the request, 
        query: the query memory (what the user asked in react)
        memories: the list of memories without any punctuation
        n: the number of memeories to return in the subset
        """
        query = request.data["query"]
        memories = request.data.getlist("memories")[0]
        n = request.data["n"]
        subset = tfidf.getMemorySubset(query, memories, n)
        print(subset)
        response = HttpResponse()
        return response

    # 2. Create
    def post(self, request):
        """handles the post request (not supported) """
        response = HttpResponse()
        response.status_code = 405
        response.content = "Operation not supported, use get"
        return response