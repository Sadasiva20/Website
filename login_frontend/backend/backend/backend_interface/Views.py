from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.http import Http404
from login_frontend.backend.backend.backend_interface import loginform


def create_user(request):

     if request.method == 'POST':
        form = loginform(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'User registered successfully!'}, status=200)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
     return JsonResponse({'error': 'Invalid request method'}, status=405)

def login_user(request):

     if request.method == 'POST':
        form = loginform(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'User login successfully!'}, status=200)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
     return JsonResponse({'error': 'Invalid request method'}, status=405)