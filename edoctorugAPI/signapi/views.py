from .models import UserAccount
from .serializers import UserAccountSerializer
from rest_framework import viewsets

class AccountViewSet(viewsets.ModelViewSet):
    #we just need to mention the serializer class and the queryset[where to get data from].
    # all CRUD functions are automated 
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

#MODEL VIEWSET