from django.contrib import admin
from .models import Plan
@admin.register(Plan)
# Register your models here.
class PlanAdmin(admin.ModelAdmin):
    list_display = ("id","items")
