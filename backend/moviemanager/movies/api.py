from .models import Movies, Comments, Users
from rest_framework import viewsets, permissions
from .serializers import MovieSerializer, CommentSerializer, UserSerializer

#Movie Viewset
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer


#Comment Viewset
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CommentSerializer

#User Viewset
class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer