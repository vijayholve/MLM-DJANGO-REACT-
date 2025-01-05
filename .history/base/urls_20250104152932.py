from django.urls import path
from . import views

urlpatterns = [
    path('api/mlm-users/',views.MLMUserCreateAPIView.as_view(), name='create_mlm_user'),
    path('api/mlm-users-list/',views.MLMUserListApisViews, name='list_mlm_user'),
path('/api/get_mlm_tree/',views.get_mlm_tree)
]

