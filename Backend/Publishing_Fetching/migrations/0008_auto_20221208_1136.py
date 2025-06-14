# Generated by Django 3.2.15 on 2022-12-08 11:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Publishing_Fetching', '0007_remove_user_inf_auths'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_inf',
            name='user',
            field=models.ForeignKey(default=1000, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='blog',
            name='Concept',
            field=models.TextField(blank=True, max_length=100000),
        ),
        migrations.AlterField(
            model_name='blog',
            name='Thumbnail',
            field=models.CharField(max_length=100000),
        ),
        migrations.AlterField(
            model_name='blog',
            name='Title',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='blog',
            name='category',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blog',
            name='url',
            field=models.SlugField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='blog',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
