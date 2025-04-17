---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <h1 class="animated-heading">Transform Your Life with <span class="highlight">Ascend</span></h1>
    <p class="hero-subtitle">The social platform dedicated to personal growth and community-driven challenges</p>
    <div class="hero-features">
      <div class="hero-feature">
        <i class="fas fa-users feature-icon"></i>
        <span>Community Support</span>
      </div>
      <div class="hero-feature">
        <i class="fas fa-chart-line feature-icon"></i>
        <span>Track Progress</span>
      </div>
      <div class="hero-feature">
        <i class="fas fa-trophy feature-icon"></i>
        <span>Achieve Goals</span>
      </div>
    </div>
    <!-- <div class="floating-notification">
      <div class="notification-content">
        <span class="user-count"><i class="fas fa-user-plus"></i> 350+ users already!</span>
      </div>
    </div> -->
    <div class="cta-container">
      <a href="{{ site.app.download_link }}" class="btn-register pulse-animation">
        <i class="fas fa-download"></i> Download Now
      </a>
    </div>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play">
      </a>
    </div>
  </div>
  <div class="hero-image">
    <div class="phone-frame">
      <img src="{{ 'assets/screenshots/main.png' | relative_url }}" alt="Ascend App Preview" class="app-screenshot">
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="features-overview">
  <div class="container">
    <h2 class="section-title">Why Choose <span class="highlight">Ascend</span>?</h2>
    <div class="features-grid">
      <div class="feature-card" data-aos="fade-up">
        <div class="feature-icon-container">
          <i class="fas fa-users-cog"></i>
        </div>
        <h3>Community Challenges</h3>
        <p>Join and create challenges with like-minded individuals working toward similar goals</p>
      </div>
      <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
        <div class="feature-icon-container">
          <i class="fas fa-calendar-check"></i>
        </div>
        <h3>Daily Tracking</h3>
        <p>Stay accountable with our built-in calendar and progress tracking tools</p>
      </div>
      <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
        <div class="feature-icon-container">
          <i class="fas fa-medal"></i>
        </div>
        <h3>Achievement System</h3>
        <p>Earn rewards and recognition as you reach milestones on your journey</p>
      </div>
      <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
        <div class="feature-icon-container">
          <i class="fas fa-brain"></i>
        </div>
        <h3>Personalized Growth</h3>
        <p>Get customized recommendations based on your goals and preferences</p>
      </div>
    </div>
  </div>
</section>

<!-- Community Challenges Section -->
<section class="feature-section">
  <div class="feature-text">
    <h2>Join Community Challenges Created by People Like You</h2>
    <p>Take part in exciting challenges designed by the community. Share experiences, engage in meaningful conversations, and see how others leverage these challenges to achieve real progress in their lives.</p>
    <div class="feature-bullets">
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Find challenges that match your interests</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Connect with people sharing similar goals</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Create your own challenges to inspire others</span>
      </div>
    </div>
  </div>
  <div class="feature-image">
    <div class="device-mockup">
      <div class="feature-camera-overlay"></div>
      <img src="{{ 'assets/screenshots/gallery_1.png' | relative_url }}" alt="Community Challenges Screenshot" class="feature-screenshot">
    </div>
  </div>
</section>

<!-- Daily Calendar Section -->
<section class="feature-section">
  <div class="feature-image">
    <div class="device-mockup">
      <div class="feature-camera-overlay"></div>
      <img src="{{ 'assets/screenshots/gallery_2.png' | relative_url }}" alt="Calendar Screenshot" class="feature-screenshot">
    </div>
  </div>
  <div class="feature-text">
    <h2>Stay on Track with Our Intuitive Calendar</h2>
    <p>Our built-in calendar makes it easy to plan your day, track your goals, and maintain daily habits. Get a clear overview of all your upcoming challenges and keep yourself accountable every step of the way.</p>
    <div class="feature-bullets">
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Visualize your daily, weekly, and monthly goals</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Set reminders to stay consistent</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Track your streak of completed challenges</span>
      </div>
    </div>
  </div>
</section>

<!-- Profile & Achievements Section -->
<section class="feature-section">
  <div class="feature-text">
    <h2>Track Your Journey and Celebrate Achievements</h2>
    <p>Your personalized profile showcases active plans, past accomplishments, and major milestones. Keep a detailed record of everything you've achieved as you grow and continually improve yourself.</p>
    <div class="feature-bullets">
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Monitor your progress with detailed analytics</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Earn badges and rewards for completed challenges</span>
      </div>
      <div class="bullet-point">
        <i class="fas fa-check-circle"></i>
        <span>Share your achievements with the community</span>
      </div>
    </div>
  </div>
  <div class="feature-image">
    <div class="device-mockup">
      <div class="feature-camera-overlay"></div>
      <img src="{{ 'assets/screenshots/gallery_3.png' | relative_url }}" alt="Profile Screenshot" class="feature-screenshot">
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials-section">
  <div class="container">
    <h2 class="section-title">What Our Users Say</h2>
    <div class="testimonials-slider">
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"Ascend has completely changed how I approach my goals. The community support makes all the difference!"</p>
        </div>
        <div class="testimonial-author">
          <img src="{{ 'assets/testimonials/user1.png' | relative_url }}" alt="User" class="author-image">
          <div class="author-info">
            <h4>Sarah J.</h4>
            <span>Fitness Enthusiast</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"I've tried many self-improvement apps, but the social aspect of Ascend keeps me motivated like nothing else."</p>
        </div>
        <div class="testimonial-author">
          <img src="{{ 'assets/testimonials/user2.png' | relative_url }}" alt="User" class="author-image">
          <div class="author-info">
            <h4>Michael T.</h4>
            <span>Productivity Coach</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"The challenge system makes self-improvement feel like a game. I'm addicted to becoming better every day!"</p>
        </div>
        <div class="testimonial-author">
          <img src="{{ 'assets/testimonials/user3.png' | relative_url }}" alt="User" class="author-image">
          <div class="author-info">
            <h4>Priya K.</h4>
            <span>Student</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA Section -->
<section class="final-cta">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Start Your Transformation?</h2>
      <p>Join our growing community of self-improvers and start your journey today.</p>
      <a href="{{ site.app.download_link }}" class="btn-register large">
        <i class="fas fa-download"></i> Download Ascend Now
      </a>
      <div class="app-links">
        <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
          <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store">
        </a>
        <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
          <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play">
        </a>
      </div>
      <div class="social-links">
        <p>Follow our journey:</p>
        <div class="social-icons">
          <a href="{{ site.social.facebook }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a href="{{ site.social.instagram }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="{{ site.social.tiktok }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok"></i></a>
          <a href="{{ site.social.youtube }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>