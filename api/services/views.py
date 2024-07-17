from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser
from .models import *
from .serializers import *
from .permissons import *
# Create your views here.

class ServicesViewSet(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServicesSerializer
    permission_classes = [SerivesPermission]

class PopularServicesViewSet(ModelViewSet):
    queryset = PopularService.objects.all()
    serializer_class = PopularServicesSerializer
    permission_classes = [SerivesPermission]
    
class AnotherServicesViewSet(ModelViewSet):
    queryset = AnotherService.objects.all()
    serializer_class = AnotherServicesSerializer
    permission_classes = [SerivesPermission]

class ServicesCategoryViewSet(ModelViewSet):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServicesCategorySerializer
    permission_classes = [SerivesPermission]