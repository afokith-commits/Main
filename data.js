/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: CANON DATA & DIEGETIC SOUNDTRACK LAYER
 * Subject: 088 (Marianne Lindemann // Adrian Sagara // Lt. Soren Hayes)
 * Sources: Charcon.md (Canon) & Curated Ambient Playlist Matrix
 * Architecture: Clean In-Prose Stream (Decrypted Narrative Telemetry)
 *
 * THIS FILE IS THE SOURCE OF TRUTH FOR THE STORY.
 * All narrative prose, the GM briefing, and every on-screen label that
 * carries story content live here. index.html only supplies structure;
 * script.js renders what this module exports. Edit the story here first.
 * ============================================================================
 */

function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

/**
 * Harmonic Consciousness Profiles
 * Automatically shifts UI tokens, phosphor glow, diagnostic metrics,
 * channel highlights, and oscilloscope waveform physics.
 */
export const HARMONIC_PROFILES = deepFreeze({
  alpha: {
    key: "alpha",
    code: "HARMONIC α // SEC-0093-α",
    identity: "ADRIAN SAGARA // SUNDA STRAIT (U.C. 0093)",
    origin: "U.C. 0093 // SINKPOINT COAST",
    accentColor: "#e5a962",
    accentGlow: "rgba(229, 169, 98, 0.38)",
    accentDim: "rgba(229, 169, 98, 0.12)",

    // Telemetry Diagnostics
    scopeFreq: "432.8 Hz",
    scopeSync: "96.4%",
    scopeNoise: "0.012 µV",
    scopeStatus: "CONSCIOUSNESS: ENTANGLED // SUNDA SHELF",
    activeChannel: "channel-1", // CH-1: MEMORY SALINITY
    wavePhysics: {
      speed: 1.0,
      complexity: 3,
      jitterAmp: 1.5,
      carrierFreq: 6,
      modulationFreq: 12
    }
  },
  beta: {
    key: "beta",
    code: "HARMONIC β // SEC-0095-β",
    identity: "HAYES, SOREN — LT. / 088-417-H",
    origin: "U.C. 0095 // SUNDA SINK TRENCH",
    accentColor: "#f05454",
    accentGlow: "rgba(240, 84, 84, 0.42)",
    accentDim: "rgba(240, 84, 84, 0.14)",

    // Telemetry Diagnostics
    scopeFreq: "684.2 Hz",
    scopeSync: "88.1%",
    scopeNoise: "0.089 µV",
    scopeStatus: "CONSCIOUSNESS: OVERCHARGE // UNIT-03",
    activeChannel: "channel-2", // CH-2: TRIGGER MOTOR REFLEX
    wavePhysics: {
      speed: 1.85,
      complexity: 6,
      jitterAmp: 4.8,
      carrierFreq: 9,
      modulationFreq: 24
    }
  },
  gamma: {
    key: "gamma",
    code: "HARMONIC γ // SEC-0099-γ",
    identity: "MARIANNE LINDEMANN // VON BRAUN CITY",
    origin: "U.C. 0099 // LINDEMANN MANOR",
    accentColor: "#a8b8e6",
    accentGlow: "rgba(168, 184, 230, 0.38)",
    accentDim: "rgba(168, 184, 230, 0.12)",

    // Telemetry Diagnostics
    scopeFreq: "528.0 Hz",
    scopeSync: "99.8%",
    scopeNoise: "0.004 µV",
    scopeStatus: "CONSCIOUSNESS: ENTANGLED // BERTH 17",
    activeChannel: "channel-3", // CH-3: BIOLOGICAL VESSEL
    wavePhysics: {
      speed: 0.75,
      complexity: 2,
      jitterAmp: 0.8,
      carrierFreq: 5,
      modulationFreq: 8
    }
  }
});

/**
 * CANON DOSSIER
 * The single source of truth for story-level facts that appear in more than
 * one place (the GM briefing drawer, the character bible, chapter prose).
 * Anything that can drift out of sync belongs here, not inline in markup.
 */
export const CANON = deepFreeze({
  subject: {
    registryName: "Marianne Lindemann",
    birthName: "Rian",
    petName: "Ria",
    soulName: "Adrian Sagara",
    coverIdentity: "Lt. Soren Hayes",
    callSign: "088-417-H",
    clearance: "AE-088-MARIANNE"
  },

  /**
   * GM BRIEFING — rendered into the slide-over drawer by script.js.
   * Kept in prose, not markup, so the story stays in one file.
   */
  briefing: [
    "In U.C. 0093, seventeen-year-old Adrian Sagara (\"Rian\") was a harbor hand on the Sunda Strait, hauling cargo and tying off boats for his lame father, until the Axis impact obliterated his home and family. His soul drifted until U.C. 0095, when a skirmish in the flooded Sunda Sink left rogue ace Lt. Soren Hayes dying inside an experimental Psycho-Frame prototype built by Anaheim under classified commission from the Vist Foundation. The runaway Psycho-Field caused Hayes's cellular collapse; the cockpit's Augusta bio-amniotic gel drew in Adrian's drifting consciousness, reconstituting an unspecialized juvenile female body.",
    "Anaheim Senior Director Dietrich Lindemann arrived to confirm the casualty and secure the black box. Finding the undocumented survivor, he thermited the wreck, logged Hayes as incinerated, and smuggled the girl home to the Moon. In Von Braun City he gave her sovereign legal shelter as his own daughter, \"Marianne Lindemann.\" The household quickly shortened it to \"Ria\"—a German diminutive, spoken every morning over coffee by a man who never knew he was calling the dead boy by his own birth name.",
    "By U.C. 0099, nineteen-year-old Marianne lives a calculated existence in Von Braun, using Dietrich's executive status as a shield against Anaheim's Internal Disposal Bureau (\"Cleaners\"), who hold an active liquidation order on Hayes. When an encrypted summons from the Vist Foundation arrives on Hayes's backdoor frequency, Marianne slips away to Colony SF at Side 4 to preserve Dietrich's plausible deniability—ready to step into Hayes's flight suit and buy her permanent civilian freedom."
  ],

  /**
   * TALENT / ABILITY REGISTER
   * Deliberately EMPTY. The narrative states WHAT she can do but never WHY
   * or HOW — the mechanism is intentionally left undefined so the operator
   * can ideate the specialty, origin, and rules of her capabilities.
   * Anything added here should be treated as a canon note, not prose.
   */
  talents: [],

  /**
   * STATIC COCKPIT LABELS
   * Non-narrative chrome strings that still belong to the story layer so
   * index.html stays purely structural.
   */
  chrome: {
    testbed: "TESTBED: UNIT-03",
    frameBadge: "UNSHIELDED PSYCHO-FRAME",
    briefingEyebrow: "EYES ONLY // GAME MASTER",
    briefingCipher: "TRANSMISSION: ANAHEIM / VIST FOUNDATION CIPHER",
    chapterTheaterPrefix: "CHAPTER",
    logPrefix: "LOG",
    mastheadIdentity: "ADRIAN // THE SALTWATER SOUL",
    docTitle: "PSYCHO-MONITOR MK-03 // SUBJECT 088",
    docDescription: "ANAHEIM ELECTRONICS // CLASSIFIED TELEMETRY: Tri-Harmonic Psycho-Frame Synchronization Log. Subject 088 [Marianne Lindemann]. Clearance AE-088-MARIANNE.",
    themeColor: "#05070a"
  }
});

/**
 * Master Chapter Registry
 * Tied to diegetic soundtracks and sensory annotations.
 */
export const CHAPTER_REGISTRY = deepFreeze([
  {
    id: 1,
    index: "01",
    title: "THE WATER AND THE SALT",
    year: "U.C. 0093",
    theater: "SUNDA STRAIT // SINKPOINT COAST",
    harmonic: "alpha",
    soundtrack: {
      title: "Ocean Foam (浪沫撫過礫石灘)",
      artist: "Cicada",
      album: "Ocean",
      youtubeId: "QpRuSDvorBc"
    },
    annotations: [
      {
        afterParagraph: 4,
        type: "subconscious",
        tag: "TACTILE MEMORY // TETHER 01",
        label: "DRIED BRINE & TIDAL DRIFT",
        content: "White crust of dried salt along the wrists and knuckles. The rough bite of wet hemp rope against sunburnt palms. The way the deck seems to tilt when the boat stops moving, so a body that balanced on shifting timber for two years still expects the floor to rise."
      }
    ],
    paragraphs: [
      "Adrian sat on an overturned crate at the end of the pier with a wet plank across his knees, scraping barnacles off it with a flat iron scraper that had been bent back into shape more than once.",
      "\"Pelan-pelan, Rian. Jangan sampai kayunya kegores,\" his father said without looking up. He sat five paces away on a low stool, sorting brass fittings into an old biscuit tin. The shed was nothing but a cracked concrete slab under a tin roof, bolted to the pilings and jutting out over the brown water of the Sunda Strait. Below them, the long fishing boats knocked against their tyre fenders every time the noon swell came in.",
      "\"Nggak bakal kegores, Pak,\" Adrian said. \"Teritipnya keras banget. Pak Usman nggak pernah bersihin bawah perahunya habis sandar.\"",
      "He was seventeen, tall and thin, his skin the colour of something left too long in the sun, salt worked permanently into the creases of his knuckles. A stack of used school notebooks lay under the bench, half swollen from the damp. But since his father's knees went bad two years back, Adrian had spent more daylight hauling crates and tying off moorings than he had sitting in any classroom.",
      "The kitchen door creaked open.",
      "\"Makan dulu, kata Emak,\" called Maya. She was eight, barefoot, both knees scabbed from old falls, carrying a tin tray of white rice, stir-fried kangkung and fried fish. \"Cuci tangan dulu, Bang Rian. Kemarin buku gambarku kena cap jempol kotor.\"",
      "\"Kamu sendiri yang naruh bukumu di bangku kerjaku, Cil,\" Adrian shot back, but he rinsed his arms under the hand pump by the door and took his plate anyway.",
      "On the shelf above the tools, an old radio crackled through a speaker that had torn years ago.",
      "\"...Mengulang siaran darurat. Unit pertahanan orbital Londo Bell telah mencegat pasukan Neo-Zeon di dekat asteroid Axis. Pihak berwenang memastikan bahwa lintasan jatuh telah berhasil dialihkan. Diulangi: tidak ada perintah evakuasi untuk penduduk sipil di sektor khatulistiwa...\"",
      "His father grunted and flicked his wet hands toward the radio. \"Orang-orang Spacenoid. Kerjanya cuma ribut rebutan kaleng rongsok di langit. Kayak orang daratan punya waktu buat mikirin politik mereka saja.\"",
      "\"Robot-robot itu tingginya delapan belas meter, Pak,\" Adrian said through a mouthful of fish. \"Sekali injak, satu kampung rata.\"",
      "\"Titanium nggak bisa dimakan, Tong. Habisin nasimu.\"",
      "Adrian drank his sweet iced tea and looked out at the flat calm of the sea.",
      "Then the light came.",
      "No sound at all. The shadow under the tin roof vanished, wiped away by a flash so bright the sea turned white and went out. Adrian got a forearm over his face. His skin went hot and stinging, as if someone had pushed it straight into a furnace.",
      "High above the clouds the sky tore open. A black rock the size of a mountain, burning, dragging a tail of fire dozens of kilometres long, came straight down toward the southern horizon.",
      "His father dropped the brass fitting. His rough hand closed hard around Maya's shoulder.",
      "\"Masuk ke balik tembok pemecah ombak,\" his father said. His voice came out flat, drained. \"Rian. Cepat.\"",
      "\"Bapak?\" Maya squinted upward, her hand crushing the leg of her brother's shorts. \"Mataku perih... itu apa?\"",
      "Then the shockwave arrived.",
      "The tin roof peeled off the shed in a single instant, the shriek of tearing nails loud enough to split an eardrum. The bay water boiled into white mist, and the fishing boats snapped like dry bamboo. Adrian reached out with his salt-crusted hand for his sister's wrist, and the pier gave way under his bare feet into heat and burning dust.",
      "Then everything went dark."
    ]
  },
  {
    id: 2,
    index: "02",
    title: "THE GHOST AND THE PROTOTYPE",
    year: "U.C. 0095",
    theater: "SUNDA SINK // FLOODED IMPACT TRENCH",
    harmonic: "beta",
    soundtrack: {
      title: "Gallantry and Recapitulation",
      artist: "Kevin Penkin",
      album: "Made in Abyss OST 1",
      youtubeId: "T_jgBbCsdeU"
    },
    annotations: [
      {
        afterParagraph: 11,
        type: "subconscious",
        tag: "AUDITORY MEMORY // TETHER 02",
        label: "DOGTAG 088-417-H",
        content: "Stamped steel plate vibrating against a thin collarbone. HAYES, SOREN — LT. / 088-417-H."
      }
    ],
    paragraphs: [
      "The cockpit was full of dark, lukewarm fluid.",
      "Lt. Soren Hayes was strapped into the linear seat of an unregistered prototype, bleeding out through shrapnel holes in his chest. The frame lay wedged in a mud-choked trench somewhere in the flooded Sunda Sink, and around him the machine's pressurized bio-amniotic gel was already turning red. It was an Augusta-designed life-support medium, meant to sustain Cyber-Newtype pilots through catastrophic G-forces and trauma, and it was running out of time along with the man in it.",
      "The unit's Psycho-Frame was running wild.",
      "The green hexagonal plates along the inner frame hummed at a frequency Hayes felt in his molars. Nothing about it was an electrical fault; the psychic field was feeding on his collapsing vitals and burning out of control into a localized Psycho-Field. Under the crushing resonance his body gave out, his adult cellular structure dissolving directly into the suspension gel around him.",
      "The system was left running on empty, its Psycommu receiver screaming for an input.",
      "Two years in the dead zone above the Sunda Sink, Adrian Sagara had been drifting with nothing left of him but memory: salt spray, fried fish, and his sister's voice. When the Psycho-Frame overcharged, it pulled him down like an undertow.",
      "The prototype's automated medical core engaged.",
      "Detecting an active neural wave in the cabin, the emergency system drew on the bio-gel's synthetic stem cells to reconstitute a pilot. But with Hayes's genetic template collapsing and the incoming brainwave signature completely different, the automated process glitched. It synthesized a basic, unspecialized juvenile baseline to house the consciousness it had caught.",
      "The green glow faded.",
      "The linear seat fell quiet, save for the low hum of backup power.",
      "Sitting in the oversized harness, buried in a soldier's flight suit that bagged around her like an empty sack, was an adolescent girl of around fourteen or fifteen. Her breathing was faint. Her hair was matted with drying chemical gel, and around her thin neck hung a dog tag that had never belonged to her.",
      "HAYES, SOREN — LT. / 088-417-H"
    ]
  },
  {
    id: 3,
    index: "03",
    title: "THE SIN OF DIRECTOR LINDEMANN",
    year: "U.C. 0095",
    theater: "SUNDA SINK // RECOVERY PERIMETER",
    harmonic: "beta",
    soundtrack: {
      title: "Rainy Song (String Ver.)",
      artist: "Tomoya Naka",
      album: "Rainy Song",
      youtubeId: "yee1HACD1HE"
    },
    annotations: [
      {
        afterParagraph: 13,
        type: "subconscious",
        tag: "VISUAL MEMORY // CLARA LINDEMANN",
        label: "THE SINGAPORE IMPACT",
        content: "March U.C. 0093. Clara was twelve, boarding school outside Singapore, when the Axis stone struck. They put an empty bronze casket in the Von Braun Memorial Garden."
      }
    ],
    paragraphs: [
      "Rain hammered against the hull of the recovery shuttle.",
      "Senior Director Dietrich Lindemann stood in the mud in a ruined wool overcoat, watching his security contractors pry the buckled chest armor off the wrecked prototype. He was an executive director at Anaheim Electronics, and he had come to clean up a disaster. Soren Hayes had stolen a classified machine built for the Vist Foundation, and Anaheim's Internal Disposal Bureau wanted the pilot dead and the black box secured.",
      "The hatch gave with a wet hiss of pneumatic pressure. Gallons of pink, cloudy bio-gel poured out into the dirt.",
      "A contractor shone his rifle light into the pod, then stepped back. \"Director. Look at this.\"",
      "Lindemann stepped up to the rim.",
      "The adult pilot he'd been tracking wasn't there. In the seat was a girl, pale, unconscious, and half-drowned in Soren Hayes's flight suit.",
      "\"Search the trench,\" Lindemann said. \"He swapped himself out.\"",
      "\"Canopy was sealed from the inside, Director,\" the contractor said, running a scanner over her chest. \"Sir... her cell structure is artificial. Synthetic stem-cell markers, Augusta-pattern neural spikes. It's an undocumented Cyber-Newtype anomaly. Protocol says we crate her for the Denver Arcology.\"",
      "Lindemann knew what Denver did to unstable test subjects: isolation vats, vivisection, and tissue harvests.",
      "The girl stirred. Her head rolled against the headrest, her eyes cracking open, unfocused and bloodshot. Her small hand reached out of the oversized sleeve, fingers brushing Lindemann's wet coat.",
      "\"...Ayah...?\" she muttered, her voice thin and cracked. \"...Atapnya bocor...\"",
      "Her hand went limp. Lindemann stood frozen in the rain.",
      "In March of U.C. 0093, his twelve-year-old daughter Clara had been at an academy outside Singapore when the Axis fragment hit. They never found anything to bury.",
      "\"Director?\" the contractor pressed. \"Do we call hazmat?\"",
      "Lindemann looked down at the girl, then reached into his jacket. He pulled out his executive cipher and pressed it hard against the contractor's chest plate.",
      "\"Set thermite charges on the frame,\" Lindemann said evenly. \"Burn the core, the avionics, and the cockpit liner. You will log Lt. Soren Hayes as fully incinerated on impact. Zero biological remains recovered.\"",
      "\"Sir, the black box—\"",
      "\"I sign your division's vouchers, Captain,\" Lindemann said, his voice flat and hard. \"And I sign the pension funds for your family in Vancouver. If a word about what was inside this seat leaves this crater, your team will spend the next ten years guarding strip mines in the Central Asian desert. Understood?\"",
      "The contractor hesitated, then lowered his weapon. \"Understood, Director.\"",
      "Lindemann unclipped the harness, lifted the girl out of the cockpit, and carried her up the shuttle ramp.",
      "\"Clearance Alpha-Zero,\" he told the flight deck. \"Take us back to Von Braun.\""
    ]
  },
  {
    id: 4,
    index: "04",
    title: "THE RECOVERY AND THE SANCTUARY",
    year: "U.C. 0097 – 0098",
    theater: "VON BRAUN CITY // LINDEMANN MANOR",
    harmonic: "gamma",
    soundtrack: {
      title: "Sacred Play Secret Place",
      artist: "Matryoshka",
      album: "Laideronnette",
      youtubeId: "RqtIatDmt3A"
    },
    annotations: [
      {
        afterParagraph: 9,
        type: "subconscious",
        tag: "AUDITORY MEMORY // TETHER 04-B",
        label: "RIA (REE-AH)",
        content: "A name for a girl in a rich European house. R-I-A. The first three letters of a name belonging to a harbor boy in the Sunda Strait, spoken every morning over coffee by a man who will never know what he is calling."
      },
      {
        afterParagraph: 13,
        type: "subconscious",
        tag: "OLFACTORY MEMORY // TETHER 04",
        label: "VOLATILE FUEL RESIDUE",
        content: "2:00 AM in the sub-level transit bays. Cold concrete, and under it the sharp smell of unrefined terrestrial fuel. It was the only thing on the Moon that smelled like the planet she'd been pulled off."
      }
    ],
    paragraphs: [
      "It took four months in a private clinic beneath Lindemann's lunar estate to stabilize her.",
      "The doctors were paid off the books. When Adrian finally woke without IV lines running into his arms, he found himself looking down at small, pale hands with narrow wrists and clean nails. His voice sounded like a stranger's.",
      "Dietrich Lindemann came in alone on the second week. He placed the stamped dogtag on the nightstand. HAYES, SOREN.",
      "\"You don't have to be afraid,\" Lindemann told her quietly. \"I know Anaheim's black-ops ran an illegal Cyber-Newtype project on you and forged adult credentials. Soren Hayes is dead. From now on, your name is Marianne. You are my niece, recovering from chronic illness. You don't ever have to touch a machine again.\"",
      "Adrian looked at the tag, then at Lindemann.",
      "The man believed he was rescuing an abused child soldier. If Adrian told him the truth, that he was a dead harbor boy from the Sunda Strait sitting inside an impossible body, he'd end up on an autopsy table anyway.",
      "\"I don't remember much,\" Adrian whispered.",
      "Lindemann laid a heavy, warm hand on her head. \"Then don't try to.\"",
      "Evelyn had the name entered in the registry on the fourteenth day, and by the end of the first month the whole household had already shortened it to Ria. Dietrich said it in the kitchen doorway most mornings, over his coffee, with his coat still on his arm: \"Ria, come down, the car is waiting.\" The first time she heard it she kept walking until she reached the stairs. Ria was the short form of a German girl, of a French girl, of any rich family in the old countries. It was the first three letters of the name she had been given at birth, and it landed on her ear anyway.",
      "A year to the day after the registry was amended, Evelyn gave her a silver pendant on a fine chain, and the back of it was engraved in full: M·A·R·I·A·N·N·E. She turned it over with her thumb every night before she slept. Eight letters, and four of them in the middle that nobody in that house had given her and nobody in that house would ever read. She wore it anyway, and never once said the name out loud.",
      "Four years passed.",
      "In the high-society circles of Von Braun City, Marianne Lindemann was known as a quiet, frail heiress. Lindemann's wife, Evelyn, bought her dresses, taught her how to hold porcelain teacups, and introduced her politely at company dinners. Marianne played along. Dietrich Lindemann's executive status was the only thing standing between her and Anaheim's Cleaners, who held a liquidation order and did not need a warrant to use it.",
      "At night, when the house was dark, she'd slip down to the sub-level transit bays. Dressed in old flannel, she sat on an upturned crate in the dark near the cargo loaders, watching the indicator lights blink and breathing in cold concrete and spilled fuel. She had no idea what any of the machines were doing. She only knew the smell.",
      "Hayes's ghost was always there.",
      "Whenever she passed industrial loaders or caught the high-frequency whine of a reactor, something in her moved before she had decided to move it. She could not have said what she knew. She only knew that her body sometimes arrived at an answer before her mind did.",
      "She was nineteen in U.C. 0099, and she knew she was living on borrowed time."
    ]
  },
  {
    id: 5,
    index: "05",
    title: "THE SHADOW OVER DOCK 17",
    year: "U.C. 0099",
    theater: "OUTER LUNAR PERIMETER // BERTH 17",
    harmonic: "gamma",
    soundtrack: {
      title: "In Hell We Live, Lament feat. KIHOW",
      artist: "Mili",
      album: "To Kill a Living Book",
      youtubeId: "XfTWgMgknpY"
    },
    annotations: [
      {
        afterParagraph: 14,
        type: "subconscious",
        tag: "DEPARTURE TELEMETRY // TETHER 05",
        label: "CLEARANCE AE-088-MARIANNE",
        content: "Unmarked Columbus-class freighter Althea, clearing lunar orbit for Colony SF at Side 4. Plausible deniability logged against Senior Director Dietrich Lindemann."
      }
    ],
    paragraphs: [
      "The message came through on a maintenance monitor in Lindemann's private study.",
      "It was an encrypted line using the prototype's original operating code. Only the Vist Foundation had that key.",
      "[SOURCE: VIST FOUNDATION // SPECIAL OPS]\n[RECIPIENT: LT. SOREN HAYES]\n[LOCATION: VON BRAUN SECTOR 01]\n\nYOUR TELEMETRY WAS LOGGED.\nANAHEIM INTERNAL DISPOSAL HAS INITIATED A SECTOR SWEEP.\nYOU HAVE 48 HOURS BEFORE YOUR SAFE HOUSE IS FLAGGED.\n\nTERMS:\nPILOT FOR US IN OUR SCHEDULED TRIAL.\nIN EXCHANGE: THE SOREN HAYES FILE WILL BE PURGED FROM ANAHEIM REGISTRIES.\nCLEAN IDENTITY GRANTED.\n\nREPORT TO COLONY SF - SIDE 4.\nFREIGHTER 'ALTHEA', BERTH 17, DOCK 04.\nCODE: AE-088-MARIANNE.",
      "Marianne read it twice.",
      "The Vist Foundation held the strings on Anaheim's board. If anyone could delete a kill order, it was them. But the arithmetic was cold: Anaheim was already closing in. If she stayed, the Cleaners would raid the estate, and Dietrich and Evelyn would be executed for harboring an unregistered asset.",
      "She didn't leave a note. If corporate investigators put Lindemann under a lie detector, he needed to be able to say with complete honesty that his daughter had run away and he had no idea where she went.",
      "At midnight, she packed Hayes's old flight suit into a canvas bag, slipped through the service door, and vanished into the lunar city.",
      "Four hours later, she reached the outer commercial docks.",
      "Tied to Berth 17 was the Althea, a scarred, unmarked Columbus-class freighter. At the foot of the ramp, a purser was checking a data pad.",
      "Marianne walked up and held out the clearance key. \"Transfer. Code AE-088-MARIANNE.\"",
      "The tablet chimed green. The purser gave her a quick look, taking in the plain jacket, the duffel bag, and the calm way she stood, then pointed with a thumb.",
      "\"Deck three, cabin six. We clear lunar orbit in twenty minutes. Keep your hatch shut during burn.\"",
      "\"Baik,\" Marianne said. The purser didn't blink.",
      "She walked up the ramp, her boots clicking against the steel mesh. She didn't know what kind of machine Vist had waiting for her at Side 4, or what role they expected her to fill in the coming conflict. What she knew was that she had stopped hiding behind an old man's desk. Where she came from, you didn't outrun the tide. You tied off and held on.",
      "The pressure door sealed behind her, and the engines began to hum."
    ]
  }
]);

/**
 * Calculates exact word count and reading duration (230 WPM benchmark).
 */
export function calculateReadingTime(paragraphs = []) {
  const fullText = paragraphs.join(" ");
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 230));
  return { wordCount, minutes };
}

/**
 * Retrieves complete data bundle for a specific chapter index.
 */
export function getChapter(chapterId) {
  const chapter = CHAPTER_REGISTRY.find(c => c.id === chapterId) || CHAPTER_REGISTRY[0];
  const profile = HARMONIC_PROFILES[chapter.harmonic] || HARMONIC_PROFILES.alpha;
  const metrics = calculateReadingTime(chapter.paragraphs);

  return {
    ...chapter,
    profile,
    wordCount: metrics.wordCount,
    estMinutes: metrics.minutes
  };
}
