from django.contrib import admin
from .models import UserAccount

# admin.site.register(UserAccount)

@admin.register(UserAccount)
class UserAccountModel(admin.ModelAdmin):
    list_filter = ('id', 'firstname', 'lastname', 'role')
    list_display = ('id', 'firstname', 'lastname', 'role')