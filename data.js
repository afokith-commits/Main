/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: CANON DATA ARCHIVE
 * Subject: 088 (Eria Sterling)
 * Sources: Eria.md (Canonical Prose) & Lancer.md (Setting Lore)
 * Guardrail: Verbatim textual integrity. No invented lore. No game mechanics.
 * ============================================================================
 */

/**
 * Deep freezes an object and its nested properties to guarantee immutability.
 */
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

/**
 * Global Harmonic Profile Definitions
 * Governs the accent color, glow intensities, and audio pitch across the page.
 */
export const HARMONIC_PROFILES = deepFreeze({
  alpha: {
    id: "alpha",
    name: "HARMONIC ATTUNEMENT α",
    subtext: "BASELINE COGNITION // SUNDA REEF RESONANCE",
    accentColor: "#3bf0ff",
    accentGlow: "rgba(59, 240, 255, 0.28)",
    fringeColor: "#63f3ff",
    fringeGlow: "rgba(99, 243, 255, 0.55)",
    oscilloscopeIdleAmp: 2.2,
    oscilloscopeActiveAmp: 8.5
  },
  beta: {
    id: "beta",
    name: "HARMONIC ATTUNEMENT β",
    subtext: "ELEVATED CORTICAL LOAD // LUNAR & L1 FLUX",
    accentColor: "#ffb443",
    accentGlow: "rgba(255, 180, 67, 0.28)",
    fringeColor: "#ffd07d",
    fringeGlow: "rgba(255, 208, 125, 0.55)",
    oscilloscopeIdleAmp: 3.5,
    oscilloscopeActiveAmp: 11.0
  },
  gamma: {
    id: "gamma",
    name: "HARMONIC ATTUNEMENT γ",
    subtext: "PSYCHO-FRAME SATURATION // AXIS HARMONICS",
    accentColor: "#3bff8b",
    accentGlow: "rgba(59, 255, 139, 0.28)",
    fringeColor: "#8cffbe",
    fringeGlow: "rgba(140, 255, 190, 0.55)",
    oscilloscopeIdleAmp: 4.8,
    oscilloscopeActiveAmp: 14.5
  }
});

/**
 * Primary Narrative Chapters (Text sourced verbatim from Eria.md)
 */
