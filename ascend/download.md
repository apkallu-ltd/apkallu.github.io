---
layout: default
title: Download Ascend
permalink: ascend/download
---

<section class="download-section">
  <div class="container">
    <div class="download-content">
      <h1>Download Ascend</h1>
      <p>Transform your life with Ascend - Available now on iOS and Android</p>

      <div class="device-detection">
        <p>We've detected you're using <span id="device-type">a mobile device</span>.</p>
        <a id="recommended-store" href="#" class="btn-register large">
          <i class="fas fa-download"></i> <span id="store-text">Download Now</span>
        </a>
      </div>

      <div class="all-options">
        <h2>Available on all platforms</h2>
        <div class="app-links">
          <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
            <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play">
          </a>
          <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
            <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store">
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Detect user's device
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);

  const deviceTypeEl = document.getElementById('device-type');
  const recommendedStore = document.getElementById('recommended-store');
  const storeText = document.getElementById('store-text');

  if (isIOS) {
    deviceTypeEl.textContent = 'an iOS device';
    recommendedStore.href = "{{ site.app.app_store }}";
    storeText.textContent = 'Download on the App Store';
  } else if (isAndroid) {
    deviceTypeEl.textContent = 'an Android device';
    recommendedStore.href = "{{ site.app.google_play }}";
    storeText.textContent = 'Get it on Google Play';
  } else {
    deviceTypeEl.textContent = 'a desktop or other device';
    recommendedStore.style.display = 'none';
    document.querySelector('.device-detection p').textContent = 'Download Ascend on your mobile device:';
  }
});
</script>