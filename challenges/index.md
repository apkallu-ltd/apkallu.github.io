---
layout: default
---

<header class="modern-header">
  <div class="container">
    <h1>Community Challenge Calendar</h1>
    <p>Join a structured, time-bound challenge. Pick a goal, show up every day, and earn your badge with the community.</p>
  </div>
</header>

{% assign current_time = "now" | date: "%s" | plus: 0 %}
{% assign sorted_challenges = site.challenges | sort: 'start_date' %}

<!-- Count challenges in each category -->
{% assign ongoing_count = 0 %}
{% assign upcoming_count = 0 %}
{% assign past_count = 0 %}

{% for challenge in sorted_challenges %}
  {% assign challenge_start = challenge.start_date | date: "%s" | plus: 0 %}
  {% assign challenge_end = challenge.end_date | date: "%s" | plus: 0 %}
  
  {% if challenge_start <= current_time and challenge_end >= current_time %}
    {% assign ongoing_count = ongoing_count | plus: 1 %}
  {% elsif challenge_start > current_time %}
    {% assign upcoming_count = upcoming_count | plus: 1 %}
  {% else %}
    {% assign past_count = past_count | plus: 1 %}
  {% endif %}
{% endfor %}

<div class="container" style="padding-bottom: 80px;">
  
  <!-- Active / Ongoing Challenges -->
  {% if ongoing_count > 0 %}
    <h2 style="margin: 60px 0 30px; font-weight: 900; font-size: 2rem; color: #001A33; border-bottom: 4px solid #48BBFA; display: inline-block; padding-bottom: 10px;">Active Challenges</h2>
    <div class="modern-grid">
      {% for challenge in sorted_challenges %}
        {% assign challenge_start = challenge.start_date | date: "%s" | plus: 0 %}
        {% assign challenge_end = challenge.end_date | date: "%s" | plus: 0 %}
        {% if challenge_start <= current_time and challenge_end >= current_time %}
          <div class="modern-card">
            <div class="card-image" style="background-image: url('{{ challenge.image }}')">
              <div class="card-overlay"></div>
              <div style="position: absolute; top: 15px; right: 15px; background: #FF9800; color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; z-index: 2; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">ONGOING</div>
            </div>
            <div class="card-content">
              <div class="card-tags">
                <span class="card-tag tag-{{ challenge.difficulty | downcase }}">{{ challenge.difficulty }}</span>
              </div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description | truncate: 140 }}</p>
              <div class="card-footer">
                <span class="card-date">Started {{ challenge.start_date | date: "%b %d, %Y" }}</span>
                <a href="{{ challenge.url | relative_url }}" class="card-link">View Details →</a>
              </div>
            </div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}

  <!-- Upcoming Challenges -->
  {% if upcoming_count > 0 %}
    <h2 style="margin: 60px 0 30px; font-weight: 900; font-size: 2rem; color: #001A33; border-bottom: 4px solid #48BBFA; display: inline-block; padding-bottom: 10px;">Upcoming Challenges</h2>
    <div class="modern-grid">
      {% for challenge in sorted_challenges %}
        {% assign challenge_start = challenge.start_date | date: "%s" | plus: 0 %}
        {% if challenge_start > current_time %}
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
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}

  <!-- Past Challenges -->
  {% if past_count > 0 %}
    <h2 style="margin: 60px 0 30px; font-weight: 900; font-size: 2rem; color: #7f8c8d; border-bottom: 4px solid #bdc3c7; display: inline-block; padding-bottom: 10px;">Past Challenges</h2>
    <div class="modern-grid" style="opacity: 0.8;">
      {% for challenge in sorted_challenges %}
        {% assign challenge_end = challenge.end_date | date: "%s" | plus: 0 %}
        {% if challenge_end < current_time %}
          <div class="modern-card">
            <div class="card-image" style="background-image: url('{{ challenge.image }}'); filter: grayscale(50%);">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-tags">
                <span class="card-tag" style="background: #e0e0e0; color: #666;">COMPLETED</span>
              </div>
              <h3 class="card-title" style="color: #555;">{{ challenge.title }}</h3>
              <p class="card-description" style="color: #777;">{{ challenge.description | truncate: 140 }}</p>
              <div class="card-footer">
                <span class="card-date" style="color: #888;">Ended {{ challenge.end_date | date: "%b %d, %Y" }}</span>
                <a href="{{ challenge.url | relative_url }}" class="card-link">View Details →</a>
              </div>
            </div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}

  <!-- Empty State if no Active or Upcoming Challenges -->
  {% if ongoing_count == 0 and upcoming_count == 0 %}
    <div style="text-align: center; padding: 80px 20px; background: #fff; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-top: 60px;">
      <i class="fas fa-calendar-times" style="font-size: 4rem; color: #cbd5e1; margin-bottom: 20px;"></i>
      <h3 style="font-weight: 800; font-size: 1.5rem; margin-bottom: 10px;">No Active or Upcoming Challenges</h3>
      <p style="color: #64748b;">We are currently preparing new community challenges. Check back soon or download the app to create your own!</p>
    </div>
  {% endif %}

</div>
