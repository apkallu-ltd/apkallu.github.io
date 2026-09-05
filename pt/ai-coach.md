---
layout: default
lang: pt
ref: ai-coach
title: "Coach IA do Ascend — Seu Plano de Hábitos Personalizado, Criado por IA"
description: "A maioria dos apps só dá uma lista de tarefas. O Ascend traz um coach. Compartilhe seu objetivo, horários e limitações — receba um plano personalizado em 30 segundos. Grátis no iOS e Android."
permalink: /pt/ai-coach
last_modified_at: 2026-09-05
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Coach IA do Ascend"></div>

    <h1>O plano de hábitos que se adapta à sua vida.<br><span class="ai-highlight">Criado por IA em 30 segundos.</span></h1>

    <p class="ai-hero-sub">
      Compartilhe suas metas, rotina e limites em uma conversa direta. Seu coach de IA monta
      um programa personalizado em 30 segundos &mdash; e acompanha você todos os dias.
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Baixar na App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponível no Google Play">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      Download gratuito &middot; Comece seu plano personalizado com IA hoje mesmo
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>Experimente o Coach IA</h2>
    <p class="ai-preview-sub">Escolha um objetivo para conferir como o Ascend estrutura um plano sob medida em tempo real.</p>

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
          <p>No que você gostaria de focar? Selecione um objetivo para ver seu plano:</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; Energia Matinal</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; Fitness 20 Min</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; Foco & Clareza</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; Seu Plano Personalizado</p>
        <p class="ai-plan-title" id="card-plan-title">Rotina Matinal de 21 Dias</p>
        <p class="ai-plan-meta" id="card-plan-meta">20 min/dia &nbsp;&middot;&nbsp; Individual &nbsp;&middot;&nbsp; Começa amanhã &nbsp;&middot;&nbsp; 5 medalhas para conquistar</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          Obter este plano no Ascend &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>Sempre a um toque de distância</h2>
      <p class="ai-showcase-sub">O Coach IA está presente no seu feed diário. Obtenha orientações, ajustes ou acompanhamento sempre que precisar.</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/pt/main.png' | relative_url }}" alt="Feed do Ascend com Coach IA" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">Seu Coach IA, sempre por perto</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/pt/gallery_1.png' | relative_url }}" alt="Conversa com o Coach IA do Ascend" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">Seu plano sob medida, pronto em segundos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>Por que um Coach IA<br>transforma toda a experiência</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>Sem IA</span>
        <span></span>
        <span class="ai-col-right">&#x2726; Com o Coach IA do Ascend</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Um plano genérico igual para todo mundo</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Um plano desenhado para sua realidade de vida</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Preencher formulários extensos de metas</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Ter uma conversa leve e natural</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Seguir o horário de outra pessoa</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Seguir o plano <em>que você</em> desenhou</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Desistir sozinho quando a rotina aperta</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">A IA reajusta seu plano &mdash; sem culpa</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>Seu plano personalizado começa hoje.</h2>
    <p>
      Crie sua rotina sob medida, comece amanhã e avance dia após dia.
      O Ascend é gratuito no iOS e Android.
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Baixar na App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Disponível no Google Play">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "Quero construir uma rotina matinal energizante de 20 minutos.",
    aiReply: "Com certeza! Quantos dias por semana você pode se comprometer?",
    timeChips: ["3 Dias", "5 Dias", "Todos os dias"],
    planTitle: "Rotina Matinal Poderosa de 21 Dias",
    planMeta: "20 min/dia · Individual · Começa amanhã · 5 medalhas para conquistar"
  },
  fitness: {
    userText: "Quero treinar em casa sem nenhum equipamento.",
    aiReply: "Ótimo! Qual foco você prefere para os treinos?",
    timeChips: ["Corpo Inteiro", "Core e Cardio", "Força e Mobilidade"],
    planTitle: "Plano com Peso Corporal de 30 Dias",
    planMeta: "15 min/dia · Individual · Começa amanhã · 6 medalhas para conquistar"
  },
  mind: {
    userText: "Preciso reduzir o estresse e criar um hábito diário de concentração.",
    aiReply: "Entendido. Qual período do dia funciona melhor para você?",
    timeChips: ["Ao acordar", "Pausa do almoço", "Relaxamento da noite"],
    planTitle: "Clareza Mental e Foco de 14 Dias",
    planMeta: "10 min/dia · Individual · Começa amanhã · 4 medalhas para conquistar"
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
    <p>Perfeito! Criando seu plano personalizado agora mesmo...</p>
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
