from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout
from .forms import CustomUserCreationForm  
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)  # use the custom form
        if form.is_valid():
            form.save()
            messages.success(request, 'Registration successful.')
            return redirect('login')
        else:
            messages.error(request, 'There was a problem with your registration.')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration.html', {'form': form})

def users(request):
    users = User.objects.all()
    users_json = serializers.serialize('json', users)
    return JsonResponse(users_json, safe=False)

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('user')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

@never_cache
@login_required
def user_view(request):
    return render(request, 'user.html', {'user': request.user})

def logout_view(request):
    logout(request)
    return redirect('/')

def index(request):
    return HttpResponse("Hello, this is the home page.")