---
layout: default
lang: de
ref: blog
title: Blog — Ascend
permalink: /de/ascend/blog
page: blog
---

<header class="modern-header">
  <div class="container">
    <h1>Ascend Blog</h1>
    <p>Tipps, Einblicke und Geschichten rund um persönliche Weiterentwicklung, Produktivität und Community-Challenges.</p>
  </div>
</header>

<div class="modern-grid">
  {% assign current_lang = page.lang | default: 'de' %}
  {% assign filtered_posts = site.posts | where: "lang", current_lang %}
  {% for post in filtered_posts %}
    <div class="modern-card">
      {% assign post_seconds = post.date | date: "%s" | plus: 0 %}
      {% assign now_seconds = "now" | date: "%s" | plus: 0 %}
      {% assign diff_seconds = now_seconds | minus: post_seconds %}
      {% assign ten_days_seconds = 864000 %}

      {% if diff_seconds < ten_days_seconds %}
        <div class="new-badge">{{ i18n.blog.new_badge | default: "Neu" }}</div>
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
          <span class="card-date">{{ post.date | date: "%d. %b. %Y" }}</span>
          <a href="{{ post.url | relative_url }}" class="card-link">{{ i18n.blog.read_more | default: "Mehr lesen →" }}</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
