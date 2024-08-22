from django import forms
from .models import User


class Registrationform(forms):
       
 class Meta:
       model = User
       fields = ['name', 'email', 'password']