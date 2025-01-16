# Generated by Django 5.1.4 on 2025-01-08 06:18

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_kyc_delete_paymenttype_delete_planfeature'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kyc',
            name='status',
            field=models.CharField(choices=[('PENDING', 'Pending'), ('APPROVED', 'Approved'), ('REJECTED', 'Rejected')], default='Pending', max_length=100),
        ),
        migrations.AlterField(
            model_name='kyc',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
