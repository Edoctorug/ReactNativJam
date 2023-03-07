from rest_framework.decorators import APIView
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import UserAccount
from .serializers import UserAccountSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins


class AccountList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

    def get(self, request):
        return self.list(request)
    

    def post(self, request):
        return self.create(request)




class AccountDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)



    def put(self, request, id):
        return self.update(request, id=id)
    

    def delete(self, request, id):
        return self.destroy(request, id=id)





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
