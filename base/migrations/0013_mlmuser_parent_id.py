# Generated by Django 5.1.4 on 2025-01-08 11:13

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_remove_kyc_position_mlmuser_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='mlmuser',
            name='parent_id',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]