/**
 * PSYCHO-MONITOR // MK-03 RES-SYNC [ANOMALY: 088-ERIA]
 * Official YouTube Streaming Audio Engine, Oscilloscope & Tri-Harmonic Database
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. THE TRI-HARMONIC DATA VAULT (INFP 4w5 Narrative, Telemetry & YouTube IDs)
     ========================================================================== */
  const HARMONICS = {
    alpha: {
      id: "SEC-0093-α",
      themeClass: "theme-alpha",
      scope: { freq: "432.8 Hz", sync: "96.4%", noise: "0.012 µV" },
      
      // ⬇️ PUT YOUR YOUTUBE VIDEO ID FOR RIAN HERE (Default: Haruka Nakamura - Lamp)
      youtubeId: "ZgI2j9Fz7_8", 
      
      telemetry: {
        designation: "ORIGIN SOUL // RIAN",
        biologicalAge: "17 (at point of temporal termination)",
        birthplace: "Sunda Strait Maritime Sector, Earth",
        statusBadge: "PHYSICALLY VAPORIZED // SOUL DISPLACED",
        fields: [
          { label: "Temporal Origin", val: "March U.C. 0093 (The Axis Disaster)" },
          { label: "Vocation", val: "Civilian Marine Mechanic / Apprentice" },
          { label: "Psych Profile", val: "Deep survivor's guilt, extreme mechanical empathy, protective instinct." },
          { label: "Cellular Trace", val: "Negative (Original physical form completely dissolved into salt-ash)." },
          { label: "Psycho-Drift Duration", val: "26 Months unanchored within orbital Psycho-Field." }
        ],
        callout: "The subject retains absolute memory of the equatorial tidal surge and the exact thermal bloom that vaporized the Sunda shelf. Anchoring reflex remains tied to manual combustion engines."
      },
      memory: {
        source: "STREAM: SUNDA STRAIT COASTAL PIER // U.C. 0093",
        quote: "“The sea smelled like burnt two-stroke oil and salt before the sky tore open. I can still feel Maya’s wrist slipping away through my fingers as the seawall turned to dust.”",
        sensory: [
          { icon: "♨", label: "Olfactory", desc: "Burnt castor oil, fried mackerel, ozone from the incoming monsoon." },
          { icon: "✋", label: "Tactile", desc: "Grease worked deep beneath torn fingernails, hot aluminum cylinder heads." },
          { icon: "♬", label: "Acoustic", desc: "Tire bumpers creaking against wood pilings; blown radio speaker playing news." },
          { icon: "👁", label: "Visual", desc: "Molten glare erasing all shadows; the mountain of burning stone falling from orbit." }
        ],
        monologue: "I was seventeen. I was supposed to fix Pak Usman’s outboard motor by high tide and buy Maya her blue ink pens on Saturday. Now I’m trapped inside someone else’s delicate bones on the Moon, looking at hands that never held a wrench. I didn’t want a miracle. I just wanted to go home."
      },
      artifact: {
        render: () => `
          <div class="artifact-card">
            <div class="artifact-visual-box">
              <div class="notebook-page">
                <div class="notebook-lines"><strong>MAYA'S DRAWING BOOK — PAGE 14</strong></div>
                <div class="notebook-sketch-drawing">⛵ 〰〰 ☀</div>
                <div style="font-size: 11px; text-align: center; color: #405070; font-family: sans-serif;">
                  "Rian's fast boat. Keep out or I will tell Mama."
                </div>
              </div>
            </div>
            <p class="artifact-caption">
              <strong>RECOVERED DIGITAL TRACE:</strong> Scanned page from an 80-sheet sketchpad recovered from the wreckage of the Sunda pier. Preserved in personal neural telemetry cache.
            </p>
          </div>
        `
      }
    },

    beta: {
      id: "SEC-0095-β",
      themeClass: "theme-beta",
      scope: { freq: "684.2 Hz", sync: "88.1%", noise: "0.089 µV" },
      
      // ⬇️ PUT YOUR YOUTUBE VIDEO ID FOR JULIAN ROSS HERE (Default: Feryquitous - Dstorv)
      youtubeId: "J2p3o4uV7bQ", 
      
      telemetry: {
        designation: "TACTICAL SHADOW // LT. JULIAN ROSS",
        biologicalAge: "26 (at fatal cockpit collapse)",
        birthplace: "Side 6 Autonomous Colonies (Unregistered)",
        statusBadge: "TERMINATED // VESSEL RECONSTRUCTED",
        fields: [
          { label: "Service Record", val: "Anti-Anaheim Irregular Ace // Guerilla Interceptor" },
          { label: "Target Ledger", val: "42M Credits Anaheim logistics damage; 14 confirmed kills" },
          { label: "Combat Reflex Index", val: "Extreme (99.4th Percentile Kinetic Synchronization)" },
          { label: "Fatal Injury", val: "12-inch armor shard through pelvic bulkhead; hypovolemic shock" },
          { label: "Paracausal Anomaly", val: "Cellular condensation triggered during Psycho-Frame collapse" }
        ],
        callout: "The soldier’s personality dissolved upon death, but his lethal autonomic conditioning remains permanently burned into the motor cortex of the reconstructed host."
      },
      memory: {
        source: "STREAM: UNIT-03 COCKPIT CRASH SITE // U.C. 0095",
        quote: "“Anaheim bastards. You build weapons for both sides, sell the coffins, and cash the dividend. If I’m going down, I’m costing you a few billion credits first.”",
        sensory: [
          { icon: "♨", label: "Olfactory", desc: "Vaporized copper bus-bars, synthetic coolant, arterial blood in the footwell." },
          { icon: "✋", label: "Tactile", desc: "G-suit constricting broken ribs; cold rubberized control yokes vibrating." },
          { icon: "♬", label: "Acoustic", desc: "Flat, unbroken warning tone of reactor containment breach; steady rain outside." },
          { icon: "👁", label: "Visual", desc: "Hexagonal Psycho-Frame mesh glowing blinding white, collapsing inward like a dying star." }
        ],
        monologue: "When the triggers click into my fingers, my chest stops aching. My heartbeat drops to forty-eight beats a minute. Julian Ross’s dead hands take the levers, calculate trajectory angles, and pull the thermal blade without hesitating. It’s terrifying how easily his violence fits into my fingers."
      },
      artifact: {
        render: () => `
          <div class="artifact-card">
            <div class="artifact-visual-box">
              <div class="dogtag-plate">
                <div class="dogtag-hole"></div>
                <div class="dogtag-text">
                  <span>ROSS, JULIAN</span>
                  <span>LT. // 088-921-A</span>
                  <span>BLOOD: O-POS</span>
                  <span>STATUS: K.I.A. [FALSIFIED]</span>
                </div>
              </div>
            </div>
            <p class="artifact-caption">
              <strong>PHYSICAL SPECIMEN:</strong> Stamped titanium identity tag recovered from around the throat of the adolescent girl found in the wreck. Secretly preserved in Vincent Sterling's private safe.
            </p>
          </div>
        `
      }
    },

    gamma: {
      id: "SEC-0099-γ",
      themeClass: "theme-gamma",
      scope: { freq: "528.0 Hz", sync: "99.8%", noise: "0.004 µV" },
      
      // ⬇️ PUT YOUR YOUTUBE VIDEO ID FOR ERIA HERE (Default: Chouchou - Lunaria)
      youtubeId: "W98pX4t26eQ", 
      
      telemetry: {
        designation: "LIVING MASK // ERIA STERLING",
        biologicalAge: "19 (Current Chronological Host)",
        birthplace: "Von Braun City Metropolitan Core, Luna",
        statusBadge: "ACTIVE PILOT // TREASON COVER-UP",
        fields: [
          { label: "Legal Identity", val: "Daughter of Anaheim Senior Director Vincent Sterling" },
          { label: "Medical Cover", val: "Severe pulmonary trauma from terrestrial Axis ash inhalation" },
          { label: "Social Persona", val: "Sheltered lunar heiress, private scholar, patron of chamber music" },
          { label: "Nocturnal Anomaly", val: "Repeated unauthorized entries into subterranean garage facilities" },
          { label: "Summons Vector", val: "Black-wax linen envelope delivered by the Vist Foundation" }
        ],
        callout: "Subject exhibits severe identity fragmentation. In private quarters, uses an 8mm steel wrench on antique roadster engines to prevent psychological dissociation."
      },
      memory: {
        source: "STREAM: STERLING MANOR RESIDENCE // 02:40 AM U.C. 0099",
        quote: "“I wear cashmere sweaters, pour tea from silver pots, and kiss Mama on the cheek. But every night, I stare at the dark blue scar on Earth and know that if I slip up, they’ll shoot Vincent for treason.”",
        sensory: [
          { icon: "♨", label: "Olfactory", desc: "Earl Grey bergamot, expensive lunar dome lavender, faint smell of brake fluid." },
          { icon: "✋", label: "Tactile", desc: "Soft cashmere cuffs covering thin wrists; cold silver cutlery at gala dinners." },
          { icon: "♬", label: "Acoustic", desc: "The muffled hiss of atmospheric recirculators in the dome; Evelyn's gentle footsteps." },
          { icon: "👁", label: "Visual", desc: "The blue marble of Earth through the window—and the dark, drowned wound of Southeast Asia." }
        ],
        monologue: "Vincent held Clara’s empty casket six years ago. When he pulled me out of that cockpit, he didn’t see an enemy ace or a biological anomaly—he saw a child who needed a warm bed. They gave me five years of peace. If the Vist Foundation wants their ghost pilot back, I will burn half the solar system before I let them touch this family."
      },
      artifact: {
        render: () => `
          <div class="artifact-card">
            <div class="artifact-visual-box" style="background: radial-gradient(circle, #1a1e28 0%, #080a0f 100%);">
              <div style="border: 1px solid rgba(229,169,98,0.4); padding: 12px 18px; border-radius: 2px; text-align: center; max-width: 220px;">
                <div style="font-size: 20px; color: #e5a962; margin-bottom: 4px;">𐂂</div>
                <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: #ffd8a8;">VIST CIPHER: 088-ALPHA</div>
                <div style="font-size: 8px; color: #8899aa; margin-top: 4px;">BERTH 44 // 2400 HRS</div>
              </div>
            </div>
            <p class="artifact-caption">
              <strong>INTERCEPTED CIPHER KEY:</strong> Solid-state silver telemetry key accompanying the black-wax summons. Accepted at the Berth 44 launch gantry console to prime Unit-03's reactor.
            </p>
          </div>
        `
      }
    }
  };

  /* ==========================================================================
     2. YOUTUBE STREAMING ENGINE (IFrame API Integration)
     ========================================================================== */
  class YouTubeStreamEngine {
    constructor() {
      this.player = null;
      this.isReady = false;
      this.isPlaying = false;
      this.currentHarmonic = "alpha";

      this.initIframeAPI();
    }

    initIframeAPI() {
      // Create offscreen container for YouTube player
      const container = document.createElement("div");
      container.id = "yt-hidden-player";
      container.style.position = "fixed";
      container.style.top = "-9999px";
      container.style.left = "-9999px";
      container.style.width = "200px";
      container.style.height = "200px";
      container.style.opacity = "0.001";
      container.style.pointerEvents = "none";
      document.body.appendChild(container);

      // Dynamically load YouTube IFrame API script
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // YouTube API Callback
      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player('yt-hidden-player', {
          height: '200',
          width: '200',
          videoId: HARMONICS[this.currentHarmonic].youtubeId,
          playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': HARMONICS[this.currentHarmonic].youtubeId
          },
          events: {
            'onReady': () => {
              this.isReady = true;
            }
          }
        });
      };
    }

    playHarmonic(key) {
      this.currentHarmonic = key;
      const targetId = HARMONICS[key].youtubeId;

      if (this.isReady && this.player && this.player.loadVideoById) {
        if (this.isPlaying) {
          this.player.loadVideoById({
            videoId: targetId,
            suggestedQuality: 'small'
          });
        } else {
          this.player.cueVideoById(targetId);
        }
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
     3. PROCEDURAL OSCILLOSCOPE (Live Canvas Waveform & Flutter)
     ========================================================================== */
  class OscilloscopeVisualizer {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.currentHarmonic = "alpha";
      this.phase = 0;
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width * window.devicePixelRatio;
      this.canvas.height = rect.height * window.devicePixelRatio;
    }

    setHarmonic(harmonicKey) {
      this.currentHarmonic = harmonicKey;
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.ctx || !this.canvas) return;

      const w = this.canvas.width;
      const h = this.canvas.height;
      const mid = h / 2;

      this.ctx.clearRect(0, 0, w, h);
      this.phase += 0.035;

      let strokeColor = "rgba(229, 169, 98, 0.85)";
      let speedMult = 1.0;
      let complexity = 3;

      if (this.currentHarmonic === "beta") {
        strokeColor = "rgba(240, 84, 84, 0.9)";
        speedMult = 1.8;
        complexity = 5;
      } else if (this.currentHarmonic === "gamma") {
        strokeColor = "rgba(168, 184, 230, 0.85)";
        speedMult = 0.8;
        complexity = 2;
      }

      // Secondary Psycho-Frame leakage wave
      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgba(78, 240, 196, 0.25)";
      this.ctx.lineWidth = 1.5 * window.devicePixelRatio;
      for (let x = 0; x < w; x += 4) {
        const rad = (x / w) * Math.PI * 8 + this.phase * 0.7;
        const y = mid + Math.sin(rad * 0.5) * 16 * Math.cos(this.phase * 0.3);
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Primary active brainwave
      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeColor;
      this.ctx.lineWidth = 2 * window.devicePixelRatio;

      for (let x = 0; x < w; x += 3) {
        const norm = x / w;
        const wave1 = Math.sin(norm * Math.PI * 6 + this.phase * speedMult);
        const wave2 = Math.cos(norm * Math.PI * 12 - this.phase * 0.5) * 0.4;
        const wave3 = Math.sin(norm * Math.PI * 24 + this.phase * 2) * (complexity === 5 ? 0.25 : 0.08);
        const jitter = (Math.random() - 0.5) * 2.2;

        const amp = (h * 0.28);
        const y = mid + (wave1 + wave2 + wave3) * amp + jitter;

        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();
    }
  }

  /* ==========================================================================
     4. APPLICATION CONTROLLER & DOM BINDINGS
     ========================================================================== */
  class DossierApp {
    constructor() {
      this.activeHarmonicKey = "alpha";
      this.audio = new YouTubeStreamEngine();
      this.scope = new OscilloscopeVisualizer("waveform-canvas");

      // DOM Elements
      this.tabs = document.querySelectorAll(".harmonic-tab");
      this.audioToggleBtn = document.getElementById("audio-toggle-btn");
      this.audioLabel = document.getElementById("audio-label");
      
      this.scopeFreq = document.getElementById("scope-freq");
      this.scopeSync = document.getElementById("scope-sync");
      this.scopeNoise = document.getElementById("scope-noise");

      this.panelFileId = document.getElementById("panel-file-id");
      this.telemetryContent = document.getElementById("telemetry-content");
      this.memorySourceLabel = document.getElementById("memory-source-label");
      this.memoryQuoteText = document.getElementById("memory-quote-text");
      this.memorySensoryItems = document.getElementById("memory-sensory-items");
      this.internalMonologueText = document.getElementById("internal-monologue-text");
      this.artifactContent = document.getElementById("artifact-content");
      this.consoleStream = document.getElementById("console-stream");

      this.vistModal = document.getElementById("vist-modal");
      this.openModalBtn = document.getElementById("open-vist-modal-btn");
      this.closeModalBtn = document.getElementById("close-vist-modal-btn");
      this.ackModalBtn = document.getElementById("modal-acknowledge-btn");

      this.initEvents();
      this.render();
      this.startClock();
    }

    initEvents() {
      this.tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const key = tab.getAttribute("data-harmonic");
          if (key && HARMONICS[key]) {
            this.switchHarmonic(key);
          }
        });
      });

      if (this.audioToggleBtn) {
        this.audioToggleBtn.addEventListener("click", () => {
          const isPlaying = this.audio.toggle();
          this.audioToggleBtn.classList.toggle("active", isPlaying);
          this.audioToggleBtn.setAttribute("aria-pressed", isPlaying);
          if (this.audioLabel) {
            this.audioLabel.textContent = isPlaying ? "ACTIVE (STREAMING BGM)" : "STANDBY";
          }
        });
      }

      if (this.openModalBtn && this.vistModal) {
        this.openModalBtn.addEventListener("click", () => this.setModalVisible(true));
      }
      if (this.closeModalBtn && this.vistModal) {
        this.closeModalBtn.addEventListener("click", () => this.setModalVisible(false));
      }
      if (this.ackModalBtn && this.vistModal) {
        this.ackModalBtn.addEventListener("click", () => this.setModalVisible(false));
      }
      if (this.vistModal) {
        this.vistModal.addEventListener("click", (e) => {
          if (e.target === this.vistModal) this.setModalVisible(false);
        });
      }

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.vistModal && !this.vistModal.classList.contains("hidden")) {
          this.setModalVisible(false);
        }
      });
    }

    setModalVisible(visible) {
      if (!this.vistModal) return;
      this.vistModal.classList.toggle("hidden", !visible);
      this.vistModal.setAttribute("aria-hidden", !visible);
      if (this.consoleStream) {
        this.consoleStream.textContent = visible 
          ? "SECURITY BREACH // VIST CIPHER ENCRYPTED TELEMETRY INSPECTION ACTIVE"
          : "COCKPIT POD SEALED // MINOVSKY DRIFT NOMINAL // BERTH 44 CLEAR";
      }
    }

    switchHarmonic(key) {
      if (this.activeHarmonicKey === key) return;
      this.activeHarmonicKey = key;

      document.body.className = `cockpit-theme-ambient ${HARMONICS[key].themeClass}`;

      this.tabs.forEach(tab => {
        const isCurrent = tab.getAttribute("data-harmonic") === key;
        tab.classList.toggle("active", isCurrent);
      });

      this.scope.setHarmonic(key);
      this.audio.playHarmonic(key);

      this.render();
    }

    render() {
      const data = HARMONICS[this.activeHarmonicKey];
      if (!data) return;

      if (this.scopeFreq) this.scopeFreq.textContent = data.scope.freq;
      if (this.scopeSync) this.scopeSync.textContent = data.scope.sync;
      if (this.scopeNoise) this.scopeNoise.textContent = data.scope.noise;
      if (this.panelFileId) this.panelFileId.textContent = `FILE // ${data.id}`;

      if (this.telemetryContent) {
        let rowsHtml = data.telemetry.fields.map(f => `
          <tr>
            <td class="telemetry-label">${f.label}</td>
            <td class="telemetry-val">${f.val}</td>
          </tr>
        `).join("");

        this.telemetryContent.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <div>
              <div style="font-size: 13px; font-weight: 700; color: var(--theme-accent);">${data.telemetry.designation}</div>
              <div style="font-size: 10px; color: var(--text-dim);">${data.telemetry.birthplace}</div>
            </div>
            <span class="badge-accent">${data.telemetry.statusBadge}</span>
          </div>

          <table class="telemetry-table">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <div class="telemetry-callout">
            ${data.telemetry.callout}
          </div>
        `;
      }

      if (this.memorySourceLabel) this.memorySourceLabel.textContent = data.memory.source;
      if (this.memoryQuoteText) this.memoryQuoteText.textContent = data.memory.quote;

      if (this.memorySensoryItems) {
        this.memorySensoryItems.innerHTML = data.memory.sensory.map(s => `
          <div class="sensory-card">
            <div class="sensory-card-header">
              <span>${s.icon}</span>
              <span>${s.label}</span>
            </div>
            <div class="sensory-card-content">${s.desc}</div>
          </div>
        `).join("");
      }

      if (this.internalMonologueText) {
        this.internalMonologueText.innerHTML = `
          <div style="font-size: 9px; letter-spacing: 0.1em; color: var(--theme-accent); margin-bottom: 6px; text-transform: uppercase;">
            NEURAL RESIDUAL LOG // PRIVATE REFLECTION:
          </div>
          <div>${data.memory.monologue}</div>
        `;
      }

      if (this.artifactContent) {
        this.artifactContent.innerHTML = data.artifact.render();
      }

      if (this.consoleStream) {
        this.consoleStream.textContent = `HARMONIC ACTIVE: [${data.id}] // SYNCHRONIZING PSYCHO-FRAME BUS... OK`;
      }
    }

    startClock() {
      const clockEl = document.getElementById("mission-clock");
      const tapeEl = document.getElementById("tape-time");
      let tapeSeconds = 258.09;

      setInterval(() => {
        tapeSeconds += 0.1;
        const mins = Math.floor(tapeSeconds / 60).toString().padStart(2, '0');
        const secs = (tapeSeconds % 60).toFixed(1).padStart(4, '0');

        if (tapeEl) {
          tapeEl.textContent = `${mins}:${secs}`;
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

  document.addEventListener("DOMContentLoaded", () => {
    window.app = new DossierApp();
  });

})();
