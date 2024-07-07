from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

# Register your models here.
User = get_user_model()

class CustomUserAdmin(UserAdmin):
    '''Админка для кастомного пользователя'''
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    fieldsets = (
            (None, {'fields': ('email', 'password')}),
            (_('Personal info'), {'fields': ('first_name', 'last_name', 'surname', 'phone_number')}),
            (_('Permissions'), {
                     'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'), 
            }),
            (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',), # Формочка на всю ширину
            'fields': ('email', 'password', 'first_name', 'last_name', 'phone_number', 'is_staff'),
        }),
    )

    search_fields = ('first_name', 'last_neme')
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)

    
admin.site.register(User, CustomUserAdmin)