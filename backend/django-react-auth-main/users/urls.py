from django.urls import path
from django.contrib.auth.views import LoginView
from users.views import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(template_name='signup.html', success_url='/signin/'), name='signup'),
    path('signin/', LoginView.as_view(template_name='signin.html'), name='signin'),
]
