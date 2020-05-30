# Following directions https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/

import graphene

from graphene_django.types import DjangoObjectType
from data.models import User, Groups, UserGroups, JobPostings, JobGroups

class UserType(DjangoObjectType):
    class Meta:
        model = User

class GroupsType(DjangoObjectType):
    class Meta:
        model = Groups

class UserGroupsType(DjangoObjectType):
    class Meta:
        model = UserGroups

class JobPostingsType(DjangoObjectType):
    class Meta:
        model = JobPostings

class JobGroupsType(DjangoObjectType):
    class Meta:
        model = JobGroups
        
class Query(object):
    all_users = graphene.List(UserType)
    all_groups = graphene.List(GroupsType)
    all_userGroups = graphene.List(UserGroupsType)
    all_jobPostings = graphene.List(JobPostingsType)
    all_jobGroups = graphene.List(JobGroupsType)
    
    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()
