/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: IMMERSIVE ENGINE & SENSORY COGNITION LAYER
 * Modules: DecryptEngineV2, ReadingFocusController, CockpitSynth, RedactionEngine
 * Philosophy: "The cockpit is the frame, the story is the instrument."
 * ============================================================================
 */

import { HARMONIC_PROFILES } from './data.js';

/* ----------------------------------------------------------------------------
   1. ZERO-ASSET PROCEDURAL ACOUSTIC SYNTHESIZER
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

  playTone(freq = 440, duration = 0.06, type = 'sine', peakVolume = 0.02) {
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
      gain.gain.linearRampToValueAtTime(peakVolume, now + 0.008);
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
    const chordMap = {
      alpha: [329.63, 493.88, 659.25], // Warm E Major triad (Sunda Reef)
      beta:  [220.00, 311.13, 440.00], // Diminished tension (Combat Pilot)
      gamma: [392.00, 523.25, 659.25]  // Emerald resonance (Axis Silicate)
    };
    const notes = chordMap[harmonicKey] || chordMap.alpha;
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.22, 'triangle', 0.025);
      }, idx * 55);
    });
  }

  playCipherChirp() {
    if (this.muted) return;
    // Micro-cadence for decrypt ticks
    const freq = 340 + Math.random() * 180;
    this.playTone(freq, 0.025, 'triangle', 0.008);
  }

  playDeclassifyCue() {
    if (this.muted) return;
    const pitches = [520, 780, 1040];
    pitches.forEach((p, idx) => {
      setTimeout(() => this.playTone(p, 0.08, 'sine', 0.02), idx * 60);
    });
  }
}

export const sound = new CockpitAudioSynthesizer();

/* ----------------------------------------------------------------------------
   2. NON-DESTRUCTIVE REDACTION CONTROLLER (Finding B.10)
   ------------------------------------------------------------------------- */
export class RedactionEngine {
  constructor(soundEngine) {
    this.sound = soundEngine;
  }

  /**
   * Post-processes fully decrypted paragraphs to safely inject interactive
   * redaction targets without mutating the underlying narrative strings.
   */
  applyRedactions(containerElement, redactionTargets = []) {
    if (!containerElement || !redactionTargets.length) return;

    const paragraphs = containerElement.querySelectorAll('.prose-paragraph.resolved');
    paragraphs.forEach(p => {
      let html = p.innerHTML;
      let modified = false;

      redactionTargets.forEach(target => {
        if (!html.includes(target.phrase)) return;
        // Check if already wrapped
        if (html.includes(`data-phrase="${target.phrase}"`)) return;

        const replacement = `
          <mark class="redacted-phrase" 
                tabindex="0" 
                role="button" 
                aria-label="Classified telemetry. Click to declassify: ${target.phrase}"
                data-phrase="${target.phrase}"
                data-clearance="${target.clearanceCode}"
                data-revealed="false">
            <span class="redacted-text">${target.phrase}</span>
          </mark>
        `;

        html = html.split(target.phrase).join(replacement);
        modified = true;
      });

      if (modified) {
        p.innerHTML = html;
        this.bindEvents(p);
      }
    });
  }

  bindEvents(scopedElement) {
    const marks = scopedElement.querySelectorAll('.redacted-phrase:not([data-bound="true"])');
    marks.forEach(mark => {
      mark.dataset.bound = "true";

      const toggleReveal = () => {
        const isRevealed = mark.getAttribute('data-revealed') === 'true';
        const nextState = !isRevealed;
        mark.setAttribute('data-revealed', String(nextState));

        if (nextState) {
          this.sound.playDeclassifyCue();
          mark.setAttribute('aria-label', `Declassified: ${mark.dataset.phrase} [${mark.dataset.clearance}]`);
          window.dispatchEvent(new CustomEvent('pm:redaction-cleared', {
            detail: {
              phrase: mark.dataset.phrase,
              clearance: mark.dataset.clearance
            }
          }));
        } else {
          this.sound.playTone(280, 0.05, 'triangle', 0.015);
          mark.setAttribute('aria-label', `Classified telemetry: ${mark.dataset.phrase}`);
        }
      };

      mark.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleReveal();
      });

      mark.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          toggleReveal();
        }
      });
    });
  }
}

/* ----------------------------------------------------------------------------
   3. DECRYPT ENGINE V2 (STABLE GEOMETRY & ZERO LAYOUT SHIFT)
   ------------------------------------------------------------------------- */
export class DecryptEngineV2 {
  constructor() {
    this.mode = localStorage.getItem('pm_decrypt_mode') || 'ritual'; // 'ritual' | 'fast' | 'instant'
    this.glyphBank = '0123456789ABCDEF∆∇∿⟡⌖⎔░▒▓█';
    this.activeWorkers = new Map(); // pElement => { rafId, startTime }
    this.redactionEngine = new RedactionEngine(sound);
    this.currentTargets = [];
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.observer = null;

    this.initObserver();
    this.listenToMotionPreference();
  }

