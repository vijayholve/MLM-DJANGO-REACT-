from rest_framework.serializers  import ModelSerializer
from base.models import Plan 

class PlasSerializers(ModelSerializer):
    class class Meta:
        model= Plan
        field