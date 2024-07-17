
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from applications.models import Application


class ApplicationClientSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Application
        fields = ['id', 'description', 'time_create', 'time_update', 'status', 'device']

    
class ApplicationEmployeeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Application
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': True},
            'client': {'read_only': True},
            'description': {'read_only': True},
            'time_create': {'read_only': True},
            'device': {'read_only': True}
        }