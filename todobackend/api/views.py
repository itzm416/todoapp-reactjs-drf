from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from api.models import TodoApp
from api.serializers import TodoAppSerializers

class TodoApi(APIView):

    def get(self, request, format=None):
        candidate = TodoApp.objects.all()
        serializer = TodoAppSerializers(candidate, many=True)
        return Response({'status':'success','todoitems':serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = TodoAppSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'uploaded','status':'success','candidate':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        id = pk
        print(type(id))
        item = TodoApp.objects.get(pk=id)
        item.delete()
        return Response({'msg':'uploaded','status':'success'}, status=status.HTTP_201_CREATED)

