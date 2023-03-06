# from rest_framework.views import APIView
# from rest_framework.response import Response

# class TestView(APIView):
#     def get(self, request, format=None):
#         print("API has been called")
#         return Response("It is working", status=200)

from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import UserAccount
from .serializers import UserAccountSerializer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def accounts_list(request):
    if request.method == "GET":
        accounts = UserAccount.objects.order_by('firstname')
        serializer = UserAccountSerializer(accounts, many=True)
        #Used "many=True" because we are serializing a queryset
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserAccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def account_details(request, pk):
    try:
        account = UserAccount.objects.get(pk=pk)
    
    except UserAccount.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = UserAccountSerializer(account)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserAccountSerializer(account, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
    elif request.method == "DELETE":
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)