---
layout: default
title: Blog
permalink: ascend/blog
---

<section class="blog-header">
  <div class="container">
    <h1>Ascend Blog</h1>
    <p>Insights, tips, and stories about personal growth and community challenges</p>
  </div>
</section>

<section class="blog-content">
  <div class="container">
    <div class="blog-grid">
      {% for post in site.posts %}
      <div class="blog-card">
        {% if post.featured_image %}
        <div class="blog-card-image">
          <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}">
        </div>
        {% endif %}
        <div class="blog-card-content">
          <div class="blog-meta">
            <span class="blog-date">{{ post.date | date: "%B %d, %Y" }}</span>
            {% if post.categories.size > 0 %}
            <span class="blog-category">{{ post.categories | first }}</span>
            {% endif %}
          </div>
          <h2 class="blog-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
          <a href="{{ post.url | relative_url }}" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>