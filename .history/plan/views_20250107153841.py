from serializers import PlasSerializers 
from base.models import Plan 
from rest_framework.decorators import api_view
 
 
@api_view(['GET'])
def get_plan(request):
    plans= Plan.objects.filter(blocked=False)
    serializer = PlasSerializers(plans,Many=True)
    return response

