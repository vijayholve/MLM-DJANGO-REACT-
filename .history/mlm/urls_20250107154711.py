from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('base.urls')),
        path('plan/',include('plan.urls')),
    path('plan/',include('plan.urls')),


]
