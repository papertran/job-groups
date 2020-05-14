from django.db import models
from django.contrib.auth.models import AbstractUser 
from django.conf import settings 
# Create your models here.

# TODO Fix names, fix str for UserGroups and JobGroups, Create autofill data
''' Django Docs recomends creating a custom user even if default is sufficent '''
class User(AbstractUser):
    pass 

    def __str__(self):
        return self.username
''' This is the base group'''
class Groups(models.Model):
    group_name = models.CharField(max_length=50)

    def __str__(self):
        return self.group_name

'''  This is the job postings '''
class JobPostings(models.Model): 
    name = models.CharField(blank=False, max_length=100)
    url = models.URLField(blank=False)
    post_date = models.DateField(auto_now_add=True)
    end_date = models.DateField(blank=False)
    salary = models.IntegerField()
    location = models.CharField(blank=False, max_length=50)
    position = models.CharField(blank=False, max_length=200)

    def __str__(self):
        return self.name

''' This table contains the list of users and the groups they belong to '''
class UserGroups(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE )
    group = models.ForeignKey(Groups, on_delete=models.CASCADE )
    
''' This is the job listings for each user and each group they belong to '''
class JobGroups(models.Model):
    job = models.ForeignKey(JobPostings, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    group = models.ForeignKey(Groups, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
