from rest_framework import serializers
from .models import ClientProfile

class ClientSerializer:
    class Meta:
        model = ClientProfile
        fields = '__all__'
        fields['password'] = 'read_only'