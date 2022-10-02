from pyexpat import model
from rest_framework import serializers
from api.models import TodoApp

class TodoAppSerializers(serializers.ModelSerializer):
    class Meta:
        model = TodoApp
        fields = ['id','items']
