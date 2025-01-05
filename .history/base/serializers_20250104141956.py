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
        print(f"Received sponsor code: {value}")  # Debug log
        if value:
            try:
                sponsor = MLMUser.objects.get(custom_sponsor_id=value)
                print(f"Sponsor found: {sponsor}")  # Debug log
                return sponsor
            except MLMUser.DoesNotExist:
                print(f"Sponsor with code {value} not found")  # Debug log
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
        sponsor_code = validated_data.pop('sponsor_code', None)  # Remove sponsor_code from validated_data
        print(f"2) Sponsor code received: {sponsor_code}")   
        print(f"Validated data: {validated_data}")  
        
        sponsor = None

        if sponsor_code:
            sponsor = MLMUser.objects.get(username=sponsor_code)  # Assuming sponsor_code corresponds to username
            print(f"Sponsor found: {sponsor}")
        else:
            print("Sponsor code is missing!")
        
        validated_data['password'] = make_password(validated_data['password'])

        # Log the validated data before creating the user
        print(f"Validated data before creating user: {validated_data}")

        # Create MLM User without 'sponsor_code'
        user = MLMUser.objects.create(
            sponsor=sponsor,  # Assign the sponsor object directly
            **validated_data
        )
        
        # Set password
        user.set_password(validated_data['password'])
        
        # Optional: if you don't want the sponsor to be saved explicitly (like clearing out after save)
        user.sponsor = None  # Clear sponsor if needed, depending on your model design.
        user.save()

        # Handle spot assignment (left/right spots) for the user
        def assign_to_spot(node, new_user):
            if node.left is None:
                node.left = new_user
                node.save()
                print(f"Assigned user {new_user} to left of {node}")  # Debugging line
                return True
            elif node.right is None:
                node.right = new_user
                node.save()
                print(f"Assigned user {new_user} to right of {node}")  # Debugging line
                return True
            else:
                print(f"Both spots for sponsor {node} are filled")  # Debugging line
                if assign_to_spot(node.left, new_user):
                    return True
                elif assign_to_spot(node.right, new_user):
                    return True
                else:
                    return False

        if sponsor and not assign_to_spot(sponsor, user):
            raise serializers.ValidationError("No available space for this user under the sponsor.")
        
        return user