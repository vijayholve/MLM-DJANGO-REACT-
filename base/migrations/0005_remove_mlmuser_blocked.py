# Generated by Django 5.1.4 on 2025-01-03 11:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_commission_blocked_payout_blocked_sale_blocked'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mlmuser',
            name='blocked',
        ),
    ]
