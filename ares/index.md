---
layout: default
title: Weather Events
permalink: /ares/
---

<h1>Weather Events</h1>
<ul>
{% for post in site.ares %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
