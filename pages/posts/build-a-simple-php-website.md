---
title: Build a Simple PHP Website
date: 2023/4/15
description: Heres how you can build a basic dynamic PHP website.
tag: code,idea
author: You
---

# Build a simple Website
## Idea
Make header and footer for each pages and based on files pages content changes. To get clean url you may route different url using `.htaccess` through `index.php`
## Where to host ?
There are plenty of free hosting providers that offers free PHP hosting with a free subdomain or custom domain. Choose one of them and continue building php website. 
 
 ## Why use PHP ?
 Threre are many CMS that can basic publishing or specefic application but that takes a huge resources as that includes many unused functionality. To do the similar task using less resources which mostly free you have to write your own code. In html you can't change every page at once. You have to manually change every page one by one. Thats why PHP you just make a common header and footer file which will be included in every page. Moreover you can make function to do similar task again and again. PHP generate html on each request in server. You can implement API in PHP. You can build everything you imagine but thats is not our objective. This approach allows for greater flexibility and easier maintenance of the website. Additionally, PHP is a server-side scripting language that can be used to dynamically generate web content based on various inputs, further enhancing the dynamic nature of the website.
 
 ## Codes
You can put files inside folder as you like. But Heres we put each file in root drectory.

**File name** : `header.php`
``` 
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $title; ?> - Your Site</title>
    <link rel="icon" type="image/x-icon" href="<?php echo $url; ?>/favicon.png">
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta name="author" content="your name">
    <link rel="stylesheet" href="<?php echo $url; ?>/style.css" />
    </head>
<body>
<nav>
     <a href="/">Home</a>
     <a href="/about.php">About</a>
</nav>
```

**File name** : `footer.php`
``` 
    <footer>© 2023-<?php echo date("y");?> <a href="<?php echo $url; ?>/" >Your Site</a>. Some Rights Reserved.</footer>
    <script src="<?php echo $url; ?>/script.js"></script>
</body>
</html>
```

**File name** : `index.php`
``` 
<?php 
$title = 'Home';
$description='your description goes here';
$keywords='php,home';
include_once './header.php';?>

Your home page content goes here

<?php include './footer.php';?>
```

 
**File name** : `about.php`
``` 
<?php 
$title = 'About';
$description='your description goes here';
$keywords='php,about';
include_once './header.php';?>

Your about page content goes here

<?php include './footer.php';?>
```



## Get clean url
Create an .htaccess file (if using Apache) in the root directory of your PHP application. Add the following content to enable URL rewriting:

**file name** `.htaccess`
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?url=$1[QSA,L]
```

**file name** `index.php`
```
<?php
$url = isset($_GET['url']) ? $_GET['url'] : '';

switch ($url) {
    case '':
    case '/':
        // Home route
        include('home.php');
        break;
    case '/about':
        // About route
        include('about.php');
        break;
    default:
        header("HTTP/1.0 404 Not Found");
        echo '404 Not Found';
        break;
}

```

 
 ## Simple Website Github Repo
Here's a very simple and minimal website built with PHP <a href='https://github.com/banago/simple-php-website'>github repository ↗</a>. just download zip file. Upload to htdoc folder and unzip it. Thunderbirds are go!
