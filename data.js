/**
 * ============================================================================
 * PSYCHO-MONITOR MK-03: CANON DATA & DIEGETIC SOUNDTRACK LAYER
 * Subject: 088 (Marian Lindemann // Adrian Sagara // Lt. Soren Hayes)
 * Sources: Marian.md (Verbatim Canon) & Curated Ambient Playlist Matrix
 * Architecture: Clean In-Prose Stream (Decrypted Narrative Telemetry)
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
    identity: "MARIAN LINDEMANN // VON BRAUN CITY",
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
        afterParagraph: 3,
        type: "subconscious",
        tag: "TACTILE MEMORY // TETHER 01",
        label: "THE 8mm SOCKET WRENCH",
        content: "Cold chrome-vanadium steel. Knurled grip bit into palm tendons. Carried in the pocket of his denim shorts to tighten Pak Usman's intake manifold."
      }
    ],
    paragraphs: [
      "Adrian duduk di atas peti kayu terbalik dengan kepala silinder motor dua tak di antara kedua lututnya, mengerok kerak karbon dari puncak piston memakai kape dempul bekas.",
      "\"Awas aluminiumnya kegores, Rian,\" tegur bapaknya tanpa menoleh. Beliau duduk di bangku kayu lima langkah dari situ, jempolnya yang hitam kena gemuk sibuk melilit kawat tembaga ke alternator generator. Bengkel itu cuma lantai semen di bawah atap seng berkarat yang menempel di dermaga, menjorok langsung ke air keruh Selat Sunda. Perahu-perahu kayu nelayan saling beradu di bawah sana, berderit menabrak ban bekas pelindung setiap kali ombak pasang siang bergulung masuk.",
      "\"Nggak bakal kegores, Pak,\" sahut Adrian. \"Garamnya bikin mampet jalur pendingin lagi. Pak Usman nggak pernah bilas mesinnya sehabis melaut.\"",
      "Adrian berumur tujuh belas tahun—tinggi, kurus liat, kulitnya legam terbakar matahari khatulistiwa dengan oli mesin yang sudah meresap permanen di sela-sela kukunya. Di bawah rak aki, terselip beberapa buku SMK bekas tentang mesin kapal dan kelistrikan. Tapi sejak lutut bapaknya kumat dua tahun lalu, Adrian lebih banyak pegang kunci pas daripada buka buku sekolah.",
      "Pintu kasa dapur terbuka berderit.",
      "\"Makan dulu, kata Emak,\" panggil Maya. Umurnya delapan tahun, bertelanjang kaki dengan lutut penuh bekas luka baret, membawa baki seng berisi nasi putih, tumis kangkung, dan ikan goreng. \"Cuci tangan dulu, Bang Rian. Kemarin buku gambarku kena cap jempol oli.\"",
      "\"Kamu sendiri yang naruh bukumu di meja kerjaku, Cil,\" balas Adrian, tapi ia tetap membilas tangannya di bawah pompa air manual dekat pintu lalu menyambar mangkuknya.",
      "Di rak perkakas, radio tua berbunyi kresek-kresek dari speaker yang sudah robek:",
      "\"...Mengulang siaran darurat. Unit pertahanan orbital Londo Bell telah mencegat pasukan Neo-Zeon di dekat asteroid Axis. Pihak berwenang memastikan bahwa lintasan jatuh telah berhasil dialihkan. Diulangi: tidak ada perintah evakuasi untuk penduduk sipil di sektor khatulistiwa...\"",
      "Bapaknya mendengus sambil mengibaskan tangan ke arah radio. \"Orang-orang Spacenoid. Kerjanya cuma ribut rebutan kaleng rongsok di langit. Kayak orang daratan punya waktu buat mikirin politik mereka saja.\"",
      "\"Robot-robot itu pakai reaktor fusi, Pak,\" kata Adrian sambil mengunyah nasi ikannya. \"Satu nozel pendorongnya saja cukup buat ngaspal jalan sekabupaten.\"",
      "\"Titanium nggak bisa dimakan, Tong. Habisin nasimu.\"",
      "Adrian meneguk es teh manisnya, lalu menatap lepas ke arah laut yang tenang.",
      "Lalu cahayanya datang.",
      "Tanpa suara sama sekali. Bayangan di bawah atap seng mendadak lenyap, terhapus oleh kilatan yang begitu menyilaukan sampai air laut berubah putih padam. Adrian mengangkat lengan menutupi muka. Kulit wajahnya mendadak perih dan panas, seperti disodorkan langsung ke depan tungku api.",
      "Tinggi di balik awan, langit robek. Sebongkah batu raksasa hitam pekat yang terbakar, menyeret ekor api selebar puluhan kilometer, jatuh lurus ke arah cakrawala selatan.",
      "Bapaknya menjatuhkan kawat tembaganya. Tangannya yang kasar mencengkeram bahu Maya kuat-kuat.",
      "\"Masuk ke balik tembok pemecah ombak,\" bisik bapaknya. Suaranya tercekat, datar dan hampa. \"Rian. Cepat.\"",
      "\"Bapak?\" Maya mendongak sambil menyipitkan mata, tangannya meremas celana pendek abangnya. \"Mataku sakit... itu apa?\"",
      "Gelombang kejutnya tiba.",
      "Atap seng bengkel terkelupas dalam sekejap dengan suara derit paku tercabut yang memekakkan telinga. Air teluk mendidih menguap jadi kabut putih, dan perahu-perahu nelayan patah seperti ranting kering. Adrian mengulurkan tangannya yang belepotan oli, berusaha menggapai pergelangan tangan adiknya, tapi tanah di bawah kakinya runtuh ditelan panas dan debu yang membakar.",
      "Lalu semuanya gelap."
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
        afterParagraph: 5,
        type: "subconscious",
        tag: "AUDITORY MEMORY // TETHER 02",
        label: "DOGTAG 088-417-H",
        content: "Stamped steel plate vibrating against a thin collarbone. HAYES, SOREN — LT. / 088-417-H."
      }
    ],
    paragraphs: [
      "The cockpit was full of dark, lukewarm fluid.",
      "Lt. Soren Hayes was strapped into the linear seat of an unregistered prototype, bleeding out through shrapnel holes in his chest. The frame lay wedged in a mud-choked trench somewhere in the flooded Sunda Sink. Around him, the machine's pressurized bio-amniotic gel—an Augusta-designed life-support medium meant to sustain Cyber-Newtype pilots through catastrophic G-forces and trauma—was turning red.",
      "The unit's Psycho-Frame was running wild.",
      "The green hexagonal plates along the inner frame hummed at a frequency Hayes felt in his molars. It wasn't an electrical short; the psychic field was feeding on his collapsing vitals, burning out of control into a localized Psycho-Field. Under the crushing resonance, Hayes's vital signs failed, and his adult cellular structure gave out, dissolving directly into the suspension gel around him.",
      "The system was left running on empty, its Psycommu receiver screaming for an input.",
      "In the dead zone above the Sunda Sink, Adrian Sagara had been drifting for two years—a scrap of memory clinging to the smell of salt spray, fried fish, and his sister's voice. When the Psycho-Frame overcharged, it pulled him down like an undertow.",
      "The prototype's automated medical core engaged.",
      "Detecting an active neural imprint in the cabin, the emergency system began drawing on the bio-gel's synthetic stem cells to rebuild the pilot. But with Hayes's genetic material destabilized and the incoming brainwave signature completely different, the automated process glitched. It reconstructed an unspecialized, juvenile human baseline to house the mind it had caught.",
      "The green glow faded.",
      "The linear seat fell quiet, save for the low hum of backup power.",
      "Sitting in the oversized harness, buried in a soldier’s flight suit that bagged around her like an empty sack, was an adolescent girl of around fourteen or fifteen. Her breathing was faint. Her hair was matted with drying chemical gel, and around her thin neck hung Hayes's dogtag:",
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
        afterParagraph: 7,
        type: "subconscious",
        tag: "VISUAL MEMORY // CLARA LINDEMANN",
        label: "THE SINGAPORE IMPACT",
        content: "March U.C. 0093. Clara was twelve years old at boarding school outside Singapore when the Axis stone struck. An empty bronze casket buried in Von Braun Memorial Garden."
      }
    ],
    paragraphs: [
      "Rain hammered against the hull of the recovery shuttle.",
      "Senior Director Dietrich Lindemann stood in the mud in a ruined wool overcoat, watching his security contractors pry the buckled chest armor off the wrecked prototype. He was an executive director at Anaheim Electronics, and he had come to clean up a disaster. Soren Hayes had stolen a classified machine built for the Vist Foundation, and Anaheim's Internal Disposal Bureau wanted the pilot dead and the black box secured.",
      "The hatch gave with a wet hiss of pneumatic pressure. Gallons of pink, cloudy bio-gel poured out into the dirt.",
      "A contractor shone his rifle light into the pod, then stepped back. \"Director. Look at this.\"",
      "Lindemann stepped up to the rim.",
      "The adult pilot he’d been tracking wasn't there. In the seat was a girl, pale, unconscious, and half-drowned in Soren Hayes’s flight suit.",
      "\"Search the trench,\" Lindemann said. \"He swapped himself out.\"",
      "\"Canopy was sealed from the inside, Director,\" the contractor said, running a scanner over her chest. \"Sir... her cell structure is artificial. Synthetic stem-cell markers, Augusta-pattern neural spikes. It's an undocumented Cyber-Newtype anomaly. Protocol says we crate her for the Denver Arcology.\"",
      "Lindemann knew what Denver did to unstable test subjects: isolation vats, vivisection, and tissue harvests.",
      "The girl stirred. Her head rolled against the headrest, her eyes cracking open—unfocused and bloodshot. Her small hand reached out of the oversized sleeve, fingers brushing Lindemann’s wet coat.",
      "\"...Ayah...?\" she muttered, her voice thin and cracked. \"...The roof... is leaking...\"",
      "Her hand went limp.",
      "Lindemann stood frozen in the rain.",
      "In U.C. 0093, his twelve-year-old daughter Clara had been attending an academy outside Singapore when the Axis fragment hit. They never found anything to bury.",
      "\"Director?\" the contractor pressed. \"Do we call hazmat?\"",
      "Lindemann looked down at the girl, then reached into his jacket. He pulled out his executive cipher and shoved it into the contractor's chest plate.",
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
        afterParagraph: 5,
        type: "subconscious",
        tag: "OLFACTORY MEMORY // TETHER 04",
        label: "SYNTHETIC BRAKE FLUID & CASTOR OIL",
        content: "Sliding under vintage roadsters at 2:00 AM with an 8mm wrench. The smell of hot engine oil and synthetic brake fluid was the only thing anchoring her to reality."
      }
    ],
    paragraphs: [
      "It took four months in a private clinic beneath Lindemann's lunar estate to stabilize her.",
      "The doctors were paid off the books. When Adrian finally woke up without IV lines running into his arms, he found himself looking at small, pale hands with narrow wrists and clean nails. His voice sounded like a stranger's.",
      "Dietrich Lindemann came in alone on the second week. He placed the stamped dogtag on the nightstand: HAYES, SOREN.",
      "\"You don't have to be afraid,\" Lindemann told her quietly. \"I know Anaheim's black-ops ran an illegal Cyber-Newtype project on you and forged adult credentials. Soren Hayes is dead. From now on, your name is Marian. You are my niece, recovering from chronic illness. You don't ever have to touch a machine again.\"",
      "Adrian looked at the tag, then at Lindemann.",
      "The man thought he was rescuing an abused child soldier. If Adrian told him the truth—that he was a dead mechanic from the Sunda Strait sitting inside an impossible body—he’d end up on an autopsy table anyway.",
      "\"I don't remember much,\" Adrian whispered.",
      "Lindemann laid a heavy, warm hand on her head. \"Then don't try to.\"",
      "Four years passed.",
      "In the high-society circles of Von Braun City, Marian Lindemann was known as a quiet, frail heiress. Lindemann’s wife, Evelyn, bought her dresses, taught her how to hold porcelain teacups, and introduced her politely at company dinners. Marian played along. She knew exactly what she was doing: Dietrich Lindemann's executive status was the only reason Anaheim's Cleaners hadn't kicked in the door to put a bullet in her head.",
      "At night, when the house was dark, she’d slip down to the underground garage. Dressed in old flannel, she’d crawl under Lindemann’s vintage groundcars with a wrench, tightening bolts and checking lines just to smell gasoline and motor oil again.",
      "Yet Hayes's ghost was always there.",
      "Whenever she passed industrial loaders or caught the high-frequency whine of a reactor, her mind twitched with things she'd never learned: combat telemetry, threat vectors, system overrides, and sudden, cold reflexes. Her body had adult stamina now, but she was a weapon sitting in a display case.",
      "She was nineteen in U.C. 0099. And she knew she was living on borrowed time."
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
        afterParagraph: 6,
        type: "subconscious",
        tag: "DEPARTURE TELEMETRY // TETHER 05",
        label: "CLEARANCE AE-088-MARIAN",
        content: "Unmarked Columbus-class freighter Althea clearing lunar orbit for Colony SF at Side 4. Plausible deniability logged for Senior Director Dietrich Lindemann."
      }
    ],
    paragraphs: [
      "The message came through on a maintenance monitor in Lindemann's private study.",
      "It was an encrypted line using the prototype's original operating code. Only the Vist Foundation had that key.",
      "[SOURCE: VIST FOUNDATION // SPECIAL OPS]\n[RECIPIENT: LT. SOREN HAYES]\n[LOCATION: VON BRAUN SECTOR 01]\n\nYOUR TELEMETRY WAS LOGGED.\nANAHEIM INTERNAL DISPOSAL HAS INITIATED A SECTOR SWEEP.\nYOU HAVE 48 HOURS BEFORE YOUR SAFE HOUSE IS FLAGGED.\n\nTERMS:\nPILOT FOR US IN OUR SCHEDULED TRIAL.\nIN EXCHANGE: THE SOREN HAYES FILE WILL BE PURGED FROM ANAHEIM REGISTRIES.\nCLEAN IDENTITY GRANTED.\n\nREPORT TO COLONY SF - SIDE 4.\nFREIGHTER 'ALTHEA', BERTH 17, DOCK 04.\nCODE: AE-088-MARIAN.",
      "Marian read it twice.",
      "The Vist Foundation held the strings on Anaheim's board. If anyone could delete a kill order, it was them. But the reality was colder: Anaheim was already closing in. If she stayed, the Cleaners would raid the estate, and Dietrich and Evelyn would be executed for harboring an unregistered asset.",
      "She didn't leave a note. If corporate investigators put Lindemann under a lie detector, he needed to be able to state with complete honesty that his daughter had run away and he had no idea where she went.",
      "At midnight, she packed Hayes's old flight suit into a canvas bag, slipped through the service door, and vanished into the lunar city.",
      "Four hours later, she reached the outer commercial docks.",
      "Tied to Berth 17 was the Althea, a scarred, unmarked Columbus-class freighter. At the foot of the ramp, a purser was checking a data pad.",
      "Marian walked up and held out the clearance key. \"Transfer. Code AE-088-MARIAN.\"",
      "The tablet chimed green. The purser gave her a quick look—taking in the plain jacket, the duffel bag, and the calm way she stood—then pointed with a thumb.",
      "\"Deck three, cabin six. We clear lunar orbit in twenty minutes. Keep your hatch shut during burn.\"",
      "\"Right,\" Marian said.",
      "She walked up the ramp, her boots clicking against the steel mesh. She didn't know what kind of machine Vist had waiting for her at Side 4, or what operational role they expected her to fill in the coming conflict. But for the first time in six years, she wasn't hiding behind an old man's desk.",
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
