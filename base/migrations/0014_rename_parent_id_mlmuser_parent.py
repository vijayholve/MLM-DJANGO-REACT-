# Generated by Django 5.1.4 on 2025-01-08 11:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_mlmuser_parent_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mlmuser',
            old_name='parent_id',
            new_name='parent',
        ),
    ]
