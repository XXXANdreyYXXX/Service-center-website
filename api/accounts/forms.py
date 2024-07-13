
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model

User = get_user_model()
print(User.REQUIRED_FIELDS)
class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = User
        fields = ('email', 'first_name', 'last_name', 'surname', 'phone_number', 'password')

class CustomUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm):
        model = User
        fields = ('email', 'first_name', 'last_name', 'surname', 'phone_number', 'password')
