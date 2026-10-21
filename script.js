/**
 * PSYCHO-MONITOR // MK-03 RES-SYNC [ANOMALY: 088-ERIA]
 * Raw Markdown Parser & Progressive Text Decryption Engine
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. PARSER: CONVERTS RAW ERIA.MD MARKDOWN INTO LIVE CHAPTER OBJECTS
     ========================================================================== */
  function parseEriaMarkdown(rawMd) {
    if (!rawMd) return [];
    
    // Split by # CHAPTER headers
    const rawChapters = rawMd.split(/^#\s+/m).filter(Boolean);
    const parsed = [];

    rawChapters.forEach((block, idx) => {
      const lines = block.trim().split('\n');
      const headerLine = lines[0] || "";
      const content = lines.slice(1).join('\n').trim();

      // e.g. "CHAPTER 1: THE WATER AND THE SALT"
      const parts = headerLine.split(':');
      const number = parts[0]?.trim() || `CHAPTER ${idx + 1}`;
      const title = parts.slice(1).join(':').trim() || "UNTITLED LOG";

      // Paragraphs split by blank lines
      const paragraphs = content
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);

      const trackInfo = window.ERIA_SOUNDTRACKS?.[idx] || {
        harmonicKey: idx === 0 ? "alpha" : idx < 3 ? "beta" : "gamma",
        title: "Ambient Carrier",
        youtubeId: "QpRuSDvorBc",
        artist: "Unknown"
      };

      parsed.push({
        id: `ch-${idx + 1}`,
        number: number,
        title: title,
        harmonicKey: trackInfo.harmonicKey,
        track: trackInfo,
        paragraphs: paragraphs
      });
    });

    return parsed;
  }

  /* ==========================================================================
     2. CONTINUOUS AUDIO CONTROLLER
     ========================================================================== */
  class CockpitAudioEngine {
    constructor() {
      this.player = null;
      this.isReady = false;
      this.isPlaying = false;
      this.currentVideoId = null;
      this.pendingVideoId = null;

      this.initAPI();
    }

    initAPI() {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(tag, first);
      }

      window.onYouTubeIframeAPIReady = () => {
        const firstTrack = window.ERIA_SOUNDTRACKS?.[0]?.youtubeId || "QpRuSDvorBc";
        this.currentVideoId = firstTrack;

        this.player = new YT.Player('yt-player-slot', {
          height: '100',
          width: '100',
          videoId: firstTrack,
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: firstTrack,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onReady: () => {
              this.isReady = true;
              this.player.setVolume(80);
              if (this.pendingVideoId) {
                this.playTrack(this.pendingVideoId);
                this.pendingVideoId = null;
              }
            },
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      };
    }

    playTrack(videoId) {
      if (!videoId) return;
      if (!this.isReady || !this.player) {
        this.pendingVideoId = videoId;
        return;
      }

      if (this.currentVideoId !== videoId) {
        this.currentVideoId = videoId;
        if (this.isPlaying) {
          this.player.loadVideoById({ videoId: videoId, suggestedQuality: 'small' });
        } else {
          this.player.cueVideoById(videoId);
        }
      } else if (this.isPlaying && this.player.playVideo) {
        this.player.playVideo();
      }
    }

    startPlayback() {
      this.isPlaying = true;
      if (this.isReady && this.player?.playVideo) {
        this.player.playVideo();
      } else {
        this.pendingVideoId = this.currentVideoId;
      }
    }

    toggle() {
      if (!this.isReady || !this.player) return false;
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) this.player.playVideo();
      else this.player.pauseVideo();
      return this.isPlaying;
    }
  }

  /* ==========================================================================
     3. PROCEDURAL OSCILLOSCOPE
     ========================================================================== */
  class OscilloscopeVisualizer {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.harmonic = "alpha";
      this.phase = 0;

      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width * (window.devicePixelRatio || 1);
      this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    }

    setHarmonic(k) {
      this.harmonic = k;
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.ctx || !this.canvas) return;

      const w = this.canvas.width;
      const h = this.canvas.height;
      const mid = h / 2;

      this.ctx.clearRect(0, 0, w, h);
      this.phase += 0.035;

      let strokeColor = "rgba(229, 169, 98, 0.88)";
      let speed = 1.0;
      let complexity = 3;

      if (this.harmonic === "beta") {
        strokeColor = "rgba(240, 84, 84, 0.92)";
        speed = 1.8;
        complexity = 5;
      } else if (this.harmonic === "gamma") {
        strokeColor = "rgba(168, 184, 230, 0.88)";
        speed = 0.85;
        complexity = 2;
      }

      // Carrier line
      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgba(78, 240, 196, 0.18)";
      this.ctx.lineWidth = 1.2 * (window.devicePixelRatio || 1);
      for (let x = 0; x < w; x += 4) {
        const rad = (x / w) * Math.PI * 6 + this.phase * 0.5;
        const y = mid + Math.sin(rad) * 12 * Math.cos(this.phase * 0.2);
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Main harmonic line
      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeColor;
      this.ctx.lineWidth = 1.8 * (window.devicePixelRatio || 1);

      for (let x = 0; x < w; x += 3) {
        const norm = x / w;
        const w1 = Math.sin(norm * Math.PI * 6 + this.phase * speed);
        const w2 = Math.cos(norm * Math.PI * 12 - this.phase * 0.4) * 0.35;
        const w3 = Math.sin(norm * Math.PI * 24 + this.phase * 1.8) * (complexity === 5 ? 0.3 : 0.08);

        const amp = h * 0.26;
        const y = mid + (w1 + w2 + w3) * amp;

        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();
    }
  }

  /* ==========================================================================
     4. MASTER DOSSIER READER & PROGRESSIVE DECRYPTOR
     ========================================================================== */
  class DossierApp {
    constructor() {
      this.chapters = parseEriaMarkdown(window.ERIA_RAW_MARKDOWN);
      this.currentChapterIndex = 0;
      this.audio = new CockpitAudioEngine();
      this.scope = new OscilloscopeVisualizer('waveform-canvas');
      this.activeDecryptions = [];

      // DOM Elements
      this.dominantChip = document.getElementById('dominant-harmonic-chip');
      this.audioToggleBtn = document.getElementById('audio-toggle-btn');
      this.audioLabel = document.getElementById('audio-label');
      this.currentTrackName = document.getElementById('current-track-name');
      this.toggleDossierBtn = document.getElementById('toggle-dossier-btn');
      this.lancerDrawer = document.getElementById('lancer-drawer');
      this.closeDossierBtn = document.getElementById('close-dossier-btn');
      this.lancerDrawerContent = document.getElementById('lancer-drawer-content');

      this.scopeFreq = document.getElementById('scope-freq');
      this.scopeSync = document.getElementById('scope-sync');
      this.scopeStress = document.getElementById('scope-stress');
      this.tapeTime = document.getElementById('tape-time');

      this.gmBriefingContent = document.getElementById('gm-briefing-content');
      this.chapterNavButtons = document.getElementById('chapter-nav-buttons');

      this.chapterNum = document.getElementById('chapter-num');
      this.chapterYear = document.getElementById('chapter-year');
      this.chapterTitle = document.getElementById('chapter-title');
      this.chapterTrackTitle = document.getElementById('chapter-track-title');
      this.proseContent = document.getElementById('prose-content');
      this.prevChapterBtn = document.getElementById('prev-chapter-btn');
      this.nextChapterBtn = document.getElementById('next-chapter-btn');
      this.readingProgress = document.getElementById('reading-progress');
      this.consoleStream = document.getElementById('console-stream');
      this.decryptStatus = document.getElementById('decrypt-status');
      this.instantDecryptBtn = document.getElementById('instant-decrypt-btn');

      this.init();
    }

    init() {
      this.renderGMBriefing();
      this.renderChapterNav();
      this.renderSubjectDossier();
      this.bindEvents();
      this.startClocks();

      this.loadChapter(0);
    }

    /* 4.1 GM Briefing (Direct Eria.md Story Hooks) */
    renderGMBriefing() {
      if (!this.gmBriefingContent) return;

      this.gmBriefingContent.innerHTML = `
        <div class="gm-pitch-box">
          <div class="gm-pitch-title">HIGH CONCEPT // SUBJECT: ERIA STERLING [SEC-088]</div>
          <p class="gm-pitch-desc">
            A dead 17-year-old civilian marine mechanic (Rian) whose soul was pulled by unshielded Psycho-Frame resonance into a dying rogue ace (Lt. Julian Ross), physically condensing into an adolescent female host adopted by a guilt-ridden Anaheim Director (Eria Sterling).
          </p>
        </div>

        <div class="gm-grid-two">
          <div class="gm-levers-list">
            <div style="font-size:9px; font-weight:700; color:var(--text-dim); letter-spacing:0.1em; text-transform:uppercase;">
              Campaign Adventure Hooks:
            </div>
            <div class="gm-lever-card">
              <div class="gm-lever-title">⚠ THE FORGED CASUALTY RECORD</div>
              <div class="gm-lever-desc">Anaheim believes Julian Ross died in the crater. If military intelligence runs a DNA swab on Eria, Vincent Sterling faces execution for high treason.</div>
            </div>
            <div class="gm-lever-card">
              <div class="gm-lever-title">⚠ THE UNSHIELDED PSYCHO-MESH</div>
              <div class="gm-lever-desc">Under heavy combat stress, Subject 088 risks paracausal dissociation—where Julian's lethal combat autopilot or Rian's saltwater grief violently overrides her conscious mind.</div>
            </div>
            <div class="gm-lever-card">
              <div class="gm-lever-title">⚠ THE VIST FOUNDATION BLACKMAIL</div>
              <div class="gm-lever-desc">The Vist Foundation holds the unredacted black-box ledger. They demanded Eria report to Berth 44 before 2400 hours to pilot Unit-03 to Lagrange Point 1.</div>
            </div>
          </div>

          <div class="gm-stats-card">
            <div style="font-size:9px; font-weight:700; color:var(--theme-accent); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:4px;">
              Dossier Summary:
            </div>
            <div class="gm-stat-row"><span class="gm-stat-label">Origin:</span><span class="gm-stat-val">Sunda Strait (Earth)</span></div>
            <div class="gm-stat-row"><span class="gm-stat-label">Sanctuary:</span><span class="gm-stat-val">Von Braun City (Luna)</span></div>
            <div class="gm-stat-row"><span class="gm-stat-label">Dogtag:</span><span class="gm-stat-val">ROSS, JULIAN — LT. / 088-921-A</span></div>
            <div class="gm-stat-row"><span class="gm-stat-label">Frame:</span><span class="gm-stat-val">Prototype Unit-03</span></div>
            <div style="margin-top:6px; font-family:var(--font-serif); font-size:11px; line-height:1.4; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.06); padding-top:6px;">
              <strong>Session 1 Transition:</strong> Eria accepts the key at Berth 44 and launches toward Lagrange Point 1.
            </div>
          </div>
        </div>
      `;
    }

    /* 4.2 Chapter Navigation */
    renderChapterNav() {
      if (!this.chapterNavButtons) return;

      this.chapterNavButtons.innerHTML = this.chapters.map((ch, idx) => `
        <button class="chapter-tab ${idx === 0 ? 'active' : ''}" data-chapter-index="${idx}" type="button">
          <span class="chapter-tab-num">${ch.number}</span>
          <span class="chapter-tab-title">${ch.title}</span>
        </button>
      `).join("");

      this.chapterNavButtons.querySelectorAll('.chapter-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-chapter-index'), 10);
          this.loadChapter(idx);
        });
      });
    }

    /* 4.3 Subject 088 Drawer (Pure Eria.md Lore) */
    renderSubjectDossier() {
      if (!this.lancerDrawerContent) return;

      this.lancerDrawerContent.innerHTML = `
        <div>
          <div class="dossier-section-title">SUBJECT ARCHIVE // SEC-088</div>
          <div style="font-size:13px; font-weight:700; color:#fff; margin-bottom:2px;">ERIA STERLING (HOST)</div>
          <div style="font-size:10px; color:var(--theme-accent); margin-bottom:6px;">Tripartite Paracausal Reconstruction</div>
          <div style="font-size:10px; color:var(--text-muted); line-height:1.4;">Biological Age: 19 // Falsified Anaheim Disposition Report #95-088</div>
        </div>

        <div>
          <div class="dossier-section-title">THE TRIPARTITE ANOMALY</div>
          <div class="dossier-bio-card">
            <div class="dossier-bio-title" style="color:var(--color-alpha); font-family:var(--font-mono);">HARMONIC α: RIAN (SOUL)</div>
            <div class="dossier-bio-desc">17-year-old civilian apprentice at Sunda Strait. Vaporized during U.C. 0093 Axis impact. Provides mechanical empathy and moral foundation.</div>
          </div>
          <div class="dossier-bio-card">
            <div class="dossier-bio-title" style="color:var(--color-beta); font-family:var(--font-mono);">HARMONIC β: LT. JULIAN ROSS (REFLEX)</div>
            <div class="dossier-bio-desc">26-year-old rogue ace responsible for 42M credits Anaheim damage. Adult body condensed into adolescent girl; lethal combat instincts burned into motor cortex.</div>
          </div>
          <div class="dossier-bio-card">
            <div class="dossier-bio-title" style="color:var(--color-gamma); font-family:var(--font-mono);">HARMONIC γ: ERIA STERLING (LIVING MASK)</div>
            <div class="dossier-bio-desc">Sheltered lunar heiress in Von Braun City. Slides under roadsters at 2:00 AM with an 8mm wrench to anchor herself against dissociative ego death.</div>
          </div>
        </div>

        <div>
          <div class="dossier-section-title">PROTOTYPE UNIT-03 SPECS</div>
          <div class="dossier-bio-card">
            <div style="font-size:10px; font-weight:700; color:var(--color-psycho); margin-bottom:4px;">CHASSIS: PROTOTYPE UNIT-03</div>
            <div style="font-size:11px; font-family:var(--font-serif); color:var(--text-prose-secondary); line-height:1.45; margin-bottom:4px;">
              <strong>Cockpit:</strong> Raw hexagonal Psycho-Frame mesh bonded along internal liner.
            </div>
            <div style="font-size:11px; font-family:var(--font-serif); color:var(--text-muted); line-height:1.45; margin-bottom:4px;">
              <strong>Loadout:</strong> High-frequency thermal blade, AP interceptor cannon, Minovsky chaff canisters.
            </div>
            <div style="font-size:10px; color:var(--color-beta); font-family:var(--font-mono); margin-top:6px;">
              ⚠ BLACK-BOX STATUS: Unedited telemetry held by the Vist Foundation as extortion leverage.
            </div>
          </div>
        </div>
      `;
    }

    /* 4.4 Load Chapter & Progressive Decrypt */
    loadChapter(index) {
      if (index < 0 || index >= this.chapters.length) return;
      this.currentChapterIndex = index;
      const chapter = this.chapters[index];

      // Cancel any ongoing decryption loops
      this.clearActiveDecryptions();

      // Update Nav Buttons
      document.querySelectorAll('.chapter-tab').forEach((tab, idx) => {
        tab.classList.toggle('active', idx === index);
      });

      if (this.chapterNum) this.chapterNum.textContent = chapter.number;
      if (this.chapterTitle) this.chapterTitle.textContent = chapter.title;
      if (this.chapterTrackTitle) this.chapterTrackTitle.textContent = chapter.track.title;

      // Update Harmonic Theme
      this.setHarmonicTheme(chapter.harmonicKey);

      // Render Empty Paragraph Containers Ready for Progressive Decryption
      if (this.proseContent) {
        this.proseContent.innerHTML = chapter.paragraphs.map((p, pIdx) => {
          if (p === '***') {
            return `<div style="text-align:center; color:var(--theme-accent); font-size:18px; margin:16px 0;">∿ ∿ ∿</div>`;
          }
          return `<p class="decrypting-paragraph" data-p-idx="${pIdx}" data-full-text="${encodeURIComponent(p)}"><span class="decrypt-text"></span><span class="decrypt-caret">▌</span></p>`;
        }).join("");

        // Start Slow Decryption Stream
        this.startProgressiveDecryption();
      }

      // Update Pager
      if (this.readingProgress) {
        this.readingProgress.textContent = `LOG ${index + 1} OF ${this.chapters.length}`;
      }
      if (this.prevChapterBtn) {
        this.prevChapterBtn.disabled = index === 0;
        this.prevChapterBtn.style.opacity = index === 0 ? "0.3" : "1";
      }
      if (this.nextChapterBtn) {
        this.nextChapterBtn.disabled = index === this.chapters.length - 1;
        this.nextChapterBtn.style.opacity = index === this.chapters.length - 1 ? "0.3" : "1";
      }

      // Play Chapter BGM
      this.audio.playTrack(chapter.track.youtubeId);
      if (this.currentTrackName) {
        this.currentTrackName.textContent = `TRACK: ${chapter.track.title}`;
      }

      if (this.consoleStream) {
        this.consoleStream.textContent = `DECRYPTING BLACK-BOX TELEMETRY // ${chapter.number} // ${chapter.title}`;
      }
    }

    setHarmonicTheme(harmonicKey) {
      document.body.className = `cockpit-theme-ambient theme-${harmonicKey}`;
      this.scope.setHarmonic(harmonicKey);

      document.body.classList.add('harmonic-shifting');
      setTimeout(() => document.body.classList.remove('harmonic-shifting'), 450);

      const labels = {
        alpha: "DOMINANT: HARMONIC α (RIAN — SALTWATER SOUL)",
        beta: "DOMINANT: HARMONIC β (JULIAN — TACTICAL ACE)",
        gamma: "DOMINANT: HARMONIC γ (ERIA — PORCELAIN VESSEL)"
      };

      if (this.dominantChip) {
        this.dominantChip.textContent = labels[harmonicKey] || labels.alpha;
      }

      if (harmonicKey === "alpha") {
        if (this.scopeFreq) this.scopeFreq.textContent = "432.8 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "96.4%";
        if (this.scopeStress) this.scopeStress.textContent = "14% [STABLE]";
      } else if (harmonicKey === "beta") {
        if (this.scopeFreq) this.scopeFreq.textContent = "684.2 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "88.1%";
        if (this.scopeStress) this.scopeStress.textContent = "64% [OVERCHARGE]";
      } else {
        if (this.scopeFreq) this.scopeFreq.textContent = "528.0 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "99.8%";
        if (this.scopeStress) this.scopeStress.textContent = "38% [DISSOCIATING]";
      }
    }

    /* 4.5 PROGRESSIVE SLOW DECRYPTION ENGINE */
    clearActiveDecryptions() {
      this.activeDecryptions.forEach(id => clearInterval(id));
      this.activeDecryptions = [];
    }

    startProgressiveDecryption() {
      const pElements = Array.from(document.querySelectorAll('.decrypting-paragraph'));
      if (pElements.length === 0) return;

      if (this.decryptStatus) this.decryptStatus.textContent = "STREAM: DECRYPTING TELEMETRY...";

      let currentP = 0;
      const glyphs = '█▓▒░#%&*01∿';

      const decryptNextParagraph = () => {
        if (currentP >= pElements.length) {
          if (this.decryptStatus) this.decryptStatus.textContent = "STREAM: ALL TELEMETRY RESOLVED";
          return;
        }

        const el = pElements[currentP];
        const textSpan = el.querySelector('.decrypt-text');
        const caret = el.querySelector('.decrypt-caret');
        const rawText = decodeURIComponent(el.getAttribute('data-full-text') || "");

        let charIndex = 0;
        const speedMs = 14; // Cadence for smooth, atmospheric decrypt

        const interval = setInterval(() => {
          charIndex += 2; // Resolve 2 characters per tick for steady reading pace

          if (charIndex >= rawText.length) {
            clearInterval(interval);
            textSpan.textContent = rawText;
            if (caret) caret.style.display = 'none';
            el.classList.add('decrypted');
            currentP++;
            decryptNextParagraph();
          } else {
            // Unscrambling cipher tail
            const resolved = rawText.slice(0, charIndex);
            const cipherTail = glyphs[Math.floor(Math.random() * glyphs.length)] + glyphs[Math.floor(Math.random() * glyphs.length)];
            textSpan.textContent = resolved + cipherTail;
          }
        }, speedMs);

        this.activeDecryptions.push(interval);
      };

      // Start first paragraph decrypt
      decryptNextParagraph();

      // Click on any paragraph to instantly finish that single paragraph
      pElements.forEach(el => {
        el.addEventListener('click', () => {
          const textSpan = el.querySelector('.decrypt-text');
          const caret = el.querySelector('.decrypt-caret');
          const rawText = decodeURIComponent(el.getAttribute('data-full-text') || "");
          textSpan.textContent = rawText;
          if (caret) caret.style.display = 'none';
          el.classList.add('decrypted');
        });
      });
    }

    instantDecryptAll() {
      this.clearActiveDecryptions();
      document.querySelectorAll('.decrypting-paragraph').forEach(el => {
        const textSpan = el.querySelector('.decrypt-text');
        const caret = el.querySelector('.decrypt-caret');
        const rawText = decodeURIComponent(el.getAttribute('data-full-text') || "");
        if (textSpan) textSpan.textContent = rawText;
        if (caret) caret.style.display = 'none';
        el.classList.add('decrypted');
      });

      if (this.decryptStatus) this.decryptStatus.textContent = "STREAM: ALL TELEMETRY RESOLVED";
    }

    /* 4.6 Events & Controls */
    bindEvents() {
      // Instant Decrypt Button
      if (this.instantDecryptBtn) {
        this.instantDecryptBtn.addEventListener('click', () => {
          this.instantDecryptAll();
        });
      }

      // Gate Ignite
      const gateBtn = document.getElementById('gate-ignite-btn');
      const gateOverlay = document.getElementById('big-play-gate');
      if (gateBtn && gateOverlay) {
        gateBtn.addEventListener('click', () => {
          this.audio.startPlayback();
          if (this.audioToggleBtn) this.audioToggleBtn.classList.add('active');
          if (this.audioLabel) this.audioLabel.textContent = "ACTIVE (LOOP)";

          gateOverlay.style.opacity = '0';
          setTimeout(() => {
            gateOverlay.style.display = 'none';
          }, 400);
        });
      }

      // Audio Toggle
      if (this.audioToggleBtn) {
        this.audioToggleBtn.addEventListener('click', () => {
          const isPlaying = this.audio.toggle();
          this.audioToggleBtn.classList.toggle('active', isPlaying);
          if (this.audioLabel) {
            this.audioLabel.textContent = isPlaying ? "ACTIVE (LOOP)" : "MUTED";
          }
        });
      }

      // Dossier Drawer Toggle
      if (this.toggleDossierBtn && this.lancerDrawer) {
        this.toggleDossierBtn.addEventListener('click', () => this.toggleDossier(true));
      }
      if (this.closeDossierBtn && this.lancerDrawer) {
        this.closeDossierBtn.addEventListener('click', () => this.toggleDossier(false));
      }

      // Pager
      if (this.prevChapterBtn) {
        this.prevChapterBtn.addEventListener('click', () => {
          if (this.currentChapterIndex > 0) this.loadChapter(this.currentChapterIndex - 1);
        });
      }
      if (this.nextChapterBtn) {
        this.nextChapterBtn.addEventListener('click', () => {
          if (this.currentChapterIndex < this.chapters.length - 1) {
            this.loadChapter(this.currentChapterIndex + 1);
          }
        });
      }
    }

    toggleDossier(open) {
      if (!this.lancerDrawer) return;
      this.lancerDrawer.classList.toggle('open', open);
      this.lancerDrawer.setAttribute('aria-hidden', !open);
      if (this.toggleDossierBtn) {
        this.toggleDossierBtn.setAttribute('aria-expanded', open);
      }
    }

    startClocks() {
      const clockEl = document.getElementById('mission-clock');
      let tapeSeconds = 0;

      setInterval(() => {
        tapeSeconds += 0.1;
        const mins = Math.floor(tapeSeconds / 60).toString().padStart(2, '0');
        const secs = (tapeSeconds % 60).toFixed(1).padStart(4, '0');

        if (this.tapeTime) this.tapeTime.textContent = `${mins}:${secs}`;

        if (clockEl) {
          const now = new Date();
          const h = now.getHours().toString().padStart(2, '0');
          const m = now.getMinutes().toString().padStart(2, '0');
          const s = now.getSeconds().toString().padStart(2, '0');
          clockEl.textContent = `U.C. 0099.04.18 // ${h}:${m}:${s}`;
        }
      }, 100);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.app = new DossierApp();
  });

})();