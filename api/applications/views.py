from curses.ascii import EM
from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework import generics, viewsets, mixins
from rest_framework.viewsets import GenericViewSet
from .models import Application
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated
from .models import Application
from .serializers import ApplicationSerializer
from .permissions import *
from .application_services import get_client_applications
# Create your views here.


class EmployeeApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [EmployeePermission]

class ClientApplicationViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    serializer_class = ApplicationSerializer
    permission_classes = [ClientPermission, IsAuthenticated]
    def get_queryset(self):
        return get_client_applications(self.request)


# class ApplicationApiView(APIView):

#     def get(self, request):
#         applications = Application.objects.all()
#         print(applications)
#         return Response({'applications': ApplicationSerializer(applications, many=True).data})
    
#     def post(self, request):
        
#         serializer = ApplicationSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response({'POST': serializer.data})
    
#     def put(self, request, *args, **kwargs):
#         pk = kwargs.get("pk", None)
#         if not pk:
#             return Response({"error":"method PUT not allowed"})
        
#         try:
#             instance = Application.objects.get(pk=pk)
#         except:
#             return Response({"error": "object does not exist"})
        
#         serializer = ApplicationSerializer(data=request.data, instance=instance)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response({'PUT': serializer.data})
    
#     def delete(self, request, *args, **kwargs):
#         pk = kwargs.get("pk", None)
#         print(pk)
#         if not pk:
#             return Response({"error": "Method DELETE not allowed"})
        
#         try:
#             instance = Application.objects.get(pk=pk)
#             print(instance)
#             instance.delete()
#         except:
#             return Response({"error": "object does not exist"})
        
#         return Response({"DELETE": "delete application " + str(pk)})