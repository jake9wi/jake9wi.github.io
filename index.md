---
layout: default
title: JAKE9WI
---
<main>

<h1>Hello, World!</h1>
<p>This is my GitHub Pages site.</p>

<h1>Page Index</h1>

<h2>Recipes</h2>
<ol>
    <li><p><a href="/recipes/fries-oven-frozen.html">Fries, Oven, Frozen</a></p></li>
    <li><p><a href="/recipes/pancake-premixed.html">Pancakes, Premixed</a></p></li>
</ol>

<h2>Recent Blog Posts</h2>
<ul>
{% for post in site.posts limit:5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}</li>
{% endfor %}
</ul>

</main>
