/**
 * PSYCHO-MONITOR // MK-03 RES-SYNC [ANOMALY: 088-ERIA]
 * Tactical Immersion Layer: Web Audio Micro-Synth, Hotkeys & 2.5D Physics
 */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. ZERO-ASSET PROCEDURAL WEB AUDIO SYNTHESIZER
     ========================================================================== */
  let audioCtx = null;

  const getAudioContext = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    } catch (e) {
      return null;
    }
  };

  /**
   * Generates a clean synthetic tactical beep or relay click
   */
  const beep = (freq = 440, duration = 0.07, type = 'sine', volume = 0.025) => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(volume, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + duration);
    } catch (err) {
      // Audio suppression fallback
    }
  };

  /**
   * Declassification Decoder Strobe Sound
   */
  const playDecryptChirps = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const pitches = [320, 480, 640, 800, 960];
    pitches.forEach((freq, idx) => {
      setTimeout(() => {
        beep(freq, 0.04, 'triangle', 0.02);
      }, idx * 45);
    });
  };

  /**
   * Tri-Harmonic Resonant Chord (Played upon shifting identity)
   */
  const playHarmonicChord = (harmonicKey) => {
    const chords = {
      alpha: [330, 495, 660],  // Warm E-major triad
      beta:  [220, 311, 440],  // Cold diminished tension
      gamma: [392, 523, 659]   // Porcelain G-major purity
    };

    const notes = chords[harmonicKey] || chords.alpha;
    notes.forEach((f, i) => {
      setTimeout(() => beep(f, 0.12, 'triangle', 0.028), i * 65);
    });
  };

  /**
   * Berth 44 Reactor Frequency Spool-Up
   */
  const playReactorSpool = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 1.2);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 1.2);
    } catch (e) {}
  };

  /* ==========================================================================
     2. DOM ENHANCEMENTS & IMMERSION BINDINGS
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    const app = window.app;
    if (!app) return;

    // 2.1 Ambient Cursor Glow Illumination
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    window.addEventListener('pointermove', (e) => {
      document.body.style.setProperty('--mx', `${e.clientX}px`);
      document.body.style.setProperty('--my', `${e.clientY}px`);
    }, { passive: true });

    // 2.2 Decorate Chapter Tabs with Audio
    document.querySelectorAll('.chapter-tab').forEach(tab => {
      tab.addEventListener('mouseenter', () => beep(880, 0.03, 'sine', 0.012));
    });

    // 2.3 Hook into Chapter Loading for Harmonic Audio & Oscilloscope Spike
    const originalLoadChapter = app.loadChapter.bind(app);
    app.loadChapter = (index) => {
      originalLoadChapter(index);

      const chapter = app.data.chapters[index];
      if (chapter) {
        playHarmonicChord(chapter.harmonicKey);

        const scopeBox = document.querySelector('.canvas-wrapper');
        if (scopeBox) {
          scopeBox.classList.remove('spike');
          void scopeBox.offsetWidth;
          scopeBox.classList.add('spike');
        }
      }
    };

    // 2.4 Hook into Redaction Clicks for Audio Feedback
    document.addEventListener('click', (e) => {
      const bar = e.target.closest('.redaction-bar');
      if (bar && !bar.classList.contains('declassified')) {
        playDecryptChirps();
      }
    });

    // 2.5 2.5D Interactive Tilt on Anchor Items
    if (!reduceMotion) {
      document.querySelectorAll('.anchor-item').forEach(card => {
        card.addEventListener('pointermove', (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(500px) rotateY(${px * 16}deg) rotateX(${-py * 16}deg) translateY(-2px)`;
        });

        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });

        card.addEventListener('click', () => {
          beep(620, 0.08, 'triangle', 0.035);
        });
      });
    }

    // 2.6 Button Tactile Audio Feedback
    document.querySelectorAll('.hud-button, .drawer-close, .modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        beep(540, 0.06, 'triangle', 0.025);
      });
    });

    // 2.7 Berth 44 Launch Key Reactor Spool Audio
    const slotKeyBtn = document.getElementById('slot-key-btn');
    if (slotKeyBtn) {
      slotKeyBtn.addEventListener('click', () => {
        playReactorSpool();
        const scopeBox = document.querySelector('.canvas-wrapper');
        if (scopeBox) {
          scopeBox.classList.add('spike');
        }
      });
    }

    // 2.8 Ignition Gate Audio
    const gateBtn = document.getElementById('gate-ignite-btn');
    if (gateBtn) {
      gateBtn.addEventListener('click', () => {
        [220, 330, 440, 660].forEach((f, i) => {
          setTimeout(() => beep(f, 0.16, 'triangle', 0.04), i * 80);
        });
      });
    }

    // 2.9 Subconscious Strata Node Filtering
    document.querySelectorAll('.strata-node').forEach(node => {
      node.addEventListener('click', () => {
        const strata = node.getAttribute('data-strata');
        document.querySelectorAll('.strata-node').forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        app.setHarmonicTheme(strata);
        playHarmonicChord(strata);
        beep(740, 0.06, 'sine', 0.03);
      });
    });

    /* ==========================================================================
       3. KEYBOARD HOTKEYS FOR EFFORTLESS READING & GM PREP
       ========================================================================== */
    window.addEventListener('keydown', (e) => {
      // Don't intercept if inside an input or holding modifier keys
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key.toLowerCase();

      // Number keys 1–5: Jump to chapters
      if (['1', '2', '3', '4', '5'].includes(k)) {
        const idx = parseInt(k, 10) - 1;
        if (idx < app.data.chapters.length) {
          app.loadChapter(idx);
          beep(480 + idx * 60, 0.07, 'triangle', 0.035);
        }
      }

      // 'D': Toggle LANCER Dossier Drawer
      else if (k === 'd') {
        const isOpen = app.lancerDrawer?.classList.contains('open');
        app.toggleDossier(!isOpen);
        beep(isOpen ? 320 : 640, 0.08, 'triangle', 0.035);
      }

      // 'M': Toggle Audio Mute / Unmute
      else if (k === 'm') {
        if (app.audioToggleBtn) {
          app.audioToggleBtn.click();
          beep(580, 0.06, 'sine', 0.025);
        }
      }

      // 'V': Toggle Vist Foundation Black-Wax Letter Modal
      else if (k === 'v') {
        if (app.vistModal) {
          const isHidden = app.vistModal.classList.contains('hidden');
          if (isHidden) {
            app.vistModal.classList.remove('hidden');
            app.vistModal.setAttribute('aria-hidden', 'false');
            beep(220, 0.35, 'sawtooth', 0.04);
          } else {
            app.vistModal.classList.add('hidden');
            app.vistModal.setAttribute('aria-hidden', 'true');
            beep(200, 0.08, 'sine', 0.025);
          }
        }
      }

      // Right Arrow: Next Chapter
      else if (k === 'arrowright') {
        if (app.currentChapterIndex < app.data.chapters.length - 1) {
          app.loadChapter(app.currentChapterIndex + 1);
          beep(520, 0.06, 'triangle', 0.03);
        }
      }

      // Left Arrow: Previous Chapter
      else if (k === 'arrowleft') {
        if (app.currentChapterIndex > 0) {
          app.loadChapter(app.currentChapterIndex - 1);
          beep(420, 0.06, 'triangle', 0.03);
        }
      }
    });

    /* ==========================================================================
       4. PROCEDURAL CONSOLE LOG STREAM TICKER
       ========================================================================== */
    const telemetryFeeds = [
      "COCKPIT POD SEALED // BERTH 44 GANTRY ACTIVE // MINOVSKY DISPERSAL NOMINAL",
      "PSYCHO-FRAME CARRIER WAVE DETECTED // FREQ: 528.0 HZ // SYNC 99.8%",
      "MEMORY STRATA ALPHA ACTIVE // RESIDUAL SALINITY DRIFT: +0.012 µV",
      "TACTICAL OVERRIDE LATENT // 99.4TH PERCENTILE KINETIC REFLEX ARMED",
      "LUNAR DOME 1ST RING NOMINAL // STERLING RESIDENCE COMMUNICATOR QUIET",
      "VIST FOUNDATION ENCRYPTED TELEMETRY KEY PRIMED FOR LAGRANGE POINT 1"
    ];

    setInterval(() => {
      const consoleEl = document.getElementById('console-stream');
      if (consoleEl && app.vistModal?.classList.contains('hidden')) {
        const msg = telemetryFeeds[Math.floor(Math.random() * telemetryFeeds.length)];
        consoleEl.textContent = msg;
      }
    }, 7000);
  });

})();