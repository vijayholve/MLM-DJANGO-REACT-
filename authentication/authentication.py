# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework.exceptions import AuthenticationFailed

# class CookiesJWTAuthentication(JWTAuthentication):
#     def authenticate(self, request):
#         access_token = request.COOKIES.get('access_token')

#         if not access_token:
#             return None  # If no access token, skip authentication

#         try:
#             validated_token = self.get_validated_token(access_token)
#             user = self.get_user(validated_token)
#         except AuthenticationFailed:
#             raise AuthenticationFailed("Invalid or expired token")

#         return (user, validated_token)