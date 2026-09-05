---
layout: default
lang: fr
ref: download
title: Télécharger Ascend
permalink: /fr/ascend/download
last_modified_at: 2026-09-05
---

<header class="modern-header">
  <div class="container">
    <div class="challenge-badge-preview">
      <i class="fas fa-mobile-alt"></i>
    </div>
    <h1>Commencez avec Ascend</h1>
    <p>Votre voyage vers l'accomplissement personnel commence ici. Disponible dès maintenant sur toutes les plateformes principales.</p>
  </div>
</header>

<section class="modern-post" style="padding-top: 0;">
  <div class="container">
    <div class="modern-post-container" style="text-align: center;">

      <div id="recommended-section" style="margin-bottom: 60px; display: none;">
        <p style="font-size: 1.3rem; margin-bottom: 30px; color: #2c3e50;">
          Nous avons détecté que vous utilisez <span id="device-type" style="font-weight: 700;">un appareil mobile</span>.
        </p>
        <a id="recommended-store" href="#" class="join-btn" style="padding: 22px 60px; font-size: 1.4rem;">
          <i class="fas fa-download" style="margin-right: 12px;"></i> <span id="store-text">Télécharger Maintenant</span>
        </a>
      </div>

      <div class="cta-box" style="margin-top: 0; padding: 60px 40px; background-color: #fcfcfc;">
        <h2 style="font-weight: 900; margin-bottom: 20px; color: #001A33;">Choisissez votre Plateforme</h2>
        <p style="color: #666; margin-bottom: 40px; font-size: 1.1rem;">Scannez le code ou cliquez sur les boutons ci-dessous pour installer Ascend et rejoindre notre communauté grandissante.</p>

        <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px; background: #fff; padding: 30px; border-radius: 30px; border: 1px solid #eee; box-shadow: 0 5px 15px rgba(0,0,0,0.02);">
            <i class="fab fa-apple" style="font-size: 3rem; color: #001A33; margin-bottom: 20px;"></i>
            <h3 style="font-weight: 800; margin-bottom: 15px;">iOS</h3>
            <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer">
              <img src="{{ '/assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Store" style="height: 54px;">
            </a>
          </div>

          <div style="flex: 1; min-width: 250px; background: #fff; padding: 30px; border-radius: 30px; border: 1px solid #eee; box-shadow: 0 5px 15px rgba(0,0,0,0.02);">
            <i class="fab fa-android" style="font-size: 3rem; color: #A4C639; margin-bottom: 20px;"></i>
            <h3 style="font-weight: 800; margin-bottom: 15px;">Android</h3>
            <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer">
              <img src="{{ '/assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Play" style="height: 54px;">
            </a>
          </div>
        </div>
      </div>

      <div style="margin-top: 80px;">
        <h3 style="font-weight: 900; margin-bottom: 25px;">Pourquoi Ascend ?</h3>
        <div class="modern-grid" style="padding-top: 0; margin-bottom: 0;">
          <div class="modern-card" style="padding: 30px; text-align: center;">
            <i class="fas fa-users-cog" style="font-size: 2rem; color: #48BBFA; margin-bottom: 15px;"></i>
            <h4 style="font-weight: 800;">Social</h4>
            <p style="font-size: 0.95rem; margin-bottom: 0;">Défis entre amis</p>
          </div>
          <div class="modern-card" style="padding: 30px; text-align: center;">
            <i class="fas fa-calendar-check" style="font-size: 2rem; color: #8BC34A; margin-bottom: 15px;"></i>
            <h4 style="font-weight: 800;">Progression</h4>
            <p style="font-size: 0.95rem; margin-bottom: 0;">Suivi quotidien des habitudes</p>
          </div>
          <div class="modern-card" style="padding: 30px; text-align: center;">
            <i class="fas fa-medal" style="font-size: 2rem; color: #FFE573; margin-bottom: 15px;"></i>
            <h4 style="font-weight: 800;">Récompenses</h4>
            <p style="font-size: 0.95rem; margin-bottom: 0;">Badges numériques à collectionner</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);

  const recommendedSection = document.getElementById('recommended-section');
  const deviceTypeEl = document.getElementById('device-type');
  const recommendedStore = document.getElementById('recommended-store');
  const storeText = document.getElementById('store-text');

  if (isIOS) {
    recommendedSection.style.display = 'block';
    deviceTypeEl.textContent = 'un appareil iOS';
    recommendedStore.href = "{{ site.app.app_store }}";
    storeText.textContent = 'Télécharger dans l\'App Store';
  } else if (isAndroid) {
    recommendedSection.style.display = 'block';
    deviceTypeEl.textContent = 'un appareil Android';
    recommendedStore.href = "{{ site.app.google_play }}";
    storeText.textContent = 'Disponible sur Google Play';
  }
});
</script>
