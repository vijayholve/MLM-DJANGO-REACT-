from django.shortcuts import render
from .serializers import KycSerializer 
from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from base.models import 
@api_view(['GET'])
def get_kyc_response(request):
    kycs= Kyc.objects.all()
    serializer = KycSerializer(kycs,many=True)
    return Response(serializer.data)
