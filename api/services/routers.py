from rest_framework import routers
from .views import *
router = routers.DefaultRouter()
router.register('services-list', ServicesViewSet, basename='services-list')
router.register('popular-services-list', PopularServicesViewSet, basename='popular-services-list')
router.register('another-services-list', AnotherServicesViewSet, basename='another-services-list')
router.register('services-category-list', ServicesCategoryViewSet, basename='services-category-list')

urlpatterns = router.urls