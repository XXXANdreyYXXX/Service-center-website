from dataclasses import field
from rest_framework import serializers
from .models import EmployeeProfile
from django.contrib.auth import get_user_model
from accounts.serializers import UserSerializer

UserModel = get_user_model()
class EmployeesSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = EmployeeProfile
        fields = ('user', 'position', 'experience_years', 'photo')

    def create(self, validated_data):
        user_serializer = self.fields['user'] # Получаяем сериализатор user
        user_data = validated_data['user'] # Извлекаем вложенные поля пользователя
        user = user_serializer.create(user_data)
        validated_data['user'] = user
        employee = super().create(validated_data)
        return employee
