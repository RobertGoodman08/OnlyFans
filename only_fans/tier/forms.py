from django import forms
from tier.models import Tier



class NewTierForm(forms.ModelForm):
    description = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Описание'}), required=True)
    price = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Цена'}),  required=True)
    can_message = forms.BooleanField(required=False)

    class Meta:
        model = Tier
        fields = ('description', 'price', 'can_message')

        # , widget = {'class': 'form-check-input'}