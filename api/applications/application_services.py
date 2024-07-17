from .models import Application
from clients.models import ClientProfile

# def get_client_applications(request):
#     print(request.user)
#     applications_query = Application.objects.filter(client=request.user)
#     print(applications_query)
#     return applications_query