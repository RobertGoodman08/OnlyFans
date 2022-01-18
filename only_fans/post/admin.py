from django.contrib import admin
from post.models import Post, PostFileContent, Stream, Likes, Bookmark




admin.site.register(Post)
admin.site.register(Bookmark)
admin.site.register(Likes)
admin.site.register(Stream)
admin.site.register(PostFileContent)