from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import MLMUser

class MLMUserSerializer(serializers.ModelSerializer):
    sponsor_id = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = MLMUser
        fields = ['username', 'email', 
                  'password', 'sponsor_id','passwordConfirmation']
        extra_kwargs = {
            'password': {'write_only': True},
        }
    def validate(self,data)
    def validate_sponsor_id(self, value):
        if value:
            try:
                sponsor = MLMUser.objects.get(mlm_id=value)
                return sponsor
            except MLMUser.DoesNotExist:
                raise serializers.ValidationError("Sponsor not found.")
        return None

    def create(self, validated_data):
        sponsor = validated_data.pop('sponsor_id', None)
        validated_data['password'] = make_password(validated_data['password'])

        # Create MLM User
        user = MLMUser.objects.create(
            sponsor=sponsor,
            **validated_data
        )
        return user
