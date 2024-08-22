from django.contrib import admin
from django.urls import path
from Views import create_user, login_user 

urlpatterns = [
    path('createuser/',create_user, name ='create_user'),
    path('login/',login_user, name ='login_user'),
]


