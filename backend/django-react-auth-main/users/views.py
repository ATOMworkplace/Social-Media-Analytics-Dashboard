from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser

from .models import CustomUser
from .serializers import UserSerializer

from django.shortcuts import render
from django.views.generic import FormView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy

class SignUpView(FormView):
    template_name = 'signup.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('signin')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
