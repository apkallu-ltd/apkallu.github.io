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
    testimonials.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
      slide.style.opacity = index === slideIndex ? '1' : '0';
    });

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
      const duration = 2000;
      const interval = 50;
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

// Hero star field — milky way band
// FIXES vs original:
//  1. Added a soft radial-gradient "haze" layer so the band reads as a
//     hazy cloud of light, not just isolated dots.
//  2. Raised baseAlpha across all tiers so backdrop stars are actually visible.
//  3. Stars now cluster around a handful of density centers along the spine
//     (with tighter spread near cluster cores) instead of being spread
//     uniformly along the diagonal, which is what made it look "randomly
//     scattered" rather than "a cloud."
//  4. Added a delayed re-init after full window 'load' as a safety net
//     against the canvas being sized before the hero container's CSS
//     (background images, flex/grid sizing) has finished settling —
//     if that race happens, offsetWidth/offsetHeight can read too small
//     at DOMContentLoaded and cram all the stars into a tiny area.
(function () {
  var canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');
  var stars = [];
  var clusters = [];
  var COUNT = 450;
  var CLUSTER_COUNT = 5;
  var startTime = null;

  function resize() {
    // Measure the canvas's own rendered box (via getBoundingClientRect),
    // not its parent's offsetWidth/Height. #hero-particles fills its
    // *positioned* ancestor via `inset: 0`, which may not be the same
    // element as canvas.parentElement — and if that immediate parent
    // (.hero-overlay) has no explicit size of its own, offsetWidth/Height
    // on it can read as 0 or tiny, crushing the whole star field into a
    // few stretched pixels. getBoundingClientRect reflects what's actually
    // on screen regardless of the parent chain's sizing.
    var rect = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;

    canvas.width  = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    canvas.style.width  = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // logical (CSS-pixel) size, used everywhere else for layout math
    canvas._logicalWidth = rect.width;
    canvas._logicalHeight = rect.height;
  }

  function rand(a, b) { return a + Math.random() * (b - a); }

  function randNormal(mean, stdDev) {
    var u1 = 1 - Math.random();
    var u2 = 1 - Math.random();
    var randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
    return mean + stdDev * randStdNormal;
  }

  // Pick a point on/near the diagonal spine, biased toward one of a few
  // cluster centers so density along the band is uneven (like real
  // star clouds / dust lanes) instead of perfectly uniform.
  function spinePoint(spreadScale) {
    var cluster = clusters[Math.floor(Math.random() * clusters.length)];
    var progress = randNormal(cluster.progress, cluster.spread);
    progress = Math.max(0, Math.min(1, progress));

    var spineX = progress * canvas._logicalWidth;
    var spineY = (1 - progress) * canvas._logicalHeight;

    var offsetAngle = Math.atan2(canvas._logicalWidth, canvas._logicalHeight);
    var bandWidth = Math.min(canvas._logicalWidth, canvas._logicalHeight) * 0.16 * spreadScale;
    var offsetDistance = randNormal(0, bandWidth);

    var x = spineX + Math.cos(offsetAngle) * offsetDistance;
    var y = spineY + Math.sin(offsetAngle) * offsetDistance;

    return {
      x: Math.max(0, Math.min(canvas._logicalWidth, x)),
      y: Math.max(0, Math.min(canvas._logicalHeight, y))
    };
  }

  function initClusters() {
    clusters = [];
    for (var i = 0; i < CLUSTER_COUNT; i++) {
      clusters.push({
        progress: rand(0.05, 0.95),
        spread: rand(0.05, 0.14) // how tight this cluster is along the spine
      });
    }
  }

  function init() {
    resize();
    initClusters();
    stars = [];

    for (var i = 0; i < COUNT; i++) {
      var randType = Math.random();
      var radius, baseAlpha, twinkleAmp, speed, color;

      if (randType < 0.65) {
        // Backdrop stars (65%) — visible haze, not near-invisible dust
        radius = rand(0.4, 0.8);
        baseAlpha = rand(0.18, 0.38);
        twinkleAmp = rand(0.03, 0.08);
        speed = rand(0.2, 0.6);
      } else if (randType < 0.90) {
        // Mid-tier stars (25%)
        radius = rand(0.8, 1.3);
        baseAlpha = rand(0.35, 0.60);
        twinkleAmp = rand(0.08, 0.16);
        speed = rand(0.5, 1.0);
      } else {
        // Bright stars (10%)
        radius = rand(1.3, 2.2);
        baseAlpha = rand(0.60, 0.90);
        twinkleAmp = rand(0.16, 0.28);
        speed = rand(0.9, 1.5);
      }

      var colorRoll = Math.random();
      if (colorRoll < 0.75) {
        color = '255,255,255';
      } else if (colorRoll < 0.90) {
        color = '173,216,230';
      } else {
        color = '255,223,186';
      }

      var pos;
      if (Math.random() < 0.85) {
        // spreadScale shrinks the band width slightly for brighter stars
        // so bright stars hug the spine tighter than dim haze does
        var spreadScale = randType < 0.65 ? 1.15 : (randType < 0.90 ? 0.9 : 0.65);
        pos = spinePoint(spreadScale);
      } else {
        pos = { x: rand(0, canvas._logicalWidth), y: rand(0, canvas._logicalHeight) };
      }

      stars.push({
        x: pos.x,
        y: pos.y,
        radius: radius,
        baseAlpha: baseAlpha,
        twinkleAmp: twinkleAmp,
        phase: rand(0, Math.PI * 2),
        speed: speed,
        color: color,
        glow: randType >= 0.90 // bright stars get a soft glow halo
      });
    }
  }

  // Soft radial-gradient haze behind the stars, centered on each cluster,
  // to give the band an actual "cloud of light" look rather than pure dots.
  function drawHaze() {
    clusters.forEach(function (cluster) {
      var spineX = cluster.progress * canvas._logicalWidth;
      var spineY = (1 - cluster.progress) * canvas._logicalHeight;
      var radius = Math.min(canvas._logicalWidth, canvas._logicalHeight) * 0.35;

      var gradient = ctx.createRadialGradient(spineX, spineY, 0, spineX, spineY, radius);
      gradient.addColorStop(0, 'rgba(210,225,255,0.05)');
      gradient.addColorStop(0.4, 'rgba(190,210,255,0.03)');
      gradient.addColorStop(1, 'rgba(190,210,255,0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas._logicalWidth, canvas._logicalHeight);
    });
  }

  function draw(ts) {
    if (!startTime) startTime = ts;
    var t = (ts - startTime) / 1000;

    ctx.clearRect(0, 0, canvas._logicalWidth, canvas._logicalHeight);
    drawHaze();

    stars.forEach(function (s) {
      var alpha = s.baseAlpha + Math.sin(t * s.speed + s.phase) * s.twinkleAmp;
      alpha = Math.max(0, Math.min(1, alpha));

      if (s.glow) {
        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(' + s.color + ',' + (alpha * 0.8).toFixed(3) + ')';
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + s.color + ',' + alpha.toFixed(3) + ')';
      ctx.fill();

      if (s.glow) ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', function () {
    init();
  });

  init();
  requestAnimationFrame(draw);

  // Safety net: re-init shortly after full page load in case the hero
  // container's real dimensions weren't settled yet at DOMContentLoaded.
  window.addEventListener('load', function () {
    setTimeout(init, 150);
  });
})();