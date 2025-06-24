---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>
<ul>
{% for post in site.blog %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}</li>
{% endfor %}
</ul>
