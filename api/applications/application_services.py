from .models import Application
from clients.models import ClientProfile

def get_client_applications(request):
    applications_query = Application.objects.filter(client=request.user)
    return applications_query