from django.urls import path
# from .views import TestView
from .views import account_details, accounts_list
# from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token

urlpatterns = [
    # path('', TestView.as_view()),
    path('accounts/', accounts_list),
    path('accounts/<int:pk>/', account_details),
]
