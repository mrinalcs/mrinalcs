---
title: Build a Simple PHP Website
date: 2023/4/15
description: Heres how you can build a website using PHP.
tag: web
author: You
---

# What You'll Need to Build a PHP Website
## Knowledge
Basic knowledge in HTML and PHP. CSS for styling the page. JS is not necessary to build simple website.
## Server
There are plenty of free hosting providers that offers free PHP hosting with a free subdomain or custom domain. Choose one of them and continue building php website. 
 
 ## Why PHP not static HTML
 In html you can't change every page at once. You have to manually change every page one by one. Thats why PHP you just make a common header and footer file which will be included in every page. Moreover you can make function to do similar task again and again. PHP generate html on each request in server. You can implement API in PHP. You can build everything you imagine but thats is not our objective.
 
 ## Write Codes
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

 
 ## Simple Website Github Repo
Here's a very simple and minimal website built with PHP <a href='https://github.com/banago/simple-php-website'>github repository ↗</a>. just download zip file. Upload to htdoc folder and unzip it. Thunderbirds are go!
