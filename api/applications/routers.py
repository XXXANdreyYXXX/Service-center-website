from rest_framework import routers
from .views import ClientApplicationViewSet, EmployeeApplicationViewSet
router = routers.DefaultRouter()
router.register(r'client-applications', ClientApplicationViewSet, basename='client-applications')
router.register(r'employee-applications', EmployeeApplicationViewSet, basename='employee-applications')

urlpatterns = router.urls

