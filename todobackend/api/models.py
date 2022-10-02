from django.db import models

class TodoApp(models.Model):
    items = models.CharField(max_length=500)
