from django.urls import path
from . import views
urlpatterns = [
    path("listplan/", views.ListPlan.as_view()),
    path("createplan/", views.CreatePlan.as_view()),
    path("destroyplan/<int:id>/", views.DestroyPlan.as_view()),
]
 