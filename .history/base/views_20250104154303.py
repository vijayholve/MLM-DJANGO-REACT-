from django.shortcuts import render
from rest_framework import generics
from .models import MLMUser
from .serializers import MLMUserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

class MLMUserCreateAPIView(generics.CreateAPIView):
    queryset = MLMUser.objects.all()
    serializer_class = MLMUserSerializer
    
@api_view(['GET'])
def MLMUserListApisViews(request):
    users=MLMUser.objects.filter(is_active=True)
    serializer = MLMUserSerializer(users, many=True)
    return Response(serializer.data)


def get_mlm_tree(request):
    def build_tree(user):
        if not user:
            return None
        return {
            "name": user.username,
            "rank": user.rank,
            "total_sales": user.total_sales,
            "children": [
                build_tree(user.left),
                build_tree(user.right),
            ]
        }

    root_user = MLMUser.objects.get(username="d")
    tree_data = build_tree(root_user)
    return JsonResponse(tree_data, safe=False)