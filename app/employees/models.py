from django.db import models
from django.utils.translation import gettext_lazy as _
from accounts.models import User
# Create your models here.

class EmployeeProfile(models.Model):
    '''Таблица с сотрудниками'''
    user = models.OneToOneField(User, on_delete=models.CASCADE,  verbose_name=_("User"))
    position = models.CharField(max_length=50,  verbose_name=_("Должность"))
    experience_years = models.FloatField(default=0.0, verbose_name=_("Лет опыта"))
    photo = models.ImageField(upload_to='employee_photos/', blank=True, null=True, verbose_name=_("Фотография"))
    
    def __str__(self):
        return f"{self.user} {self.position} "
    