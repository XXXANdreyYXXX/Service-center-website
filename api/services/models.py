from django.db import models

# Create your models here.
class ServiceCategory(models.Model):
    """Названия категорий"""
    class Meta:
        verbose_name_plural = "Services categories"
    category_name = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.category_name}"

    class Meta:
        verbose_name = 'Категория услуг'
        verbose_name_plural = 'Категории услуг'
        

class Service(models.Model):
    """Общая табличка услуг"""

    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    warranty_period = models.DurationField()

    def __str__(self):
        return f"{self.category} {self.name}"
    
    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        


class PopularService(models.Model):
    """Табличка популярных услуг"""

    service = models.ForeignKey(Service, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.service}"
    
    class Meta:
        verbose_name = 'Популярная услуга'
        verbose_name_plural = 'Популярные услуги'
        

class AnotherService(models.Model):
    """Табличка других услуг"""

    service = models.ForeignKey(Service, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.service}"
    
    class Meta:
        verbose_name = 'Другая услуга'
        verbose_name_plural = 'Другие услуги'
        
