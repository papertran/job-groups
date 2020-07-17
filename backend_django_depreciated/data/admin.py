from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Groups, JobPostings, UserGroups, JobGroups


class GroupsAdmin(admin.ModelAdmin):
    list_display = ('id', 'group_name')

class JobPostingsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'url', 'post_date', 'end_date', 'salary', 'location', 'position')

class UserGroupsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'group')

class JobGroupsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'group', 'status')

# Register your models here
admin.site.register(User, UserAdmin)
admin.site.register(Groups, GroupsAdmin)
admin.site.register(JobPostings, JobPostingsAdmin)
admin.site.register(UserGroups, UserGroupsAdmin)
admin.site.register(JobGroups, JobGroupsAdmin)