# Generated by Django 4.2.3 on 2023-07-05 14:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Publishing_Fetching', '0012_auto_20221208_1429'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='Title',
        ),
        migrations.RemoveField(
            model_name='history',
            name='creator',
        ),
        migrations.AddField(
            model_name='history',
            name='HistoryItem',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='Publishing_Fetching.blog'),
        ),
    ]
