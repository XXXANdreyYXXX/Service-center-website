from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import EmployeeProfile
from .serializers import EmployeesSerializer
from .permissions import EmployeesPermission
# Create your views here.

class EmployeeViewSet(ModelViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeesSerializer
    permission_classes = [EmployeesPermission]
    