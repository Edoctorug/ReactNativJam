from django.urls import path, include
from .views import AccountViewSet
from rest_framework.routers import DefaultRouter

# create a router
router = DefaultRouter()

# register our router
router.register('accounts', AccountViewSet, basename='account')

urlpatterns = [
    path('', include(router.urls)),
]
