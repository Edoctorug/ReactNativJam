from django.urls import path
from .views import AccountList, AccountDetails

urlpatterns = [
    path('accounts/', AccountList.as_view()),
    path('accounts/<int:id>/', AccountDetails.as_view()),

]
