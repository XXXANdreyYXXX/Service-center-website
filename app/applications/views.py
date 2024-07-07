from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import Application
from .serializers import ApplicationSerializer
# Create your views here.

class ApplicationApiView(APIView):
    def get(self, request):
        applications = Application.objects.all().values('client',  'description', 'device',   'status')
        print(applications)
        return Response({'applications': list(applications)})
    
    def post(self, request):
        
        application_new = Application.objects.create(
            client_id=request.data['client_id'],
            device_id=request.data['device_id'],
            description=request.data['description'],
            status=request.data['status']
        )
        return Response({'POST': model_to_dict(application_new)})
    

    def put(self, request):
        return Response({'title': 'PUT'})