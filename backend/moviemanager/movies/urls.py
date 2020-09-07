from rest_framework import routers
from .api import MovieViewSet, CommentViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('api/movies', MovieViewSet, 'movies')
router.register('api/comments', CommentViewSet, 'comments')
router.register('api/users', UserViewSet, 'users')


urlpatterns = router.urls