from django.shortcuts import render
from .serializers import KycSerializer 
from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from base.models import Kyc 
@api_view(['GET'])
def get_kyc_response(request):
    kycs = Kyc.objects.filter(blocked=False)
    serializer = KycSerializer(kycs,many=True)
    return Response(serializer.data)

@api_view()