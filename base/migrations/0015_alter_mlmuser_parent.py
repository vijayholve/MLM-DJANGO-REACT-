# Generated by Django 5.1.4 on 2025-01-08 11:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_rename_parent_id_mlmuser_parent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mlmuser',
            name='parent',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='children', to=settings.AUTH_USER_MODEL),
        ),
    ]
