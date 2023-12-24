# Generated by Django 4.2.7 on 2023-12-19 21:23

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_merge_20231115_1355'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playlist',
            name='isDraft',
        ),
        migrations.RemoveField(
            model_name='video',
            name='dislikes',
        ),
        migrations.RemoveField(
            model_name='video',
            name='likes',
        ),
        migrations.AlterField(
            model_name='comment',
            name='commentId',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.comment'),
        ),
        migrations.CreateModel(
            name='Draft',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('desc', models.TextField(blank=True, null=True)),
                ('thumbnail', models.TextField(blank=True, null=True)),
                ('cloudinaryPublicId', models.TextField(blank=True, null=True)),
                ('topicList', models.JSONField(default=list)),
                ('videoList', models.JSONField(default=list)),
                ('duration', models.DurationField(default=0)),
                ('coursePDF', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('authorId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
            ],
        ),
    ]
