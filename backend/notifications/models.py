from email import message
from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType

# Create your models here.


class Action(models.Model):
    codename = models.CharField(max_length=250)
    name = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
    

# use user and Content types
class Notification(models.Model):
    u_from = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifire')
    u_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notification')
    entity = models.ForeignKey(ContentType, on_delete=models.CASCADE, related_name='entities')
    action_done = models.ForeignKey(Action, on_delete=models.CASCADE, related_name='done_actions', null=True, blank=True)
    next_action = models.ForeignKey(Action, on_delete=models.CASCADE, related_name='tasks', null=True, blank=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.message



