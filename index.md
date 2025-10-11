---
layout: default
title: 首页
---

<h1>最新文章</h1>

<div class="posts-grid">
  {% for post in site.posts %}
  <article class="post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-date">{{ post.date | date: "%Y-%m-%d" }}</p>
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
    <p class="post-tags">
      {% for tag in post.tags %}
        <a href="/tags/{{ tag }}">{{ tag }}</a>
      {% endfor %}
    </p>
  </article>
  {% endfor %}
</div>
