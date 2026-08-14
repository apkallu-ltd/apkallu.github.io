---
layout: default
lang: es
ref: blog
title: Blog — Ascend
permalink: /es/ascend/blog
page: blog
---

<header class="modern-header">
  <div class="container">
    <h1>Blog de Ascend</h1>
    <p>Consejos, reflexiones e historias sobre crecimiento personal, productividad y retos comunitarios.</p>
  </div>
</header>

<div class="modern-grid">
  {% for post in site.posts %}
    <div class="modern-card">
      {% assign post_seconds = post.date | date: "%s" | plus: 0 %}
      {% assign now_seconds = "now" | date: "%s" | plus: 0 %}
      {% assign diff_seconds = now_seconds | minus: post_seconds %}
      {% assign ten_days_seconds = 864000 %}

      {% if diff_seconds < ten_days_seconds %}
        <div class="new-badge">Nuevo</div>
      {% endif %}

      {% if post.featured_image %}
      <div class="card-image" style="background-image: url('{{ post.featured_image | relative_url }}')">
        <div class="card-overlay"></div>
      </div>
      {% endif %}
      <div class="card-content">
        <div class="card-tags">
          {% if post.categories.size > 0 %}
          <span class="card-tag tag-blog">{{ post.categories | first }}</span>
          {% endif %}
        </div>
        <h3 class="card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="card-description">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        <div class="card-footer">
          <span class="card-date">{{ post.date | date: "%d %b, %Y" }}</span>
          <a href="{{ post.url | relative_url }}" class="card-link">Leer más →</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
