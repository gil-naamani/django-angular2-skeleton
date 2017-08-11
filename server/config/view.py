import json

from django.http import HttpResponse
from django.views.generic import View

class HelloWorldView(View):

    def get(self, request, *args, **kwargs):
        return HttpResponse(json.dumps({"message": "Hello, World"}))