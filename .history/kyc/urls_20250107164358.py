from django.urls import path 
from . import views 

urlpatterns = [
    path('get-list',views.get_kyc_response,name='get-list'),
        path('get-list',views.get_kyc_response,name='get-list'),

]

