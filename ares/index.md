---
layout: default
title: Weather Events
permalink: /ares/
---

<h1>ARES and SKYWARN Blog</h1>
<ul>
{% for post in site.ares %}
  <li><a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d %b %Y %Z" }}</a></li>
{% endfor %}
</ul>
