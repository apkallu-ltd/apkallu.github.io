---
layout: default
lang: de
ref: ai-coach
title: "Ascend KI-Coach — Dein maßgeschneiderter Gewohnheitsplan, von KI erstellt"
description: "Die meisten Apps geben dir eine bloße To-Do-Liste. Ascend gibt dir einen Coach. Nenne dein Ziel, deinen Zeitplan und deine Einschränkungen — erhalte in 30 Sekunden einen personalisierten Plan. Kostenlos für iOS und Android."
permalink: /de/ai-coach
last_modified_at: 2026-09-05
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Ascend KI-Coach"></div>

    <h1>Der Gewohnheitsplan, der zu deinem Leben passt.<br><span class="ai-highlight">In 30 Sekunden von KI erstellt.</span></h1>

    <p class="ai-hero-sub">
      Teile deine Ziele, deine Zeit und deine Herausforderungen in einem einfachen Gespräch mit. Dein KI-Coach erstellt
      einen maßgeschneiderten Plan in 30 Sekunden &mdash; und begleitet dich jeden Tag.
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Im App Store herunterladen">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Jetzt bei Google Play">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      Kostenloser Download &middot; Starte deinen individuellen KI-Plan noch heute
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>Erlebe den KI-Coach live</h2>
    <p class="ai-preview-sub">Wähle ein Ziel aus und erlebe, wie Ascend in Echtzeit einen maßgeschneiderten Plan erstellt.</p>

    <div class="ai-chat-shell">

      <!-- Shell Header -->
      <div class="ai-chat-shell-header">
        <div class="ai-chat-shell-title">
          <span class="shell-orb">&#x2726;</span>
          <span>Ascend Coach</span>
        </div>
        <span class="ai-chat-shell-close">&times;</span>
      </div>

      <!-- Chat Body -->
      <div class="ai-chat-preview" id="interactive-chat-container">
        <div class="ai-bubble">
          <div class="ai-bubble-header">
            <span>&#x2726;</span>
            <span>Ascend Coach</span>
          </div>
          <p>Woran möchtest du arbeiten? Wähle ein Ziel, um deinen Plan zu sehen:</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; Morgen-Energie</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; 20-Min-Fitness</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; Fokus & Achtsamkeit</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; Dein Maßgeschneiderter Plan</p>
        <p class="ai-plan-title" id="card-plan-title">21-Tage Power-Morgenroutine</p>
        <p class="ai-plan-meta" id="card-plan-meta">20 Min/Tag &nbsp;&middot;&nbsp; Individuell &nbsp;&middot;&nbsp; Startet morgen &nbsp;&middot;&nbsp; 5 Abzeichen zu verdienen</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          Diesen Plan in Ascend öffnen &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>Immer an deiner Seite</h2>
      <p class="ai-showcase-sub">Der KI-Coach ist fester Bestandteil deines täglichen Feeds. Hole dir Ratschläge, Check-ins oder Plan-Anpassungen, wann immer du sie brauchst.</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/de/main.png' | relative_url }}" alt="Ascend Feed mit KI-Coach" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">Dein KI-Coach, immer griffbereit</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/de/gallery_1.png' | relative_url }}" alt="Chat mit dem Ascend KI-Coach" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">Dein individueller Plan, in Sekunden bereit</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>Warum ein KI-Coach<br>alles grundlegend verändert</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>Ohne KI</span>
        <span></span>
        <span class="ai-col-right">&#x2726; Mit dem Ascend KI-Coach</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Standardpläne von der Stange für jeden gleich</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Ein Plan, der sich an deinen Alltag anpasst</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Lange, mühsame Fragebögen ausfüllen</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Ein natürliches, flüssiges Gespräch führen</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Dem starren Zeitplan eines anderen folgen</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Den Rhythmus leben, <em>den du</em> vorgegeben hast</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Allein aufgeben, wenn das Leben dazwischenkommt</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Die KI passt deinen Plan an &mdash; völlig ohne Schuldgefühle</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>Dein individueller Plan beginnt heute.</h2>
    <p>
      Definiere deine Routine, starte morgen und mache jeden Tag echte Fortschritte.
      Ascend ist kostenlos für iOS und Android.
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Im App Store herunterladen">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Jetzt bei Google Play">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "Ich möchte eine energiegeladene 20-minütige Morgenroutine aufbauen.",
    aiReply: "Klingt super! An wie vielen Tagen pro Woche kannst du dir dafür Zeit nehmen?",
    timeChips: ["3 Tage", "5 Tage", "Jeden Tag"],
    planTitle: "21-Tage Power-Morgenroutine",
    planMeta: "20 Min/Tag · Individuell · Startet morgen · 5 Abzeichen zu verdienen"
  },
  fitness: {
    userText: "Ich suche nach einem Workout für zu Hause, ganz ohne Geräte.",
    aiReply: "Hervorragende Idee. Welcher Bereich ist dir am wichtigsten?",
    timeChips: ["Ganzkörper", "Core & Cardio", "Kraft & Mobilität"],
    planTitle: "30-Tage Bodyweight-Programm",
    planMeta: "15 Min/Tag · Individuell · Startet morgen · 6 Abzeichen zu verdienen"
  },
  mind: {
    userText: "Ich möchte Stress abbauen und eine tägliche Fokus-Gewohnheit etablieren.",
    aiReply: "Verstanden. Zu welcher Tageszeit passt das am besten in deinen Ablauf?",
    timeChips: ["Direkt nach dem Aufstehen", "In der Mittagspause", "Am Abend zum Abschalten"],
    planTitle: "14-Tage Mentale Klarheit & Fokus",
    planMeta: "10 Min/Tag · Individuell · Startet morgen · 4 Abzeichen zu verdienen"
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
      <div class="ai-bubble-header"><span>✦</span><span>Ascend Coach</span></div>
      <p class="typing-dots"><span></span><span></span><span></span></p>
    </div>
  `;
  setTimeout(() => {
    const typingBubble = document.getElementById('typing-bubble');
    typingBubble.innerHTML = `
      <div class="ai-bubble-header"><span>✦</span><span>Ascend Coach</span></div>
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
    <div class="ai-bubble-header"><span>✦</span><span>Ascend Coach</span></div>
    <p>Perfekt! Dein maßgeschneiderter Plan wird jetzt erstellt...</p>
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
