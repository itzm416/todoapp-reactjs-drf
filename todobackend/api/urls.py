from django.urls import path

from api.views import TodoApi

urlpatterns = [
    path('list/', TodoApi.as_view()),
    path('createlist/', TodoApi.as_view()),
    path('destroylist/<int:pk>', TodoApi.as_view()),
]
