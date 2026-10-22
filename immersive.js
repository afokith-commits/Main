/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: IMMERSION & DIEGETIC INTERACTION ENGINE
 * Architecture: Stochastic Left-to-Right Wavefront (High-Entropy CRT Matrix)
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
   1. PROCEDURAL WEB AUDIO MICRO-SYNTHESIZER (ZERO EXTERNAL ASSETS)
   ------------------------------------------------------------------------- */
class CockpitAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('pm_audio_muted') === 'true';
    this.masterGain = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  setMuted(muteState) {
    this.muted = Boolean(muteState);
    localStorage.setItem('pm_audio_muted', this.muted ? 'true' : 'false');
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 1, this.ctx.currentTime);
    }
    return this.muted;
  }

  toggleMute() {
    return this.setMuted(!this.muted);
  }

  playTone(freq = 440, duration = 0.06, type = 'sine', peakVolume = 0.025) {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(peakVolume, now + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.01);
    } catch {
      // Audio suppression fallback
    }
  }

  playHarmonicChord(harmonicKey = 'alpha') {
    if (this.muted) return;
    const chords = {
      alpha: [329.63, 493.88, 659.25], // Sunda Ocean (E-Major)
      beta:  [220.00, 311.13, 440.00], // Combat Reflex (Diminished)
      gamma: [392.00, 523.25, 659.25]  // Lunar Ice (Emerald Crystal)
    };

    const notes = chords[harmonicKey] || chords.alpha;
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.22, 'triangle', 0.03);
      }, idx * 65);
    });
  }

  playCipherClick() {
    if (this.muted) return;
    const freq = 340 + Math.random() * 220;
    this.playTone(freq, 0.016, 'triangle', 0.007);
  }

  playDeclassifyChirp() {
    if (this.muted) return;
    [480, 720, 960].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 0.05, 'sine', 0.02), idx * 42);
    });
  }
}

export const sound = new CockpitAudioSynthesizer();

/* ----------------------------------------------------------------------------
   2. STOCHASTIC ZERO-JITTER DECRYPT ENGINE (RANDOMIZED LEFT-TO-RIGHT)
   ------------------------------------------------------------------------- */
export class DecryptEngineV2 {
  constructor() {
    this.glyphBank = '█▓▒░#%&*01';
    this.activeWorkers = new Map();
    this.observer = null;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.initObserver();
  }

  initObserver() {
    this.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.dataset.decrypted === 'false') {
          this.decryptParagraph(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -5% 0px',
      threshold: 0.05
    });
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  observe(element) {
    if (this.observer && element && element.dataset.decrypted === 'false') {
      this.observer.observe(element);
    }
  }

  observeAll(container) {
    if (!this.observer || !container) return;
    container.querySelectorAll('.prose-paragraph[data-decrypted="false"]').forEach(p => {
      this.observer.observe(p);
    });
  }

  getRandomGlyph() {
    return this.glyphBank[Math.floor(Math.random() * this.glyphBank.length)];
  }

  /**
   * Mounts text using a Word-Container approach:
   * Each character receives an entropy threshold based on its position + random jitter.
   * Layout shift remains 0% because .c-ghost maintains serif typography.
   */
  mountParagraph(pElement) {
    if (!pElement) return;
    this.cancelWorker(pElement);

    const rawText = pElement.textContent.trim();
    if (!rawText) return;

    pElement.dataset.raw = rawText;
    pElement.dataset.decrypted = 'false';
    pElement.classList.remove('resolved', 'decrypting');
    pElement.innerHTML = '';

    if (this.reducedMotion) {
      pElement.textContent = rawText;
      pElement.dataset.decrypted = 'true';
      pElement.classList.add('resolved');
      return;
    }

    const docFrag = document.createDocumentFragment();
    const nodeSlots = [];
    const tokens = rawText.split(/(\s+)/);

    tokens.forEach((token) => {
      if (token === '') return;

      if (/^\s+$/.test(token)) {
        if (token.includes('\n')) {
          docFrag.appendChild(document.createElement('br'));
        } else {
          docFrag.appendChild(document.createTextNode(token));
        }
        return;
      }

      const wordSpan = document.createElement('span');
      wordSpan.className = 'c-word';

      [...token].forEach((c) => {
        const slot = document.createElement('span');
        slot.className = 'c-node scaffold';
        slot.dataset.char = c;

        const ghost = document.createElement('span');
        ghost.className = 'c-ghost';
        ghost.textContent = c;

        const glyph = document.createElement('span');
        glyph.className = 'c-glyph';
        glyph.textContent = this.getRandomGlyph();

        slot.appendChild(ghost);
        slot.appendChild(glyph);
        wordSpan.appendChild(slot);

        nodeSlots.push(slot);
      });

      docFrag.appendChild(wordSpan);
    });

    const total = nodeSlots.length;
    // Assign stochastic threshold: linear progression (0 to 1) + random scatter
    nodeSlots.forEach((slot, i) => {
      const basePos = i / (total - 1 || 1);
      const scatter = (Math.random() - 0.5) * 0.24; // 24% localized entropy jitter
      slot._threshold = Math.max(0.01, Math.min(0.99, basePos + scatter));
    });

    pElement.appendChild(docFrag);
    pElement._nodeSlots = nodeSlots;
  }

