# Generated by Django 3.2.7 on 2022-01-11 12:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.PositiveSmallIntegerField(default=0)),
                ('description', models.TextField(max_length=800, verbose_name='Описание')),
                ('price', models.IntegerField(verbose_name='Цена')),
                ('can_message', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tier_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'оформить подписку ',
                'verbose_name_plural': 'оформить подписку',
            },
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('expired', models.BooleanField(default=False, verbose_name='просрочена')),
                ('subscribed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscribed', to=settings.AUTH_USER_MODEL, verbose_name='подписался//подписалась')),
                ('subscriber', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscriber', to=settings.AUTH_USER_MODEL, verbose_name='подписчик')),
                ('tier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tier', to='tier.tier')),
            ],
        ),
    ]
