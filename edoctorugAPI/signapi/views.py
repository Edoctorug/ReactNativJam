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
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def accounts_list(request):
    if request.method == "GET":
        accounts = UserAccount.objects.order_by('firstname')
        serializer = UserAccountSerializer(accounts, many=True)
        #Used "many=True" because we are serializing a queryset
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserAccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



@csrf_exempt
def account_details(request, pk):
    try:
        account = UserAccount.objects.get(pk=pk)
    
    except UserAccount.DoesNotExist:
        return HttpResponse(status=404)
    
    if request.method == "GET":
        serializer = UserAccountSerializer(account)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserAccountSerializer(account, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
     
    elif request.method == "DELETE":
        article.delete()
        return HttpResponse(status=204)