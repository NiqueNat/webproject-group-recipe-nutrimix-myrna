from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    birth_date = forms.DateField(required=True)
    bio = forms.CharField(max_length=500, required=False)
    location = forms.CharField(max_length=30, required=False)

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "birth_date", "password1", "password2")

    def save(self, commit=True):
        user = super().save(commit=False)
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.email = self.cleaned_data.get('email')
        if commit:
            user.save()
            Profile.objects.create(
                user=user,
                bio=self.cleaned_data.get('bio'),
                location=self.cleaned_data.get('location'),
                birth_date=self.cleaned_data.get('birth_date'),
            )
        return user