---
title: Change Content in website using CSS
author: mrinal
date: 2023-03-03 11:33:00 +0800
categories: [Demo]
tags: [web,css,trick]
math: true
mermaid: true
image:
  path: /images/copyright-free-images-750x420.jpg
  alt: Copyright free image.
---

When it is not possible to replace the markup as it was already deployed to production, but could inject CSS. It can also be used to hide something unwanted on the page. For such case it only need to modify css only.



## Introduction

---

This could be done easily by using js but thats other case. In web applications, every developer strives to improve the appearance and overall user experience from every aspect. Sometimes developers want to do things differently and better than others. For example, showing a text on something and then changing it into something else according to the updates. This all could be done with the help of CSS different properties and selectors.



## Elements

- Image
- Text



## Change Images

### html

```html
<img class="image-replacement" src="" />
```

### css

```css
.image-replacement {
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url()
  no-repeat;
  width: 180px;
  height: 236px;
  padding-left: 180px;
}
```

## Change Text

### html

```html
<div class="text-replacement">Previous Content</div>
```

### css

```css
.text-replacement {
visibility: hidden;
position: relative;
}

.text-replacement:after {
visibility: visible;
position: absolute;
top: 0;
left: 0;
content: "This text replaced text";
}
```




## Images

### Default (with caption)

![Desktop View](/images/copyright-free-images-750x420.jpg){: width="972" height="589" }
_Full screen width and center alignment_



### Float to left

![Desktop View](/images/copyright-free-images-750x420.jpg){: width="972" height="589" .w-50 .left}
Praesent maximus aliquam sapien. Sed vel neque in dolor pulvinar auctor. Maecenas pharetra, sem sit amet interdum posuere, tellus lacus eleifend magna, ac lobortis felis ipsum id sapien. Proin ornare rutrum metus, ac convallis diam volutpat sit amet. Phasellus volutpat, elit sit amet tincidunt mollis, felis mi scelerisque mauris, ut facilisis leo magna accumsan sapien. In rutrum vehicula nisl eget tempor. Nullam maximus ullamcorper libero non maximus. Integer ultricies velit id convallis varius. Praesent eu nisl eu urna finibus ultrices id nec ex. Mauris ac mattis quam. Fusce aliquam est nec sapien bibendum, vitae malesuada ligula condimentum.

### Float to right

![Desktop View](/images/copyright-free-images-750x420.jpg){: width="972" height="589" .w-50 .right}
Praesent maximus aliquam sapien. Sed vel neque in dolor pulvinar auctor. Maecenas pharetra, sem sit amet interdum posuere, tellus lacus eleifend magna, ac lobortis felis ipsum id sapien. Proin ornare rutrum metus, ac convallis diam volutpat sit amet. Phasellus volutpat, elit sit amet tincidunt mollis, felis mi scelerisque mauris, ut facilisis leo magna accumsan sapien. In rutrum vehicula nisl eget tempor. Nullam maximus ullamcorper libero non maximus. Integer ultricies velit id convallis varius. Praesent eu nisl eu urna finibus ultrices id nec ex. Mauris ac mattis quam. Fusce aliquam est nec sapien bibendum, vitae malesuada ligula condimentum.

### Dark/Light mode & Shadow

The image below will toggle dark/light mode based on theme preference, notice it has shadows.

![light mode only](/images/copyright-free-images-750x420.jpg){: .light .w-75 .shadow .rounded-10 w='1212' h='668' }
![dark mode only](/images/fog-1535201__340.jpg){: .dark .w-75 .shadow .rounded-10 w='1212' h='668' }

## Video

{% include embed/youtube.html id='Balreaj8Yqs' %}

## Reverse Footnote

[^footnote]: The footnote source
[^fn-nth-2]: The 2nd footnote source
