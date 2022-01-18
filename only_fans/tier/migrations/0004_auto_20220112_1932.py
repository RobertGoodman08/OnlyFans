# Generated by Django 3.2.7 on 2022-01-12 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tier', '0003_auto_20220112_1639'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='subscription',
            options={},
        ),
        migrations.AlterModelOptions(
            name='tier',
            options={},
        ),
        migrations.AlterField(
            model_name='tier',
            name='can_message',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='tier',
            name='description',
            field=models.TextField(max_length=800, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='tier',
            name='price',
            field=models.IntegerField(verbose_name='Price'),
        ),
    ]
