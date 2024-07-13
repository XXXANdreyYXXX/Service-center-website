import io
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from applications.models import Application


class ApplicationModel:
    def __init__(self, client, device, description) -> None:
        self.client = client
        self.device = device
        self.description = description


class ApplicationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Application
        fields = "__all__"

    
