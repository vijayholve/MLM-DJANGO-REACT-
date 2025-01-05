
# Create your models here.
from django.contrib.auth.models import AbstractUser ,Group,Permission
from django.db import models
import uuid
import random
import string
class MLMUser(AbstractUser):
    mlm_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    sponsor = models.ForeignKey(
        'self', on_delete=models.SET_NULL, null=True, blank=True, related_name='downline'
    )
    left = models.OneToOneField(
        'self', on_delete=models.SET_NULL, null=True, blank=True, related_name='left_node'
    )
    right = models.OneToOneField(
        'self', on_delete=models.SET_NULL, null=True, blank=True, related_name='right_node'
    )
    sponsor_id = models.CharField(max_length=10, unique=True, editable=False)  # Sponsor ID as string

    rank = models.CharField(max_length=20, default='Bronze')
    total_sales = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    left_sales = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    right_sales = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    carry_forward_left = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    carry_forward_right = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    joined_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    groups = models.ManyToManyField(Group, related_name='mlmuser_groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='mlmuser_permissions', blank=True)
    def __str__(self):
        return self.username

    def calculate_pairing_bonus(self):
        pairs = min(self.left_sales, self.right_sales)
        if pairs > 0:
            Commission.objects.create(
                distributor=self,
                amount=pairs * 0.1,
                bonus_type='pairing',
                status='pending'
            )
            self.left_sales -= pairs
            self.right_sales -= pairs
    def generate_sponsor_id():
        return ''.join(random.choices(string.ascii_letters + string.digits, k=10))

class Sale(models.Model):
    distributor = models.ForeignKey(MLMUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    blocked=models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.distributor.total_sales += self.amount
        self.update_upline(self.distributor.sponsor, self.amount)
        self.distributor.save()

    def update_upline(self, sponsor, amount):
        if sponsor:
            if sponsor.left == self.distributor:
                sponsor.left_sales += amount
            elif sponsor.right == self.distributor:
                sponsor.right_sales += amount
            sponsor.calculate_pairing_bonus()
            self.update_upline(sponsor.sponsor, amount)

class Commission(models.Model):
    distributor = models.ForeignKey(MLMUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    bonus_type = models.CharField(
        max_length=20, choices=[('pairing', 'Pairing'), ('direct', 'Direct Sale')]
    )
    status = models.CharField(
        max_length=20, choices=[('pending', 'Pending'), ('paid', 'Paid')]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    blocked=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.amount} - {self.bonus_type} - {self.status}"

class Payout(models.Model):
    user = models.ForeignKey(MLMUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20, choices=[('processing', 'Processing'), ('completed', 'Completed')]
    )
    requested_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    blocked=models.BooleanField(default=False)

    def __str__(self):
        return f"Payout {self.amount} - {self.status} for {self.user.username}"