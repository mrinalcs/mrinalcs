---
title: Configure htaccess
date: 2023/4/15
description: Some basic htaccess codes. Like https redirect www redirect Error handel folder indexing block
tag: code
author: You
---

# Configure htaccess

**1** Always redirect http to https
```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://example.com/$1 [R,L]
```

Remove unwanted i parameter from url
```
RewriteEngine On
RewriteCond %{QUERY_STRING} ^(.*)i=[^&]+(.*)$ [NC]
RewriteRule ^(.*)$ /$1?%1%2 [R=301,L]
```

Redirect 301
```
RewriteEngine on
Redirect 301 / http://example.com/
```

Redirect all request through index.php
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
```

www to non-www url redirect
```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www.vbstat.ml
RewriteRule (.*) http://vbstat.ml/$1 [R=301,L]
```

Block Directory Listing:
This code prevents the server from displaying the contents of directories when no index file is present.
```
Options -Indexes
```


Error pages
```
ErrorDocument 403 /error
ErrorDocument 404 /error
ErrorDocument 404 /error-404.html
ErrorDocument 500 /error-500.html
```

Redirect rules
```
Redirect /about-us /about
Redirect /contact-us /contact
```

Set Default Page:
This code sets a specific file as the default page (e.g., index.html).
```
DirectoryIndex index.html
```


Prevent Hotlinking (Image Theft):
This code prevents other websites from directly linking to your images.
```
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?yourwebsite.com [NC]
RewriteRule \.(jpg|jpeg|png|gif)$ - [NC,F,L]
```

