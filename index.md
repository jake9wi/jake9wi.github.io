---
layout: default
title: JAKE9WI
---
<main>

<h1>Hello, World!</h1>
<p>This is my GitHub Pages site.</p>

<h2>Recent Blog Posts</h2>
<ul>
{% assign posts = site.blog | concat: site.aar %}
{% assign posts = posts | sort: 'date' | reverse %}
{% for post in posts limit:5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%d %b %Y %Z" }}</li>
{% endfor %}
</ul>

</main>
