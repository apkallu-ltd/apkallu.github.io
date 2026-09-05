---
layout: default
lang: ja
ref: ai-coach
title: "Ascend AIコーチ — あなた専用の習慣化プランをAIが瞬時に設計"
description: "多くのアプリは単なるToDoリストしか提供しません。Ascendはあなたに寄り添うコーチを提供します。目標、スケジュール、懸念点を伝えるだけで、30秒で専用プランが完成。iOSとAndroidで無料配信中。"
permalink: /ja/ai-coach
last_modified_at: 2026-09-05
---

<div class="ai-coach-page">

  <!-- Hero Section -->
  <section class="ai-coach-hero">
    <div class="ai-orb-decoration" role="img" aria-label="Ascend AIコーチ"></div>

    <h1>あなたの毎日に寄り添う習慣化プラン。<br><span class="ai-highlight">AIが30秒でオーダーメイド設計。</span></h1>

    <p class="ai-hero-sub">
      目標、スケジュール、気になる制約をチャットで伝えるだけ。AIコーチがあなたの日常に無理なく馴染む専用プランを
      わずか30秒で設計し、毎日の継続に伴走します。
    </p>

    <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; position:relative; z-index:1;">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Storeからダウンロード">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Playで手に入れよう">
      </a>
    </div>
    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-top:16px; position:relative; z-index:1;">
      無料ダウンロード &middot; あなただけのAIプランを今日から始めましょう
    </p>
  </section>

  <!-- Live Interactive Conversation Simulator -->
  <section class="ai-preview-section">
    <h2>AIコーチをインタラクティブ体験</h2>
    <p class="ai-preview-sub">目標を選択して、Ascendがリアルタイムに専用プランを構築する様子をお試しください。</p>

    <div class="ai-chat-shell">

      <!-- Shell Header -->
      <div class="ai-chat-shell-header">
        <div class="ai-chat-shell-title">
          <span class="shell-orb">&#x2726;</span>
          <span>Ascend コーチ</span>
        </div>
        <span class="ai-chat-shell-close">&times;</span>
      </div>

      <!-- Chat Body -->
      <div class="ai-chat-preview" id="interactive-chat-container">
        <div class="ai-bubble">
          <div class="ai-bubble-header">
            <span>&#x2726;</span>
            <span>Ascend コーチ</span>
          </div>
          <p>どんな習慣や目標に取り組みたいですか？気になるテーマを選んでみてください：</p>
          <div class="ai-chips-row" id="initial-goal-chips">
            <button class="ai-chip" onclick="selectGoal('morning')">&#x26A1; 朝のエネルギー</button>
            <button class="ai-chip" onclick="selectGoal('fitness')">&#x1F4AA; 20分フィットネス</button>
            <button class="ai-chip" onclick="selectGoal('mind')">&#x1F9E0; 集中＆マインドフル</button>
          </div>
        </div>

        <div id="dynamic-chat-thread"></div>
      </div>

      <!-- Plan Reveal Card -->
      <div class="ai-plan-reveal-card" id="interactive-plan-card" style="display: none;">
        <p class="ai-plan-label">&#x2726; あなた専用のプラン完成</p>
        <p class="ai-plan-title" id="card-plan-title">21日間 パワーモーニングルーティン</p>
        <p class="ai-plan-meta" id="card-plan-meta">20分/日 &nbsp;&middot;&nbsp; 個人プラン &nbsp;&middot;&nbsp; 明日から開始 &nbsp;&middot;&nbsp; 5つのバッジを獲得可能</p>
        <a href="{{ site.app.download_link }}" class="ai-plan-cta">
          このプランをAscendで始める &rarr;
        </a>
      </div>

    </div>
  </section>

  <!-- Two-Phone App Showcase -->
  <section class="ai-showcase-section">
    <div class="container">
      <h2>いつでもあなたのそばに</h2>
      <p class="ai-showcase-sub">AIコーチは日々のフィードにいつでも常駐。アドバイスや定期チェックイン、プランの再調整が必要なときにいつでも頼れます。</p>

      <div class="ai-showcase-phones">
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/ja/main.png' | relative_url }}" alt="AIコーチが常駐するAscendフィード" class="feature-screenshot">
          </div>
          <p class="ai-showcase-caption">いつでも相談できるAIコーチ</p>
        </div>
        <div class="ai-showcase-phone">
          <div class="device-mockup">
            <img src="{{ 'assets/screenshots/ja/gallery_1.png' | relative_url }}" alt="Ascend AIコーチとのチャット画面" class="feature-screenshot ai-glow">
          </div>
          <p class="ai-showcase-caption">あなた専用のプランが数秒で完成</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contrast Section -->
  <section class="ai-contrast-section">
    <h2>なぜAIコーチが<br>習慣化を劇的に変えるのか</h2>
    <div class="ai-contrast-table">
      <div class="ai-contrast-header">
        <span>一般的なアプリ</span>
        <span></span>
        <span class="ai-col-right">&#x2726; Ascend AIコーチ</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">全員に同じ画一的なテンプレート</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">あなたの実生活に寄り添う個別プラン</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">面倒で長いアンケート項目の入力</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">自然な会話のやり取りだけで完了</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">他人の決めた非現実的な時間割に従う</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right"><em>あなたが</em>選んだ時間とリズムで進める</span>
      </div>
      <div class="ai-contrast-row">
        <span class="ai-contrast-left">忙しくなると一人で挫折して終わり</span>
        <span class="ai-contrast-arrow">&#x2192;</span>
        <span class="ai-contrast-right">罪悪感ゼロでAIがプランを柔軟に再調整</span>
      </div>
    </div>
  </section>

  <!-- Download CTA -->
  <section class="ai-coach-download-section">
    <h2>今日から、無理のない新しい習慣を。</h2>
    <p>
      理想のルーティンを描き、明日から一歩ずつ。
      AscendはiOSとAndroidで無料配信中。
    </p>
    <div class="app-links">
      <a href="{{ site.app.app_store }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/DownloadOnTheAppStore.png' | relative_url }}" alt="App Storeからダウンロード">
      </a>
      <a href="{{ site.app.google_play }}" target="_blank" rel="noopener noreferrer" class="btn">
        <img src="{{ 'assets/icons/GetItOnGooglePlay.png' | relative_url }}" alt="Google Playで手に入れよう">
      </a>
    </div>
  </section>

