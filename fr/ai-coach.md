---
layout: default
lang: fr
ref: ai-coach
title: "Coach IA Ascend — Votre Plan d'Habitudes Sur Mesure, Conçu par l'IA"
description: "La plupart des applications vous donnent une simple to-do list. Ascend vous apporte un coach. Exprimez votre objectif, votre planning et vos contraintes — obtenez un plan personnalisé en 30 secondes. Gratuit sur iOS et Android."
permalink: /fr/ai-coach
last_modified_at: 2026-09-05
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Coach IA Ascend"></div>

    <h1>Le plan d'habitudes qui s'adapte à votre vie.<br><span class="ai-highlight">Créé par l'IA en 30 secondes.</span></h1>

    <p class="ai-hero-sub">
      Partagez vos objectifs, vos horaires et vos contraintes lors d'une simple conversation. Votre coach IA conçoit
      un programme personnalisé en 30 secondes &mdash; et vous accompagne chaque jour.
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Télécharger dans l'App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponible sur Google Play">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      Téléchargement gratuit &middot; Démarrez votre plan IA sur mesure dès aujourd'hui
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>Faites l'expérience du Coach IA</h2>
    <p class="ai-preview-sub">Sélectionnez un objectif pour découvrir comment Ascend construit un plan sur mesure en temps réel.</p>

    <div class="ai-chat-shell">

      <!-- Shell Header -->
      <div class="ai-chat-shell-header">
        <div class="ai-chat-shell-title">
          <span class="shell-orb">&#x2726;</span>
          <span>Coach Ascend</span>
        </div>
        <span class="ai-chat-shell-close">&times;</span>
      </div>

      <!-- Chat Body -->
      <div class="ai-chat-preview" id="interactive-chat-container">
        <div class="ai-bubble">
          <div class="ai-bubble-header">
            <span>&#x2726;</span>
            <span>Coach Ascend</span>
          </div>
          <p>Sur quoi souhaitez-vous travailler ? Choisissez un objectif pour voir votre plan :</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; Énergie Matinale</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; Fitness 20 Min</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; Concentration & Focus</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; Votre Plan Sur Mesure</p>
        <p class="ai-plan-title" id="card-plan-title">Routine Matinale de 21 Jours</p>
        <p class="ai-plan-meta" id="card-plan-meta">20 min/jour &nbsp;&middot;&nbsp; Individuel &nbsp;&middot;&nbsp; Commence demain &nbsp;&middot;&nbsp; 5 badges à remporter</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          Obtenir ce plan dans Ascend &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>Toujours à portée de main</h2>
      <p class="ai-showcase-sub">Le Coach IA fait partie intégrante de votre fil quotidien. Sollicitez des conseils, des bilans ou des ajustements quand vous en avez besoin.</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/fr/main.png' | relative_url }}" alt="Fil Ascend avec Coach IA" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">Votre Coach IA, toujours disponible</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/fr/gallery_1.png' | relative_url }}" alt="Discussion avec le Coach IA Ascend" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">Votre plan personnalisé, prêt en quelques secondes</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>Pourquoi un Coach IA<br>change absolument tout</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>Sans IA</span>
        <span></span>
        <span class="ai-col-right">&#x2726; Avec le Coach IA Ascend</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Un programme générique identique pour tous</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Un plan adapté à votre réalité quotidienne</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Remplir de longs formulaires d'objectifs</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Avoir une conversation fluide et naturelle</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Subir l'emploi du temps de quelqu'un d'autre</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Suivre le programme <em>que vous</em> avez décrit</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Abandonner seul quand les journées se compliquent</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">L'IA réajuste votre plan &mdash; sans aucune culpabilité</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>Votre plan sur mesure démarre aujourd'hui.</h2>
    <p>
      Définissez votre routine, commencez dès demain et avancez chaque jour.
      Ascend est gratuit sur iOS et Android.
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Télécharger dans l'App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponible sur Google Play">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "Je veux installer une routine matinale énergisante de 20 minutes.",
    aiReply: "C'est noté ! Combien de jours par semaine pouvez-vous vous y consacrer ?",
    timeChips: ["3 Jours", "5 Jours", "Tous les jours"],
    planTitle: "Routine Matinale Puissance 21 Jours",
    planMeta: "20 min/jour · Individuel · Commence demain · 5 badges à remporter"
  },
  fitness: {
    userText: "Je cherche un entraînement à la maison, sans matériel.",
    aiReply: "Excellente idée. Quelle zone souhaitez-vous privilégier ?",
    timeChips: ["Corps complet", "Gainage & Cardio", "Force & Mobilité"],
    planTitle: "Programme Poids du Corps 30 Jours",
    planMeta: "15 min/jour · Individuel · Commence demain · 6 badges à remporter"
  },
  mind: {
    userText: "J'aimerais réduire mon stress et ancrer une habitude de concentration quotidienne.",
    aiReply: "Compris. Quel moment de la journée vous convient le mieux ?",
    timeChips: ["Au réveil", "Pause déjeuner", "Détente du soir"],
    planTitle: "Clarté Mentale & Focus 14 Jours",
    planMeta: "10 min/jour · Individuel · Commence demain · 4 badges à remporter"
  }
};

function selectGoal(type) {
  const scenario = goalScenarios[type];
  const thread = document.getElementById('dynamic-chat-thread');
  const chips = document.getElementById('initial-goal-chips');
  chips.style.pointerEvents = 'none';
  chips.style.opacity = '0.5';
  thread.innerHTML = `
    <div class="user-bubble" style="margin-top: 12px;">${scenario.userText}</div>
    <div class="ai-bubble" id="typing-bubble" style="margin-top: 12px;">
      <div class="ai-bubble-header"><span>✦</span><span>Coach Ascend</span></div>
      <p class="typing-dots"><span></span><span></span><span></span></p>
    </div>
  `;
  setTimeout(() => {
    const typingBubble = document.getElementById('typing-bubble');
    typingBubble.innerHTML = `
      <div class="ai-bubble-header"><span>✦</span><span>Coach Ascend</span></div>
      <p>${scenario.aiReply}</p>
      <div class="ai-chips-row">
        ${scenario.timeChips.map(c => `<button class="ai-chip" onclick="finishDemo(this, '${type}')">${c}</button>`).join('')}
      </div>
    `;
  }, 1000);
}

function finishDemo(chipBtn, type) {
  const scenario = goalScenarios[type];
  const chipContainer = chipBtn.parentElement;
  chipContainer.style.pointerEvents = 'none';
  chipBtn.classList.add('selected');
  const thread = document.getElementById('dynamic-chat-thread');
  const userChoiceNode = document.createElement('div');
  userChoiceNode.className = 'user-bubble';
  userChoiceNode.style.marginTop = '12px';
  userChoiceNode.innerText = chipBtn.innerText;
  thread.appendChild(userChoiceNode);
  const finalAiNode = document.createElement('div');
  finalAiNode.className = 'ai-bubble';
  finalAiNode.style.marginTop = '12px';
  finalAiNode.innerHTML = `
    <div class="ai-bubble-header"><span>✦</span><span>Coach Ascend</span></div>
    <p>Parfait ! Conception de votre programme sur mesure en cours...</p>
  `;
  thread.appendChild(finalAiNode);
  setTimeout(() => {
    const planCard = document.getElementById('interactive-plan-card');
    document.getElementById('card-plan-title').innerText = scenario.planTitle;
    document.getElementById('card-plan-meta').innerText = scenario.planMeta;
    planCard.style.display = 'block';
    planCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 900);
}
</script>
