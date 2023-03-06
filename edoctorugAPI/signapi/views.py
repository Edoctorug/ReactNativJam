from rest_framework.decorators import APIView
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import UserAccount
from .serializers import UserAccountSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


class ArticleList(APIView):
    def get(self, request):
        accounts = UserAccount.objects.order_by('firstname')
        serializer = UserAccountSerializer(accounts, many=True)
        return Response(serializer.data)
    

    def post(self, request):
        serializer = UserAccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ArticleDetails(APIView):
    def get_object(self, id):
        try:
           return UserAccount.objects.get(id=id)
    
        except UserAccount.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def get(self, request, id):
        accounts = self.get_object(id)
        serializer = UserAccountSerializer(accounts)
        return Response(serializer.data)        
    

    def put(self, request, id):
        account = self.get_object(id)
        serializer = UserAccountSerializer(account, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self, request, id):
        account = self.get_object(id)
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

"""

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
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

"""
