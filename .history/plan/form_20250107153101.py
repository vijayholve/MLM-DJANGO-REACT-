from django import forms
from base.models import Plan, Features

class PlanForm(forms.ModelForm):
    class Meta:
        model = Plan
        fields = ['name', 'plan_type', 'price']

