from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import HttpResponse

class FetchMemories(APIView):

    def get(self, request):
        """handles the get request"""
        response = HttpResponse()
        return response

    # 2. Create
    def post(self, request):
        """handles the post request"""
        response = HttpResponse()
        response.status_code = 405
        response.content = "Operation not supported, use get"
        return response