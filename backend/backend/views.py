from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import requests


class APIWrapper(APIView):

    @csrf_exempt
    def post(self, request):
        """this class handles any api calls to llama, and adds the header it wants"""
        response = requests.post("http://172.30.74.44:8000/v1/chat/completions", data=request.body, headers={"Content-Type": "application/json"})
        print(request.body.decode('utf-8'))
        return Response(status=response.status_code, data={'received data': response},headers={"Content-Type": "application/json"})