  initObserver() {
    if (this.observer) this.observer.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Trigger decryption when paragraph crosses 15% inside lower viewport
        if (entry.isIntersecting && entry.target.dataset.decrypted === 'false') {
          this.decryptParagraph(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.05
    });
  }

  listenToMotionPreference() {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    query.addEventListener('change', (e) => {
      this.reducedMotion = e.matches;
      if (this.reducedMotion) {
        this.resolveEntireChapter();
      }
    });
  }

  setRedactionTargets(targets = []) {
    this.currentTargets = Array.isArray(targets) ? targets : [];
  }

  /**
   * Mounts stable geometry: paragraph height and linebreaks are locked from tick zero.
   */
  mountParagraph(pElement) {
    if (!pElement) return;

    // Cancel any running workers on this node
    this.cancelWorker(pElement);

    const rawText = pElement.textContent.trim();
    if (!rawText) return;

    pElement.dataset.raw = rawText;
    pElement.dataset.decrypted = 'false';
    pElement.classList.remove('resolved');

    // Fast-path bypass for instant mode or reduced-motion
    if (this.mode === 'instant' || this.reducedMotion) {
      pElement.textContent = rawText;
      pElement.dataset.decrypted = 'true';
      pElement.classList.add('resolved');
      this.redactionEngine.applyRedactions(pElement.parentElement, this.currentTargets);
      return;
    }

    // Three-span structural scaffold
    pElement.innerHTML = `
      <span class="text-resolved" aria-hidden="false"></span><span class="text-fringe" aria-hidden="true"></span><span class="text-unresolved" aria-hidden="true">${rawText}</span>
    `;

    this.observer.observe(pElement);
  }

  decryptParagraph(pElement) {
    if (pElement.dataset.decrypted === 'true') return;

    // Check if worker is already running for this paragraph
    if (this.activeWorkers.has(pElement)) return;

    const text = pElement.dataset.raw;
    const resolvedSpan = pElement.querySelector('.text-resolved');
    const fringeSpan = pElement.querySelector('.text-fringe');
    const unresolvedSpan = pElement.querySelector('.text-unresolved');

    if (!resolvedSpan || !fringeSpan || !unresolvedSpan) {
      pElement.textContent = text;
      pElement.dataset.decrypted = 'true';
      pElement.classList.add('resolved');
      return;
    }

    const totalChars = text.length;
    // Duration scales dynamically with character density
    const duration = this.mode === 'fast' 
      ? Math.min(Math.max(totalChars * 1.5, 200), 450)
      : Math.min(Math.max(totalChars * 3.8, 480), 1350);

    const fringeWidth = 4;
    const startTime = performance.now();
    let lastSoundTick = 0;

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const currentIndex = Math.floor(progress * totalChars);

      // 1. Advance clean prose
      resolvedSpan.textContent = text.slice(0, currentIndex);

      if (progress < 1.0) {
        // 2. Monospace cipher fringe
        const remainingChars = totalChars - currentIndex;
        const currentFringeLen = Math.min(fringeWidth, remainingChars);
        let fringe = '';
        for (let i = 0; i < currentFringeLen; i++) {
          fringe += this.glyphBank[Math.floor(Math.random() * this.glyphBank.length)];
        }
        fringeSpan.textContent = fringe;

        // 3. Invisible unresolved text preserves exact wrapping geometry
        unresolvedSpan.textContent = text.slice(currentIndex + currentFringeLen);

        // Acoustic feedback throttled to every 45ms
        if (currentTime - lastSoundTick > 45) {
          sound.playCipherChirp();
          lastSoundTick = currentTime;
        }

        const nextRaf = requestAnimationFrame(tick);
        this.activeWorkers.set(pElement, { rafId: nextRaf, startTime });
      } else {
        // Clean resolution
        this.finalizeParagraph(pElement, text);
      }
    };

