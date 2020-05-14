from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Groups, JobPostings, UserGroups, JobGroups

# Register your models here
admin.site.register(User, UserAdmin)
admin.site.register(Groups)
admin.site.register(JobPostings)
admin.site.register(UserGroups)
admin.site.register(JobGroups)