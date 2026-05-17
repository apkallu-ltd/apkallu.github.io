---
layout: default
title: Shared Content - Ascend
permalink: ascend/shared
page: shared
---

<header class="modern-header">
  <div class="container">
    <div class="challenge-badge-preview">
      <i class="fas fa-share-alt"></i>
    </div>
    <h1>Shared <span id="content-type">Content</span></h1>
    <h2 id="content-title" style="color: #FFE573; font-weight: 800; margin-top: 10px;"></h2>
  </div>
</header>

<section class="modern-post" style="padding-top: 0;">
  <div class="container">
    <div class="modern-post-container" style="text-align: center;">
      <p style="font-size: 1.3rem; margin-bottom: 40px; color: #2c3e50;">
        Someone has shared <span id="content-description" style="font-weight: 700;">content</span> with you from Ascend!
      </p>

      <div class="cta-box" style="margin-top: 0; padding: 40px;">
        <h3 style="font-weight: 900; margin-bottom: 20px;">Already have the app?</h3>
        <a id="open-in-app-link" href="#" class="join-btn" style="margin: 20px 0;">
          <i class="fas fa-external-link-alt"></i> Open in Ascend App
        </a>
      </div>

      <div style="margin-top: 60px;">
        <h3 style="font-weight: 900; margin-bottom: 20px;">New to Ascend?</h3>
        <p style="color: #666; margin-bottom: 30px;">Join our community of self-improvers and track your goals together.</p>
        <div class="app-store-badges">
          <a href="{{ site.app.app_store }}" target="_blank"><img src="{{ '/assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store" style="height: 48px;"></a>
          <a href="{{ site.app.google_play }}" target="_blank"><img src="{{ '/assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play" style="height: 48px;"></a>
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
