from rest_framework.serializers  import ModelSerializer
from base.models import Plan 

class PlasSerializers(ModelSerializer):
    class class Meta:
        db_table = ''
        managed = True
        verbose_name = 'ModelName'
        verbose_name_plural = 'ModelNames' 