# Generated by Django 4.2.7 on 2023-11-09 18:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_comment_created_at_commentinteraction_created_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='commentinteraction',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='playlistinteraction',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='video',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='videoorder',
            name='created_at',
        ),
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 11, 9, 18, 53, 46, 572147, tzinfo=datetime.timezone.utc), null=True),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 11, 9, 18, 53, 46, 568449, tzinfo=datetime.timezone.utc), null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 11, 9, 18, 53, 46, 565920, tzinfo=datetime.timezone.utc), null=True),
        ),
    ]
