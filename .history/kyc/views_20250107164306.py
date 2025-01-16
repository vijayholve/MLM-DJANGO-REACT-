from django.shortcuts import render
from .serializers import KycSerializer 
from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from base.models import Kyc 
from .serializers import KycSerializer
from rest_framework import viewsets

class KycViewSet(viewsets.ModelViewSet):
    queryset = Kyc.objects.filter()
    serializer_class = KycSerializer
@api_view(['GET'])
def get_kyc_response(request):
    kycs = Kyc.objects.filter(blocked=False)
    serializer = KycSerializer(kycs,many=True)
    return Response(serializer.data)


