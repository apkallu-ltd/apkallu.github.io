document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.feature-section');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});
