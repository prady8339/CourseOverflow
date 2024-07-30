# Generated by Django 4.2.9 on 2024-07-23 18:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_user_username_alter_user_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False, null=True),
        ),
    ]
