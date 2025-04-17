---
layout: default
title: Shared Content - Ascend
permalink: ascend/shared
page: shared
---
<section class="shared-content-section">
  <div class="container">
    <div class="shared-content">
      <h1>Shared <span id="content-type">Content</span></h1>
      <h2 id="content-title" class="content-title"></h2>
      <p>Someone has shared <span id="content-description">content</span> with you from Ascend!</p>
      <div class="cta-container">
        <div class="app-download">
          <h2>Download the app to view this content</h2>
          <div class="all-options">
            <h3>Available on all platforms</h3>
            <div class="app-links">
              <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
                <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store">
              </a>
              <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
                <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play">
              </a>
           </div>
          </div>
        </div>

        <div class="open-in-app">
          <h2>Already have the app?</h2>
          <a id="open-in-app-link" href="#" class="btn-primary large">
            <i class="fas fa-external-link-alt"></i> Open in Ascend App
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get shared content parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const contentType = urlParams.get('type') || 'content';
  const contentId = urlParams.get('id') || '';

  // Update page content based on content type
  const contentTypeEl = document.getElementById('content-type');
  const contentDescriptionEl = document.getElementById('content-description');
  const contentTitleEl = document.getElementById('content-title');

   // Create plan titles map from Jekyll data
  const planTitles = {
    {% for plan in site.data.shared_content.plans %}
      "{{ plan[0] }}": "{{ plan[1] }}",
    {% endfor %}
  };

  // Create challenge titles map from Jekyll data
  const challengeTitles = {
    {% for challenge in site.data.shared_content.challenges %}
      "{{ challenge[0] }}": "{{ challenge[1] }}",
    {% endfor %}
  };

  if (contentType === 'plan') {
    contentTypeEl.textContent = 'Plan';
    contentDescriptionEl.textContent = 'a plan';

    if (planTitles[contentId]) {
      contentTitleEl.textContent = planTitles[contentId];
      document.title = planTitles[contentId] + " - Ascend";
    } else {
      contentTitleEl.style.display = 'none';
    }
  } else if (contentType === 'challenge') {
    contentTypeEl.textContent = 'Challenge';
    contentDescriptionEl.textContent = 'a challenge';

    if (challengeTitles[contentId]) {
      contentTitleEl.textContent = challengeTitles[contentId];
      document.title = challengeTitles[contentId] + " - Ascend";
    } else {
      contentTitleEl.style.display = 'none';
    }
  } else {
    contentTitleEl.style.display = 'none';
  }

  // Create deep link URL
  const deepLink = `https://ascendapp.apkallu.co.uk/share/${contentType}s/${contentId}`;
  document.getElementById('open-in-app-link').href = deepLink;
});
</script>