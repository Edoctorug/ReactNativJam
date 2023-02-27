from rest_framework.views import APIView
from rest_framework.response import Response

class TestView(APIView):
    def get(self, request, format=None):
        print("API has been called")
        return Response("It is working", status=200)