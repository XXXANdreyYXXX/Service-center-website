
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.permissions import IsAuthenticated
from .models import Application
from .serializers import *
from .permissions import *
# Create your views here.


class EmployeeApplicationViewSet(
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationEmployeeSerializer
    permission_classes = [IsEmployee]

    def perform_destroy(self, instance):
        instance.is_archived=True
        instance.save()
    
    
    
class ClientApplicationViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    serializer_class = ApplicationClientSerializer
    permission_classes = [IsAuthenticated, IsClient]

    def get_queryset(self):
        return Application.objects.filter(client=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(client=self.request.user)
        

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