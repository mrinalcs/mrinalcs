---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout:  
---

<style>
    .image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.image-gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.image-gallery-item img {
  display: block;
  width: 100%;
  height: auto;
}

</style>

<div class="image-gallery">
    {% assign img_folder = 'public/images' %}
    {% for image in site.static_files %}
      {% if image.path contains img_folder %}
        <div class="image-gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.name }}">
        </div>
      {% endif %}
    {% endfor %}
  </div>