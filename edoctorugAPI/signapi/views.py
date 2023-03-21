from .models import UserAccount
from .serializers import UserAccountSerializer
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser #this deals with parsing our received documents to the api

class AccountViewSet(viewsets.ModelViewSet):
    #we just need to mention the serializer class and the queryset[where to get data from].
    # all CRUD functions are automated 
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer
    parser_classes = (MultiPartParser, FormParser)
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

#MODEL VIEWSET