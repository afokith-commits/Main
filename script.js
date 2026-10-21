/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: MASTER APPLICATION CONTROLLER
 * Orchestrates: Telemetry Ingestion, Dynamic Rails, Decrypt V2, Audio, Oscilloscope
 * Guardrail: Verbatim canon integrity. Lore only; zero RPG crunch mechanics.
 * ============================================================================
 */

import {
  CHAPTER_ARCHIVE,
  HARMONIC_PROFILES,
  SENSORY_ANCHORS,
  MARGINALIA_ARCHIVE,
  REDACTION_TARGETS,
  calculateReadingMetrics,
  getChapterBundle
} from './data.js';

import {
  DecryptEngineV2,
  ReadingFocusController,
  initReadingFocusMode,
  initTactileInteractions,
  sound
} from './immersive.js';

class CockpitAppController {
  constructor() {
    this.currentChapterId = 1;
    this.decryptEngine = null;
    this.focusController = null;
    this.oscilloscope = null;

    // Mission clock state
    this.clockInterval = null;
    this.tickerInterval = null;

    // Cache core DOM references
    this.dom = {
      // Header & HUD Telemetry
      chapterNum: document.getElementById('chapter-num') || document.getElementById('chapter-number'),
      chapterYear: document.getElementById('chapter-year'),
      chapterLocation: document.getElementById('chapter-location'),
      chapterTitle: document.getElementById('chapter-title'),
      chapterReadTime: document.getElementById('chapter-read-time'),
      dominantHarmonicChip: document.getElementById('dominant-harmonic-chip'),
      missionClock: document.getElementById('mission-clock'),
      audioToggleBtn: document.getElementById('audio-toggle-btn'),
      audioLabel: document.getElementById('audio-label'),
      consoleStream: document.getElementById('console-stream') || document.getElementById('footer-ticker'),

      // Scope Metrics
      scopeFreq: document.getElementById('scope-freq'),
      scopeSync: document.getElementById('scope-sync'),
      scopeStress: document.getElementById('scope-stress'),
      tapeTime: document.getElementById('tape-time'),
      currentTrackName: document.getElementById('current-track-name'),
      waveformCanvas: document.getElementById('waveform-canvas'),

      // GM Briefing
      gmBriefing: document.getElementById('gm-briefing') || document.getElementById('gm-briefing-box'),
      gmBriefPill: document.getElementById('gm-brief-pill'),
      gmBriefClose: document.getElementById('gm-brief-close'),
      gmBriefContent: document.getElementById('gm-briefing-content'),

      // Navigation
      chapterNavButtons: document.getElementById('chapter-nav-buttons'),
      prevChapterBtn: document.getElementById('prev-chapter-btn'),
      nextChapterBtn: document.getElementById('next-chapter-btn'),
      readingProgress: document.getElementById('reading-progress'),

      // Content Rails
      proseViewport: document.getElementById('prose-viewport') || document.getElementById('prose-container'),
      proseContent: document.getElementById('prose-content') || document.getElementById('prose-body'),
      anchorList: document.getElementById('anchor-list'),
      marginAnnotations: document.getElementById('margin-annotations'),
      subconsciousText: document.getElementById('subconscious-text'),

      // Decrypt Action Controls
      decryptStatus: document.getElementById('decrypt-status'),
      instantDecryptBtn: document.getElementById('instant-decrypt-btn'),

      // Modals & Drawers
      toggleDossierBtn: document.getElementById('toggle-dossier-btn'),
      closeDossierBtn: document.getElementById('close-dossier-btn'),
      lancerDrawer: document.getElementById('lancer-drawer'),
      lancerDrawerContent: document.getElementById('lancer-drawer-content'),

      artifactModal: document.getElementById('artifact-modal'),
      closeArtifactModalBtn: document.getElementById('close-artifact-modal-btn'),
      artifactModalTitle: document.getElementById('artifact-modal-title'),
      artifactModalBody: document.getElementById('artifact-modal-body'),

      vistModal: document.getElementById('vist-modal'),
      closeVistModalBtn: document.getElementById('close-vist-modal-btn'),
      dismissVistModalBtn: document.getElementById('dismiss-vist-modal-btn'),
      slotKeyBtn: document.getElementById('slot-key-btn'),
      vistModalContent: document.getElementById('vist-modal-content'),

      bigPlayGate: document.getElementById('big-play-gate'),
      gateIgniteBtn: document.getElementById('gate-ignite-btn')
    };

    this.init();
  }

