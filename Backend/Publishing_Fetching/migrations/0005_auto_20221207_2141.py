# Generated by Django 3.2.15 on 2022-12-07 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Publishing_Fetching', '0004_blog_comments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='token',
        ),
        migrations.AddField(
            model_name='user_inf',
            name='JWT_per',
            field=models.CharField(blank=True, max_length=10000, null=True),
        ),
    ]
