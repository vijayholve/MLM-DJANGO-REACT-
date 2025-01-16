from django.shortcuts import render
from .serializers import KycSerializer 
from rest_framework.response import Response 
from rest_framework.decorators import api_view 

@api_view(['GET'])
def get_kyc()
