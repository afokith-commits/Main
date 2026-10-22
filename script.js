/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: MASTER APPLICATION CONTROLLER
 * Architecture: Auto-Harmonic Attunement, Diegetic Tape Deck, Zero-Jitter Decrypt
 * Diagnostic Deck: Anaheim Unit-03 Multi-Harmonic Oscilloscope Engine
 * Philosophy: "The cockpit is the frame, the story is the instrument."
 * ============================================================================
 */

import {
  CHAPTER_REGISTRY,
  HARMONIC_PROFILES,
  getChapter,
  calculateReadingTime
} from './data.js';

import {
  sound,
  DecryptEngineV2,
  initReadingFocusMode,
  initCursorGlow
} from './immersive.js';

class CockpitAppController {
  constructor() {
    this.currentChapterId = 1;
    this.decryptEngine = new DecryptEngineV2();

    // YouTube Audio State
    this.ytPlayer = null;
    this.ytReady = false;
    this.isPlaying = false;
    this.pendingTrackId = null;

    // Full-Scale Diagnostic Oscilloscope State
    this.scopeCanvas = null;
    this.scopeCtx = null;
    this.scopeFrame = 0;
    this.scopeColor = '#e5a962';
    this.currentWavePhysics = HARMONIC_PROFILES.alpha.wavePhysics;

    // Cache DOM Elements
    this.dom = {
      // 44px Sticky Header Strip
      header: document.getElementById('cockpit-header'),
      chapterYear: document.getElementById('hud-chapter-year'),
      chapterLocation: document.getElementById('hud-chapter-loc'),
      harmonicChip: document.getElementById('hud-harmonic-chip'),
      trackName: document.getElementById('hud-track-name'),
      audioLed: document.getElementById('header-audio-led'),
      readTime: document.getElementById('hud-read-time'),
      missionClock: document.getElementById('hud-clock'),
      gmPillBtn: document.getElementById('gm-pill-btn'),

      // Full-Scale Diagnostic Deck
      scopeCard: document.querySelector('.scope-card'),
      scopeCanvas: document.getElementById('waveform-canvas'),
      scopeHarmonicBadge: document.getElementById('scope-harmonic-badge'),
      scopeFreq: document.getElementById('scope-freq'),
      scopeSync: document.getElementById('scope-sync'),
      scopeNoise: document.getElementById('scope-noise'),
      scopeStatus: document.getElementById('scope-status'),
      channelTags: {
        'channel-1': document.getElementById('channel-1'),
        'channel-2': document.getElementById('channel-2'),
        'channel-3': document.getElementById('channel-3')
      },

      // GM Drawer
      gmDrawer: document.getElementById('gm-briefing-drawer'),
      gmCloseBtn: document.getElementById('gm-drawer-close'),

      // Reading Stage
      stage: document.getElementById('reading-stage'),
      proseContainer: document.getElementById('prose-flow'),
      chapterIndexDisplay: document.getElementById('masthead-index'),
      chapterHarmonicName: document.getElementById('masthead-harmonic-name'),
      chapterTitleDisplay: document.getElementById('masthead-title'),
      chapterTheaterDisplay: document.getElementById('masthead-theater'),
      prevBtn: document.getElementById('pager-prev-btn'),
      nextBtn: document.getElementById('pager-next-btn'),
      pagerProgress: document.getElementById('pager-progress-tag'),

      // Floating Retro Tape Deck
      tapeDeck: document.getElementById('floating-tape-deck'),
      tapeReel: document.getElementById('tape-reel-icon'),
      tapeTrackTitle: document.getElementById('tape-track-title'),
      tapeArtist: document.getElementById('tape-track-artist'),
      tapePlayBtn: document.getElementById('tape-toggle-btn')
    };

    this.init();
  }

  init() {
    // 1. Initialize Visual, Kinetic & Acoustic Sub-Engines
    initReadingFocusMode();
    initCursorGlow();
    this.initDiagnosticOscilloscope();
    this.startMissionClock();
    this.initYouTubeAudio();
    this.initGMBriefing();
    this.bindKeyboardShortcuts();

    // 2. Hydrate Default Chapter (Chapter 1: The Water and the Salt)
    this.loadChapter(this.currentChapterId);
  }