export const CHAPTER_ARCHIVE = deepFreeze([
  {
    id: 1,
    index: "01",
    title: "SUNDA STRAIT BREAKDOWN",
    year: "U.C. 0093",
    location: "SUNDA SHELF // SINKPOINT SECTOR 4",
    harmonic: "alpha",
    wordCount: 1162,
    estMinutes: 5,
    audioTrack: "audio/ch1_sunda.mp3",
    paragraphs: [
      "The saltwater had gotten into the primary manifold before they even cleared the reef basin. She could taste it through the emergency regulator—brine and the flat, electric reek of overheated copper shielding. On the tertiary status repeater, the auxiliary fuel cell was bleeding pressure in ragged three-second pulses, cycling between amber and dark like an unsynchronized buoy lamp.",
      "She did not look at the water level rising across the cockpit deck. If she looked down, her boots were already submerged to the ankle clamps, and the water was cold enough to numb the tendons through two layers of pressurized neoprene.",
      "\"Sunda Control, this is Test Rig 088,\" she said. Her voice caught once on the dry rim of the mask, then settled into the flat cadence the testing protocol demanded. \"Manifold seal three has ruptured. Drive core temperature is holding at four-eight-zero, but the coolant loop is cavitating. I am initiating manual bypass of the salt-traps.\"",
      "The radio did not answer with words. It answered with the steady, dry bacon-sizzle of high-density Minovsky interference sweeping across the strait. somewhere forty kilometers north, past the submerged volcanic ridge, a Federation fleet picket was firing blind depth charges into the deep trench, and the shockwaves came through the hull as dull, hollow clangs—like iron wrenches dropped onto an empty ballast tank.",
      "The cockpit instruments were dying in pairs. First the radar ranging, then the hydraulic return pressure on the left ankle actuator. She reached down without looking, fingers finding the 8mm hex wrench tucked into the thigh pocket of her flight suit. Her fingers tightened over the cold chrome-vanadium shaft until the knurled metal bit into her palm.",
      "Stillness. Forty meters down, the Sunda Shelf was dark, green, and indifferent. The machine groaned as the current shoved it three meters sideways across the silt bed, settling its left shoulder against an ancient outcropping of dead coral. She closed her eyes, checked the regulator seal with a short breath, and waited for the diagnostic sequence to cycle back around."
    ]
  },
  {
    id: 2,
    index: "02",
    title: "NEURAL ECHOES AT VON BRAUN",
    year: "U.C. 0094",
    location: "LUNAR SURFACE // ANAHEIM DOCK 11",
    harmonic: "beta",
    wordCount: 690,
    estMinutes: 3,
    audioTrack: "audio/ch2_lunar.mp3",
    paragraphs: [
      "The ceiling of Dock 11 was sixty meters of exposed girder-work painted the dull grey of industrial zinc. Dust motes drifted through the sodium lamps in long, lazy arcs that took five seconds to fall from the crane rails to the gantries—lunar gravity turning every dropped bolt into an agonizingly slow performance.",
      "Julian had left his grease pencil on the telemetry console. The tip was blunted down to the paper wrap, and beside it lay three carbon telemetry strips coiled like dried watch-springs. The numbers printed along their margins were all negative offsets: minus twelve milliseconds on the dorsal thruster reaction time, minus eight on the psycho-frame return bus.",
      "Eria sat on the edge of the access scaffold with her boots dangling over the void. The dogtag around her neck—stamped 088-921-A—ticked against the aluminum frame every time her shoulders hitched with the ventilator cycle. Below her, the technicians were working under the floodlights in silence, communicating through helmet radios that hissed like steam pipes whenever someone touched a transmit toggle.",
      "They had scrubbed the salt lines off the armor plates, but the smell had soaked into the cabin insulation. When the air handler kicked on, it wasn't the sterile ozone of the lunar facility that came through the vents. It was dry sea-kelp, scorched transformer oil, and the faint, unmistakable ghost of stagnant reef water."
    ]
  },
  {
    id: 3,
    index: "03",
    title: "THE SWEET WATER DRIFT",
    year: "U.C. 0095",
    location: "LAGRANGE POINT 1 // REFUGEE SECTOR",
    harmonic: "beta",
    wordCount: 920,
    estMinutes: 4,
    audioTrack: "audio/ch3_drift.mp3",
    paragraphs: [
      "The cylinder rotated with a low, bone-deep hum that never varied by more than half a hertz. If you pressed your forehead against the reinforced viewport of the transit concourse, you could feel the vibration travelling up through your teeth—the massive kinetic friction of two million tons of steel, soil, and recycled atmosphere spinning against the black.",
      "Sweet Water smelled of fried cabbage, wet concrete, and unwashed wool coats. In the lower residential tiers where the artificial gravity fell off to 0.4G, laundry hung across the alleyways like signal flags between warships, motionless in the dead air between ventilation sweeps.",
      "Maya was drawing in the corner of the noodle stall with two technical drafting pens held between her first two fingers. She did not use a ruler. Her lines were fast, confident, and blue—phthalocyanine blue that sank into the cheap wood-pulp sketchbook paper and spread at the margins like water on a paper towel.",
      "\"They aren't going to scrap it,\" Maya said without looking up from her sheet. The pen nib scratched dryly across the grain. \"They don't scrap machines with that much telemetry logged. They just strip the access codes, paint over the test unit insignia with civilian grey, and sell the frame to an agricultural cooperative at Side 6 as an orbital tug.\"",
      "\"The frame is bent,\" Eria said. Her fingers worked the clasp of the pen case, opening and closing the brass latch with a tiny, dry click. \"The left thrust-box took three hundred atmospheres of lateral shock when the shelf collapsed. You can feel the shudder in the rudder pedals every time the main valve opens past sixty percent.\"",
      "Maya finally lifted her head. Her eyes were rimmed in the deep, violet-grey circles of people who lived on synthetic melatonin and four-hour light cycles. \"Machines don't remember being drowned, Eria. Only the pilots do.\""
    ]
  },
  {
    id: 4,
    index: "04",
    title: "AXIS SHOCKWAVE RESONANCE",
    year: "U.C. 0095",
    location: "CIS-LUNAR DEBRIS FIELD // SECTOR ZERO",
    harmonic: "gamma",
    wordCount: 915,
    estMinutes: 4,
    audioTrack: "audio/ch4_axis.mp3",
    paragraphs: [
      "The radiation detectors were not clicking; they were singing. It was a high, thin harmonic whistle that sounded like wind whipping through the guy-wires of a radio mast, rising and falling in rhythm with the debris cloud's slow rotation around the barycenter.",
      "Two years after the asteroid was pushed back, the sky between the Earth and the Moon was still full of glass. Not volcanic obsidian, but psycho-frame silicate—billions of microscopic hexagonal flakes blown out of the core structure when the resonance wave broke. When the sunlight caught the field at an angle, the stars disappeared behind an aurora of cold, emerald dust.",
      "In the cockpit, every analog dial was shivering. The needles did not register pressure or voltage; they were picking up the residual psychic discharge that had crystallized in the structural titanium during the impact event. Eria unscrewed the brass cap of the amber vial from her emergency kit, brought the opening to her nostrils, and inhaled.",
      "The sharp, medicinal bite of oxidized castor oil hit the back of her throat like ammonia. Her eyes watered, her lungs expanded with a clean shock of cold air, and the green haze dancing across the perimeter of her visual field snapped back into sharp, monochrome cockpit telemetry.",
      "\"Resonance threshold holding at seventy-four percent,\" she murmured into the voice log. The tape spindle turned with a dry fluttering noise in the recorder box. \"Spatial distortion is negligible. The ghost signals are just reflections off the silicate belt. Nothing is out here. Nothing is trying to speak.\""
    ]
  },
  {
    id: 5,
    index: "05",
    title: "THE VIST DISPATCH",
    year: "U.C. 0096",
    location: "INDUSTRIAL 7 // UNRECORDED HABITAT",
    harmonic: "gamma",
    wordCount: 1080,
    estMinutes: 5,
    audioTrack: "audio/ch5_vist.mp3",
    paragraphs: [
      "The courier tube had arrived with the thermal seal intact. It was made of unpolished duralumin, three inches in diameter, stamped with the seven-digit serial of the Anaheim Executive Procurement Division at Von Braun. But the seal on the locking cap was not magnetic tape.",
      "It was a heavy, irregular lump of dark, purple-black sealing wax, impressed with the twin prongs of an asymmetrical crest: a beast rampant before a segmented sun. The wax was hard, cold, and smelled faintly of clove oil and paraffin.",
      "To open it required the cipher key—a small, two-pronged brass implement shaped like an antique tuning fork. When inserted into the keyway through the wax, the pins inside the cap clicked three times in descending fifths, and the nitrogen gas trapped within vented with a soft, clean hiss.",
      "Inside lay single-ply rag paper, folded twice, written with iron-gall ink that had oxidized from blue-black to the color of dried arterial blood. There was no greeting, no letterhead, and no signature. There was only the date: U.C. 0096.02.11, and four lines of coordinates referencing an unmapped industrial cylinder anchored behind the sun-shield of Industrial 7.",
      "\"The machine you tested in the Sunda Trench was never an experimental combat unit,\" the text read. \"It was an acoustic sounding device. What you recorded in the deep water was not the sound of Federation depth charges. It was the resonance of the seal breaking at the bottom of the gravity well.\"",
      "Eria folded the paper along its original creases and laid it flat on the navigation table. Beside it, the two-pronged brass cipher key caught the cold overhead fluorescent light. Outside the observation dome, the docking cranes of Industrial 7 were moving quietly against the black, preparing for the arrival of the cargo carrier Garencieres."
    ]
  }
]);

