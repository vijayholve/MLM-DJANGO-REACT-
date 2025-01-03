from django.shortcuts import render
from rest_framework import generics
from .models import MLMUser
from .serializers import MLMUserSerializer
class MLMUserSerializerCreate(generics.CreateAPIView)