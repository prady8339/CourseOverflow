# Generated by Django 4.2.6 on 2023-12-24 10:11

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_merge_20231224_0956'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cloudinary_public_id',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_picture',
            field=models.TextField(blank=True, null=True),
        ),
    ]
