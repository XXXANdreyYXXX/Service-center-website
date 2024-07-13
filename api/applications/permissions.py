from rest_framework import permissions

class EmployeePermission(permissions.BasePermission):
    """
    Доступ только сотрудникам
    """
    def has_permission(self, request, view):
        return hasattr(request.user, 'employeeprofile')
    
class ClientPermission(permissions.BasePermission):
    """
    Клиентский доступ
    """
    
    def has_object_permission(self, request, view, obj):
         return obj.owner == request.user
    