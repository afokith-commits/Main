/**
 * PSYCHO-MONITOR // MK-03 RES-SYNC [ANOMALY: 088-ERIA]
 * Core Application Controller, Narrative Reader & Gapless Audio Engine
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. YOUTUBE CONTINUOUS AUDIO CONTROLLER
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
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        const firstTrack = window.DOSSIER_DATA?.chapters[0]?.track?.youtubeId || "QpRuSDvorBc";
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
              this.player.setVolume(82);

              if (this.pendingVideoId) {
                this.playTrack(this.pendingVideoId);
                this.pendingVideoId = null;
              }
            },
            onStateChange: (event) => {
              // Infinite Auto-Loop: Immediate replay on end
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
          this.player.loadVideoById({
            videoId: videoId,
            suggestedQuality: 'small'
          });
        } else {
          this.player.cueVideoById(videoId);
        }
      } else if (this.isPlaying && this.player.playVideo) {
        this.player.playVideo();
      }
    }

    startPlayback() {
      this.isPlaying = true;
      if (this.isReady && this.player && this.player.playVideo) {
        this.player.playVideo();
      } else {
        this.pendingVideoId = this.currentVideoId;
      }
    }

    toggle() {
      if (!this.isReady || !this.player) return false;

      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
      return this.isPlaying;
    }
  }

  /* ==========================================================================
     2. PROCEDURAL OSCILLOSCOPE & BIOMETRIC WAVEFORM VISUALIZER
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

    setHarmonic(harmonicKey) {
      this.harmonic = harmonicKey;
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.ctx || !this.canvas) return;

      const w = this.canvas.width;
      const h = this.canvas.height;
      const mid = h / 2;

      this.ctx.clearRect(0, 0, w, h);
      this.phase += 0.038;

      let primaryColor = "rgba(229, 169, 98, 0.88)"; // Alpha: Amber
      let speed = 1.0;
      let complexity = 3;

      if (this.harmonic === "beta") {
        primaryColor = "rgba(240, 84, 84, 0.92)"; // Beta: Crimson
        speed = 1.85;
        complexity = 5;
      } else if (this.harmonic === "gamma") {
        primaryColor = "rgba(168, 184, 230, 0.88)"; // Gamma: Porcelain Ice
        speed = 0.85;
        complexity = 2;
      }

      // Background Reference Baseline (Psycho-field carrier)
      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgba(78, 240, 196, 0.2)";
      this.ctx.lineWidth = 1.2 * (window.devicePixelRatio || 1);
      for (let x = 0; x < w; x += 4) {
        const rad = (x / w) * Math.PI * 6 + this.phase * 0.5;
        const y = mid + Math.sin(rad) * 12 * Math.cos(this.phase * 0.2);
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Active Synaptic Trace
      this.ctx.beginPath();
      this.ctx.strokeStyle = primaryColor;
      this.ctx.lineWidth = 1.8 * (window.devicePixelRatio || 1);

      for (let x = 0; x < w; x += 3) {
        const norm = x / w;
        const w1 = Math.sin(norm * Math.PI * 6 + this.phase * speed);
        const w2 = Math.cos(norm * Math.PI * 12 - this.phase * 0.4) * 0.35;
        const w3 = Math.sin(norm * Math.PI * 24 + this.phase * 1.8) * (complexity === 5 ? 0.3 : 0.08);
        const jitter = (Math.random() - 0.5) * 1.8;

        const amp = h * 0.26;
        const y = mid + (w1 + w2 + w3) * amp + jitter;

        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();
    }
  }

  /* ==========================================================================
     3. MASTER DOSSIER & NARRATIVE READER CONTROLLER
     ========================================================================== */
  class DossierApp {
    constructor() {
      this.data = window.DOSSIER_DATA;
      if (!this.data) {
        console.error("FATAL: DOSSIER_DATA is missing. Ensure data.js loaded first.");
        return;
      }

      this.currentChapterIndex = 0;
      this.audio = new CockpitAudioEngine();
      this.scope = new OscilloscopeVisualizer('waveform-canvas');

      // DOM Cache
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

      this.anchorList = document.getElementById('anchor-list');
      this.subconsciousText = document.getElementById('subconscious-text');
      this.marginAnnotations = document.getElementById('margin-annotations');

      this.chapterNum = document.getElementById('chapter-num');
      this.chapterYear = document.getElementById('chapter-year');
      this.chapterReadTime = document.getElementById('chapter-read-time');
      this.chapterTitle = document.getElementById('chapter-title');
      this.chapterTrackTitle = document.getElementById('chapter-track-title');
      this.proseContent = document.getElementById('prose-content');
      this.prevChapterBtn = document.getElementById('prev-chapter-btn');
      this.nextChapterBtn = document.getElementById('next-chapter-btn');
      this.readingProgress = document.getElementById('reading-progress');
      this.consoleStream = document.getElementById('console-stream');

      this.artifactModal = document.getElementById('artifact-modal');
      this.artifactModalTitle = document.getElementById('artifact-modal-title');
      this.artifactModalBody = document.getElementById('artifact-modal-body');
      this.closeArtifactModalBtn = document.getElementById('close-artifact-modal-btn');

      this.vistModal = document.getElementById('vist-modal');
      this.vistModalContent = document.getElementById('vist-modal-content');
      this.closeVistModalBtn = document.getElementById('close-vist-modal-btn');
      this.slotKeyBtn = document.getElementById('slot-key-btn');
      this.dismissVistModalBtn = document.getElementById('dismiss-vist-modal-btn');

      this.bigPlayGate = document.getElementById('big-play-gate');
      this.gateIgniteBtn = document.getElementById('gate-ignite-btn');

      this.init();
    }

    init() {
      this.renderGMBriefing();
      this.renderChapterNav();
      this.renderSensoryAnchors();
      this.renderLancerSpecs();
      this.renderVistModalContent();

      this.loadChapter(0);
      this.bindEvents();
      this.startClocks();
      this.initScrollFocus();
    }

    /* 3.1 GM Executive Briefing */
    renderGMBriefing() {
      if (!this.gmBriefingContent) return;
      const b = this.data.gmBriefing;

      let leversHtml = b.immediateLevers.map(l => `
        <div class="gm-lever-card">
          <div class="gm-lever-title">⚠ CAMPAIGN LEVER: ${l.title}</div>
          <div class="gm-lever-desc">${l.desc}</div>
        </div>
      `).join("");

      this.gmBriefingContent.innerHTML = `
        <div class="gm-pitch-box">
          <div class="gm-pitch-title">HIGH CONCEPT // CALLSIGN: ${b.callsign} [${b.subjectId}]</div>
          <p class="gm-pitch-desc">${b.highConcept}</p>
        </div>

        <div class="gm-grid-two">
          <div class="gm-levers-list">
            <div style="font-size:9px; font-weight:700; color:var(--text-dim); letter-spacing:0.1em; text-transform:uppercase;">
              Immediate Adventure Hooks for the GM:
            </div>
            ${leversHtml}
          </div>

          <div class="gm-stats-card">
            <div style="font-size:9px; font-weight:700; color:var(--theme-accent); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:4px;">
              Dossier Summary:
            </div>
            <div class="gm-stat-row">
              <span class="gm-stat-label">Origin:</span>
              <span class="gm-stat-val" style="font-size:10px;">${b.summaryPills.origin}</span>
            </div>
            <div class="gm-stat-row">
              <span class="gm-stat-label">Chassis:</span>
              <span class="gm-stat-val" style="font-size:10px;">${b.summaryPills.chassis}</span>
            </div>
            <div class="gm-stat-row">
              <span class="gm-stat-label">Dogtag:</span>
              <span class="gm-stat-val" style="font-size:10px;">${b.summaryPills.dogtag}</span>
            </div>
            <div class="gm-stat-row">
              <span class="gm-stat-label">Allegiance:</span>
              <span class="gm-stat-val" style="font-size:9px;">${b.summaryPills.allegiance}</span>
            </div>
            <div style="margin-top:6px; font-family:var(--font-serif); font-size:11px; line-height:1.4; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.06); padding-top:6px;">
              <strong>Session 1 Hook:</strong> ${b.campaignHook}
            </div>
          </div>
        </div>
      `;
    }

    /* 3.2 Chapter Navigation Buttons */
    renderChapterNav() {
      if (!this.chapterNavButtons) return;

      this.chapterNavButtons.innerHTML = this.data.chapters.map((ch, idx) => `
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

    /* 3.3 Sensory Anchor Reliquary */
    renderSensoryAnchors() {
      if (!this.anchorList) return;

      this.anchorList.innerHTML = this.data.anchors.map(a => `
        <div class="anchor-item" data-anchor-id="${a.id}" tabindex="0" role="button" title="Inspect ${a.title}">
          <div class="anchor-icon">${a.icon}</div>
          <div class="anchor-meta">
            <div class="anchor-title">${a.title}</div>
            <div class="anchor-sub">${a.subtitle}</div>
          </div>
        </div>
      `).join("");

      this.anchorList.querySelectorAll('.anchor-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-anchor-id');
          this.inspectAnchor(id);
        });
      });
    }

    inspectAnchor(anchorId) {
      const anchor = this.data.anchors.find(a => a.id === anchorId);
      if (!anchor || !this.artifactModal) return;

      if (this.artifactModalTitle) {
        this.artifactModalTitle.textContent = `INSPECTING // ${anchor.title.toUpperCase()}`;
      }
      if (this.artifactModalBody) {
        this.artifactModalBody.innerHTML = `
          ${anchor.detailMarkup}
          <div style="font-size:11px; color:var(--text-dim); text-align:center; margin-top:12px; letter-spacing:0.06em;">
            ${anchor.caption}
          </div>
        `;
      }

      this.artifactModal.classList.remove('hidden');
      this.artifactModal.setAttribute('aria-hidden', 'false');
    }

    /* 3.4 Subject 088 Narrative Dossier Drawer */
    renderLancerSpecs() {
      if (!this.lancerDrawerContent) return;
      const d = this.data.dossierArchive;

      let triadHtml = d.harmonicTriad.map(t => `
        <div class="dossier-bio-card">
          <div class="dossier-bio-title" style="color:var(--theme-accent); font-family:var(--font-mono);">${t.strata}</div>
          <div class="dossier-bio-desc">${t.context}</div>
        </div>
      `).join("");

      let compendiumHtml = Object.entries(this.data.compendium).map(([term, desc]) => `
        <div style="padding:6px 8px; background:var(--bg-surface-inset); border-left:2px solid var(--color-psycho); margin-bottom:6px; font-size:11px;">
          <strong style="color:var(--color-psycho); font-family:var(--font-mono);">${term}:</strong>
          <span style="font-family:var(--font-serif); color:var(--text-muted);">${desc}</span>
        </div>
      `).join("");

      this.lancerDrawerContent.innerHTML = `
        <div>
          <div class="dossier-section-title">SUBJECT FILE // SEC-088</div>
          <div style="font-size:13px; font-weight:700; color:#fff; margin-bottom:2px;">${d.identity.designation}</div>
          <div style="font-size:10px; color:var(--theme-accent); margin-bottom:6px;">${d.identity.origin}</div>
          <div style="font-size:10px; color:var(--text-muted); line-height:1.4;">${d.identity.status}</div>
        </div>

        <div>
          <div class="dossier-section-title">TRIPARTITE ANOMALY (HARMONIC NODES)</div>
          ${triadHtml}
        </div>

        <div>
          <div class="dossier-section-title">PROTOTYPE UNIT-03 SPECS</div>
          <div class="dossier-bio-card">
            <div style="font-size:10px; font-weight:700; color:var(--color-psycho); margin-bottom:4px;">CHASSIS: ${d.prototypeSpecs.chassis}</div>
            <div style="font-size:11px; font-family:var(--font-serif); color:var(--text-prose-secondary); line-height:1.45; margin-bottom:4px;">
              <strong>Cockpit:</strong> ${d.prototypeSpecs.liner}
            </div>
            <div style="font-size:11px; font-family:var(--font-serif); color:var(--text-muted); line-height:1.45; margin-bottom:4px;">
              <strong>Avionics:</strong> ${d.prototypeSpecs.weaponry}
            </div>
            <div style="font-size:10px; color:var(--color-beta); font-family:var(--font-mono); margin-top:6px;">
              ⚠ WARNING: ${d.prototypeSpecs.dangerProfile}
            </div>
          </div>
        </div>

        <div>
          <div class="dossier-section-title">CAMPAIGN LORE GLOSSARY</div>
          ${compendiumHtml}
        </div>
      `;
    }

    /* 3.5 Vist Foundation Modal Content */
    renderVistModalContent() {
      if (!this.vistModalContent) return;

      this.vistModalContent.innerHTML = `
        <div class="wax-seal-wrapper" aria-hidden="true">
          <div class="wax-seal">
            <span>VIST</span>
          </div>
        </div>

        <div class="letter-meta-block">
          <span>ORIGIN: L1 RECEPTACLE // CIPHER ALPHA-ZERO</span>
          <span>TARGET: SENIOR DIRECTOR VINCENT STERLING (RESIDENCE PRIVATE TERMINAL)</span>
          <span>CLASSIFICATION: HIGH TREASON // EXPENDABLE PILOT RETRIEVAL ORDER</span>
        </div>

        <div class="letter-body-prose">
          <p><strong>DIRECTOR STERLING:</strong></p>
          <p>
            For three years, the Vist Foundation has maintained deliberate oversight of your division's ledger. We are fully aware that <em>Lt. Julian Ross</em> was not incinerated in the Sunda sector, nor was Prototype Unit-03 vaporized in combat.
          </p>
          <p>
            We know what you carried home to Von Braun City in your private shuttle. We know whose face sits at your breakfast table in the 1st Ring.
          </p>
          <p class="letter-callout">
            The pilot is to report to <strong>Berth 44, Outer Docks, Von Braun Industrial Perimeter</strong> before 2400 hours tonight. She is to take controls of Unit-03 and depart for Lagrange Point 1.
          </p>
          <p>
            Should she fail to report, the unedited black-box telemetry—alongside DNA markers proving the living presence of Julian Ross—will be delivered simultaneously to the Anaheim Board of Directors and the UNION Military Police.
          </p>
          <p class="letter-signoff">
            <em>The bill is now due, Vincent. Keep your house safe.</em>
          </p>
        </div>
      `;
    }

    /* 3.6 Load Chapter & Synchronize Cockpit State */
    loadChapter(index) {
      if (index < 0 || index >= this.data.chapters.length) return;
      this.currentChapterIndex = index;
      const chapter = this.data.chapters[index];

      // Update Header & Nav State
      document.querySelectorAll('.chapter-tab').forEach((tab, idx) => {
        tab.classList.toggle('active', idx === index);
      });

      if (this.chapterNum) this.chapterNum.textContent = chapter.number;
      if (this.chapterYear) this.chapterYear.textContent = chapter.era;
      if (this.chapterReadTime) this.chapterReadTime.textContent = `EST. READ: ${chapter.readTime}`;
      if (this.chapterTitle) this.chapterTitle.textContent = chapter.title;
      if (this.chapterTrackTitle) this.chapterTrackTitle.textContent = chapter.track.title;

      // Update Harmonic Theme
      this.setHarmonicTheme(chapter.harmonicKey);

      // Render Prose with Redaction Block
      if (this.proseContent) {
        let paragraphsHtml = chapter.paragraphs.map(p => {
          if (p === '***') {
            return `<div style="text-align:center; color:var(--theme-accent); font-size:16px; margin:16px 0;">∿ ∿ ∿</div>`;
          }
          return `<p>${p}</p>`;
        }).join("");

        let redactionHtml = "";
        if (chapter.redaction) {
          const r = chapter.redaction;
          redactionHtml = `
            <div class="redaction-bar" id="${r.id}" data-redact-id="${r.id}" tabindex="0" role="button" title="Click to declassify classified intelligence">
              <div class="redaction-header">
                <span>CLASSIFIED // ${r.label}</span>
                <span class="redaction-status">CLICK TO DECLASSIFY</span>
              </div>
              <div class="redaction-block">████████████████████████████████████████████████████████████</div>
              <div class="redaction-gm-note">
                <strong>${r.gmNote}</strong>
              </div>
            </div>
          `;
        }

        this.proseContent.innerHTML = paragraphsHtml + redactionHtml;
        this.bindRedactionEvents();
      }

      // Update Pager Status
      if (this.readingProgress) {
        this.readingProgress.textContent = `LOG ${index + 1} OF ${this.data.chapters.length}`;
      }
      if (this.prevChapterBtn) {
        this.prevChapterBtn.disabled = index === 0;
        this.prevChapterBtn.style.opacity = index === 0 ? "0.3" : "1";
      }
      if (this.nextChapterBtn) {
        this.nextChapterBtn.disabled = index === this.data.chapters.length - 1;
        this.nextChapterBtn.style.opacity = index === this.data.chapters.length - 1 ? "0.3" : "1";
      }

      // Update Marginalia & Subconscious Echo
      this.updateMarginalia(chapter.id);

      // Trigger Gapless Track Switch
      this.audio.playTrack(chapter.track.youtubeId);
      if (this.currentTrackName) {
        this.currentTrackName.textContent = `TRACK: ${chapter.track.title}`;
      }

      // Scroll smoothly to top of prose viewport
      const viewport = document.getElementById('prose-viewport');
      if (viewport && index > 0) {
        viewport.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (this.consoleStream) {
        this.consoleStream.textContent = `SECTOR SYNC: [${chapter.number}] // BGM: ${chapter.track.artist} // NOMINAL`;
      }
    }

    setHarmonicTheme(harmonicKey) {
      document.body.className = `cockpit-theme-ambient theme-${harmonicKey}`;
      this.scope.setHarmonic(harmonicKey);

      // Trigger screen tear animation
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

      // Update diagnostic metrics per harmonic
      if (harmonicKey === "alpha") {
        if (this.scopeFreq) this.scopeFreq.textContent = "432.8 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "96.4%";
        if (this.scopeStress) {
          this.scopeStress.textContent = "14% [STABLE]";
          this.scopeStress.className = "metric-item stress-nominal";
        }
      } else if (harmonicKey === "beta") {
        if (this.scopeFreq) this.scopeFreq.textContent = "684.2 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "88.1%";
        if (this.scopeStress) {
          this.scopeStress.textContent = "64% [OVERCHARGE RISK]";
          this.scopeStress.className = "metric-item stress-critical";
        }
      } else {
        if (this.scopeFreq) this.scopeFreq.textContent = "528.0 Hz";
        if (this.scopeSync) this.scopeSync.textContent = "99.8%";
        if (this.scopeStress) {
          this.scopeStress.textContent = "38% [DISSOCIATING]";
          this.scopeStress.className = "metric-item stress-elevated";
        }
      }
    }

    updateMarginalia(chapterId) {
      const notes = this.data.marginalia[chapterId] || [];
      if (this.marginAnnotations) {
        this.marginAnnotations.innerHTML = notes.map(n => `
          <div class="annotation-card" style="border-left-color: var(--color-${n.strata});">
            <strong style="color: var(--color-${n.strata});">HARMONIC ${n.strata.toUpperCase()}:</strong>
            ${n.note}
          </div>
        `).join("");
      }

      // Pick the primary echo for the subconscious stream box
      if (this.subconsciousText && notes.length > 0) {
        this.subconsciousText.textContent = `“${notes[0].note}”`;
      }
    }

    /* 3.7 Single-Click Declassify Handler */
    bindRedactionEvents() {
      const chapter = this.data.chapters[this.currentChapterIndex];
      if (!chapter || !chapter.redaction) return;

      const bar = document.getElementById(chapter.redaction.id);
      if (!bar) return;

      bar.addEventListener('click', () => {
        if (bar.classList.contains('declassified')) return;

        bar.classList.add('declassifying');
        const block = bar.querySelector('.redaction-block');
        const status = bar.querySelector('.redaction-status');

        let steps = 0;
        const glyphs = '█▓▒░#%&*01';
        const targetText = chapter.redaction.blackoutText;

        const interval = setInterval(() => {
          steps++;
          if (steps < 8) {
            block.textContent = [...targetText].map(c => (c === ' ' ? ' ' : glyphs[Math.floor(Math.random() * glyphs.length)])).join('');
          } else {
            clearInterval(interval);
            block.textContent = targetText;
            bar.classList.remove('declassifying');
            bar.classList.add('declassified');
            if (status) status.textContent = "DECLASSIFIED // ACCESS GRANTED";

            // Trigger visualizer spike
            const scopeBox = document.querySelector('.canvas-wrapper');
            if (scopeBox) {
              scopeBox.classList.remove('spike');
              void scopeBox.offsetWidth;
              scopeBox.classList.add('spike');
            }
          }
        }, 35);
      });
    }

    /* 3.8 Global Events & Modal Bindings */
    bindEvents() {
      // Big Ignition Gate
      if (this.gateIgniteBtn && this.bigPlayGate) {
        this.gateIgniteBtn.addEventListener('click', () => {
          this.audio.startPlayback();
          if (this.audioToggleBtn) this.audioToggleBtn.classList.add('active');
          if (this.audioLabel) this.audioLabel.textContent = "ACTIVE (LOOP)";

          this.bigPlayGate.style.opacity = '0';
          setTimeout(() => {
            this.bigPlayGate.style.display = 'none';
          }, 400);
        });
      }

      // Top Audio Toggle
      if (this.audioToggleBtn) {
        this.audioToggleBtn.addEventListener('click', () => {
          const isPlaying = this.audio.toggle();
          this.audioToggleBtn.classList.toggle('active', isPlaying);
          if (this.audioLabel) {
            this.audioLabel.textContent = isPlaying ? "ACTIVE (LOOP)" : "MUTED";
          }
        });
      }

      // LANCER Drawer Toggle
      if (this.toggleDossierBtn && this.lancerDrawer) {
        this.toggleDossierBtn.addEventListener('click', () => this.toggleDossier(true));
      }
      if (this.closeDossierBtn && this.lancerDrawer) {
        this.closeDossierBtn.addEventListener('click', () => this.toggleDossier(false));
      }

      // Pager Buttons
      if (this.prevChapterBtn) {
        this.prevChapterBtn.addEventListener('click', () => {
          if (this.currentChapterIndex > 0) this.loadChapter(this.currentChapterIndex - 1);
        });
      }
      if (this.nextChapterBtn) {
        this.nextChapterBtn.addEventListener('click', () => {
          if (this.currentChapterIndex < this.data.chapters.length - 1) {
            this.loadChapter(this.currentChapterIndex + 1);
          }
        });
      }

      // Close Modals
      if (this.closeArtifactModalBtn && this.artifactModal) {
        this.closeArtifactModalBtn.addEventListener('click', () => {
          this.artifactModal.classList.add('hidden');
          this.artifactModal.setAttribute('aria-hidden', 'true');
        });
      }

      if (this.closeVistModalBtn && this.vistModal) {
        this.closeVistModalBtn.addEventListener('click', () => {
          this.vistModal.classList.add('hidden');
          this.vistModal.setAttribute('aria-hidden', 'true');
        });
      }

      if (this.dismissVistModalBtn && this.vistModal) {
        this.dismissVistModalBtn.addEventListener('click', () => {
          this.vistModal.classList.add('hidden');
          this.vistModal.setAttribute('aria-hidden', 'true');
        });
      }

      // Berth 44 Launch Key Slotting
      if (this.slotKeyBtn) {
        this.slotKeyBtn.addEventListener('click', () => {
          this.slotKeyBtn.innerHTML = "<span>✓ TELEMETRY ACCEPTED // REACTOR ONLINE</span>";
          this.slotKeyBtn.style.background = "rgba(78, 240, 196, 0.2)";
          this.slotKeyBtn.style.borderColor = "var(--color-psycho)";
          this.slotKeyBtn.style.color = "var(--color-psycho)";

          if (this.consoleStream) {
            this.consoleStream.textContent = "BERTH 44 GANTRY RELEASED // LAUNCH TUBE CLEAR // UNIT-03 DEPARTING FOR L1";
          }
        });
      }

      // Escape key to dismiss open modals/drawers
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (this.lancerDrawer && this.lancerDrawer.classList.contains('open')) {
            this.toggleDossier(false);
          }
          if (this.artifactModal && !this.artifactModal.classList.contains('hidden')) {
            this.artifactModal.classList.add('hidden');
            this.artifactModal.setAttribute('aria-hidden', 'true');
          }
          if (this.vistModal && !this.vistModal.classList.contains('hidden')) {
            this.vistModal.classList.add('hidden');
            this.vistModal.setAttribute('aria-hidden', 'true');
          }
        }
      });
    }

    toggleDossier(open) {
      if (!this.lancerDrawer) return;
      this.lancerDrawer.classList.toggle('open', open);
      this.lancerDrawer.setAttribute('aria-hidden', !open);
      if (this.toggleDossierBtn) {
        this.toggleDossierBtn.setAttribute('aria-expanded', open);
      }
    }

    /* 3.9 Scroll Focus Monitor (Dimmable Cockpit Chrome) */
    initScrollFocus() {
      let scrollTimer = null;
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 180;
        if (scrolled) {
          document.body.classList.add('reading-active');
        } else {
          document.body.classList.remove('reading-active');
        }

        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          // If reading stopped for 1.8s, keep dimmed unless hovering
        }, 1800);
      }, { passive: true });
    }

    /* 3.10 Clocks & Tape Reel Counter */
    startClocks() {
      const clockEl = document.getElementById('mission-clock');
      let tapeSeconds = 0;

      setInterval(() => {
        tapeSeconds += 0.1;
        const mins = Math.floor(tapeSeconds / 60).toString().padStart(2, '0');
        const secs = (tapeSeconds % 60).toFixed(1).padStart(4, '0');

        if (this.tapeTime) {
          this.tapeTime.textContent = `${mins}:${secs}`;
        }

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

  // Initialize and expose to window for immersive.js hooks
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new DossierApp();
  });

})();