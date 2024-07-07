from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    '''Кастомый менеджер создания пользователя'''

    def create_user(self, email, last_name, first_name, phone_number, password, **extra_fields):
        if not (email and last_name and first_name and phone_number and password):
            raise ValueError('Все поля обязательны')
        email = self.normalize_email(email)
        user = self.model(email=email, last_name=last_name, first_name=first_name, phone_number=phone_number, password=password, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        
        return user
    
    def create_superuser(self, email, last_name, first_name, phone_number, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, first_name, last_name, phone_number, password, **extra_fields)