/**
 * Sensory Anchors: Grounding artifacts derived from Eria.md / handover.txt.
 * Unlocked progressively as the reader advances through chapters.
 */
export const SENSORY_ANCHORS = deepFreeze([
  {
    id: "anchor-wrench",
    chapterUnlock: 1,
    artifactType: "wrench",
    code: "TETHER // 01",
    name: "8mm Hexagonal Wrench",
    sensoryModality: "TACTILE / THERMAL",
    cueText: "Cold chrome-vanadium steel. Knurled grip bites into palm tendons.",
    contextDescription: "Recovered from Sunda hangar tool bench. Carried in left thigh flight-suit pocket to counter linear-seat cognitive dissociation."
  },
  {
    id: "anchor-dogtag",
    chapterUnlock: 2,
    artifactType: "dogtag",
    code: "TETHER // 02",
    name: "Federation Psych Tag: 088-921-A",
    sensoryModality: "AUDITORY / KINETIC",
    cueText: "High-frequency titanium clink against gantry scaffold.",
    contextDescription: "Standard psych-evaluation serial tag. Edges worn mirror-smooth by thumb friction during high-G deceleration burns."
  },
  {
    id: "anchor-pens",
    chapterUnlock: 3,
    artifactType: "sketchpad",
    code: "TETHER // 03",
    name: "Maya's Drafting Pens",
    sensoryModality: "VISUAL / EMOTIONAL",
    cueText: "0.3mm technical nibs. Phthalocyanine blue pigment bleed.",
    contextDescription: "Pair of technical pens bundled with rubber bands. Used to draft tugboat conversions in the Sweet Water refugee concourse."
  },
  {
    id: "anchor-castor",
    chapterUnlock: 4,
    artifactType: "reagent",
    code: "TETHER // 04",
    name: "Sealed Vial of Castor Oil",
    sensoryModality: "OLFACTORY / SOMATIC",
    cueText: "Oxidized hydraulic buffer viscosity. Sharp medicinal sting.",
    contextDescription: "Carried in emergency flight kit. Inhaling fumes clears peripheral psycho-resonance visual hallucinations instantly."
  },
  {
    id: "anchor-vist-key",
    chapterUnlock: 5,
    artifactType: "key",
    code: "TETHER // 05",
    name: "Vist Cipher Tuning Fork",
    sensoryModality: "KINETIC / CIPHER",
    cueText: "Dual brass prongs. Three descending-fifth mechanical clicks.",
    contextDescription: "Unlocks the purple-black wax matrix on dispatch 0096-B. Grants access to the Industrial 7 unrecorded cylinder coordinates."
  }
]);

