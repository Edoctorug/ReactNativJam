from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # Import settings to use it in media files process
from django.conf.urls.static import static  # Import the function for using media files

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('signup/', include('signapi.urls'))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
