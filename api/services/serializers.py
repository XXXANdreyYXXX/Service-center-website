from rest_framework import serializers
from .models import Service, AnotherService, PopularService

class ServicesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Service
        fields = '__all__'

class PopularServicesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PopularService
        fields = '__all__'

class AnotherServicesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AnotherService
        fields = '__all__'

class ServicesCategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PopularService
        fields = '__all__'