from django.contrib import admin
from .models import Action, Notification
# Register your models here.

@admin.register(Action)
class ActionAdmin(admin.ModelAdmin):
    list_display = ['codename', 'name']


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ['u_from', 'u_to', 'next_action', 'entity']