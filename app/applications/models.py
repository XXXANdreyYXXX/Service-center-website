from django.db import models
from clients.models import ClientProfile
# Create your models here.


class DeviceType(models.Model):
    '''Таблица типов устройств'''

    device_type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.device_type}"

class Application(models.Model):
    '''Таблица заявок на ремонт'''

    client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    device = models.ForeignKey(DeviceType, on_delete=models.CASCADE, default=1)
    description = models.TextField()
    status_choices = [('C', 'На рассмотрении'), ('P', 'В процессе работы'), ('D', 'Готов к получению')]
    status = models.CharField(max_length=1, choices=status_choices)
    def __str__(self):
        return f"{self.client}, {self.device}"
    