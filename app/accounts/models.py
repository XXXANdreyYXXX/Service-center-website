from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
# Create your models here.

class User(AbstractUser):
    surname = models.CharField(max_length=20,  verbose_name=_("Отчество"), null=True, blank=True)
    phone_number = models.CharField(max_length=20, verbose_name=_("Номер телефона"))
    email = models.EmailField(unique=True)
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('first_name', 'last_name', 'phone_number', 'password',)
    objects = UserManager()
    def __str__(self):
        return self.email