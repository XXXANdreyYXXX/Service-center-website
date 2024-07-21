from rest_framework import permissions

class IsClientOrSuperUser(permissions.BasePermission):
    """Доступ к списку клиентов и отдельному клиенту"""

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:   
            return request.user.is_superuser
        return True
    
    def has_object_permission(self, request, view, obj):
        return request.user.is_superuser