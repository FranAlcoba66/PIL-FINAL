from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Serializer
from users.serializers import UserSerializer
# Create your views here.

@api_view(['GET'])
def user_view(request):
    serializer= UserSerializer(request.user)
    return Response(serializer.data)