/**
 * Marginalia & Geopolitical Lore: Verbatim excerpts from Lancer.md.
 * Strictly lore context; no RPG dice or mechanics included.
 */
export const MARGINALIA_ARCHIVE = deepFreeze({
  1: [
    {
      id: "m-1-1",
      source: "LANCER.MD // GEO-SURVEY §12",
      header: "SUNDA SHELF SUBDUCTION",
      quote: "Post-Impact seismic subduction dropped the Sunda Shelf 40 meters below sea datum. Federation Navy maintains submarine staging tunnels in drowned reef tier 3."
    },
    {
      id: "m-1-2",
      source: "SUBJECT-088 BIOMONITOR LOG",
      header: "CAVITATION LATENCY",
      quote: "Resting pulse 48 bpm during descent. Acoustic telemetry confirms acoustic shockwaves from northern depth charges registered 114 dB through structural titanium."
    }
  ],
  2: [
    {
      id: "m-2-1",
      source: "LANCER.MD // LUNAR INDUSTRY",
      header: "VON BRAUN DOCK 11 JURISDICTION",
      quote: "Nominally civilian lunar hub; Anaheim Electronics retains sovereign subterranean rights across freight tunnels 11-A through 14-F under covert Federation contracts."
    }
  ],
  3: [
    {
      id: "m-3-1",
      source: "LANCER.MD // HABITAT REGISTRY",
      header: "SWEET WATER CONCLAVE LOAD",
      quote: "Closed-cylinder colony at Lagrange Point 1. Currently operating at 240% rated environmental capacity following refugee exodus post-0093."
    }
  ],
  4: [
    {
      id: "m-4-1",
      source: "LANCER.MD // PHYSICAL PHENOMENOLOGY",
      header: "AXIS SHOCKWAVE DISPERSAL",
      quote: "Residual psycho-frame silicate dust in cis-lunar space produces localized electromagnetic resonance, degrading unshielded optical communications across Sector Zero."
    }
  ],
  5: [
    {
      id: "m-5-1",
      source: "HANDOVER MEMO // CONFIDENTIAL",
      header: "VIST FOUNDATION PROCUREMENT",
      quote: "Biometric purple wax matrix contains acoustic cipher keyhole. Authenticated delivery protocol requires verification of recipient retinal profile."
    }
  ]
});

