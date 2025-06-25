---
layout: default
title: Blog
permalink: /blog/
---

<h1>KD9LWR's Blog</h1>
<ul>
{% for post in site.blog %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%d %b %Y %Z" }}</li>
{% endfor %}
</ul>
