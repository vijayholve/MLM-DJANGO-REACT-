# Generated by Django 5.1.4 on 2025-01-08 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_kyc_position'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='kyc',
            name='position',
        ),
        migrations.AddField(
            model_name='mlmuser',
            name='position',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
