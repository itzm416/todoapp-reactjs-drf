from django.contrib import admin
from api.models import TodoApp

@admin.register(TodoApp)
class AdminTodoApp(admin.ModelAdmin):
    list_display = ['id','items']
