from django.shortcuts import render
from rest_framework import generics
from .models import MLMUser
from .serializers import MLMUserSerializer
from rest_framework.response import res
class MLMUserCreateAPIView(generics.CreateAPIView):
    queryset = MLMUser.objects.all()
    serializer_class = MLMUserSerializer
    
    
def MLMUserListApisViews():
    Users=MLMUser.objects.filter(is_active=True)
    serializer= MLMUserSerializer(Users,many=True)
    return respon