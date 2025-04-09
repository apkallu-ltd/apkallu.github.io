document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll('.feature-section, .feature-card, .testimonial-card');
  const fadeOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const fadeObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, fadeOptions);

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // Testimonial slider functionality
  let currentSlide = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');
  const totalSlides = testimonials.length;

  if (totalSlides > 1) {
    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.className = 'slider-dot';
      if (i === 0) dot.classList.add('active');
      dot.dataset.slide = i;
      dot.addEventListener('click', function() {
        goToSlide(parseInt(this.dataset.slide));
      });
      dotsContainer.appendChild(dot);
    }

    const sliderContainer = document.querySelector('.testimonials-slider');
    sliderContainer.after(dotsContainer);

    // Auto-rotate slides
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
  }

  function goToSlide(slideIndex) {
    // Update slides visibility
    testimonials.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
      slide.style.opacity = index === slideIndex ? '1' : '0';
    });

    // Update dots
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === slideIndex);
    });

    currentSlide = slideIndex;
  }

  // Count animation for user numbers
  const userCountElement = document.querySelector('.user-count');
  if (userCountElement) {
    const countText = userCountElement.textContent;
    const countMatch = countText.match(/(\d+)\+/);

    if (countMatch && countMatch[1]) {
      const targetCount = parseInt(countMatch[1]);
      let currentCount = 0;
      const duration = 2000; // ms
      const interval = 50; // ms
      const increment = Math.ceil(targetCount / (duration / interval));

      userCountElement.innerHTML = `<i class="fas fa-user-plus"></i> <span class="counter">0</span>+ users already!`;
      const counterElement = userCountElement.querySelector('.counter');

      const countInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(countInterval);
        }
        counterElement.textContent = currentCount;
      }, interval);
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Floating notification animation
  const notification = document.querySelector('.floating-notification');
  if (notification) {
    setTimeout(() => {
      notification.classList.add('show');

      // Hide after delay
      setTimeout(() => {
        notification.classList.remove('show');
      }, 10000);
    }, 2000);
  }

  // Download buttons hover effect
  const appLinks = document.querySelectorAll('.app-links a');
  appLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.classList.add('hover');
    });

    link.addEventListener('mouseout', function() {
      this.classList.remove('hover');
    });
  });
});