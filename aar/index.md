---
layout: default
title: Weather Events
permalink: /aar/
---

<h1>After-Action Reports</h1>
<ul>
{% for post in site.aar %}
  <li><a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d %b %Y %Z" }}</a></li>
{% endfor %}
</ul>
