from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import MLMUser

class MLMUserSerializer(serializers.ModelSerializer):
    sponsor_code = serializers.CharField(write_only=True, required=False, allow_blank=True)
    passwordConfirmation = serializers.CharField(write_only=True)  

    class Meta:
        model = MLMUser
        fields = ['username', 'email', 'password', 'sponsor_code', 'passwordConfirmation']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate_sponsor_code(self, value):
        if value:
            try:
                sponsor = MLMUser.objects.get(custom_sponsor_id=value)
                return sponsor 
            except MLMUser.DoesNotExist:
                raise serializers.ValidationError("Sponsor not found.")
        return None
    def validate(self,data):
        password = data.get('password')
        password_confirmation = data.pop('passwordConfirmation', None)

        if password != password_confirmation:
            raise serializers.ValidationError({'passwordConfirmation': 'Passwords do not match.'}) 
        return data
    

    # Create user with hashed password and sponsor
    def create(self, validated_data):
        sponsor = validated_data.pop('sponsor_id', None)
        validated_data['password'] = make_password(validated_data['password'])

        # Create MLM User
        user = MLMUser.objects.create(
            sponsor=sponsor,
            **validated_data
        )
        user.set_password(validated_data['password'])
        user.save() 
        
        return user
