from django.db import models
from django.utils import timezone
from accounts.models import User
from datetime import datetime
# Create your models here.


class DeviceType(models.Model):
    '''Таблица типов устройств'''

    device_type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.device_type}"
    
    class Meta:
        verbose_name = 'Тип устройства'
        verbose_name_plural = 'Типы устройств'
        

class Application(models.Model):
    '''Таблица заявок на ремонт'''

    client = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(DeviceType, on_delete=models.CASCADE)
    description = models.TextField()
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(blank=True, null=True)
    status_choices = [('C', 'На рассмотрении'), ('P', 'В процессе работы'), ('D', 'Готов к получению')]
    status = models.CharField(max_length=1, choices=status_choices, blank=True, default='C')
    is_archived = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.client}, {self.device}"

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
        
    def save(self, *args, **kwargs):
        self.time_update = timezone.now()
        super(Application, self).save(*args, **kwargs)
   
    def perform_destroy(self, instance):
        instance.is_archived = True
        instance.save()