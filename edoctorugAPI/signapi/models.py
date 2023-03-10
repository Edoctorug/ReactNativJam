from django.db import models

#Create models to hold account data
class UserAccount(models.Model):
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    role = models.CharField(max_length=100)
    pharmaceaticallicence = models.FileField(upload_to='pharmaceaticalLicence/', blank=True, null=True)
    operatinglicence = models.FileField(upload_to='operatingLicence/', blank=True, null=True)
    email = models.EmailField(max_length=200)
    phonenumber = models.CharField(max_length=50)
    password1 = models.CharField( max_length=200)
    password2 = models.CharField( max_length=200)
    dateCreated = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.firstname
    