  /**
   * STOCHASTIC LEFT-TO-RIGHT DECRYPT:
   * A wave moves Left-to-Right across the paragraph.
   * Characters resolve in randomized organic clusters matching the wavefront.
   */
  decryptParagraph(pElement) {
    if (pElement.dataset.decrypted === 'true') return;
    if (this.activeWorkers.has(pElement)) return;

    const slots = pElement._nodeSlots;
    if (!slots || slots.length === 0) {
      pElement.dataset.decrypted = 'true';
      pElement.classList.add('resolved');
      return;
    }

    const total = slots.length;
    pElement.classList.add('decrypting');

    const id = pElement._s = (pElement._s || 0) + 1;
    let waveProgress = -0.12; // Start slightly before zero for dramatic entry
    const fringeWidth = 0.16; // Width of the active scramble zone
    const stepSpeed = 0.018;   // Smooth velocity
    let lastAudioTick = 0;
    const G = this.glyphBank;

    const step = () => {
      if (id !== pElement._s) return;

      waveProgress += stepSpeed;
      let allResolved = true;

      for (let i = 0; i < total; i++) {
        const slot = slots[i];
        const th = slot._threshold;
        const glyphEl = slot.lastElementChild;

        if (waveProgress >= th + fringeWidth * 0.5) {
          // Locked into clear canonical text
          if (!slot.classList.contains('resolved')) {
            slot.className = 'c-node resolved';
          }
        } else if (waveProgress >= th - fringeWidth * 0.5) {
          // In the chaotic wavefront: flicker through random glyphs
          slot.className = 'c-node fringe';
          glyphEl.textContent = G[Math.floor(Math.random() * G.length)];
          allResolved = false;
        } else {
          // Stationary scaffold awaiting wavefront
          if (!slot.classList.contains('scaffold')) {
            slot.className = 'c-node scaffold';
          }
          // Ambient static flicker (1.5% chance per frame)
          if (Math.random() < 0.015) {
            glyphEl.textContent = G[Math.floor(Math.random() * G.length)];
          }
          allResolved = false;
        }
      }

      // Audio ticks
      const now = performance.now();
      if (now - lastAudioTick > 42) {
        sound.playCipherClick();
        lastAudioTick = now;
      }

      if (!allResolved) {
        const timeoutId = setTimeout(step, 24);
        this.activeWorkers.set(pElement, { timeoutId });
      } else {
        slots.forEach(s => { s.className = 'c-node resolved'; });
        pElement.classList.remove('decrypting');
        pElement.classList.add('resolved');
        pElement.dataset.decrypted = 'true';
        this.activeWorkers.delete(pElement);
        sound.playDeclassifyChirp();
        this.updateReadingProgress();
      }
    };

    step();
  }

  cancelWorker(pElement) {
    if (this.activeWorkers.has(pElement)) {
      const w = this.activeWorkers.get(pElement);
      if (w.timeoutId) clearTimeout(w.timeoutId);
      this.activeWorkers.delete(pElement);
    }
  }

  cancelAll() {
    this.activeWorkers.forEach(w => {
      if (w.timeoutId) clearTimeout(w.timeoutId);
    });
    this.activeWorkers.clear();
  }

  resolveEntireChapter(container = document.querySelector('#reading-stage')) {
    this.cancelAll();
    this.disconnect();

    const paragraphs = (container || document).querySelectorAll('.prose-paragraph');
    paragraphs.forEach(p => {
      if (p._nodeSlots) {
        p._nodeSlots.forEach(s => {
          s.className = 'c-node resolved';
        });
      } else {
        const fullText = p.dataset.raw || p.textContent.trim();
        p.textContent = fullText;
      }
      p.dataset.decrypted = 'true';
      p.classList.remove('decrypting');
      p.classList.add('resolved');
    });

    this.updateReadingProgress(1.0);
    sound.playTone(660, 0.08, 'sine', 0.02);
  }

  updateReadingProgress(forceRatio = null) {
    const bar = document.querySelector('#sticky-progress-indicator');
    if (!bar) return;

    if (forceRatio !== null) {
      bar.style.width = `${forceRatio * 100}%`;
      return;
    }

    const total = document.querySelectorAll('.prose-paragraph').length;
    const resolved = document.querySelectorAll('.prose-paragraph.resolved').length;
    const ratio = total > 0 ? (resolved / total) : 0;
    bar.style.width = `${ratio * 100}%`;
  }
}

/* ----------------------------------------------------------------------------
   3. MOUSE-FOLLOWING PHOSPHOR CURSOR GLOW
   ------------------------------------------------------------------------- */
export function initCursorGlow() {
  window.addEventListener('pointermove', (e) => {
    document.body.style.setProperty('--mx', `${e.clientX}px`);
    document.body.style.setProperty('--my', `${e.clientY}px`);
  }, { passive: true });
}

/* ----------------------------------------------------------------------------
   4. READING-FOCUS SCROLL CONTROLLER
   ------------------------------------------------------------------------- */
export function initReadingFocusMode() {
  const scrollThreshold = 140;
  let isActive = false;

  const onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > scrollThreshold && !isActive) {
      document.body.classList.add('reading-active');
      isActive = true;
    } else if (scrollY <= scrollThreshold && isActive) {
      document.body.classList.remove('reading-active');
      isActive = false;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isActive) {
      document.body.classList.remove('reading-active');
      isActive = false;
    }
  });
}