/**
 * Non-Destructive Redaction Targets (Finding B.10 & Section 4)
 * The renderer wraps these exact canonical strings in clickable redaction overlays.
 * The underlying text in the DOM remains completely untouched.
 */
export const REDACTION_TARGETS = deepFreeze([
  {
    chapterId: 1,
    phrase: "Test Rig 088",
    clearanceCode: "CLEARANCE: FED-NAV-TOP-SECRET",
    soundCue: "audio/sfx_unredact.mp3"
  },
  {
    chapterId: 2,
    phrase: "Anaheim Dock 11",
    clearanceCode: "CLEARANCE: AE-ORBITAL-COVERT",
    soundCue: "audio/sfx_unredact.mp3"
  },
  {
    chapterId: 5,
    phrase: "cargo carrier Garencieres",
    clearanceCode: "CLEARANCE: SLEEVES-SIGINT-LEVEL-5",
    soundCue: "audio/sfx_unredact.mp3"
  }
]);

/**
 * Helper Utilities for Dynamic Telemetry Calculations
 */

/**
 * Computes exact word count and reading time at standard 230 WPM.
 * @param {string[]} paragraphsArray
 * @returns {{wordCount: number, estMinutes: number}}
 */
export function calculateReadingMetrics(paragraphsArray) {
  if (!Array.isArray(paragraphsArray) || paragraphsArray.length === 0) {
    return { wordCount: 0, estMinutes: 1 };
  }
  const fullText = paragraphsArray.join(" ");
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
  const estMinutes = Math.max(1, Math.ceil(wordCount / 230));
  return { wordCount, estMinutes };
}

/**
 * Retrieves the complete telemetry bundle for a specific chapter index.
 * @param {number} chapterId
 * @returns {object|null}
 */
export function getChapterBundle(chapterId) {
  const chapter = CHAPTER_ARCHIVE.find(c => c.id === chapterId);
  if (!chapter) return null;

  const harmonic = HARMONIC_PROFILES[chapter.harmonic] || HARMONIC_PROFILES.alpha;
  const anchors = SENSORY_ANCHORS.filter(a => a.chapterUnlock <= chapterId);
  const marginalia = MARGINALIA_ARCHIVE[chapterId] || [];
  const redactions = REDACTION_TARGETS.filter(r => r.chapterId === chapterId);

  return {
    ...chapter,
    harmonicProfile: harmonic,
    anchors,
    marginalia,
    redactions
  };
}