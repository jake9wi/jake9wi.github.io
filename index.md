---
layout: default
title: JAKE9WI
---
<main>

<h1>Hello, World!</h1>
<p>This is my GitHub Pages site.</p>

<h2>Recent Blog Posts</h2>
<ul>
{% for post in site.posts limit:5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}</li>
{% endfor %}
</ul>

</main>
