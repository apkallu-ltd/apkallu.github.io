---
layout: default
title: "Ascend AI Coach — Your Personalised Habit Plan, Built by AI"
description: "Most habit apps give you a to-do list. Ascend gives you a coach. Share your goal, your schedule, and your constraints — get a personalised plan in 30 seconds. Free on iOS & Android."
permalink: /ai-coach
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Ascend AI Coach"></div>

    <h1>The habit plan that fits your life.<br><span class="ai-highlight">Built by AI in 30 seconds.</span></h1>

    <p class="ai-hero-sub">
      Share your goals, schedule, and constraints in a simple conversation. Your AI coach crafts
      a custom programme in 30 seconds &mdash; then guides you through every single day.
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Download on the App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Get it on Google Play">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      Free download &middot; Start your custom AI plan today
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>Experience the AI Coach</h2>
    <p class="ai-preview-sub">Select a goal below to see how Ascend builds a custom programme in real time.</p>

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
          <p>What are you working on? Pick a goal to see your plan:</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; Morning Energy</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; 20-Min Fitness</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; Mindful Focus</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card — inside shell, shown when plan is generated -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; Your Custom Plan</p>
        <p class="ai-plan-title" id="card-plan-title">21-Day Morning Power Routine</p>
        <p class="ai-plan-meta" id="card-plan-meta">20 min &nbsp;&middot;&nbsp; Solo &nbsp;&middot;&nbsp; Starts tomorrow &nbsp;&middot;&nbsp; 5 badges to earn</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          Get This Plan in Ascend &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>Always One Tap Away</h2>
      <p class="ai-showcase-sub">The AI Coach lives right inside your daily feed. Access guidance, check-ins, or plan adjustments whenever you need them.</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/main.png' | relative_url }}" alt="Ascend Feed with Coach Orb" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">Your AI Coach, always within reach</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/gallery_1.png' | relative_url }}" alt="Ascend AI Coach Conversation" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">Your custom plan, ready in seconds</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>Why an AI Coach<br>Changes Everything</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>Without AI</span>
        <span></span>
        <span class="ai-col-right">&#x2726; With Ascend AI Coach</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">A generic one-size plan for everyone</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">A plan built around your specific life</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Fill out long goal forms</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Have a natural conversation</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Follow someone else's schedule</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">Follow the plan <em>you</em> described</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">Quit alone when life gets busy</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">AI adapts your plan &mdash; no shame</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>Your Custom Plan Starts Today.</h2>
    <p>
      Create your personalized routine, start tomorrow, and show up every day.
      Ascend is free to download on iOS and Android.
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="Download on the App Store">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Get it on Google Play">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "I want to build an energising morning routine in 20 mins.",
    aiReply: "Got it! How many days a week can you commit to?",
    timeChips: ["3 Days", "5 Days", "Every Day"],
    planTitle: "21-Day Morning Power Routine",
    planMeta: "20 min/day · Solo · Starts tomorrow · 5 badges to earn"
  },
  fitness: {
    userText: "I want a quick home workout routine with no equipment.",
    aiReply: "Awesome. What body focus would you prefer?",
    timeChips: ["Full Body", "Core & Cardio", "Mobility & Strength"],
    planTitle: "30-Day Bodyweight Ignite Plan",
    planMeta: "15 min/day · Solo · Starts tomorrow · 6 badges to earn"
  },
  mind: {
    userText: "I need to reduce stress and build a daily focus habit.",
    aiReply: "Understood. When during the day fits best for you?",
    timeChips: ["First thing", "Midday Reset", "Evening Wind-down"],
    planTitle: "14-Day Mindful Clarity & Focus",
    planMeta: "10 min/day · Solo · Starts tomorrow · 4 badges to earn"
  }
};

function selectGoal(type) {
  const scenario = goalScenarios[type];
  const thread = document.getElementById('dynamic-chat-thread');
  const chips = document.getElementById('initial-goal-chips');
  
  // Disable initial chips
  chips.style.pointerEvents = 'none';
  chips.style.opacity = '0.5';

  // Render User Message
  thread.innerHTML = `
    <div class="user-bubble" style="margin-top: 12px;">${scenario.userText}</div>
    <div class="ai-bubble" id="typing-bubble" style="margin-top: 12px;">
      <div class="ai-bubble-header"><span>✦</span><span>Ascend Coach</span></div>
      <p class="typing-dots"><span></span><span></span><span></span></p>
    </div>
  `;

  // Simulate AI Typing
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
    <p>Perfect! Building your custom programme now...</p>
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