  /* ==========================================================================
     ATOMIC CHAPTER HYDRATION & DIAGNOSTIC ATTUNEMENT
     ========================================================================== */
  loadChapter(chapterId) {
    const chapter = getChapter(chapterId);
    if (!chapter) return;

    this.currentChapterId = chapterId;

    // 1. Instantly cancel active workers and DISCONNECT observer
    // Prevents intersection triggers while resetting scroll position
    this.decryptEngine.cancelAll();
    this.decryptEngine.disconnect();

    // 2. Hard instant scroll jump to top (disabling smooth-scroll sweep)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3. Trigger Auto-Harmonic Visual Glitch & Color Shift
    document.body.dataset.harmonic = chapter.harmonic;
    document.body.classList.add('switching', 'harmonic-shift');
    setTimeout(() => {
      document.body.classList.remove('switching', 'harmonic-shift');
    }, 450);

    // 4. Spool Harmonic Acoustic Chord
    sound.playHarmonicChord(chapter.harmonic);
    this.scopeColor = chapter.profile.accentColor;
    this.currentWavePhysics = chapter.profile.wavePhysics;

    // 5. Update Full-Scale Diagnostic Deck Telemetry (Single-Line Locked)
    if (this.dom.scopeFreq) {
      this.dom.scopeFreq.textContent = chapter.profile.scopeFreq;
    }
    if (this.dom.scopeSync) {
      this.dom.scopeSync.textContent = chapter.profile.scopeSync;
    }
    if (this.dom.scopeNoise) {
      this.dom.scopeNoise.textContent = chapter.profile.scopeNoise;
    }
    if (this.dom.scopeStatus) {
      this.dom.scopeStatus.textContent = chapter.profile.scopeStatus;
    }

    // Update Channel Indicators: Highlight active channel, dim the others
    Object.keys(this.dom.channelTags).forEach(chKey => {
      const el = this.dom.channelTags[chKey];
      if (el) {
        el.classList.toggle('active', chKey === chapter.profile.activeChannel);
      }
    });

    // 6. Update 44px Telemetry Strip
    if (this.dom.chapterYear) this.dom.chapterYear.textContent = chapter.year;
    if (this.dom.chapterLocation) this.dom.chapterLocation.textContent = chapter.theater.split('//')[0].trim();
    if (this.dom.harmonicChip) this.dom.harmonicChip.textContent = `HARMONIC ${chapter.profile.key.toUpperCase()}`;
    if (this.dom.trackName) this.dom.trackName.textContent = `BGM: ${chapter.soundtrack.title}`;
    if (this.dom.readTime) this.dom.readTime.textContent = `EST. READ: ${chapter.estMinutes} MIN`;

    // 7. Update Reading Stage Masthead
    if (this.dom.chapterIndexDisplay) this.dom.chapterIndexDisplay.textContent = `CHAPTER ${chapter.index}`;
    if (this.dom.chapterHarmonicName) this.dom.chapterHarmonicName.textContent = chapter.profile.identity;
    if (this.dom.chapterTitleDisplay) this.dom.chapterTitleDisplay.textContent = chapter.title;
    if (this.dom.chapterTheaterDisplay) this.dom.chapterTheaterDisplay.textContent = `${chapter.year} // ${chapter.theater}`;

    // 8. Update Pager Controls
    if (this.dom.prevBtn) this.dom.prevBtn.disabled = (chapterId === 1);
    if (this.dom.nextBtn) this.dom.nextBtn.disabled = (chapterId === CHAPTER_REGISTRY.length);
    if (this.dom.pagerProgress) this.dom.pagerProgress.textContent = `LOG ${chapterId} OF ${CHAPTER_REGISTRY.length}`;

    // 9. Render Continuous Prose (Mounted into stochastic decrypt engine)
    this.renderProseWithAnnotations(chapter);

    // 10. Sync Tape Deck Audio Track
    this.syncTapeDeckTrack(chapter.soundtrack);

    // 11. Re-enable Observer ONLY after the DOM has laid out at scroll top 0
    // Guarantees only the top visible paragraph decrypts; remaining stay encrypted
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      this.decryptEngine.initObserver();
      this.decryptEngine.observeAll(this.dom.proseContainer);
      this.decryptEngine.updateReadingProgress(0);
    });
  }

  renderProseWithAnnotations(chapter) {
    const container = this.dom.proseContainer;
    if (!container) return;
    container.innerHTML = '';

    const annotationsMap = new Map();
    chapter.annotations.forEach(item => {
      annotationsMap.set(item.afterParagraph, item);
    });

    chapter.paragraphs.forEach((rawText, idx) => {
      // Scene Break Marker
      if (rawText === '***') {
        const breakEl = document.createElement('div');
        breakEl.className = 'scene-break';
        breakEl.setAttribute('aria-hidden', 'true');
        breakEl.textContent = '∿ ∿ ∿';
        container.appendChild(breakEl);
        return;
      }

      // 1. Render Canonical Prose Paragraph (No Spoilers/Redactions)
      const p = document.createElement('p');
      p.className = 'prose-paragraph';
      if (idx === 0) p.classList.add('first-paragraph');
      p.textContent = rawText;

      container.appendChild(p);

      // Mount into Zero-Jitter Decrypt Engine
      this.decryptEngine.mountParagraph(p);

      // 2. Inject Subconscious Sensory Echoes
      if (annotationsMap.has(idx)) {
        const item = annotationsMap.get(idx);
        if (item.type === 'subconscious') {
          const echoBox = document.createElement('div');
          echoBox.className = 'inline-echo';
          echoBox.innerHTML = `
            <div class="echo-tag">${item.tag} // ${item.label}</div>
            <div class="echo-body">"${item.content}"</div>
          `;
          container.appendChild(echoBox);
        }
      }
    });
  }

  /* ==========================================================================
     FULL-SCALE DIAGNOSTIC OSCILLOSCOPE ENGINE
     ========================================================================== */
  initDiagnosticOscilloscope() {
    const canvas = this.dom.scopeCanvas;
    if (!canvas) return;

    this.scopeCtx = canvas.getContext('2d');

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      this.scopeCtx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      this.scopeFrame++;
      const ctx = this.scopeCtx;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const mid = h / 2;

      ctx.clearRect(0, 0, w, h);

      // 1. Minovsky Reference Baseline (Subtle cyan reference wire)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(78, 240, 196, 0.22)';
      ctx.lineWidth = 1;
      ctx.moveTo(0, mid);
      ctx.lineTo(w, mid);
      ctx.stroke();

      // 2. Secondary Harmonic Halo Wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(78, 240, 196, 0.12)';
      ctx.lineWidth = 1.2;
      for (let x = 0; x < w; x += 4) {
        const rad = (x / w) * Math.PI * 8 + this.scopeFrame * 0.025;
        const y = mid + Math.sin(rad * 0.5) * 14 * Math.cos(this.scopeFrame * 0.015);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 3. Primary Harmonic Consciousness Waveform
      const p = this.currentWavePhysics;
      const speed = p.speed || 1.0;
      const carrierFreq = p.carrierFreq || 6;
      const modFreq = p.modulationFreq || 12;
      const complexity = p.complexity || 3;
      const jitterMax = p.jitterAmp || 1.5;

      ctx.beginPath();
      ctx.strokeStyle = this.scopeColor;
      ctx.lineWidth = 1.8;

      // Amplitude boosts dynamically when BGM is playing
      const ampBase = this.isPlaying ? (h * 0.28) : (h * 0.20);

      for (let x = 0; x < w; x += 3) {
        const norm = x / w;
        const phase = this.scopeFrame * 0.035 * speed;

        const wave1 = Math.sin(norm * Math.PI * carrierFreq + phase);
        const wave2 = Math.cos(norm * Math.PI * modFreq - phase * 0.5) * 0.35;
        const wave3 = Math.sin(norm * Math.PI * 24 + phase * 1.5) * (complexity >= 5 ? 0.22 : 0.06);

        // Micro-jitter reflecting consciousness noise
        const jitter = (Math.random() - 0.5) * jitterMax;

        const y = mid + (wave1 + wave2 + wave3) * ampBase + jitter;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     DIEGETIC RETRO TAPE DECK CONTROLLER (YOUTUBE API ENGINE)
     ========================================================================== */
  initYouTubeAudio() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(tag, first);
    }

    window.onYouTubeIframeAPIReady = () => {
      const initialChapter = getChapter(1);
      const videoId = initialChapter.soundtrack.youtubeId;

      const originHost = (window.location.origin && window.location.origin !== 'null')
        ? window.location.origin
        : undefined;

      this.ytPlayer = new YT.Player('yt-player-slot', {
        height: '10',
        width: '10',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: videoId,
          enablejsapi: 1,
          origin: originHost
        },
        events: {
          onReady: () => {
            this.ytReady = true;
            this.ytPlayer.setVolume(80);
            if (this.pendingTrackId) {
              this.loadTrackIntoPlayer(this.pendingTrackId);
              this.pendingTrackId = null;
            }
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              this.isPlaying = true;
              this.updateTapeDeckUI(true);
            } else if (event.data === YT.PlayerState.PAUSED) {
              this.isPlaying = false;
              this.updateTapeDeckUI(false);
            } else if (event.data === YT.PlayerState.ENDED) {
              this.ytPlayer.playVideo();
            }
          }
        }
      });
    };

    if (this.dom.tapePlayBtn) {
      this.dom.tapePlayBtn.addEventListener('click', () => {
        sound.ensureContext();
        this.toggleAudioPlayback();
      });
    }
  }

  toggleAudioPlayback() {
    if (!this.ytReady || !this.ytPlayer) return;

    if (this.isPlaying) {
      this.ytPlayer.pauseVideo();
    } else {
      this.ytPlayer.playVideo();
    }
  }

  syncTapeDeckTrack(soundtrack) {
    if (this.dom.tapeTrackTitle) this.dom.tapeTrackTitle.textContent = soundtrack.title;
    if (this.dom.tapeArtist) this.dom.tapeArtist.textContent = soundtrack.artist;

    if (this.ytReady && this.ytPlayer) {
      this.loadTrackIntoPlayer(soundtrack.youtubeId);
    } else {
      this.pendingTrackId = soundtrack.youtubeId;
    }
  }

  loadTrackIntoPlayer(videoId) {
    if (!this.ytPlayer || !this.ytPlayer.loadVideoById) return;

    if (this.isPlaying) {
      this.ytPlayer.loadVideoById({ videoId, suggestedQuality: 'small' });
    } else {
      this.ytPlayer.cueVideoById(videoId);
    }
  }

  updateTapeDeckUI(playing) {
    if (this.dom.tapeReel) {
      this.dom.tapeReel.classList.toggle('paused', !playing);
    }
    if (this.dom.audioLed) {
      this.dom.audioLed.classList.toggle('active', playing);
    }
    if (this.dom.tapePlayBtn) {
      this.dom.tapePlayBtn.textContent = playing ? 'PAUSE' : 'PLAY';
    }
  }

  startMissionClock() {
    const clockEl = this.dom.missionClock;
    if (!clockEl) return;

    setInterval(() => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      clockEl.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  /* ==========================================================================
     GM BRIEFING DRAWER & KEYBOARD SHORTCUTS
     ========================================================================== */
  initGMBriefing() {
    if (this.dom.gmPillBtn && this.dom.gmDrawer) {
      this.dom.gmPillBtn.addEventListener('click', () => {
        sound.ensureContext();
        sound.playTone(720, 0.04, 'sine', 0.02);
        this.dom.gmDrawer.classList.toggle('open');
      });
    }

    if (this.dom.gmCloseBtn && this.dom.gmDrawer) {
      this.dom.gmCloseBtn.addEventListener('click', () => {
        sound.playTone(320, 0.04, 'triangle', 0.02);
        this.dom.gmDrawer.classList.remove('open');
      });
    }

    if (this.dom.prevBtn) {
      this.dom.prevBtn.addEventListener('click', () => {
        if (this.currentChapterId > 1) {
          sound.ensureContext();
          sound.playTone(480, 0.06, 'triangle', 0.02);
          this.loadChapter(this.currentChapterId - 1);
        }
      });
    }

    if (this.dom.nextBtn) {
      this.dom.nextBtn.addEventListener('click', () => {
        if (this.currentChapterId < CHAPTER_REGISTRY.length) {
          sound.ensureContext();
          sound.playTone(560, 0.06, 'triangle', 0.02);
          this.loadChapter(this.currentChapterId + 1);
        }
      });
    }
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const key = e.key.toLowerCase();

      // Bracket Navigation: '[' (Prev) and ']' (Next)
      if (e.key === '[' || (e.altKey && e.key === 'ArrowLeft')) {
        e.preventDefault();
        if (this.currentChapterId > 1) {
          sound.ensureContext();
          this.loadChapter(this.currentChapterId - 1);
        }
      } else if (e.key === ']' || (e.altKey && e.key === 'ArrowRight')) {
        e.preventDefault();
        if (this.currentChapterId < CHAPTER_REGISTRY.length) {
          sound.ensureContext();
          this.loadChapter(this.currentChapterId + 1);
        }
      }

      // Direct Jump: Keys 1–5
      if (['1', '2', '3', '4', '5'].includes(key)) {
        e.preventDefault();
        const targetId = parseInt(key, 10);
        if (targetId !== this.currentChapterId) {
          sound.ensureContext();
          this.loadChapter(targetId);
        }
      }

      // 'R' Hotkey: Instantly resolve text
      if (key === 'r') {
        e.preventDefault();
        this.decryptEngine.resolveEntireChapter(this.dom.stage);
      }

      // 'M' Hotkey: Toggle Mute
      if (key === 'm') {
        e.preventDefault();
        const isMuted = sound.toggleMute();
        this.dom.trackName.textContent = isMuted ? 'BGM: MUTED' : `BGM: ${getChapter(this.currentChapterId).soundtrack.title}`;
      }

      // 'Escape': Close GM Drawer
      if (e.key === 'Escape' && this.dom.gmDrawer?.classList.contains('open')) {
        this.dom.gmDrawer.classList.remove('open');
      }
    });
  }
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.PMApp = new CockpitAppController();
});