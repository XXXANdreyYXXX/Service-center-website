from django.db import models
from django.utils.translation import gettext_lazy as _
from accounts.models import User

# Create your models here.

class ClientProfile(models.Model):
    '''Таблица с клиентами'''
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"))

    def __str__(self):
        return f"{self.user}"
    