  init() {
    // 1. Initialize Sub-Engines
    this.decryptEngine = new DecryptEngineV2();
    this.focusController = initReadingFocusMode();
    initTactileInteractions();

    // 2. Setup Peripheral Visualizers & Audio
    this.initOscilloscope();
    this.initGMBriefing();
    this.initDossierDrawer();
    this.initArtifactModal();
    this.initVistModal();
    this.initIgnitionGate();
    this.initAudioControls();

    // 3. Bind Keyboard Hotkeys & Listeners
    this.bindKeyboardShortcuts();
    this.listenToSystemEvents();
    this.startMissionClocks();

    // 4. Render Chapter Navigation Tabs
    this.renderChapterNav();

    // 5. Hydrate Initial Chapter (Chapter 1 Default)
    this.loadChapter(1);
  }

  /* ==========================================================================
     CHAPTER HYDRATION PIPELINE (ATOMIC & CANONICAL)
     ========================================================================== */
  loadChapter(chapterId) {
    const bundle = getChapterBundle(chapterId);
    if (!bundle) return;

    this.currentChapterId = chapterId;

    // Stage 1: Teardown running animations
    this.decryptEngine.cancelAll();

    // Stage 2: Harmonic Shift & CSS Custom Variables
    document.body.dataset.harmonic = bundle.harmonic;
    document.body.classList.remove('theme-alpha', 'theme-beta', 'theme-gamma');
    document.body.classList.add(`theme-${bundle.harmonic}`);

    // Stage 3: Telemetry & Header Metadata Update
    this.updateTelemetryHeaders(bundle);

    // Stage 4: Peripheral Columns Hydration (Sensory Anchors & Marginalia)
    this.renderSensoryAnchors(bundle.anchors);
    this.renderMarginalia(bundle.marginalia);
    this.updateSubconsciousEcho(bundle.harmonic);

    // Stage 5: Prose DOM Injection & Decrypt Engine Mounting
    this.renderProseContent(bundle);

    // Stage 6: Diegetic Feedback
    sound.playHarmonicChord(bundle.harmonic);
    if (this.oscilloscope) {
      this.oscilloscope.setHarmonic(bundle.harmonicProfile);
    }

    // Scroll reader smoothly to top of narrative stage
    if (this.dom.proseViewport) {
      this.dom.proseViewport.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.updateNavigationControls();
    this.logConsole(`SECTOR LOADED // ${bundle.index}: ${bundle.title} // HARMONIC ${bundle.harmonic.toUpperCase()} ATTUNED`);
  }

  updateTelemetryHeaders(bundle) {
    const { wordCount, estMinutes } = calculateReadingMetrics(bundle.paragraphs);

    if (this.dom.chapterNum) this.dom.chapterNum.textContent = `CHAPTER ${bundle.index}`;
    if (this.dom.chapterYear) this.dom.chapterYear.textContent = bundle.year;
    if (this.dom.chapterLocation) this.dom.chapterLocation.textContent = bundle.location;
    if (this.dom.chapterTitle) this.dom.chapterTitle.textContent = bundle.title;
    if (this.dom.chapterReadTime) this.dom.chapterReadTime.textContent = `EST. READ: ${estMinutes} MIN (${wordCount} WORDS)`;

    const profile = bundle.harmonicProfile;
    if (this.dom.dominantHarmonicChip) {
      this.dom.dominantHarmonicChip.textContent = `DOMINANT: ${profile.name}`;
    }

    // Update Oscilloscope Scope Labels based on active identity
    const metricsMap = {
      alpha: { freq: '432.8 Hz', sync: '96.4%', stress: '14% [STABLE]', track: 'Sunda Trench Hydro-Acoustics' },
      beta:  { freq: '684.2 Hz', sync: '88.1%', stress: '64% [OVERCHARGE]', track: 'Anaheim Black-Ops Carrier' },
      gamma: { freq: '528.0 Hz', sync: '99.8%', stress: '38% [DISSOCIATING]', track: 'Axis Silicate Resonance' }
    };

    const cur = metricsMap[bundle.harmonic] || metricsMap.alpha;
    if (this.dom.scopeFreq) this.dom.scopeFreq.textContent = cur.freq;
    if (this.dom.scopeSync) this.dom.scopeSync.textContent = cur.sync;
    if (this.dom.scopeStress) this.dom.scopeStress.textContent = cur.stress;
    if (this.dom.currentTrackName) this.dom.currentTrackName.textContent = `TRACK: ${cur.track}`;
  }

  renderSensoryAnchors(anchors) {
    if (!this.dom.anchorList) return;
    this.dom.anchorList.innerHTML = '';

    anchors.forEach(anchor => {
      const card = document.createElement('div');
      card.className = 'anchor-card';
      card.tabIndex = 0;
      card.role = 'button';
      card.setAttribute('aria-label', `Inspect sensory anchor: ${anchor.name}`);
      card.dataset.artifactId = anchor.id;

      card.innerHTML = `
        <div class="anchor-code">${anchor.code}</div>
        <div class="anchor-name">${anchor.name}</div>
        <div class="anchor-tag">${anchor.sensoryModality}</div>
        <div class="anchor-desc">${anchor.cueText}</div>
      `;

      card.addEventListener('click', () => this.openArtifactModal(anchor));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openArtifactModal(anchor);
        }
      });

      this.dom.anchorList.appendChild(card);
    });
  }

  renderMarginalia(notes) {
    if (!this.dom.marginAnnotations) return;
    this.dom.marginAnnotations.innerHTML = '';

    if (notes.length === 0) {
      this.dom.marginAnnotations.innerHTML = `
        <div class="marginalia-card">
          <span class="margin-source">COCKPIT ARCHIVE // SEC-088</span>
          <h4 class="margin-label">NO ACTIVE ANOMALIES</h4>
          <p class="margin-body">Telemetry stream nominal for this operational coordinate.</p>
        </div>
      `;
      return;
    }

    notes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'marginalia-card';
      card.innerHTML = `
        <span class="margin-source">${note.source}</span>
        <h4 class="margin-label">${note.header}</h4>
        <p class="margin-body">${note.quote}</p>
      `;
      this.dom.marginAnnotations.appendChild(card);
    });
  }

  updateSubconsciousEcho(harmonic) {
    if (!this.dom.subconsciousText) return;

    const echoes = {
      alpha: '"The saltwater had gotten into the manifold before we even cleared the reef..."',
      beta: '"Julian had left his grease pencil on the console. The numbers were all negative offsets..."',
      gamma: '"Machines don\'t remember being drowned, Eria. Only the pilots do."'
    };

    this.dom.subconsciousText.textContent = echoes[harmonic] || echoes.alpha;
  }

  renderProseContent(bundle) {
    const container = this.dom.proseContent;
    if (!container) return;
    container.innerHTML = '';

    // Register active redaction targets for this chapter
    this.decryptEngine.setRedactionTargets(bundle.redactions);

    bundle.paragraphs.forEach((paragraphText, idx) => {
      if (paragraphText === '***') {
        const breakEl = document.createElement('div');
        breakEl.className = 'scene-break';
        breakEl.setAttribute('aria-hidden', 'true');
        breakEl.textContent = '∿ ∿ ∿';
        container.appendChild(breakEl);
        return;
      }

      const p = document.createElement('p');
      p.className = 'prose-paragraph';
      if (idx === 0) p.classList.add('first-paragraph');
      p.textContent = paragraphText;

      container.appendChild(p);

      // Mount to Decrypt v2
      this.decryptEngine.mountParagraph(p);
    });

    if (this.dom.decryptStatus) {
      this.dom.decryptStatus.textContent = 'STREAM: DECRYPTING TELEMETRY...';
    }

    this.decryptEngine.updateReadingProgress(0);
  }

  /* ==========================================================================
     CHAPTER NAVIGATION & UI CONTROLS
     ========================================================================== */
  renderChapterNav() {
    if (!this.dom.chapterNavButtons) return;
    this.dom.chapterNavButtons.innerHTML = '';

    CHAPTER_ARCHIVE.forEach(chapter => {
      const btn = document.createElement('button');
      btn.className = `chapter-tab ${chapter.id === this.currentChapterId ? 'active' : ''}`;
      btn.type = 'button';
      btn.dataset.chapterId = chapter.id;

      btn.innerHTML = `
        <span class="chapter-tab-num">${chapter.index}</span>
        <span class="chapter-tab-title">${chapter.title}</span>
      `;

      btn.addEventListener('click', () => {
        sound.playTone(620, 0.05, 'triangle', 0.02);
        this.loadChapter(chapter.id);
      });

      this.dom.chapterNavButtons.appendChild(btn);
    });

    // Wire Next & Previous Pagers
    if (this.dom.prevChapterBtn) {
      this.dom.prevChapterBtn.addEventListener('click', () => {
        if (this.currentChapterId > 1) {
          sound.playTone(480, 0.06, 'triangle', 0.02);
          this.loadChapter(this.currentChapterId - 1);
        }
      });
    }

    if (this.dom.nextChapterBtn) {
      this.dom.nextChapterBtn.addEventListener('click', () => {
        if (this.currentChapterId < CHAPTER_ARCHIVE.length) {
          sound.playTone(560, 0.06, 'triangle', 0.02);
          this.loadChapter(this.currentChapterId + 1);
        }
      });
    }

    // Instant Decrypt Button (Hotkey 'R' or Click)
    if (this.dom.instantDecryptBtn) {
      this.dom.instantDecryptBtn.addEventListener('click', () => {
        this.decryptEngine.resolveEntireChapter(this.dom.proseViewport);
        if (this.dom.decryptStatus) {
          this.dom.decryptStatus.textContent = 'STREAM: ALL TELEMETRY RESOLVED';
        }
      });
    }
  }

  updateNavigationControls() {
    // Update Chapter Tabs Active State
    if (this.dom.chapterNavButtons) {
      const tabs = this.dom.chapterNavButtons.querySelectorAll('.chapter-tab');
      tabs.forEach(tab => {
        const id = parseInt(tab.dataset.chapterId, 10);
        tab.classList.toggle('active', id === this.currentChapterId);
      });
    }

    // Pager states
    if (this.dom.prevChapterBtn) {
      this.dom.prevChapterBtn.disabled = this.currentChapterId === 1;
    }
    if (this.dom.nextChapterBtn) {
      this.dom.nextChapterBtn.disabled = this.currentChapterId === CHAPTER_ARCHIVE.length;
    }
    if (this.dom.readingProgress) {
      this.dom.readingProgress.textContent = `LOG ${this.currentChapterId} OF ${CHAPTER_ARCHIVE.length}`;
    }
  }

  /* ==========================================================================
     GM BRIEFING COLLAPSIBLE CONTROLLER
     ========================================================================== */
  initGMBriefing() {
    const isDismissed = localStorage.getItem('pm_briefing_seen') === 'true';

    if (this.dom.gmBriefing && isDismissed) {
      this.dom.gmBriefing.classList.add('collapsed');
      if (this.dom.gmBriefing.removeAttribute) {
        this.dom.gmBriefing.removeAttribute('open');
      }
      if (this.dom.gmBriefPill) this.dom.gmBriefPill.classList.remove('hidden');
    }

    if (this.dom.gmBriefPill) {
      this.dom.gmBriefPill.addEventListener('click', () => {
        sound.playTone(720, 0.04, 'sine', 0.02);
        if (this.dom.gmBriefing) {
          this.dom.gmBriefing.classList.toggle('collapsed');
        }
      });
    }

    if (this.dom.gmBriefClose) {
      this.dom.gmBriefClose.addEventListener('click', () => {
        sound.playTone(340, 0.05, 'triangle', 0.02);
        if (this.dom.gmBriefing) {
          this.dom.gmBriefing.classList.add('collapsed');
          localStorage.setItem('pm_briefing_seen', 'true');
        }
        if (this.dom.gmBriefPill) this.dom.gmBriefPill.classList.remove('hidden');
      });
    }
  }

  /* ==========================================================================
     MODALS & SLIDE-OUT DOSSIERS
     ========================================================================== */
  initDossierDrawer() {
    if (this.dom.toggleDossierBtn && this.dom.lancerDrawer) {
      this.dom.toggleDossierBtn.addEventListener('click', () => {
        const isOpen = this.dom.lancerDrawer.classList.contains('open');
        this.toggleDossier(!isOpen);
      });
    }

    if (this.dom.closeDossierBtn && this.dom.lancerDrawer) {
      this.dom.closeDossierBtn.addEventListener('click', () => {
        this.toggleDossier(false);
      });
    }
  }

  toggleDossier(open) {
    if (!this.dom.lancerDrawer) return;
    this.dom.lancerDrawer.classList.toggle('open', open);
    this.dom.lancerDrawer.setAttribute('aria-hidden', String(!open));
    if (this.dom.toggleDossierBtn) {
      this.dom.toggleDossierBtn.setAttribute('aria-expanded', String(open));
    }
    sound.playTone(open ? 640 : 320, 0.08, 'triangle', 0.03);
  }

  initArtifactModal() {
    if (this.dom.closeArtifactModalBtn && this.dom.artifactModal) {
      this.dom.closeArtifactModalBtn.addEventListener('click', () => {
        this.closeArtifactModal();
      });
    }

    if (this.dom.artifactModal) {
      this.dom.artifactModal.addEventListener('click', (e) => {
        if (e.target === this.dom.artifactModal) this.closeArtifactModal();
      });
    }
  }

  openArtifactModal(anchor) {
    if (!this.dom.artifactModal) return;

    if (this.dom.artifactModalTitle) {
      this.dom.artifactModalTitle.textContent = `${anchor.code} // ${anchor.name}`;
    }

    if (this.dom.artifactModalBody) {
      this.dom.artifactModalBody.innerHTML = `
        <div class="modal-artifact-detail">
          <div class="modal-tag-badge">${anchor.sensoryModality}</div>
          <p class="modal-cue"><strong>Sensory Cue:</strong> "${anchor.cueText}"</p>
          <hr class="modal-divider">
          <p class="modal-desc">${anchor.contextDescription}</p>
          <div class="modal-unlock-note">Discovered in Chapter ${anchor.chapterUnlock} // Identity Tether</div>
        </div>
      `;
    }

    this.dom.artifactModal.classList.remove('hidden');
    this.dom.artifactModal.setAttribute('aria-hidden', 'false');
    sound.playTone(540, 0.08, 'triangle', 0.03);
  }

  closeArtifactModal() {
    if (!this.dom.artifactModal) return;
    this.dom.artifactModal.classList.add('hidden');
    this.dom.artifactModal.setAttribute('aria-hidden', 'true');
    sound.playTone(320, 0.05, 'triangle', 0.02);
  }

  initVistModal() {
    const closeVist = () => {
      if (this.dom.vistModal) {
        this.dom.vistModal.classList.add('hidden');
        this.dom.vistModal.setAttribute('aria-hidden', 'true');
      }
      sound.playTone(220, 0.08, 'triangle', 0.02);
    };

    if (this.dom.closeVistModalBtn) this.dom.closeVistModalBtn.addEventListener('click', closeVist);
    if (this.dom.dismissVistModalBtn) this.dom.dismissVistModalBtn.addEventListener('click', closeVist);

    if (this.dom.slotKeyBtn) {
      this.dom.slotKeyBtn.addEventListener('click', () => {
        // Diegetic Key Engagement
        sound.playTone(880, 0.2, 'sawtooth', 0.04);
        this.logConsole('BERTH 44 LAUNCH TUBE PRIMED // CARRIER GARENCIERES INBOUND');
        closeVist();
      });
    }
  }

  openVistModal() {
    if (this.currentChapterId !== 5) {
      sound.playTone(180, 0.2, 'sawtooth', 0.04);
      this.logConsole('ACCESS DENIED: CIPHER KEY LOCKED UNTIL CHAPTER 5');
      return;
    }

    if (!this.dom.vistModal) return;

    if (this.dom.vistModalContent) {
      this.dom.vistModalContent.innerHTML = `
        <div class="vist-letter-content">
          <div class="vist-watermark">VIST FOUNDATION // DISCRETIONARY CIPHER</div>
          <p class="vist-body">
            "The pilot was not incinerated. The Foundation has kept your silence for three years, Director Sterling. The bill is now due. The pilot is to report to Berth 44, Outer Docks, Von Braun Industrial Perimeter, before 2400 hours. Come alone, or the unedited black-box telemetry will be delivered directly to the Anaheim Board of Directors and the Federation Military Police."
          </p>
          <div class="vist-signature">
            <span>SEAL: PURPLE-BLACK SYNTHETIC WAX</span>
            <span>CREST: BEAST RAMPANT BEFORE SEGMENTED SUN</span>
          </div>
        </div>
      `;
    }

    this.dom.vistModal.classList.remove('hidden');
    this.dom.vistModal.setAttribute('aria-hidden', 'false');
    sound.playTone(440, 0.12, 'triangle', 0.03);
  }

  initIgnitionGate() {
    if (this.dom.gateIgniteBtn && this.dom.bigPlayGate) {
      this.dom.gateIgniteBtn.addEventListener('click', () => {
        sound.ensureContext();
        sound.playHarmonicChord('alpha');

        this.dom.bigPlayGate.style.opacity = '0';
        setTimeout(() => {
          this.dom.bigPlayGate.style.display = 'none';
        }, 350);

        this.logConsole('COCKPIT RELAY INITIALIZED // SUBJECT 088 SYNCHRONIZED');
      });
    }
  }

  initAudioControls() {
    if (this.dom.audioToggleBtn) {
      this.dom.audioToggleBtn.addEventListener('click', () => {
        const isMuted = sound.toggleMute();
        this.dom.audioToggleBtn.classList.toggle('active', !isMuted);
        if (this.dom.audioLabel) {
          this.dom.audioLabel.textContent = isMuted ? 'MUTED' : 'ACTIVE';
        }
        if (!isMuted) sound.playTone(660, 0.06, 'sine', 0.02);
      });
    }
  }

  /* ==========================================================================
     PROCEDURAL OSCILLOSCOPE CANVAS (THROTTLED DURING READING)
     ========================================================================== */
  initOscilloscope() {
    if (!this.dom.waveformCanvas) return;
    const canvas = this.dom.waveformCanvas;
    const ctx = canvas.getContext('2d');

    let currentAmp = 7.0;
    let targetAmp = 7.0;
    let frameCount = 0;
    let throttled = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('pm:reading-focus', (e) => {
      throttled = e.detail.active;
      targetAmp = throttled ? 1.8 : 7.0;
    });

    const render = () => {
      frameCount++;

      // When throttled, drop frame rate to 1 frame every 6 ticks (~10fps)
      if (throttled && frameCount % 6 !== 0) {
        requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const mid = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Smooth amplitude easing
      currentAmp += (targetAmp - currentAmp) * 0.1;

      const accentColor = getComputedStyle(document.body).getPropertyValue('--harmonic-accent').trim() || '#3bf0ff';

      ctx.beginPath();
      ctx.lineWidth = throttled ? 1.0 : 1.5;
      ctx.strokeStyle = accentColor;

      const segments = 64;
      const step = w / segments;

      for (let i = 0; i <= segments; i++) {
        const x = i * step;
        const freq1 = frameCount * 0.035 + i * 0.12;
        const freq2 = frameCount * 0.015 - i * 0.05;
        const y = mid + Math.sin(freq1) * currentAmp + Math.cos(freq2) * (currentAmp * 0.4);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    this.oscilloscope = {
      setHarmonic: (profile) => {
        targetAmp = throttled ? 1.8 : profile.oscilloscopeActiveAmp;
      }
    };
  }

  /* ==========================================================================
     KEYBOARD SHORTCUTS & SYSTEM EVENTS
     ========================================================================== */
  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // 1. Never intercept typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const key = e.key.toLowerCase();

      // 2. Escape Hierarchy: Modals -> Drawers -> Reading Focus
      if (e.key === 'Escape') {
        if (this.dom.artifactModal && !this.dom.artifactModal.classList.contains('hidden')) {
          this.closeArtifactModal();
          return;
        }
        if (this.dom.vistModal && !this.dom.vistModal.classList.contains('hidden')) {
          this.dom.vistModal.classList.add('hidden');
          return;
        }
        if (this.dom.lancerDrawer && this.dom.lancerDrawer.classList.contains('open')) {
          this.toggleDossier(false);
          return;
        }
      }

      // 3. Safe Bracket Navigation: '[' and ']' (or Alt + Arrows)
      if (e.key === '[' || (e.altKey && e.key === 'ArrowLeft')) {
        e.preventDefault();
        if (this.currentChapterId > 1) this.loadChapter(this.currentChapterId - 1);
      } else if (e.key === ']' || (e.altKey && e.key === 'ArrowRight')) {
        e.preventDefault();
        if (this.currentChapterId < CHAPTER_ARCHIVE.length) this.loadChapter(this.currentChapterId + 1);
      }

      // 4. Number Keys 1–5: Direct Chapter Jump
      if (['1', '2', '3', '4', '5'].includes(key)) {
        e.preventDefault();
        const targetId = parseInt(key, 10);
        if (targetId !== this.currentChapterId) this.loadChapter(targetId);
      }

      // 5. 'R' Key: Instant Decrypt Current Chapter
      if (key === 'r') {
        e.preventDefault();
        this.decryptEngine.resolveEntireChapter(this.dom.proseViewport);
      }

      // 6. 'M' Key: Toggle Audio Mute
      if (key === 'm') {
        e.preventDefault();
        if (this.dom.audioToggleBtn) this.dom.audioToggleBtn.click();
      }

      // 7. 'D' Key: Toggle LANCER Pilot Dossier Drawer
      if (key === 'd') {
        e.preventDefault();
        const isOpen = this.dom.lancerDrawer?.classList.contains('open');
        this.toggleDossier(!isOpen);
      }

      // 8. 'V' Key: Vist Dispatch Cipher Key (Chapter 5 Exclusive Gate)
      if (key === 'v') {
        e.preventDefault();
        this.openVistModal();
      }
    });
  }

  listenToSystemEvents() {
    window.addEventListener('pm:redaction-cleared', (e) => {
      this.logConsole(`DECLASSIFIED // CLEARANCE CODE: ${e.detail.clearance}`);
    });
  }

  startMissionClocks() {
    let seconds = 0;
    this.clockInterval = setInterval(() => {
      seconds += 0.1;
      const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toFixed(1).padStart(4, '0');
      if (this.dom.tapeTime) this.dom.tapeTime.textContent = `${mins}:${secs}`;

      if (this.dom.missionClock) {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');
        this.dom.missionClock.textContent = `U.C. 0099.04.18 // ${h}:${m}:${s}`;
      }
    }, 100);
  }

  logConsole(message) {
    if (!this.dom.consoleStream) return;
    this.dom.consoleStream.textContent = message;
  }
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.PMApp = new CockpitAppController();
});