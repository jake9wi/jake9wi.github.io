---
layout: default
title: JAKE9WI
---
<main>

<h1>Hello, World!</h1>
<p>Hi, I’m Jacob — Amateur Radio Operator, tinkerer, and prepper.</p>

<p>This site is my space to share my notes on projects & experiments, and the occasional essay.</p>

<p>👉 Explore my <a href="/blog">latest posts</a> or learn more <a href="/about">about me</a>.</p>


<h2>Recent Blog Posts</h2>
<ul>
{% assign posts = site.blog | concat: site.aar % | concat: site.son %}
{% assign posts = posts | sort: 'date' | reverse %}
{% for post in posts limit:5 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%d %b %Y %Z" }}</li>
{% endfor %}
</ul>

</main>
