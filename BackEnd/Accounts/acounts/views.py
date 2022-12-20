from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView
from .models import Plan
from .serializer import PlanSerializer
# Create your views here.
class ListPlan(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class CreatePlan(CreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class DestroyPlan(DestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    lookup_field = "id"