    const initialRaf = requestAnimationFrame(tick);
    this.activeWorkers.set(pElement, { rafId: initialRaf, startTime });
  }

  finalizeParagraph(pElement, text) {
    this.cancelWorker(pElement);
    pElement.dataset.decrypted = 'true';
    pElement.textContent = text;
    pElement.classList.add('resolved');

    // Safe injection of redaction markers now that geometry is finalized
    this.redactionEngine.applyRedactions(pElement.parentElement, this.currentTargets);
    this.updateReadingProgress();
  }

  cancelWorker(pElement) {
    if (this.activeWorkers.has(pElement)) {
      const { rafId } = this.activeWorkers.get(pElement);
      cancelAnimationFrame(rafId);
      this.activeWorkers.delete(pElement);
    }
  }

  cancelAll() {
    this.activeWorkers.forEach((worker) => {
      cancelAnimationFrame(worker.rafId);
    });
    this.activeWorkers.clear();
  }

  resolveEntireChapter(container = document.querySelector('#prose-viewport')) {
    this.cancelAll();
    if (this.observer) this.observer.disconnect();

    const paragraphs = (container || document).querySelectorAll('.prose-paragraph');
    paragraphs.forEach(p => {
      const fullText = p.dataset.raw || p.textContent.trim();
      p.textContent = fullText;
      p.dataset.decrypted = 'true';
      p.classList.add('resolved');
    });

    this.redactionEngine.applyRedactions(container, this.currentTargets);
    this.updateReadingProgress(1.0);
    sound.playTone(680, 0.08, 'sine', 0.02);
  }

  setMode(newMode) {
    if (['ritual', 'fast', 'instant'].includes(newMode)) {
      this.mode = newMode;
      localStorage.setItem('pm_decrypt_mode', newMode);
      if (newMode === 'instant') {
        this.resolveEntireChapter();
      }
    }
  }

  updateReadingProgress(forcedRatio = null) {
    const indicator = document.querySelector('#sticky-progress-indicator');
    if (!indicator) return;

    if (forcedRatio !== null) {
      indicator.style.width = `${Math.min(Math.max(forcedRatio, 0), 1) * 100}%`;
      return;
    }

    const total = document.querySelectorAll('.prose-paragraph').length;
    const resolved = document.querySelectorAll('.prose-paragraph.resolved').length;
    const ratio = total > 0 ? (resolved / total) : 0;
    indicator.style.width = `${ratio * 100}%`;
  }
}

/* ----------------------------------------------------------------------------
   4. READING FOCUS CONTROLLER (DIRECTIONAL HYSTERESIS)
   ------------------------------------------------------------------------- */
export class ReadingFocusController {
  constructor() {
    this.proseContainer = null;
    this.isActive = false;
    this.scrollThreshold = 180;
    this.boundScrollHandler = this.handleScroll.bind(this);
    this.boundKeyHandler = this.handleKeyDown.bind(this);
  }

  init(containerSelector = '#prose-viewport') {
    this.proseContainer = document.querySelector(containerSelector);
    if (!this.proseContainer) return;

    window.addEventListener('scroll', this.boundScrollHandler, { passive: true });
    window.addEventListener('keydown', this.boundKeyHandler);
  }

  destroy() {
    window.removeEventListener('scroll', this.boundScrollHandler);
    window.removeEventListener('keydown', this.boundKeyHandler);
    this.setFocusMode(false);
  }

  handleScroll() {
    if (!this.proseContainer) return;
    const rect = this.proseContainer.getBoundingClientRect();
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Asymmetric Hysteresis:
    // Activate when scrolled 180px down into prose
    if (scrollY > this.scrollThreshold && rect.top < 120 && !this.isActive) {
      this.setFocusMode(true);
    } 
    // Deactivate only when scrolled back up to top boundary
    else if ((scrollY <= this.scrollThreshold || rect.top > 160) && this.isActive) {
      this.setFocusMode(false);
    }
  }

  handleKeyDown(e) {
    // Esc is the universal exit hatch for reading focus
    if (e.key === 'Escape' && this.isActive) {
      this.setFocusMode(false);
    }
  }

  setFocusMode(activate) {
    if (this.isActive === activate) return;
    this.isActive = activate;

    document.body.classList.toggle('reading-active', activate);

    window.dispatchEvent(new CustomEvent('pm:reading-focus', {
      detail: { active: activate }
    }));
  }
}

/* ----------------------------------------------------------------------------
   5. TACTILE 2.5D GYRO / POINTER PARALLAX (MOTION-SAFE)
   ------------------------------------------------------------------------- */
export function initTactileInteractions() {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return;

  // Subtle pointer position tracking for CSS radial gradients
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  }, { passive: true });

  // 2.5D Tilt on Anchor & Marginalia Cards
  const bindTiltCards = (selector) => {
    document.querySelectorAll(selector).forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";

      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
          perspective(600px) 
          rotateX(${-y * 10}deg) 
          rotateY(${x * 10}deg) 
          translateY(-2px)
        `;
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  };

  bindTiltCards('.anchor-card');
  bindTiltCards('.marginalia-card');

  // Observer to auto-bind dynamically rendered cards
  const observer = new MutationObserver(() => {
    bindTiltCards('.anchor-card');
    bindTiltCards('.marginalia-card');
  });

  const rails = document.querySelector('#cockpit-workspace') || document.body;
  observer.observe(rails, { childList: true, subtree: true });
}

/* ----------------------------------------------------------------------------
   6. MODULE INITIALIZATION & CONVENIENCE EXPORTS
   ------------------------------------------------------------------------- */
export function initReadingFocusMode() {
  const controller = new ReadingFocusController();
  controller.init('#prose-container, #prose-viewport');
  return controller;
}