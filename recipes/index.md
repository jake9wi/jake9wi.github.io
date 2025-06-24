---
layout: default
title: Recipes
permalink: /recipes/
---

<h1>Recipes</h1>
<ul>
{% for page in site.pages %}
  {% if page.dir == '/recipes/' and page.name != 'index.md' %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
