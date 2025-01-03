from django.urls import path
from . import views

urlpatterns = [
    path('api/mlm-users/',viMLMUserCreateAPIView.as_view(), name='create_mlm_user'),
]

