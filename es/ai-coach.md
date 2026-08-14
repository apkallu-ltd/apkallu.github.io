---
layout: default
lang: es
ref: ai-coach
title: "Coach IA de Ascend — Tu Plan de Hábitos Personalizado, Creado por IA"
description: "La mayoría de las apps te dan una lista de tareas. Ascend te da un coach. Comparte tu objetivo, tu horario y tus limitaciones — obtén un plan personalizado en 30 segundos. Gratis en iOS y Android."
permalink: /es/ai-coach
last_modified_at: 2026-07-30
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Coach IA de Ascend"></div>

    <h1>El plan de hábitos que se adapta a tu vida.<br><span class="ai-highlight">Creado por IA en 30 segundos.</span></h1>

    <p class="ai-hero-sub">
      Comparte tus objetivos, horario y limitaciones en una conversación sencilla. Tu coach de IA crea
      un programa personalizado en 30 segundos &mdash; y te guía cada día.
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Descargar en el App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponible en Google Play">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      Descarga gratuita &middot; Comienza tu plan IA personalizado hoy
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>Experimenta el Coach IA</h2>
    <p class="ai-preview-sub">Selecciona un objetivo para ver cómo Ascend crea un programa personalizado en tiempo real.</p>

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
          <p>¿En qué estás trabajando? Elige un objetivo para ver tu plan:</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; Energía Matutina</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; Fitness 20 Min</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; Enfoque Mental</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; Tu Plan Personalizado</p>
        <p class="ai-plan-title" id="card-plan-title">Rutina Matutina de 21 Días</p>
        <p class="ai-plan-meta" id="card-plan-meta">20 min &nbsp;&middot;&nbsp; Individual &nbsp;&middot;&nbsp; Empieza mañana &nbsp;&middot;&nbsp; 5 insignias por ganar</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          Obtén este plan en Ascend &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>Siempre a un toque de distancia</h2>
      <p class="ai-showcase-sub">El Coach IA vive dentro de tu feed diario. Accede a orientación, revisiones o ajustes del plan cuando los necesites.</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/main.png' | relative_url }}" alt="Feed de Ascend con Coach IA" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">Tu Coach IA, siempre al alcance</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/gallery_1.png' | relative_url }}" alt="Conversación con el Coach IA de Ascend" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">Tu plan personalizado, listo en segundos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>Por qué un Coach IA<br>lo cambia todo</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>Sin IA</span>
        <span></span>
        <span class="ai-col-right">&#x2726; Con el Coach IA de Ascend</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Un plan genérico igual para todos</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Un plan construido alrededor de tu vida específica</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Rellenar largos formularios de objetivos</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Tener una conversación natural</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Seguir el horario de otra persona</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Seguir el plan <em>que tú</em> describiste</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Rendirte solo cuando la vida se complica</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">La IA adapta tu plan &mdash; sin culpa</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>Tu plan personalizado empieza hoy.</h2>
    <p>
      Crea tu rutina personalizada, empieza mañana y preséntate cada día.
      Ascend es gratis en iOS y Android.
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Descargar en el App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponible en Google Play">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "Quiero crear una rutina matutina energizante de 20 minutos.",
    aiReply: "¡Entendido! ¿Cuántos días a la semana puedes comprometerte?",
    timeChips: ["3 Días", "5 Días", "Todos los días"],
    planTitle: "Rutina Matutina de Poder de 21 Días",
    planMeta: "20 min/día · Individual · Empieza mañana · 5 insignias por ganar"
  },
  fitness: {
    userText: "Quiero una rutina de ejercicio en casa sin equipamiento.",
    aiReply: "Genial. ¿Qué área del cuerpo prefieres trabajar?",
    timeChips: ["Cuerpo Completo", "Core y Cardio", "Movilidad y Fuerza"],
    planTitle: "Plan Bodyweight de 30 Días",
    planMeta: "15 min/día · Individual · Empieza mañana · 6 insignias por ganar"
  },
  mind: {
    userText: "Necesito reducir el estrés y construir un hábito de enfoque diario.",
    aiReply: "Entendido. ¿En qué momento del día te viene mejor?",
    timeChips: ["Primera hora", "Pausa del mediodía", "Relajación nocturna"],
    planTitle: "Claridad y Enfoque Mental de 14 Días",
    planMeta: "10 min/día · Individual · Empieza mañana · 4 insignias por ganar"
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
    <p>¡Perfecto! Creando tu programa personalizado ahora...</p>
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
