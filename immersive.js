/** IMMERSION LAYER — loads after script.js, wraps window.app without editing it. */
(() => {
  'use strict';
  const X = {
    alpha: {
      echo: ["Pak Usman's outboard always coughed twice before it caught. Father said that's how you knew it was honest.", "The putty knife slipped once. The scar still sits across these knuckles. Whose knuckles.", "Maya's radio was reading the tide tables. Nobody was listening.", "The light came in white and the shadows left. I remember thinking the sea looked clean."],
      notes: ["Axis impact reached the Sunda shelf at noon. The pier sat inside the thermal bloom.", "Maritime school enrolment lapsed; exams taken externally so the shop could stay open.", "He talks to engines. This is not dissociation. It is the thing keeping him whole."],
      hidden: "MAYA // AGE 8 // LAST POSITION: SEAWALL, YELLOW DRESS. STATUS: UNRECORDED.",
      log: ["TIDAL SURGE REPLAY BUFFERED // CH-1", "TWO-STROKE RESONANCE @ 38 HZ // TRACE FOUND", "MEMORY SALINITY RISING", "MAYA'S SKETCHPAD CACHE: INTACT"]
    },
    beta: {
      echo: ["Vaporized copper has a taste. You don't forget it.", "Harness, ribs, yoke. The cockpit held him together until it didn't.", "That tone isn't a warning. It's a verdict.", "The mesh went white and I thought: finally, quiet."],
      notes: ["42M credits of damage was not revenge. It was arithmetic. He kept a ledger.", "The reflex outlived the man. It is the one thing Anaheim could not decommission.", "Cause of death filed. The vessel recovered was a living girl."],
      hidden: "DOGTAG 088-921-A FILED K.I.A. RECOVERY SIGNATURE FORGED. SIGNATORY: V. STERLING.",
      log: ["KINETIC SYNC 99.4 // REFLEX LATENT", "PSYCHO-FRAME MESH: COLLAPSE REPLAY", "HEART RATE DROPPING // 48 BPM", "UNAUTHORIZED MOTOR ACTIVITY SUPPRESSED"]
    },
    gamma: {
      echo: ["Evelyn leaves a cup on the landing at ten. I've never told her I'm awake.", "Cashmere hides the wrists. The wrists hide the strength.", "The recirculators hum in B-flat. I tuned a cello to it once.", "Earth looks calm from here. It isn't."],
      notes: ["Cover story approved by the Board. Pulmonary trauma explains the pallor and the missing years.", "Garage entries logged 02:00–04:00. Logged by Vincent, then deleted.", "Black wax, linen paper, no postage. Hand-delivered into a sealed house."],
      hidden: "BERTH 44 // 2400 HRS // REACTOR PRIMES ON KEY ACCEPT. SHE HAS NOT YET DECIDED.",
      log: ["HOUSEHOLD NOMINAL // 1ST RING QUIET", "UNAUTHORIZED GARAGE ENTRY // 02:40", "VIST FOUNDATION ECHO DETECTED", "FATHER'S SIGNATURE ON EVERYTHING"]
    }
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Tiny synthesized UI sounds, no assets needed */
  let ac;
  const beep = (f = 440, d = .07, type = 'square', v = .025) => {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g).connect(ac.destination); o.start(); o.stop(t + d);
    } catch (e) {}
  };

  const type = (el, text, speed = 12) => {
    if (!el) return;
    const id = el._tw = (el._tw || 0) + 1;
    if (reduce) { el.textContent = text; return; }
    let i = 0; el.classList.add('type-caret');
    (function step() {
      if (id !== el._tw) return;
      el.textContent = text.slice(0, i); i += 2;
      if (i <= text.length + 1) setTimeout(step, speed);
      else { el.textContent = text; el.classList.remove('type-caret'); }
    })();
  };
  const scramble = (el, text) => {
    const id = el._s = (el._s || 0) + 1, G = '█▓▒░#%&*01'; let n = 0;
    (function f() {
      if (id !== el._s) return;
      el.textContent = [...text].map((c, i) => (i < n || c === ' ') ? c : G[Math.random() * G.length | 0]).join('');
      n += 1.4;
      if (n < text.length + 1) setTimeout(f, 28); else el.textContent = text;
    })();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const app = window.app; if (!app) return;
    const $ = s => document.querySelector(s), keys = ['alpha', 'beta', 'gamma'];
    const scopeBox = $('.canvas-wrapper');
    const spike = () => { scopeBox.classList.remove('spike'); void scopeBox.offsetWidth; scopeBox.classList.add('spike'); };
    const say = t => { if (app.consoleStream) app.consoleStream.textContent = t; };

    /* cursor glow */
    const glow = document.createElement('div'); glow.className = 'cursor-glow'; document.body.appendChild(glow);
    addEventListener('pointermove', e => { document.body.style.setProperty('--mx', e.clientX + 'px'); document.body.style.setProperty('--my', e.clientY + 'px'); });

    /* decorate the freshly rendered panels */
    const enhance = () => {
      const x = X[app.activeHarmonicKey];
      document.querySelectorAll('.hud-panel').forEach(p => { p.classList.remove('enter'); void p.offsetWidth; p.classList.add('enter'); });
      type(app.memoryQuoteText, app.memoryQuoteText.textContent, 12);
      const mono = app.internalMonologueText.lastElementChild;
      if (mono) type(mono, mono.textContent, 8);

      app.memorySensoryItems.querySelectorAll('.sensory-card').forEach((c, i) => {
        c.tabIndex = 0; c.setAttribute('role', 'button');
        const e = document.createElement('div'); e.className = 'sensory-echo'; e.textContent = x.echo[i]; c.appendChild(e);
        const toggle = () => { c.classList.toggle('open'); beep(c.classList.contains('open') ? 660 : 330, .08, 'triangle'); spike(); if (c.classList.contains('open')) say('RECALL // ' + c.querySelector('.sensory-card-header').textContent.trim().toUpperCase() + ' CHANNEL OPENED'); };
        c.addEventListener('click', toggle);
        c.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle(); } });
      });

      [...app.telemetryContent.querySelectorAll('tbody tr')].slice(0, 3).forEach((row, i) => {
        row.classList.add('has-note'); row.title = 'Click to declassify';
        const n = document.createElement('tr'); n.className = 'note-row'; n.innerHTML = '<td colspan="2"></td>'; n.firstChild.textContent = x.notes[i];
        row.after(n);
        row.addEventListener('click', () => { row.classList.toggle('open'); beep(520, .06); });
      });

      const box = app.artifactContent.querySelector('.artifact-visual-box');
      if (box) {
        box.addEventListener('pointermove', e => { const r = box.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; box.style.transform = `perspective(600px) rotateY(${px * 20}deg) rotateX(${-py * 20}deg) scale(1.03)`; });
        box.addEventListener('pointerleave', () => box.style.transform = '');
      }
      const b = document.createElement('button'), out = document.createElement('div');
      b.className = 'decrypt-btn'; b.type = 'button'; b.textContent = '▸ DECRYPT HIDDEN ANNOTATION'; out.className = 'decrypt-out';
      b.addEventListener('click', () => { scramble(out, x.hidden); beep(180, .25, 'sawtooth'); spike(); say('DECRYPTING SECTOR NOTE...'); });
      app.artifactContent.append(b, out);
    };

    /* wrap render / switch / modal without touching script.js */
    const render = app.render.bind(app);
    app.render = () => { render(); enhance(); };
    const sw = app.switchHarmonic.bind(app);
    app.switchHarmonic = k => {
      if (k === app.activeHarmonicKey) return;
      sw(k);
      document.body.classList.add('switching'); setTimeout(() => document.body.classList.remove('switching'), 480);
      [330, 495, 660].forEach((f, i) => setTimeout(() => beep(f * (1 + keys.indexOf(k) * .25), .1, 'triangle', .03), i * 70));
      spike();
    };
    enhance();

    /* Vist modal: staged letter reveal + countdown */
    let left = 17 * 60 + 41, tick;
    const cd = document.createElement('span'); cd.className = 'countdown';
    $('#vist-modal .modal-footer').prepend(cd);
    const showCd = () => { const h = Math.floor(left / 3600), m = Math.floor(left % 3600 / 60), s = left % 60; cd.textContent = left > 0 ? `T-MINUS ${[h, m, s].map(v => String(v).padStart(2, '0')).join(':')}` : 'WINDOW CLOSED'; };
    const sm = app.setModalVisible.bind(app);
    app.setModalVisible = v => {
      sm(v); clearInterval(tick);
      if (!v) return;
      beep(90, .5, 'sawtooth', .04);
      document.querySelectorAll('#vist-modal .letter-meta span, #vist-modal .letter-text, #vist-modal .letter-stamp').forEach((el, i) => {
        el.style.animation = 'none'; void el.offsetWidth; el.style.animation = reduce ? '' : `lineIn .6s ${i * .3}s ease both`;
      });
      showCd(); tick = setInterval(() => { if (left > 0) left--; showCd(); }, 1000);
    };

    /* keyboard control */
    addEventListener('keydown', e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase(), cur = keys.indexOf(app.activeHarmonicKey), open = !app.vistModal.classList.contains('hidden');
      if (k === 'v') app.setModalVisible(!open);
      if (open) return;
      if (['1', '2', '3'].includes(k)) app.switchHarmonic(keys[+k - 1]);
      if (k === 'arrowright') app.switchHarmonic(keys[(cur + 1) % 3]);
      if (k === 'arrowleft') app.switchHarmonic(keys[(cur + 2) % 3]);
      if (k === 'm') app.audioToggleBtn.click();
    });
    document.querySelectorAll('.harmonic-tab').forEach(t => t.addEventListener('pointerenter', () => beep(880, .03, 'sine', .012)));
    $('#gate-ignite-btn')?.addEventListener('click', () => [220, 330, 440, 660].forEach((f, i) => setTimeout(() => beep(f, .15, 'triangle', .05), i * 90)));

    /* collapsible mini-player */
    const head = $('#yt-hud-widget > div'), slot = $('#yt-iframe-slot');
    if (head && slot) {
      const c = document.createElement('button'); c.className = 'yt-collapse'; c.type = 'button'; c.textContent = '–';
      c.addEventListener('click', () => { const shut = slot.style.height === '0px'; slot.style.height = shut ? '124px' : '0px'; c.textContent = shut ? '–' : '+'; });
      head.appendChild(c);
    }

    /* living console feed */
    setInterval(() => { if (app.vistModal.classList.contains('hidden')) { const l = X[app.activeHarmonicKey].log; say(l[Math.random() * l.length | 0]); } }, 5000);
  });
})();
