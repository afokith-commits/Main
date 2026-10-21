/**
 * PSYCHO-MONITOR // MK-03 RES-SYNC [ANOMALY: 088-ERIA]
 * Central Content & Narrative Core (Decoupled Data Store)
 * 
 * Based directly on Eria.md and Fractured Century lore.
 */

window.DOSSIER_DATA = {

  // =========================================================================
  // 1. GM EXECUTIVE BRIEFING (Grounded in Eria.md Story Beats)
  // =========================================================================
  gmBriefing: {
    callsign: "GHOST SEED",
    subjectId: "SEC-088 // ERIA STERLING",
    highConcept: "A dead 17-year-old civilian marine mechanic (Rian) whose soul was pulled by unshielded Psycho-Frame resonance into a dying rogue ace (Lt. Julian Ross), physically condensing into an adolescent female host adopted by a guilt-ridden Anaheim Director (Eria Sterling).",
    campaignHook: "Blackmailed by the enigmatic Vist Foundation using unedited black-box telemetry proving the living presence of Julian Ross. She is coerced into taking controls of Prototype Unit-03 at Berth 44 before 2400 hours and departing for Lagrange Point 1 to keep her adoptive parents safe from Anaheim execution squads.",
    immediateLevers: [
      {
        title: "The Forged Casualty Record",
        desc: "Anaheim's internal audit believes Julian Ross died in the Sunda sector. If Union military intelligence or corporate auditors discover Julian's living DNA inside Eria, Director Vincent Sterling faces military execution for high treason."
      },
      {
        title: "The Unshielded Psycho-Mesh",
        desc: "Unit-03 is lined with raw, unshielded Psycho-Frame alloy. Under combat stress, Subject 088 risks paracausal dissociation—where Julian's lethal combat reflexes or Rian's saltwater memories violently override her conscious motor control."
      },
      {
        title: "The Berth 44 Extortion",
        desc: "The Vist Foundation holds the silver telemetry key and the unredacted cockpit ledger. What is waiting for Unit-03 at Lagrange Point 1, and who gave the Foundation clearance inside Von Braun's sealed perimeter?"
      }
    ],
    summaryPills: {
      origin: "Sunda Strait (Earth) → Von Braun City (Luna)",
      chassis: "Prototype Unit-03 (Unshielded Psycho-Frame)",
      dogtag: "ROSS, JULIAN — LT. / 088-921-A",
      allegiance: "Anaheim Cover-Up → Coerced Vist Operative"
    }
  },

  // =========================================================================
  // 2. THE 5-CHAPTER NARRATIVE CORE (Word-for-Word Eria.md)
  // =========================================================================
  chapters: [
    {
      id: "ch-1",
      number: "CHAPTER 1",
      title: "THE WATER AND THE SALT",
      era: "U.C. 0093 // SUNDA STRAIT, EARTH",
      readTime: "4 MIN",
      harmonicKey: "alpha",
      track: {
        title: "Cicada — Ocean Foam (浪沫撫過礫石灘)",
        youtubeId: "QpRuSDvorBc",
        artist: "Cicada",
        album: "Ocean"
      },
      paragraphs: [
        `The two-stroke Yamaha outboard smelled of burnt castor oil and brackish water. Rian had its cylinder head resting on a wooden crate between his bare knees, scraping the gray carbon crust off the piston dome with a dull putty knife.`,
        `"Don't gouge the aluminum, boy," his father said without looking up.`,
        `His father was sitting on a plastic stool five feet away, rewinding the copper stator of a commercial generator with grease-blackened thumbs. The workshop was little more than a corrugated tin awning bolted to the side of a concrete pier, jutting out into the brown coastal chop of the Sunda Strait. Out on the water, long wooden fishing boats were tied four-deep to the pilings, creaking against their tire bumpers as the noon tide rolled in.`,
        `"I’m not gouging it," Rian muttered, wiping the blade on the leg of his faded denim shorts. "The ring lands are choked with salt. Whoever ran this boat didn't flush the cooling jacket once this season."`,
        `Rian was seventeen, tall and wiry—the kind of lean, ropey frame built from hauling thirty-pound lead batteries, lugging fuel drums, and diving into flooded bilge compartments. His skin was burnt dark brown from the equatorial sun, his coarse black hair bleached rusty reddish-brown at the tips by salt spray. His hands were broad and scarred: a pale zigzag across his left knuckles from a slipping wrench, an exhaust burn on his forearm, and permanent black machine grease worked deep beneath his fingernails.`,
        `Beside his workbench, tucked under a battery rack to keep them dry, sat his dog-eared textbooks: <em>Internal Combustion Principles</em> and <em>Basic Marine Electrical Wiring</em>. He was enrolled in the vocational maritime school three miles down the coastal road, but he barely attended classes anymore. When his father’s knees gave out two years back, Rian had quietly shifted to taking exams as an external student. A diploma was nice, but keeping the shop open and buying groceries for the house came first.`,
        `"Pak Usman's boat. He’s sixty, his joints are stiff, and his nephew is lazy," his father grunted, setting his soldering iron on an asbestos tile. "Just clean it and set the gap on the plugs. And don't mess around with your scooter until this is done."`,
        `Rian glanced toward the corner of the awning. Under a patched blue tarp sat his pride and joy: an old, beat-up 110cc two-stroke underbone moped he’d salvaged from a ditch behind the fish cannery. He’d spent eight months rebuilding it from scrap parts. In his rare free hours on Sunday afternoons, he loved tearing down the coastal highway on that rattling machine, smelling the hot two-stroke smoke blowing back into his face. Hanging on the wooden post above the bike was his homemade bamboo speargun, rigged with surgical rubber for diving the reef pilings when the water was clear.`,
        `From the kitchen behind the workshop, a screen door kicked open.`,
        `"Mama said come eat," Maya announced. She was eight years old, with thin scabby knees, running around barefoot in a faded yellow dress. She balanced an aluminum tray holding three chipped porcelain bowls of white rice, water spinach, and fried mackerel. "And wipe your hands first, Rian. You left black smudges on my drawing notebook yesterday."`,
        `"You left your notebook on my workbench, squirt," Rian shot back, grinning as he rinsed his arms under the manual hand-pump by the door. He dried himself on an old flour sack and took his bowl.`,
        `Maya plopped down on an upturned wooden crate, swinging her legs. "Are we going to the night market in town this Saturday? You promised."`,
        `"Depends," Rian said, sitting on the concrete edge of the pier, his bare feet dangling over the muddy tidal wash below. "If Pak Usman pays in cash, I’ll buy you those blue ink pens with the rubber grips. If he tries to trade two sacks of dried squid like last time, you’re getting squid."`,
        `"Tell him we can't write math homework with a squid," Maya pouted, though she was already grinning as she handed him a glass of iced sweet tea.`,
        `On the tool shelf above the bench, an old battery-powered radio was playing through a blown paper speaker. The broadcast cut into static, replaced by a nervous, crackling news voice:`,
        `"...Reiterating emergency advisory. Londo Bell orbital defense units have engaged Neo-Zeon forces attempting to navigate the asteroid Axis. Planetary authorities insist the orbital trajectory has been successfully disrupted. Repeating: there is no immediate danger to civilian populations of the Earth Sphere..."`,
        `His father made a sour face, waving his hand toward the radio. "Always those Spacenoids with their wars. Fighting over metal cans in the sky. As if a man on Earth has time to care about their politics."`,
        `"Those mechs have fusion reactors, Ayah," Rian said, chewing on a piece of mackerel. "Just one thruster nozzle is worth enough to pave every dirt road in this province."`,
        `"You can't eat titanium, boy. Finish your rice. We still have to mount the motor on the patrol skiff before high tide."`,
        `Rian smiled, took a swallow of sweet tea, and looked out across the water. The sea was calm, gray-green and flat under the midday haze.`,
        `Then the shadows vanished.`,
        `It didn't start with a sound. It started with blinding, suffocating light.`,
        `The shadows cast by the awning’s wooden pillars were instantly erased by a glare so violent that the sea turned the color of molten aluminum. Rian dropped his plastic spoon, throwing an arm over his eyes. The skin on his face felt instantly dry and hot, as though someone had shoved his head into a furnace.`,
        `High above the clouds, the sky tore open. A burning mountain of black stone trailing an orange tail miles wide was falling directly toward the southern horizon. The air hummed with an unnatural vibration that rattled the salt in Rian’s teeth.`,
        `"Ayah?" Rian whispered, his voice cracking.`,
        `His father dropped his soldering iron onto the concrete. His rough fingers clamped down hard on Maya’s shoulder.`,
        `"Rian," his father said. His voice was completely flat, drained of breath. "Get behind the seawall."`,
        `"What is that?" Maya asked, squinting up, her small hand clutching her brother's shorts. "Rian, it hurts my eyes. What is it?"`,
        `There was no time to answer.`,
        `A silent shockwave hit the coast faster than sound. The corrugated roof was stripped away in a rain of sparks. The water in the bay vaporized into white fog, and the wooden fishing boats snapped like dry twigs.`,
        `Rian reached out with his oil-stained hand, fingers straining to grab Maya’s wrist, but the earth beneath his bare feet dissolved into ash.`,
        `The light took his father. The light took his sister.`,
        `Then came the dark.`
      ],
      redaction: {
        id: "redact-1",
        label: "LONDO BELL INCIDENT TELEMETRY // SECTOR-04",
        blackoutText: "IMPACT CONFIRMED: Axis fragment struck the Sunda Shelf at Mach 24. Thermal bloom vaporized the coastline within 4.2 seconds. Estimated casualties: 42,000,000. Sector redesignated 'THE SUNDA SINK'. Zero biological recovery.",
        gmNote: "Story Detail: Rian's original body dissolved into salt-ash. His consciousness drifted unanchored in the orbital Psycho-Field for over two years."
      }
    },

    {
      id: "ch-2",
      number: "CHAPTER 2",
      title: "THE GHOST AND THE PROTOTYPE",
      era: "LATE U.C. 0095 // SUNDA CRASH SITE",
      readTime: "4 MIN",
      harmonicKey: "beta",
      track: {
        title: "Kevin Penkin — Gallantry and Recapitulation",
        youtubeId: "T_jgBbCsdeU",
        artist: "Kevin Penkin",
        album: "Made in Abyss OST 1"
      },
      paragraphs: [
        `The warning buzzer had lost its rhythm. It was just a flat, droning whine behind the shattered glass of the panoramic display.`,
        `Inside the cockpit of the experimental frame, Lt. Julian Ross couldn't feel his legs.`,
        `A jagged twelve-inch shard of armor plate had pierced the lower bulkhead during the final impact, pinning his hip to the pilot’s seat. Dark red blood had pooled in the footwell, sloshing against the titanium rudder pedals every time the wrecked machine shifted in the mud. The cabin smelled of burnt coolant, vaporized copper, and scorched blood.`,
        `Through the spiderweb cracks in the canopy, the battlefield was quiet. Fifty yards away, the Anaheim security team's heavy interceptor lay on its side, venting steam into the gray rain. Julian had cut it open with a thermal blade at point-blank range, but he’d taken a burst of armor-piercing solid shot through his own cockpit hatch to do it.`,
        `He spat a mouthful of dark bile against his cracked visor.`,
        `"Anaheim bastards," Julian rasped, his breathing shallow. "You build weapons for everyone... but you bleed just like the rest of us."`,
        `Julian was twenty-six, a rogue ace who had spent three years hitting Anaheim black-budget transports. When he hijacked this prototype—a testbed fitted with raw, unfinished Psycho-Frame mesh along the cockpit liner—he knew he wasn't going to survive the mission. He just wanted to cost them a few billion credits before he went down.`,
        `Above his head, the Psycho-Frame bulkheads began to vibrate.`,
        `It wasn't an electrical short. The pale green hexagonal plates bonded to the inner frame began emitting a high, piercing hum that cut straight through his skull. The unshielded cockpit was reacting to his fading vital signs, the psychic field collapsing inward. But Julian wasn't panicking. He was just bleeding out, staring at the ceiling as his vision faded to gray.`,
        `The cockpit didn't pull in his thoughts. It pulled in the void.`,
        `***`,
        `For two years, Rian had been nothing.`,
        `No hands. No feet. No face. Just a scrap of memory drifting in cold silence. He remembered the smell of fried mackerel. He remembered the sound of rain on tin. He remembered Maya’s scabby knees and the dull edge of his putty knife. There was no pain, only a hollow ache for a home that was gone.`,
        `Then, something tore.`,
        `A violent, downward pull seized him, dragging his consciousness out of the dark toward a needle of green light. A dying brain in realspace was pulling at the Psycho-Field like a drowning man grabbing a rope.`,
        `***`,
        `Julian’s back arched off the seat.`,
        `His hands clamped onto the control sticks with enough force to crack his knuckles. He tried to scream, but the air caught in his throat. The green light inside the cockpit turned blinding white.`,
        `The Psycho-Frame wasn't just reading brainwaves; the localized resonance warped physical matter to stabilize the consciousness invading the cockpit.`,
        `Beneath the heavy fabric of the flight suit, Julian's body broke down.`,
        `The heavy collarbones collapsed inward with dull, sickening snaps. The thick, scarred fingers shortened, calluses sloughing away as the hand structure condensed. His ribcage contracted by inches. Dense muscle fibers dissolved and re-knitted under the paracausal pressure, rearranging biological matter at the cellular level.`,
        `The rough, square jawline softened into pale, delicate bone. Stubble fell away from smooth, youthful skin. Lungs shrank, forcing out Julian's last ragged breath, before drawing in a desperate, frantic gasp of cabin air.`,
        `The green light flickered and died.`,
        `In the dead cockpit, rain tapped gently against the shattered outer glass.`,
        `The pilot’s seat was far too large now.`,
        `Slumped sideways against the bloody control yoke, buried inside an adult flight suit that hung off her like a blanket, lay an adolescent girl. Her breathing was faint and shallow. Her hair was matted with drying blood, her bare wrists lost inside sleeves made for a six-foot-tall soldier.`,
        `Around her neck, dangling loose over a fragile collarbone, hung a stamped steel dogtag:`,
        `ROSS, JULIAN — LT. / 088-921-A`,
        `The girl's eyelids fluttered, but she did not wake.`
      ],
      redaction: {
        id: "redact-2",
        label: "PROTOTYPE UNIT-03 BLACK-BOX TELEMETRY LOG",
        blackoutText: "PARACAUSAL CONDENSATION ANOMALY: Autonomic nervous system rewritten under high-frequency psycho-resonance. Original pilot mass (82 kg) reduced to 41 kg. Skeletal and cellular realignment confirmed. Kinetic combat reflexes burned into host motor cortex.",
        gmNote: "Story Detail: Julian's personality dissolved upon death, but his lethal combat reflexes remain burned into the girl's motor cortex."
      }
    },

    {
      id: "ch-3",
      number: "CHAPTER 3",
      title: "THE SIN OF DIRECTOR STERLING",
      era: "U.C. 0095 // 40 MINUTES POST-IMPACT",
      readTime: "4 MIN",
      harmonicKey: "beta",
      track: {
        title: "Tomoya Naka — Rainy Song (String Ver.)",
        youtubeId: "yee1HACD1HE",
        artist: "Tomoya Naka",
        album: "Day's"
      },
      paragraphs: [
        `The heavy rain was turning the crater into a lake of gray grease.`,
        `Senior Director Vincent Sterling didn't bother wrapping a tarp around his wool overcoat. The hem of his tailored trousers was already ruined, soaked through with muddy ditch-water. Behind him, the idling turbofans of an unmarked Anaheim heavy transport kept up a low, rhythmic thrum.`,
        `Three private security contractors in matte-black armor flanked him, submachine guns held at low-ready.`,
        `"Reactor telemetry confirms a cold shutdown, Director," the lead contractor said through his helmet speaker. "All four of our interceptors are scrap. No survivors on our side."`,
        `Sterling didn't answer. He had spent eighteen months tracking Lt. Julian Ross. Ross had become a ghost in Anaheim’s ledger—costing the board forty-two million credits, blowing up an assembly plant in the Philippines, and putting dozens of company pilots in the ground. Sterling had come to confirm the kill and pull the prototype’s Psycho-Frame core before rival board auditors could blame the disaster on his division.`,
        `Fifty paces ahead, the rogue machine lay wedged between two boulders, its shoulder sheared off and torso armor torn open.`,
        `"Pry the hatch," Sterling commanded.`,
        `Two contractors sank magnetic pry-bars into the buckled chest plate. A hydraulic cutter screamed, throwing white sparks into the rainy gloom. With a wet hiss of ruptured seals, the outer canopy peeled back and dropped into the mud.`,
        `The contractor with the flashlight leaned in. Then he froze.`,
        `"What is it?" Sterling demanded, stepping onto the calf strut. "Is the pilot dead? Pull the data core."`,
        `The contractor lowered his rifle slightly. "Director... you need to see this."`,
        `Sterling shoved the man aside and looked in.`,
        `The cockpit was drenched in blood. The footwell was a red puddle, and the control sticks were smeared with gore. But the man who had butchered Sterling’s escort was gone.`,
        `Slumped in the oversized pilot harness was a girl.`,
        `She looked no older than fourteen or fifteen, pale, shivering, and drowning in Julian Ross’s military flight suit. The heavy Kevlar shoulders hung six inches past her frame, the sleeves bunched past her fingertips, and the harness hung slack against a narrow ribcage.`,
        `Sterling stared. "Search the perimeter. Ross put a civilian in the chair to draw fire. Search the ditch!"`,
        `"Sir, the hatch was sealed from the inside," the contractor said, shining the beam on the girl's chest. "Thermal seals were intact until we cut them. Nobody left this pod."`,
        `The beam caught the stamped dogtag resting against the hollow of her throat:`,
        `ROSS, JULIAN — LT. / 088-921-A`,
        `Sterling reached out, his bare fingers shaking as he touched the metal. It was warm, vibrating with a faint tremor.`,
        `"Director," the contractor murmured, checking a scanner. "Her vitals are unstable. Gene-markers are fragmenting. Her cellular structure is rewriting itself. Standard operating procedure says we cage it and notify the bio-tech division at the Denver Arcology."`,
        `Sterling didn't move.`,
        `The Denver Arcology. He knew what happened in the sub-level labs: dissection tables, chemical tanks for failed Cyber-Newtype projects, and live tissue harvests. If this child was logged into the Anaheim corporate network, she wouldn't live as a human being for another twelve hours.`,
        `Then, the girl moved.`,
        `Her head rolled against the headrest. Her eyes cracked open—wide, unfocused, and terrified. Her small, blood-streaked hand twitched inside the enormous flight sleeve, reaching out into the empty air.`,
        `Her fingers brushed Sterling’s wet sleeve.`,
        `"...Ayah...?" she breathed. It was a raspy, cracked whisper—a southern coastal dialect Sterling barely recognized. "...The roof... is leaking..."`,
        `Her hand went limp, falling back onto the blood-slick console.`,
        `Sterling stood frozen in the rain.`,
        `Beneath his tailored coat, an old wound tore open. In March of U.C. 0093, his own daughter, Clara, had been twelve years old when the sky fell. She had been attending a private boarding school outside Singapore when the Axis fragment hit. There had been no body to bury. Just an empty casket.`,
        `"Director?" the contractor pressed. "Do we call in the hazmat transport?"`,
        `Sterling slowly drew a breath of cold air. His voice was flat and steady.`,
        `"No."`,
        `The contractor blinked. "Sir?"`,
        `Sterling pulled out his personal executive cipher and shoved it into the contractor's chest. "Set thermite charges on this frame. Burn the cockpit liner, the avionics, and the core to slag. You will log the target, Lt. Julian Ross, as fully incinerated along with the prototype. Zero biological remains recovered."`,
        `"Director, the data-logs—"`,
        `"I sign your pay vouchers, Captain," Sterling said, his eyes drilling into the man's visor. "And I sign the pension funds for your family in Vancouver. If a word about what was inside this cockpit leaves this crater, your team will find yourselves guarding strip mines in the Central Asian desert by tomorrow morning. Understood?"`,
        `The contractor stared at him for three seconds, then lowered his head. "Understood, Director."`,
        `Sterling leaned in, unbuckled the harness, and lifted the girl from the pool of blood. She felt shockingly light—barely ninety pounds buried inside stiff ballistic fabric.`,
        `He carried her up the ramp of his personal shuttle and laid her on the leather couch in his private cabin.`,
        `"Seal the hatch," Sterling barked at the flight deck. "Clearance Code Alpha-Zero. Priority corridor."`,
        `"Destination, Director?"`,
        `Sterling pulled a wool blanket from a locker and wrapped it around the shivering girl, covering the dogtag that bore his dead enemy's name.`,
        `"Von Braun City," Sterling said. "Take us home."`
      ],
      redaction: {
        id: "redact-3",
        label: "ANAHEIM ELECTRONICS // CLASSIFIED DISPOSITION REPORT #95-088",
        blackoutText: "FALSIFIED RECORD CONFIRMED: Target Lt. Julian Ross logged as neutralized. Biological remains declared fully vaporized by thermite charges. Transferred subject to personal shuttle under forged authorization Alpha-Zero. Signatory: Senior Director Vincent Sterling.",
        gmNote: "Story Detail: Vincent committed corporate treason to save her. If Anaheim finds out, he and Evelyn will be executed."
      }
    },

    {
      id: "ch-4",
      number: "CHAPTER 4",
      title: "THE RECOVERY AND THE SANCTUARY",
      era: "U.C. 0097–0098 // VON BRAUN CITY, LUNA",
      readTime: "5 MIN",
      harmonicKey: "gamma",
      track: {
        title: "Matryoshka — Sacred Play Secret Place",
        youtubeId: "RqtIatDmt3A",
        artist: "Matryoshka",
        album: "Laideronnette"
      },
      paragraphs: [
        `The rehabilitation took four months in a private medical bay beneath Sterling’s estate in Von Braun City.`,
        `There were no official logs. The doctors were retired military surgeons bound by non-disclosure agreements and paid through private offshore accounts. For the first six weeks, Rian lay strapped to a recovery bed, hooked to automated plasma scrubbers and nutrient drips. His reconstructed body was frail; the paracausal overcharge had left his cellular bonds brittle, and his new muscles had severe atrophy.`,
        `Every time Rian opened his eyes, the terror returned.`,
        `He looked down at hands that weren't his: narrow, pale, with slender fingers and clean, pink nails. When he spoke, the voice that came out was light and thin, carrying none of the gravelly weight of a seventeen-year-old boy who had shouted over boat motors.`,
        `On the forty-fifth day, when the lead surgeon unhooked the IV lines, Sterling walked into the room alone.`,
        `Rian instinctively pulled the thin hospital blanket up to his throat, curling his knees inward. "Who... who are you?"`,
        `Sterling sat down on the edge of the examination bed. He looked tired, but his eyes were gentle.`,
        `"I’m Vincent Sterling," he said quietly. "You’re in Von Braun City, on the Moon. You're safe."`,
        `Rian’s heart hammered against his small ribs. He remembered the shattered cockpit, the blood, and the dogtag around his neck. "What are you going to do to me?"`,
        `Sterling reached into his coat and placed the stamped steel tag on the bedside table: ROSS, JULIAN.`,
        `"I know what they did to you," Sterling said, his voice heavy with quiet anger. "The black-ops division... they took an unregistered child, forged adult pilot credentials, pumped you full of combat stimulants, and threw you into a prototype death trap. They called you an enemy ace to keep your real identity off the books."`,
        `Rian stared at the tag, then at Sterling.`,
        `The man didn't know. He genuinely believed Rian was a traumatized child soldier named Julian.`,
        `Rian opened his mouth. A voice in his head screamed to tell the truth: <em>I’m not a soldier. I’m Rian. I’m a dock boy from the Sunda Strait who died when Axis fell.</em>`,
        `He stopped.`,
        `The dock was ash. His father and sister were dust. If he told this corporate executive that he was a dead civilian's soul inhabiting an impossible, paracausal body, what would happen? They wouldn't send him home—there was no home to go to. They would lock him in an isolation cell, label him an alien anomaly, and dissect his brain to see how the Psycho-Frame did it.`,
        `If he wanted to survive, Julian Ross had to stay dead, and Rian had to stay silent.`,
        `Slowly, Rian lowered his head and let out a small, trembling breath. "I... I don't remember much. Everything hurts."`,
        `Sterling placed a warm hand on the girl's head, smoothing down her hair. "You don't have to remember. Julian Ross burned in that crater. From today, your name is Eria. You are my niece, recovering from respiratory illness. You don't ever have to touch a machine again."`,
        `***`,
        `By U.C. 0097, Eria had moved into the main penthouse of the Sterling manor.`,
        `To the high society of Von Braun City, Eria Sterling was a sheltered, delicate heiress. Sterling’s wife, Evelyn, doted on her with fierce devotion, buying her tailored wool coats, pleated skirts, and cashmere sweaters. Evelyn taught her how to hold porcelain teacups, how to walk with short, measured steps, and how to smile politely at corporate galas beneath the lunar dome.`,
        `Outside the bedroom, she was a quiet, polite young lady. But inside, Rian felt like a fraud.`,
        `Every morning, when the maid brought breakfast, Eria hesitated for half a second before answering to her name. At dinner, she was terrified of dropping the heavy silver cutlery or chewing too fast, afraid that one coarse dock habit would expose her as a street kid playing dress-up.`,
        `Her only relief came late at night.`,
        `At two in the morning, when the manor was dark, Eria would slip down the service stairs to the underground vehicle bay. Dressed in oversized flannel pajamas, she would slide under Sterling’s vintage private roadsters with an eight-millimeter wrench, tightening manifold bolts and cleaning carbon from intake valves. The smell of hot engine oil and synthetic brake fluid was the only thing that anchored her to reality.`,
        `By late U.C. 0098, Eria turned nineteen.`,
        `Her body had matured into a graceful, healthy young woman. Her hands were soft, her skin unblemished. But every night, she stood at her bedroom window, looking through the dome glass at the blue marble of Earth floating in the black void.`,
        `She looked at the dark, bruised scar where Southeast Asia used to be.`,
        `<em>I stole this girl's skin,</em> she thought, her fingers touching the cold glass. <em>I stole this family's peace. If anyone finds out, they’ll execute Vincent for treason.</em>`,
        `She prayed every day that the past would stay buried.`
      ],
      redaction: {
        id: "redact-4",
        label: "STERLING RESIDENCE SECURITY LOGS // 02:00–04:00 AM",
        blackoutText: "ANOMALOUS NOCTURNAL ACTIVITY: Subject 088 logged entering lower maintenance garage 48 times between U.C. 0097 and 0098. Manual overhaul of combustion engines performed without tools requested. Logs wiped manually by Vincent Sterling.",
        gmNote: "Story Detail: Rian's mechanical habit on the roadster engines is the only anchor keeping Eria from full dissociative ego death."
      }
    },

    {
      id: "ch-5",
      number: "CHAPTER 5",
      title: "THE BLACK WAX",
      era: "U.C. 0099.04.18 // VON BRAUN & BERTH 44",
      readTime: "5 MIN",
      harmonicKey: "gamma",
      track: {
        title: "Mili — In Hell We Live, Lament feat. KIHOW",
        youtubeId: "XfTWgMgknpY",
        artist: "Mili",
        album: "In Hell We Live, Lament"
      },
      paragraphs: [
        `The letter arrived on a Tuesday morning in early U.C. 0099.`,
        `It didn't come through the public courier. It was left directly on Vincent Sterling’s private study desk, slipped beneath his encrypted terminal.`,
        `The envelope was made of thick linen, sealed with black wax stamped with a single, spiraling horn: the crest of the Vist Foundation.`,
        `Sterling brought it down to the breakfast table, his face pale as chalk. He didn't say a word. He simply broke the wax and laid the single typed sheet between the silver coffee pot and the fruit bowl.`,
        `Eria read the lines:`,
        `TARGET: PROTOTYPE UNIT-03 / PSYCHO-FRAME TESTBED<br>INCIDENT: LATE U.C. 0095 — SUNDA SECTOR<br>OFFICIAL STATUS: VAPORIZED (FALSIFIED)<br>TO: LT. JULIAN ROSS`,
        `"The pilot was not incinerated. The Foundation has kept your silence for three years, Director Sterling. The bill is now due. The pilot is to report to Berth 44, Outer Docks, Von Braun Industrial Perimeter, before 2400 hours. Come alone, or the unedited black-box telemetry will be delivered directly to the Anaheim Board of Directors and the Federation Military Police."`,
        `Evelyn read the page over Eria's shoulder. She let out a choked sob, her hand gripping her husband's arm. "Vincent... what is this? Who did this?"`,
        `"The Vist Foundation," Sterling muttered, sinking into a chair with his head in his hands. "They’ve known the entire time. They let me hide her... just to hold the knife to our throats when they needed an expendable pilot."`,
        `He looked up at Eria, his eyes frantic. "We pack. I have an unmarked shuttle in Hangar Seven. We can transfer credits to a neutral bank in the Jupiter Fleet—"`,
        `"Vincent, they control the orbital clearance grids," Evelyn cried. "They’ll flag our transponder before we leave the Moon. They’ll shoot us down!"`,
        `Eria sat completely still.`,
        `She looked at Sterling—the man who had carried her out of the mud, paid for her lungs, and protected her for four years. If she ran, Anaheim security would drag him and Evelyn to an interrogation cell by nightfall.`,
        `The dock mechanic from the Sunda Strait had spent his life fixing broken things. When an engine failed, you didn't run away. You got your hands dirty.`,
        `Eria stood up.`,
        `She kissed Evelyn gently on the cheek. "Thank you for breakfast, Mama."`,
        `"Eria...?" Evelyn looked up, bewildered.`,
        `Eria took the silver telemetry key attached to the letter and slid it into her pocket. She looked down at Sterling, her voice steady and quiet.`,
        `"Burn the paper, Papa. Tell the staff I went into the central shopping district for the afternoon. If anyone asks, you know nothing about an enemy pilot. You know nothing about a prototype."`,
        `Sterling grabbed her wrist. "No! You're nineteen years old. You're my daughter!"`,
        `Julian’s conditioned fingers turned, effortlessly breaking the Director’s grip with a subtle leverage twist an elite soldier could do in his sleep.`,
        `"You gave me four years of warm beds and good food," Eria said, her voice dropping into a quiet, sad smile. "That’s more than I ever had on Earth. Now let me protect this house."`,
        `She turned and walked out.`,
        `***`,
        `2340 Hours. Berth 44, Outer Docks.`,
        `The industrial ring of Von Braun City smelled of ozone, liquid nitrogen, and stale rocket fuel.`,
        `Eria walked down the dark gantry, dressed in black utility pants, heavy lace-up work boots, and a high-collared pilot undersuit she had bought with cash in the lower wards.`,
        `At the end of the bay, bathed in yellow floodlights, stood the mobile frame.`,
        `It was a tall, angular machine painted in matte charcoal, its chest bulkheads reinforced with composite armor. Along the seams of the cockpit hatch were the telltale hexagonal lines of raw Psycho-Frame mesh.`,
        `A technician in a grease-stained pressure suit stood by the gantry crane. As she approached, he held out a data slate.`,
        `Eria tossed the silver telemetry key onto the console. The screen flashed green.`,
        `"You're late," the technician grunted, not looking at her face. "Freighter departs for Lagrange Point 1 in twenty minutes. Mission data is locked in the main computer. Hatch is open."`,
        `Eria climbed the steel ladder.`,
        `The smell of hot hydraulic fluid and scorched copper washed over her. At the rim of the cockpit, she paused. For a second, the phantom panic hit her chest—the fear of the closed space, the memory of the medical bed. Her throat tightened.`,
        `<em>It’s just an engine,</em> she told herself. <em>Just a machine.</em>`,
        `She climbed inside.`,
        `She sat in the bucket seat, pulled the four-point harness over her shoulders, and snapped the magnetic buckle shut. The click was loud in the small space.`,
        `She hit the canopy seal.`,
        `The armored hatch slid down with a heavy hydraulic thud, cutting off the hangar noise. The panoramic monitors flickered to life, projecting a three-hundred-and-sixty-degree view of the launch bay.`,
        `Eria gripped the twin control sticks.`,
        `The moment her fingers wrapped around the rubberized yokes, Julian Ross’s muscle memory seized control.`,
        `Her pulse dropped. Her breathing evened out into cold, mechanical precision. Her hands moved across the secondary console by pure reflex, flipping six toggle switches in an unbroken sequence. Her right foot tapped the auxiliary fuel valve, priming the reactor without her brain having to think.`,
        `<em>Main bus online. Coolant pressure nominal. Minovsky dispersal standby.</em>`,
        `Above her head, the Psycho-Frame liner emitted a faint, low hum.`,
        `In the optical reflection of the forward glass, she saw her own face: smooth skin, dark eyes, the face of a lunar heiress. A dead civilian driving a dead soldier's machine.`,
        `Through the forward screen, beyond the hangar doors, the lights of the residential dome sparkled in the distance.`,
        `Eria keyed the flight comms. Her voice was flat, steady, and cold.`,
        `"Unit-03, systems nominal. Clear the launch tube."`,
        `The machine’s twin optical sensors flared to life—two sharp, green needles cutting through the dark.`,
        `She pushed the throttles forward.`
      ],
      redaction: {
        id: "redact-5",
        label: "VIST FOUNDATION ENCRYPTED FLIGHT CORRIDOR",
        blackoutText: "AUTHORIZATION ACCEPTED: Berth 44 gantry disengaged. Flight trajectory locked for Lagrange Point 1 (Sweet Water perimeter). Black-box ledger sealed pending arrival. Operator designation confirmed: GHOST SEED.",
        gmNote: "Campaign Transition: Subject 088 departs Von Braun City for Lagrange Point 1."
      }
    }
  ],

  // =========================================================================
  // 3. SUBCONSCIOUS MARGINALIA (The Tri-Harmonic Strata Commentary)
  // =========================================================================
  marginalia: {
    "ch-1": [
      { strata: "alpha", note: "The head bolts on Pak Usman's motor took a 12mm wrench. If you didn't cross-tighten them, the head warped and sprayed brine." },
      { strata: "beta", note: "Civilian infrastructure. Zero hardened bunkers within forty nautical miles. No flak curtain. An open abattoir." },
      { strata: "gamma", note: "I remember looking at photographs of the Sunda coast in Papa's lunar library. The water was blue once." }
    ],
    "ch-2": [
      { strata: "alpha", note: "The light felt like the sea turning to steam. But there was no smell of fish. Only copper and burning plastic." },
      { strata: "beta", note: "The AP round took out the hydraulic return line. You have eight seconds of manual control before the rudder locks." },
      { strata: "gamma", note: "When the doctors touched my wrists, they asked why the bones looked thirty percent smaller than Julian's records." }
    ],
    "ch-3": [
      { strata: "alpha", note: "The man in the wool coat had hands that shook. Mechanics recognize panic before soldiers do." },
      { strata: "beta", note: "Security captain had his finger inside the trigger guard. An amateur. I could have snapped his neck from the footwell if my spine had worked." },
      { strata: "gamma", note: "Papa gave me Clara's room. He never told Mama that Clara's body was never found." }
    ],
    "ch-4": [
      { strata: "alpha", note: "The 8mm open wrench in Vincent's garage was made in Germany. Chrome-vanadium. Cold as reef water." },
      { strata: "beta", note: "High society galas are simple: keep your back to the wall, watch the waitstaff's hands, note the fire exits." },
      { strata: "gamma", note: "Mama's tea is always Earl Grey with two drops of milk. If I drop the cup, the lie shatters." }
    ],
    "ch-5": [
      { strata: "alpha", note: "It's just an engine. Coolant, compression, spark, exhaust. A mobile suit is just a very big outboard motor." },
      { strata: "beta", note: "Toggle five arms the thermal capacitor. Toggle six dumps the Minovsky heat sink. Don't touch seven unless you're ready to burn." },
      { strata: "gamma", note: "I kissed Mama on the cheek. I didn't tell her I wasn't coming home." }
    ]
  },

  // =========================================================================
  // 4. SENSORY ANCHORS (Physical Totems from Eria.md)
  // =========================================================================
  anchors: [
    {
      id: "anchor-drawing",
      title: "Maya's Sketchpad (Page 14)",
      subtitle: "Recovered Digital Cache // U.C. 0093",
      icon: "⛵",
      theme: "alpha",
      caption: "Scanned page from an 80-sheet drawing book found in the pier debris. Preserved in neural memory cache.",
      detailMarkup: `
        <div class="artifact-sketchpad">
          <div class="sketch-paper">
            <div class="sketch-meta">MAYA // AGE 8 // SUNDA COAST</div>
            <div class="sketch-art">⛵ 〰〰 ☀</div>
            <p class="sketch-quote">"Rian's fast boat. Keep out or I will tell Mama."</p>
          </div>
        </div>
        <p class="artifact-narrative">Rian promised to buy Maya blue ink pens with rubber grips on Saturday. The Axis fragment hit at 12:14 PM.</p>
      `
    },
    {
      id: "anchor-dogtag",
      title: "Titanium Dogtag: 088-921-A",
      subtitle: "Stamped Military Specimen // U.C. 0095",
      icon: "⛓",
      theme: "beta",
      caption: "Recovered from around the neck of the adolescent girl found in Unit-03's blood-soaked cockpit.",
      detailMarkup: `
        <div class="artifact-dogtag-box">
          <div class="dogtag-visual">
            <div class="tag-chain"></div>
            <div class="tag-body">
              <span>ROSS, JULIAN</span>
              <span>LT. // 088-921-A</span>
              <span>BLOOD: O-POS</span>
              <span>STATUS: K.I.A. [FALSIFIED]</span>
            </div>
          </div>
        </div>
        <p class="artifact-narrative">Vincent Sterling hid this tag in his personal desk safe. It carries the living DNA of the enemy ace he claimed was incinerated.</p>
      `
    },
    {
      id: "anchor-wrench",
      title: "8mm Chrome-Vanadium Wrench",
      subtitle: "Grounding Totem // Sterling Manor Garage",
      icon: "🔧",
      theme: "alpha",
      caption: "Used at 2:00 AM on antique roadsters to stop psychological dissociation.",
      detailMarkup: `
        <div class="artifact-wrench-box">
          <div class="wrench-visual">
            <span class="wrench-text">8mm — CHROME VANADIUM — DIN 3110</span>
          </div>
        </div>
        <p class="artifact-narrative">In the quiet of the lunar night, tightening manifold bolts was the only thing that proved to Rian that hands and metal were still real.</p>
      `
    },
    {
      id: "anchor-key",
      title: "Vist Cipher Key & Black Wax",
      subtitle: "Summons Specimen // Berth 44 Console",
      icon: "𐂂",
      theme: "gamma",
      caption: "Solid-state silver telemetry key accompanying the black-wax summons letter from the Vist Foundation.",
      detailMarkup: `
        <div class="artifact-key-box">
          <div class="vist-seal-small">𐂂</div>
          <div class="key-teeth">BERTH 44 // 2400 HRS // L1 CORRIDOR</div>
        </div>
        <p class="artifact-narrative">Accepted at the launch gantry to prime Unit-03's reactor. The Foundation's price for Vincent's silence.</p>
      `
    }
  ],

  // =========================================================================
  // 5. SUBJECT 088 DOSSIER ARCHIVE (Pure Story Lore — Zero Fake RPG Stats)
  // =========================================================================
  dossierArchive: {
    identity: {
      designation: "SUBJECT: 088 // ERIA STERLING",
      origin: "Tripartite Paracausal Reconstruction",
      currentAge: "19 (Biological Host)",
      status: "Active Pilot // Anaheim Black-Project Anomaly"
    },
    harmonicTriad: [
      {
        strata: "Harmonic α: Rian (The Saltwater Soul)",
        context: "17-year-old civilian apprentice at Sunda Strait pier. Vaporized during the U.C. 0093 Axis impact. Provides mechanical empathy, engine tuning reflexes, and moral center."
      },
      {
        strata: "Harmonic β: Lt. Julian Ross (The Tactical Shadow)",
        context: "26-year-old rogue ace responsible for 42M credits of Anaheim sabotage. Mortally wounded in U.C. 0095; physical form broken down and condensed during unshielded Psycho-Frame resonance. Motor cortex reflexes burned into host."
      },
      {
        strata: "Harmonic γ: Eria Sterling (The Living Mask)",
        context: "Adopted as Vincent Sterling's niece in Von Braun City. Given tailored clothes, social etiquette, and private shelter. Suffers from dissociative trauma and the burden of protecting her adoptive family from treason charges."
      }
    ],
    prototypeSpecs: {
      chassis: "Prototype Unit-03",
      liner: "Raw hexagonal Psycho-Frame mesh along cockpit bulkheads",
      weaponry: "High-frequency thermal blade, armor-piercing interceptor cannon, Minovsky chaff canisters",
      dangerProfile: "Unshielded psychic collapse risk under elevated neural resonance."
    }
  },

  // =========================================================================
  // 6. LORE COMPENDIUM (From Lancer.md)
  // =========================================================================
  compendium: {
    "SUNDA SINK": "Ground Zero of the U.C. 0093 Axis impact in Southeast Asia. A flooded, hypersaline wasteland of sunken islands, asteroid debris, and toxic salt plains.",
    "AXIS IMPACT": "March U.C. 0093 disaster where the falling asteroid Axis fractured; half struck Southeast Asia, destroying nations and plunging Earth into an impact winter.",
    "ANAHEIM ELECTRONICS": "The dominant planetary megacorporation secretly supplying military frames and components to all rival factions simultaneously.",
    "VIST FOUNDATION": "Enigmatic, sovereign lunar syndicate holding classified blackmail over corporate and military leadership across the Earth Sphere.",
    "PSYCHO-FRAME": "Alloy embedded with microscopic computer circuits capable of translating human pilot brainwaves directly into physical reality."
  }
};