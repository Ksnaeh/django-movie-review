from django.db import models

# Create your models here.
class Movies(models.Model):
    movieName = models.CharField(max_length= 100)
    movieDesc = models.CharField(max_length= 250)
    movieRating = models.IntegerField()
    movieGenre = models.CharField(max_length= 100)
    movieImg = models.CharField(max_length= 255)

class Comments(models.Model):
    comment = models.TextField()
    commentUser = models.CharField(max_length= 150) #to link to userName
    commentMovie = models.CharField(max_length= 100) #to link to movieName

class Users(models.Model):
    userName = models.CharField(max_length= 150)
    userPassword = models.CharField(max_length= 250)


