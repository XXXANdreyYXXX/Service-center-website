from rest_framework import serializers
from applications.models import Application


class ApplicationModel:
    def __init__(self, client, device, description) -> None:
        self.client = client
        self.device = device
        self.description = description


#class ApplicationSerializer(serializers.Serializer): 
     