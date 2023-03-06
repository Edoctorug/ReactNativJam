from django.urls import path
# from .views import TestView
from .views import ArticleList, ArticleDetails
# account_details, accounts_list
# from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token

urlpatterns = [
    path('accounts/', ArticleList.as_view()),
    path('accounts/<int:id>/', ArticleDetails.as_view()),
    # path('accounts/', accounts_list),
    # path('accounts/<int:pk>/', account_details),
]