</div>

<script>
const goalScenarios = {
  morning: {
    userText: "朝20分のエネルギッシュなモーニングルーティンを作りたいです。",
    aiReply: "素晴らしいですね！週に何日くらい取り組めそうですか？",
    timeChips: ["週3日", "週5日", "毎日"],
    planTitle: "21日間 パワーモーニングルーティン",
    planMeta: "20分/日 · 個人プラン · 明日から開始 · 5つのバッジ"
  },
  fitness: {
    userText: "器具を使わずに自宅でできるワークアウトを探しています。",
    aiReply: "いい目標ですね。特に強化したいテーマはありますか？",
    timeChips: ["全身バランス", "体幹＆有酸素", "筋力＆柔軟性"],
    planTitle: "30日間 自重フィットネスプログラム",
    planMeta: "15分/日 · 個人プラン · 明日から開始 · 6つのバッジ"
  },
  mind: {
    userText: "ストレスを減らし、毎日集中できる時間を持ちたいです。",
    aiReply: "承知しました。1日のうちどの時間帯が一番落ち着きますか？",
    timeChips: ["起床直後", "お昼休み", "就寝前のひととき"],
    planTitle: "14日間 メンタルクリア＆集中プラン",
    planMeta: "10分/日 · 個人プラン · 明日から開始 · 4つのバッジ"
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
      <div class="ai-bubble-header"><span>✦</span><span>Ascend コーチ</span></div>
      <p class="typing-dots"><span></span><span></span><span></span></p>
    </div>
  `;
  setTimeout(() => {
    const typingBubble = document.getElementById('typing-bubble');
    typingBubble.innerHTML = `
      <div class="ai-bubble-header"><span>✦</span><span>Ascend コーチ</span></div>
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
    <div class="ai-bubble-header"><span>✦</span><span>Ascend コーチ</span></div>
    <p>かしこまりました！あなたにぴったりの専用プランを構築中です...</p>
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
