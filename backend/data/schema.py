# Following directions https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/

import graphene

from graphene_django.types import DjangoObjectType
from data.models import User, Groups, UserGroups, JobPostings, JobGroups

class UserType(DjangoObjectType):
    class Meta:
        model = User
        exclue = ('password')
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
    # This is to get everyone
    all_users = graphene.List(UserType)
    all_groups = graphene.List(GroupsType)
    all_userGroups = graphene.List(UserGroupsType)
    all_jobPostings = graphene.List(JobPostingsType)
    all_jobGroups = graphene.List(JobGroupsType)
    
    # Resolve all the queries
    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()
    def resolve_all_groups(self, info, **kwargs):
        return Groups.objects.all()
    def resolve_all_userGroups(self, info, **kwargs):
        return UserGroups.objects.all()
    def resolve_all_jobPostings(self, info, **kwargs):
        return JobPostings.objects.all()
    def resolve_all_jobGroups(self, info, **kwargs):
        return JobGroups.objects.all()

    # Queries for individual objects 
    users = graphene.Field(UserType, 
        id=graphene.Int(), 
        username=graphene.String(), 
        email=graphene.String()
    )

    groups = graphene.Field(GroupsType,
        id=graphene.Int(),
        group_name=graphene.String()
    )

    jobPostings = graphene.Field(JobPostingsType,
        id=graphene.Int(),
        name=graphene.String(),
        url=graphene.String(),
        salary=graphene.Int(),
        location=graphene.String(),
        position=graphene.String()
    )

    def resolve_users(self, info, **kwargs):
        id = kwargs.get('id')
        username = kwargs.get('username')
        email = kwargs.get('email')

        if id is not None:
            return User.objects.get(pk=id)
        
        if username is not None:
            return User.objects.get(username=username)
        
        if email is not None:
            return User.objects.get(email=email)

    def resolve_groups(self, info, **kwargs):
        id = kwargs.get('id')
        group_name = kwargs.get('group_name')

        if id is not None:
            return Groups.objects.get(pk=id)
        
        if group_name is not None:
            return Groups.objects.get(group_name=group_name)

    def resolve_jobPostings(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')
        url = kwargs.get('url')
        salary = kwargs.get('salary')
        location = kwargs.get('location')
        position = kwargs.get('position')

        if id is not None:
            return JobPostings.objects.get(pk=id)

        if name is not None:
            return JobPostings.objects.get(name = name)

        if url is not None:
            return JobPostings.objects.get(url = url)
            
        if salary is not None:
            return JobPostings.objects.get(salary = salary)
            
        if location is not None:
            return JobPostings.objects.get(location = location)
            
        if position is not None:
            return JobPostings.objects.get(position = position)
            