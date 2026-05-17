---
layout: default
---

<header class="modern-header">
  <div class="container">
    <h1>Community Challenge Calendar</h1>
    <p>Join a structured, time-bound challenge. Pick a goal, show up every day, and earn your badge with the community.</p>
  </div>
</header>

<div class="container">
  <h2 style="margin: 60px 0 30px; font-weight: 900; font-size: 2rem; color: #001A33; border-bottom: 4px solid #48BBFA; display: inline-block; padding-bottom: 10px;">Upcoming Challenges</h2>
</div>

<div class="modern-grid">
  {% assign sorted_challenges = site.challenges | sort: 'start_date' %}
  {% for challenge in sorted_challenges %}
    <div class="modern-card">
      <div class="card-image" style="background-image: url('{{ challenge.image }}')">
        <div class="card-overlay"></div>
      </div>
      <div class="card-content">
        <div class="card-tags">
          <span class="card-tag tag-{{ challenge.difficulty | downcase }}">{{ challenge.difficulty }}</span>
        </div>
        <h3 class="card-title">{{ challenge.title }}</h3>
        <p class="card-description">{{ challenge.description | truncate: 140 }}</p>
        <div class="card-footer">
          <span class="card-date">Starts {{ challenge.start_date | date: "%b %d, %Y" }}</span>
          <a href="{{ challenge.url | relative_url }}" class="card-link">View Details →</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
