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
        print(f"Received sponsor code: {value}")  # Log the sponsor code
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
        sponsor_code = validated_data.pop('sponsor_code', None)
        sponsor = None
        if sponsor_code:
            try:
                sponsor = MLMUser.objects.get(custom_sponsor_id=str(sponsor_code))
            except MLMUser.DoesNotExist:
                raise serializers.ValidationError("Sponsor not found.")

        validated_data['password'] = make_password(validated_data['password']) 

        # Create MLM User
        user = MLMUser.objects.create(
            sponsor=sponsor,
            **validated_data
        )
        user.set_password(validated_data['password'])
        user.save() 
        
        def assign_to_spot(node,new_user):
            if node.left is None:
                node.left = new_user
                node.save()
                return True
            elif node.right is None:
                node.right = new_user
                node.save()
                return True
            else:
                # If both left and right are filled, check the next level
                if assign_to_spot(node.left, new_user):
                    return True
                elif assign_to_spot(node.right, new_user):
                    return True
                else:
                    return False
                
        if sponsor and not assign_to_spot(sponsor, user):
                raise serializers.ValidationError("No available space for this user under the sponsor.")
        return user
