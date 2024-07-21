from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from accounts.models import User
from accounts.serializers import UserSerializer
from .permissions import IsClientOrSuperUser
# Create your views here.

class ClientViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsClientOrSuperUser]
