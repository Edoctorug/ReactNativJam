from rest_framework import serializers
from .models import UserAccount

#serialize the account model created in .models
class UserAccountSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = UserAccount
        fields = ['id', 'firstname', 'lastname', 'role', 'pharmaceaticallicence', 'operatinglicence', 'email', 'phonenumber', 'password1', 'password2', 'dateCreated']
        