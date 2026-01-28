// demo/conditions.ts
// Temporary local knowledge base for neurological conditions.
// Later to be replaced by /api/conditions

export type ConditionKey = 'overview' | 'symptoms' | 'help';

export const conditionsIndexMeta = {
  title: {
    en: 'Neurological Conditions A – Z',
    sw: 'Hali za Neva A – Z',
  },
  description: {
    en: 'Explore common neurological conditions, their symptoms, and when to seek help. Tap a condition to learn more.',
    sw: 'Chunguza hali za kawaida za neva, dalili zake, na wakati wa kutafuta msaada. Bonyeza hali kujifunza zaidi.',
  },
};

export type Condition = {
  slug: string;

  hero: {
    title: { en: string; sw: string };
    subtitle: { en: string; sw: string };
  };

  sections: {
    overview: {
      content: { en: string; sw: string };
    };

    symptoms: {
      early: { en: string[]; sw: string[] };
      other?: { en: string[]; sw: string[] };
    };

    help: {
      whenToSeekHelp: { en: string[]; sw: string[] };
      reassurance: { en: string; sw: string };
    };
  };
};

export const conditionsData: Record<string, Condition> = {
  /* ───────────────────────────────
     STROKE
  ─────────────────────────────── */
  stroke: {
    slug: 'stroke',
    hero: {
      title: { en: 'Stroke', sw: 'Kiharusi' },
      subtitle: {
        en: 'A medical emergency affecting blood flow to the brain.',
        sw: 'Dharura ya kitabibu inayohusisha mtiririko wa damu kwenda kwenye ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `A stroke occurs when blood flow to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die within minutes, which is why prompt medical care is critical.

**Causes & Risk Factors:** High blood pressure, diabetes, smoking, high cholesterol, obesity, and heart disease increase the risk of stroke.

**What Happens in the Body:** Depending on the artery affected, different brain functions may be impaired, such as speech, movement, or vision.

**Who is Most Affected:** Strokes are more common in older adults, but can occur at any age. Men have a slightly higher risk, though women often experience more severe outcomes.

**Long-Term Outlook:** Recovery varies; early treatment and rehabilitation significantly improve outcomes. Some people regain full function, while others may have lasting disability.`,
          sw: `Kiharusi hutokea pale mtiririko wa damu kwenda kwenye sehemu ya ubongo unapokatizwa au kupungua. Hii husababisha seli za ubongo kukosa oksijeni na virutubisho muhimu. Seli za ubongo zinaanza kufa ndani ya dakika chache, hivyo huduma ya haraka ni muhimu.

**Sababu & Vizingiti:** Shinikizo la damu, kisukari, kuvuta sigara, cholesterol kubwa, unene kupita kiasi, na ugonjwa wa moyo huongeza hatari ya kiharusi.

**Kinachotokea Mwili:** Kulingana na shina la damu lililoathirika, kazi tofauti za ubongo zinaweza kuathirika, kama vile kuzungumza, mwendo, au kuona.

**Wapi Wengi Wanaathirika:** Kiharusi ni zaidi kwa watu wazee, lakini kinaweza kutokea kwa umri wowote. Wanaume wako kwenye hatari kidogo zaidi, ingawa wanawake mara nyingi wana matokeo makali zaidi.

**Matokeo ya Muda Mrefu:** Urejeaji hutofautiana; matibabu mapema na urejeshaji huongeza sana uwezekano wa nafuu. Wengine hurudi kwenye afya kamili, wengine wanaweza kubaki na ulemavu.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Sudden weakness or numbness, especially on one side of the body',
            'Difficulty speaking or understanding speech',
            'Sudden vision problems in one or both eyes',
            'Severe sudden headache',
            'Loss of coordination or balance',
          ],
          sw: [
            'Udhaifu au ganzi ghafla, hasa upande mmoja wa mwili',
            'Shida ya kuzungumza au kuelewa maneno',
            'Shida ya kuona ghafla kwa jicho moja au yote',
            'Maumivu makali ya kichwa ghafla',
            'Kupoteza uratibu au usawa',
          ],
        },
        other: {
          en: [
            'Confusion or trouble understanding simple instructions',
            'Trouble walking or maintaining posture',
            'Dizziness or fainting',
          ],
          sw: [
            'Kuchanganyikiwa au shida ya kuelewa maagizo rahisi',
            'Shida ya kutembea au kudumisha mwendo',
            'Kizunguzungu au kuanguka',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'If any stroke symptoms appear suddenly, even if mild or temporary',
            'If someone collapses or becomes unresponsive',
            'If speech, vision, or movement changes suddenly',
            'Call emergency services immediately',
          ],
          sw: [
            'Dalili yoyote ya kiharusi zikionekana ghafla, hata kama ni ndogo au ya muda',
            'Mtu akianguka au kupoteza fahamu',
            'Mabadiliko ya ghafla ya kuzungumza, kuona, au mwendo',
            'Piga huduma za dharura mara moja',
          ],
        },
        reassurance: {
          en: 'Fast action saves lives. With immediate treatment and early rehabilitation, many people recover fully or partially. Lifestyle changes and therapy improve long-term outcomes.',
          sw: 'Hatua ya haraka huokoa maisha. Kwa matibabu ya haraka na urejeshaji wa mapema, watu wengi hurudi kwenye afya kamili au sehemu. Mabadiliko ya mtindo wa maisha na tiba huongeza uwezekano wa nafuu wa muda mrefu.',
        },
      },
    },
  },

  /* ───────────────────────────────
     EPILEPSY
  ─────────────────────────────── */
  epilepsy: {
    slug: 'epilepsy',
    hero: {
      title: { en: 'Epilepsy', sw: 'Kifafa' },
      subtitle: {
        en: 'A neurological condition causing recurrent seizures.',
        sw: 'Hali ya neva inayosababisha degedege zinazorudiwa.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Epilepsy is a neurological condition characterized by recurrent seizures caused by abnormal electrical activity in the brain. It can affect people of all ages and is often manageable with proper care.

**Causes & Triggers:** Genetics, brain injury, infections, or unknown causes can trigger seizures.

**Types of Seizures:** Seizures vary from brief lapses of awareness to convulsions affecting the whole body.

**Impact:** Seizures can affect daily life, learning, and safety.

**Long-Term Outlook:** With treatment and support, many individuals live full, active lives.`,
          sw: `Kifafa ni hali ya neva inayojitokeza kwa degedege zinazorudiwa kutokana na shughuli isiyo ya kawaida ya umeme kwenye ubongo. Kinaweza kuathiri watu wa rika zote na mara nyingi kinaweza kudhibitiwa kwa huduma sahihi.

**Sababu & Vizingiti:** Urithi wa familia, jeraha la ubongo, maambukizi, au sababu zisizojulikana zinaweza kusababisha degedege.

**Aina za Degedege:** Degedege zinatofautiana kutoka kupoteza umakini kwa muda mfupi hadi kutetemeka kunakoathiri mwili wote.

**Athari:** Degedege zinaweza kuathiri maisha ya kila siku, ujifunzaji, na usalama.

**Matokeo ya Muda Mrefu:** Kwa matibabu na msaada, watu wengi huishi maisha kamili na yenye shughuli.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Brief lapses of awareness',
            'Sudden muscle jerking',
            'Staring spells',
            'Unusual sensations or feelings',
          ],
          sw: [
            'Kupoteza umakini kwa muda mfupi',
            'Misuli kutikisika ghafla',
            'Kutazama bila mwitikio',
            'Hisia au fahamu zisizo za kawaida',
          ],
        },
        other: {
          en: [
            'Loss of consciousness',
            'Confusion after a seizure',
            'Temporary behavioral changes',
          ],
          sw: [
            'Kupoteza fahamu',
            'Kuchanganyikiwa baada ya degedege',
            'Mabadiliko ya tabia ya muda mfupi',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'First-time seizure',
            'Seizure lasting longer than five minutes',
            'Repeated seizures without recovery',
            'Injury during a seizure',
          ],
          sw: [
            'Degedege ya kwanza',
            'Degedege inayodumu zaidi ya dakika tano',
            'Degedege zinazorudi bila nafuu',
            'Jeraha wakati wa degedege',
          ],
        },
        reassurance: {
          en: 'With treatment and support, many people with epilepsy live full and active lives. Medication adherence and safety precautions reduce risks.',
          sw: 'Kwa matibabu na msaada, watu wengi wenye kifafa huishi maisha kamili na yenye shughuli. Kufuata dawa na tahadhari za usalama hupunguza hatari.',
        },
      },
    },
  },

  /* ───────────────────────────────
  PARKINSON’S DISEASE
  ─────────────────────────────── */
  'parkinsons': {
    slug: 'parkinsons',
    hero: {
      title: { en: "Parkinson's Disease", sw: 'Ugonjwa wa Parkinson' },
      subtitle: {
        en: 'A progressive condition affecting movement and coordination.',
        sw: 'Ugonjwa unaoathiri mwendo na uratibu wa mwili kwa taratibu.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Parkinson's disease is a progressive neurological disorder that affects movement, balance, and coordination. Symptoms develop gradually and can vary widely among individuals.
  
  **Causes & Risk Factors:** Age, genetics, and environmental exposures can increase risk.
  
  **What Happens in the Body:** Loss of dopamine-producing brain cells disrupts movement control.
  
  **Who is Most Affected:** Mostly older adults, but younger-onset Parkinson's occurs.
  
  **Long-Term Outlook:** Progressive but manageable with medication, therapy, and lifestyle support.`,
          sw: `Ugonjwa wa Parkinson ni hali ya neva inayozidi polepole inayoathiri mwendo, usawa, na uratibu. Dalili hujitokeza taratibu na zinatofautiana kati ya watu.
  
  **Sababu & Vizingiti:** Umri, urithi wa familia, na mazingira vinaweza kuongeza hatari.
  
  **Kinachotokea Mwili:** Kupotea kwa seli za ubongo zinazozalisha dopamine kunashusha udhibiti wa mwendo.
  
  **Wapi Wengi Wanaathirika:** Watu wazee zaidi, lakini pia kuna ugonjwa unaoanza mapema.
  
  **Matokeo ya Muda Mrefu:** Inazidi polepole lakini inaweza kudhibitiwa kwa dawa, tiba, na msaada wa mtindo wa maisha.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Tremors in hands or fingers',
            'Slowness of movement',
            'Muscle stiffness',
            'Reduced facial expressions',
          ],
          sw: [
            'Kutetemeka kwa mikono au vidole',
            'Mwendo wa polepole',
            'Kukakamaa kwa misuli',
            'Kupungua kwa hisia uso',
          ],
        },
        other: {
          en: [
            'Difficulty with balance or walking',
            'Soft or slurred speech',
            'Sleep disturbances',
          ],
          sw: [
            'Shida ya usawa au kutembea',
            'Kusema kwa sauti ndogo au isiyoeleweka',
            'Shida za usingizi',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent tremors or stiffness',
            'Difficulty walking or maintaining balance',
            'Speech changes affecting communication',
          ],
          sw: [
            'Kutetemeka au kukakamaa kunakoendelea',
            'Shida ya kutembea au kudumisha usawa',
            'Mabadiliko ya kuzungumza yanayoathiri mawasiliano',
          ],
        },
        reassurance: {
          en: 'Early diagnosis, medication, therapy, and lifestyle changes improve quality of life and slow progression.',
          sw: 'Uchunguzi wa mapema, dawa, tiba, na mabadiliko ya mtindo wa maisha huboresha maisha na kupunguza kasi ya maendeleo ya ugonjwa.',
        },
      },
    },
  },
  
  /* ───────────────────────────────
     MIGRAINE
  ─────────────────────────────── */
  migraine: {
    slug: 'migraine',
    hero: {
      title: { en: 'Migraine', sw: 'Kipandauso' },
      subtitle: {
        en: 'More than a headache — a neurological condition.',
        sw: 'Zaidi ya maumivu ya kichwa — hali ya neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Migraine is a neurological condition characterized by intense, recurring headaches often accompanied by nausea, vomiting, or sensitivity to light and sound.
  
  **Causes & Triggers:** Hormonal changes, stress, sleep disturbances, certain foods, and sensory stimuli.
  
  **Impact:** Can affect daily functioning, work, and social activities.
  
  **Long-Term Outlook:** Manageable with medication, lifestyle modifications, and trigger avoidance.`,
          sw: `Kipandauso ni hali ya neva inayojitokeza kwa maumivu makali ya kichwa yanayorudiwa mara nyingi yakihusiana na kichefuchefu, kutapika, au kukosa uvumilivu wa mwanga na sauti.
  
  **Sababu & Vizingiti:** Mabadiliko ya homoni, msongo, usingizi usiopungua, vyakula fulani, na vichocheo vya hisia.
  
  **Athari:** Inaweza kuathiri shughuli za kila siku, kazi, na maisha ya kijamii.
  
  **Matokeo ya Muda Mrefu:** Inadhibitiwa kwa dawa, mabadiliko ya mtindo wa maisha, na kuepuka vichocheo.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Throbbing or pulsating headache',
            'Sensitivity to light or sound',
            'Nausea or vomiting',
            'Visual disturbances (aura)',
          ],
          sw: [
            'Maumivu ya kichwa yanayopiga',
            'Kukosa uvumilivu wa mwanga au sauti',
            'Kichefuchefu au kutapika',
            'Mabadiliko ya kuona (aura)',
          ],
        },
        other: {
          en: [
            'Fatigue or weakness',
            'Difficulty concentrating',
            'Mood changes',
          ],
          sw: [
            'Uchovu au udhaifu',
            'Shida ya kuzingatia',
            'Mabadiliko ya hisia',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Headaches that disrupt daily life',
            'Sudden severe headache unlike previous ones',
            'Headache with neurological symptoms (weakness, vision changes)',
          ],
          sw: [
            'Maumivu ya kichwa yanayoathiri maisha ya kila siku',
            'Maumivu makali ya ghafla yasiyo ya kawaida',
            'Maumivu ya kichwa yenye dalili za neva (udhaifu, mabadiliko ya kuona)',
          ],
        },
        reassurance: {
          en: 'Migraines are manageable. Identifying triggers and proper treatment reduces frequency and severity.',
          sw: 'Kipandauso kinaweza kudhibitiwa. Kutambua vichocheo na matibabu sahihi hupunguza mara na ukali.',
        },
      },
    },
  },
  
  /* ───────────────────────────────
     DEMENTIA
  ─────────────────────────────── */
  dementia: {
    slug: 'dementia',
    hero: {
      title: { en: 'Dementia', sw: 'Upungufu wa Kumbukumbu' },
      subtitle: {
        en: 'A group of conditions affecting memory and thinking.',
        sw: 'Kundi la hali zinazoathiri kumbukumbu na ufikiri.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Dementia is an umbrella term for conditions that affect memory, thinking, and daily functioning. It is not a normal part of aging and can impact independence.
  
  **Causes & Risk Factors:** Alzheimer’s disease, vascular conditions, infections, and age.
  
  **Impact:** Memory loss, confusion, difficulty performing everyday tasks.
  
  **Long-Term Outlook:** Supportive care, routine, and early intervention improve quality of life.`,
          sw: `Upungufu wa kumbukumbu ni neno linalojumuisha hali zinazoathiri kumbukumbu, ufikiri, na shughuli za kila siku. Sio sehemu ya kawaida ya kuzeeka na inaweza kuathiri uhuru.
  
  **Sababu & Vizingiti:** Ugonjwa wa Alzheimer, hali za mishipa ya damu, maambukizi, na umri.
  
  **Athari:** Kupoteza kumbukumbu, kuchanganyikiwa, shida ya kufanya shughuli za kila siku.
  
  **Matokeo ya Muda Mrefu:** Huduma ya msaada, ratiba, na mwingiliano wa mapema huboresha maisha.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Memory loss affecting daily life',
            'Difficulty finding words',
            'Confusion about time or place',
            'Misplacing items frequently',
          ],
          sw: [
            'Kupoteza kumbukumbu kunakoathiri maisha ya kila siku',
            'Shida ya kupata maneno sahihi',
            'Kuchanganyikiwa kuhusu muda au mahali',
            'Kuweka vitu mahali pasipo sahihi mara kwa mara',
          ],
        },
        other: {
          en: [
            'Difficulty performing complex tasks',
            'Changes in mood or personality',
            'Getting lost in familiar places',
          ],
          sw: [
            'Shida ya kufanya shughuli ngumu',
            'Mabadiliko ya hisia au tabia',
            'Kupotea mahali panapojulikana',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Noticeable changes in memory or behavior',
            'Difficulty managing daily activities',
            'Safety concerns at home',
          ],
          sw: [
            'Mabadiliko yanayoonekana katika kumbukumbu au tabia',
            'Shida ya kusimamia shughuli za kila siku',
            'Masuala ya usalama nyumbani',
          ],
        },
        reassurance: {
          en: 'Support, structured routine, and early guidance help both patients and caregivers maintain quality of life.',
          sw: 'Msaada, ratiba iliyopangwa, na mwongozo wa mapema husaidia wagonjwa na walezi kudumisha maisha bora.',
        },
      },
    },
  },

  /* ───────────────────────────────
     DIABETIC NEUROPATHY
  ──────────────────────────────── */
  diabeticNeuropathy: {
    slug: 'diabeticNeuropathy',
    hero: {
      title: { en: 'Diabetic Neuropathy', sw: 'Neva ya Kisukari' },
      subtitle: {
        en: 'Nerve damage caused by diabetes, affecting feet, hands, and organs.',
        sw: 'Uharibifu wa neva unaosababishwa na kisukari, unaoathiri miguu, mikono, na viungo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Diabetic neuropathy is a common complication of diabetes where high blood sugar damages nerves throughout the body.

  **Causes & Risk Factors:** Poor blood sugar control, long-term diabetes, high blood pressure.

  **Impact:** Numbness, tingling, pain, digestive or urinary problems.

  **Long-Term Outlook:** Controlling blood sugar and medications reduce progression.`,
          sw: `Neva ya kisukari ni tatizo la kawaida la kisukari ambapo sukari ya juu ya damu huharibu neva katika mwili wote.

  **Sababu & Vizingiti:** Kudhibiti sukari vibaya, kisukari cha muda mrefu, shinikizo la damu kubwa.

  **Athari:** Ganzi, hisia za kushika, maumivu, matatizo ya mmeng’enyo au mkojo.

  **Matokeo ya Muda Mrefu:** Kudhibiti sukari ya damu na dawa hupunguza maendeleo.`,
        },
      },
      symptoms: {
        early: {
          en: ['Tingling in hands or feet', 'Mild numbness', 'Burning sensation'],
          sw: ['Hisia za kushika mikono au miguu', 'Ganzi kidogo', 'Hisia ya kuchoma'],
        },
        other: {
          en: ['Muscle weakness', 'Digestive issues', 'Urinary problems'],
          sw: ['Udhaifu wa misuli', 'Matatizo ya mmeng’enyo', 'Matatizo ya mkojo'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent numbness or tingling',
            'Foot ulcers or infections',
            'Weakness affecting daily activities',
          ],
          sw: [
            'Ganzi au hisia za kushika zinazodumu',
            'Vidonda au maambukizi miguu',
            'Udhaifu unaoathiri shughuli za kila siku',
          ],
        },
        reassurance: {
          en: 'Good blood sugar control and early treatment prevent serious complications.',
          sw: 'Kudhibiti sukari vizuri na matibabu mapema huzuia matatizo makubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
      DEPRESSION (NEUROLOGICAL IMPACT)
  ──────────────────────────────── */
  neurologicalDepression: {
    slug: 'neurologicalDepression',
    hero: {
      title: { en: 'Depression', sw: 'Hali ya Unyogovu' },
      subtitle: {
        en: 'Mood disorder affecting brain function and neurological health.',
        sw: 'Tatizo la hisia linaloathiri kazi ya ubongo na afya ya neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Neurological depression refers to depressive disorders with a direct impact on brain circuits, sometimes secondary to other neurological conditions.

  **Causes & Risk Factors:** Brain injury, neurotransmitter imbalance, chronic illness.

  **Impact:** Low mood, fatigue, cognitive changes.

  **Long-Term Outlook:** Therapy, medication, and lifestyle adjustments improve outcomes.`,
          sw: `Unyogovu wa neva unahusu matatizo ya hisia yanayoathiri moja kwa moja mzunguko wa ubongo, mara nyingine kutokana na hali nyingine ya neva.

  **Sababu & Vizingiti:** Jeraha la ubongo, mchanganyiko wa neurotransmitter, ugonjwa sugu.

  **Athari:** Hisia za chini, uchovu, mabadiliko ya utambuzi.

  **Matokeo ya Muda Mrefu:** Tiba, dawa, na mabadiliko ya mtindo wa maisha huboresha matokeo.`,
        },
      },
      symptoms: {
        early: {
          en: ['Persistent sadness', 'Loss of interest', 'Fatigue'],
          sw: ['Huzuni inayodumu', 'Kupoteza hamu', 'Uchovu'],
        },
        other: {
          en: ['Cognitive slowing', 'Sleep disturbances', 'Appetite changes'],
          sw: ['Kupungua kwa utambuzi', 'Matatizo ya usingizi', 'Mabadiliko ya hamu ya chakula'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Depressed mood lasting more than two weeks',
            'Difficulty performing daily activities',
            'Thoughts of self-harm',
          ],
          sw: [
            'Hisia za unyogovu zinazodumu zaidi ya wiki mbili',
            'Shida ya kufanya shughuli za kila siku',
            'Mawazo ya kujiua',
          ],
        },
        reassurance: {
          en: 'Early intervention and therapy improve mental and neurological health.',
          sw: 'Kuingilia mapema na tiba huboresha afya ya akili na neva.',
        },
      },
    },
  },

  /* ───────────────────────────────
      DEGENERATIVE DISC DISEASE
  ──────────────────────────────── */
  degenerativeDisc: {
    slug: 'degenerativeDisc',
    hero: {
      title: { en: 'Degenerative Disc Disease', sw: 'Hali ya Diski Kubadilika' },
      subtitle: {
        en: 'Spinal discs deteriorate, affecting nerves and mobility.',
        sw: 'Diski za uti wa mgongo hubadilika, zikioathiri neva na mwendo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Degenerative disc disease is a condition where spinal discs wear down, causing nerve compression, pain, and reduced mobility.

  **Causes & Risk Factors:** Aging, repetitive strain, injury.

  **Impact:** Back pain, numbness, weakness, limited range of motion.

  **Long-Term Outlook:** Physical therapy, medications, or surgery can relieve symptoms.`,
          sw: `Hali ya diski kubadilika ni pale diski za uti wa mgongo zinapozeeka au kuharibika, zikisababisha kukandamizwa kwa neva, maumivu, na kupungua kwa mwendo.

  **Sababu & Vizingiti:** Kuzeeka, msongo unaojirudia, jeraha.

  **Athari:** Maumivu ya mgongo, ganzi, udhaifu, kupunguzwa kwa mwendo.

  **Matokeo ya Muda Mrefu:** Tiba ya mwili, dawa, au upasuaji unaweza kupunguza dalili.`,
        },
      },
      symptoms: {
        early: {
          en: ['Lower back pain', 'Mild numbness', 'Stiffness'],
          sw: ['Maumivu ya chini ya mgongo', 'Ganzi kidogo', 'Uchovu wa misuli'],
        },
        other: {
          en: ['Pain radiating to legs', 'Weakness', 'Loss of flexibility'],
          sw: ['Maumivu yanayosambaa hadi miguu', 'Udhaifu', 'Kupoteza unyumbufu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent back pain',
            'Numbness or tingling in limbs',
            'Weakness affecting walking or movement',
          ],
          sw: [
            'Maumivu ya mgongo yanayoendelea',
            'Ganzi au hisia za kushika kwenye miguu/mikono',
            'Udhaifu unaoathiri kutembea au mwendo',
          ],
        },
        reassurance: {
          en: 'Early therapy and lifestyle modifications reduce long-term complications.',
          sw: 'Tiba mapema na mabadiliko ya mtindo wa maisha hupunguza matatizo ya muda mrefu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      DYSAUTONOMIA
  ──────────────────────────────── */
  dysautonomia: {
    slug: 'dysautonomia',
    hero: {
      title: { en: 'Dysautonomia', sw: 'Dysautonomia' },
      subtitle: {
        en: 'Disorders of the autonomic nervous system affecting heart rate, blood pressure, and digestion.',
        sw: 'Matatizo ya mfumo wa neva wa moja kwa moja unaoathiri kasi ya moyo, shinikizo la damu, na mmeng’enyo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Dysautonomia refers to conditions where the autonomic nervous system malfunctions, affecting involuntary functions.

  **Causes & Risk Factors:** Genetic disorders, autoimmune conditions, chronic illness.

  **Impact:** Dizziness, fainting, abnormal heart rate, digestive issues.

  **Long-Term Outlook:** Symptom management, lifestyle adjustments, and medications improve quality of life.`,
          sw: `Dysautonomia inahusu hali ambapo mfumo wa neva wa moja kwa moja haufanyi kazi vizuri, ukioathiri kazi zisizo za hiari.

  **Sababu & Vizingiti:** Magonjwa ya urithi, hali za kinga ya mwili, ugonjwa sugu.

  **Athari:** Kizunguzungu, kuanguka, kasi ya moyo isiyo ya kawaida, matatizo ya mmeng’enyo.

  **Matokeo ya Muda Mrefu:** Usimamizi wa dalili, mabadiliko ya mtindo wa maisha, na dawa huboresha ubora wa maisha.`,
        },
      },
      symptoms: {
        early: {
          en: ['Dizziness', 'Fainting', 'Rapid heartbeat'],
          sw: ['Kizunguzungu', 'Kuanguka', 'Moyo kukimbia haraka'],
        },
        other: {
          en: ['Low blood pressure', 'Digestive problems', 'Fatigue'],
          sw: ['Shinikizo la damu la chini', 'Matatizo ya mmeng’enyo', 'Uchovu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Frequent fainting episodes',
            'Rapid or irregular heart rate',
            'Persistent dizziness or fatigue',
          ],
          sw: [
            'Kuanguka mara kwa mara',
            'Kasi ya moyo haraka au isiyo ya kawaida',
            'Kizunguzungu au uchovu unaoendelea',
          ],
        },
        reassurance: {
          en: 'Monitoring and lifestyle changes help maintain safety and quality of life.',
          sw: 'Ufuatiliaji na mabadiliko ya mtindo wa maisha husaidia kudumisha usalama na ubora wa maisha.',
        },
      },
    },
  },

  /* ───────────────────────────────
      DIFFUSE AXONAL INJURY
  ──────────────────────────────── */
  diffuseAxonalInjury: {
    slug: 'diffuse-axonal-injury',
    hero: {
      title: { en: 'Diffuse Axonal Injury', sw: 'Jeraha la Axonal Lenyeene' },
      subtitle: {
        en: 'Brain injury caused by shearing forces damaging axons.',
        sw: 'Jeraha la ubongo linalosababishwa na nguvu za kuvuta zinazoathiri axons.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Diffuse axonal injury (DAI) occurs after traumatic brain injury, causing widespread damage to axons and severe neurological impairment.

  **Causes & Risk Factors:** Car accidents, falls, sports injuries.

  **Impact:** Loss of consciousness, cognitive deficits, coma.

  **Long-Term Outlook:** Rehabilitation can improve function, but severe cases may result in permanent disability.`,
          sw: `Jeraha la axonal lenyeene (DAI) hutokea baada ya jeraha la kichwa, likisababisha uharibifu mkubwa wa axons na ulemavu mkubwa wa neva.

  **Sababu & Vizingiti:** Ajali za gari, kuanguka, majeraha ya michezo.

  **Athari:** Kupoteza fahamu, upungufu wa utambuzi, koma.

  **Matokeo ya Muda Mrefu:** Urejeshaji unaweza kuongeza utendaji, lakini kesi mbaya zinaweza kusababisha ulemavu wa kudumu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Loss of consciousness', 'Confusion', 'Memory issues'],
          sw: ['Kupoteza fahamu', 'Kuchanganyikiwa', 'Matatizo ya kumbukumbu'],
        },
        other: {
          en: ['Persistent headaches', 'Balance problems', 'Fatigue'],
          sw: ['Maumivu ya kichwa yanayoendelea', 'Matatizo ya usawa', 'Uchovu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Severe head trauma',
            'Prolonged unconsciousness',
            'Neurological deterioration',
          ],
          sw: [
            'Jeraha kubwa la kichwa',
            'Kutokuwa na fahamu kwa muda mrefu',
            'Kupungua kwa hali ya neva',
          ],
        },
        reassurance: {
          en: 'Immediate medical attention is critical for recovery.',
          sw: 'Huduma ya dharura ya kitiba ni muhimu kwa nafuu.',
        },
      },
    },
  },

  /* ───────────────────────────────
     ATAXIA
  ──────────────────────────────── */
  ataxia: {
    slug: 'ataxia',
    hero: {
      title: { en: 'Ataxia', sw: 'Ataksia' },
      subtitle: {
        en: 'A disorder affecting balance and coordination.',
        sw: 'Hali inayohusisha uratibu na usawa wa mwili.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Ataxia is a neurological disorder that affects movement coordination, making everyday tasks challenging.

  **Causes & Risk Factors:** Can be inherited, result from stroke, tumor, or brain injury.

  **Symptoms & Signs:** Loss of coordination, unsteady gait, difficulty with fine motor tasks.

  **Impact:** May affect walking, balance, speech, and eye movements.

  **Long-Term Outlook:** Some forms are progressive, while others stabilize. Therapy improves function.`,
          sw: `Ataksia ni hali ya neva inayohusisha uratibu wa mwendo, kufanya shughuli za kila siku kuwa ngumu.

  **Sababu & Vizingiti:** Inaweza kurithiwa, au kutokana na kiharusi, tumor, au jeraha la ubongo.

  **Dalili & Ishara:** Kupoteza uratibu, kutembea bila usawa, shida katika kazi ndogo za mikono.

  **Athari:** Inaweza kuathiri kutembea, usawa, kuzungumza, na harakati za jicho.

  **Matokeo ya Muda Mrefu:** Baadhi zinazidi polepole, zingine zinatulia. Tiba huongeza uwezo wa mwili.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Unsteady walking or imbalance',
            'Clumsiness with hands',
            'Slurred speech',
          ],
          sw: [
            'Kutembea bila usawa',
            'Kutokuwa makini kwa mikono',
            'Kuzungumza kwa taratibu',
          ],
        },
        other: {
          en: ['Tremors', 'Difficulty swallowing', 'Vision problems'],
          sw: ['Kutetemeka', 'Shida ya kumeza', 'Matatizo ya kuona'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent imbalance or coordination problems',
            'Sudden worsening of symptoms',
            'Difficulty performing daily tasks safely',
          ],
          sw: [
            'Shida ya kudumu ya usawa au uratibu',
            'Kuongezeka ghafla kwa dalili',
            'Shida ya kufanya shughuli za kila siku kwa usalama',
          ],
        },
        reassurance: {
          en: 'Therapies and supportive care can improve daily function and safety.',
          sw: 'Tiba na msaada wa msaada huongeza uwezo wa kufanya shughuli za kila siku na usalama.',
        },
      },
    },
  },

  /* ───────────────────────────────
      ALZHEIMER’S DISEASE
  ──────────────────────────────── */
  alzheimers: {
    slug: 'alzheimers',
    hero: {
      title: { en: "Alzheimer's Disease", sw: 'Ugonjwa wa Alzheimer' },
      subtitle: {
        en: 'A progressive condition affecting memory and thinking.',
        sw: 'Hali inayozidi kuathiri kumbukumbu na ufikiri.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Alzheimer’s disease is a neurodegenerative disorder leading to memory loss, cognitive decline, and behavioral changes.

  **Causes & Risk Factors:** Age, genetics, lifestyle, cardiovascular health.

  **Impact:** Difficulty remembering recent events, impaired judgment, and personality changes.

  **Long-Term Outlook:** Progressive condition; early intervention and supportive care help maintain quality of life.`,
          sw: `Ugonjwa wa Alzheimer ni hali ya kuharibika kwa neva inayosababisha kupoteza kumbukumbu, kushuka kwa ufikiri, na mabadiliko ya tabia.

  **Sababu & Vizingiti:** Umri, urithi wa familia, mtindo wa maisha, afya ya moyo.

  **Athari:** Shida ya kukumbuka matukio ya hivi karibuni, kupoteza ufahamu, na mabadiliko ya tabia.

  **Matokeo ya Muda Mrefu:** Hali inazidi; kuingilia mapema na msaada husaidia kudumisha maisha bora.`,
        },
      },
      symptoms: {
        early: {
          en: ['Memory lapses', 'Difficulty finding words', 'Disorientation'],
          sw: ['Kupoteza kumbukumbu', 'Shida ya kupata maneno', 'Kuchanganyikiwa'],
        },
        other: {
          en: ['Behavioral changes', 'Confusion about time', 'Difficulty performing tasks'],
          sw: ['Mabadiliko ya tabia', 'Kuchanganyikiwa kuhusu muda', 'Shida ya kufanya shughuli'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Noticeable memory decline',
            'Difficulty handling daily responsibilities',
            'Confusion affecting safety',
          ],
          sw: [
            'Kupungua kwa kumbukumbu kinachoonekana',
            'Shida ya kushughulikia majukumu ya kila siku',
            'Kuchanganyikiwa kunakoathiri usalama',
          ],
        },
        reassurance: {
          en: 'Early care, routine, and support help patients and caregivers adapt.',
          sw: 'Huduma ya mapema, ratiba, na msaada husaidia wagonjwa na walezi kuzoea.',
        },
      },
    },
  },

  /* ───────────────────────────────
      AMYOTROPHIC LATERAL SCLEROSIS (ALS)
  ──────────────────────────────── */
  als: {
    slug: 'als',
    hero: {
      title: { en: 'Amyotrophic Lateral Sclerosis (ALS)', sw: 'Ugonjwa wa ALS' },
      subtitle: {
        en: 'A degenerative disorder affecting motor neurons.',
        sw: 'Hali inayoharibu seli za misuli na neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `ALS is a progressive disease that affects nerve cells controlling voluntary muscles.

  **Causes & Risk Factors:** Mostly unknown; some cases are genetic.

  **Impact:** Weakness, muscle wasting, difficulty speaking, swallowing, and breathing.

  **Long-Term Outlook:** Progressive and fatal; supportive care improves quality of life.`,
          sw: `ALS ni ugonjwa unaoendelea unaoathiri seli za neva zinazodhibiti misuli ya hiari.

  **Sababu & Vizingiti:** Mara nyingi hazijulikani; baadhi ni za urithi.

  **Athari:** Udhaifu, kupungua kwa misuli, shida ya kuzungumza, kumeza, na kupumua.

  **Matokeo ya Muda Mrefu:** Unaendelea na unaweza kusababisha kifo; msaada huongeza maisha bora.`,
        },
      },
      symptoms: {
        early: {
          en: ['Muscle weakness', 'Difficulty speaking clearly', 'Hand or foot cramps'],
          sw: ['Udhaifu wa misuli', 'Shida ya kuzungumza kwa uwazi', 'Mikono au miguu kukakamaa'],
        },
        other: {
          en: ['Slurred speech', 'Trouble swallowing', 'Respiratory difficulties'],
          sw: ['Kuzungumza kwa taratibu', 'Shida ya kumeza', 'Matatizo ya kupumua'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Noticeable weakness or muscle wasting',
            'Difficulty with daily activities',
            'Speech or swallowing problems',
          ],
          sw: [
            'Udhaifu au kupungua kwa misuli kinachoonekana',
            'Shida katika shughuli za kila siku',
            'Shida ya kuzungumza au kumeza',
          ],
        },
        reassurance: {
          en: 'Specialist care and therapy can maintain comfort and function for longer.',
          sw: 'Huduma maalumu na tiba husaidia kudumisha starehe na uwezo kwa muda mrefu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      APHASIA
  ──────────────────────────────── */
  aphasia: {
    slug: 'aphasia',
    hero: {
      title: { en: 'Aphasia', sw: 'Afazia' },
      subtitle: {
        en: 'A language disorder affecting speaking, understanding, reading, or writing.',
        sw: 'Hali ya lugha inayohusisha kuzungumza, kuelewa, kusoma, au kuandika.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Aphasia is a communication disorder resulting from brain injury or stroke.

  **Causes & Risk Factors:** Stroke, brain trauma, infections, or tumors.

  **Impact:** Difficulty with speaking, understanding language, reading, or writing.

  **Long-Term Outlook:** Can improve with speech therapy and rehabilitation.`,
          sw: `Afazia ni shida ya mawasiliano kutokana na jeraha la ubongo au kiharusi.

  **Sababu & Vizingiti:** Kiharusi, jeraha la ubongo, maambukizi, au tumor.

  **Athari:** Shida ya kuzungumza, kuelewa lugha, kusoma, au kuandika.

  **Matokeo ya Muda Mrefu:** Inaweza kuimarika kwa tiba ya lugha na urejeshaji.`,
        },
      },
      symptoms: {
        early: {
          en: ['Trouble finding words', 'Difficulty speaking', 'Difficulty understanding speech'],
          sw: ['Shida ya kupata maneno', 'Shida ya kuzungumza', 'Shida ya kuelewa maneno'],
        },
        other: {
          en: ['Reading difficulties', 'Writing difficulties', 'Frustration with communication'],
          sw: ['Shida ya kusoma', 'Shida ya kuandika', 'Kuchanganyikiwa kwa mawasiliano'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent difficulty communicating',
            'Sudden onset after stroke or injury',
            'Impacting daily life or work',
          ],
          sw: [
            'Shida inayoendelea ya mawasiliano',
            'Kuibuka ghafla baada ya kiharusi au jeraha',
            'Inaathiri maisha ya kila siku au kazi',
          ],
        },
        reassurance: {
          en: 'Speech therapy and supportive care help restore communication skills.',
          sw: 'Tiba ya lugha na msaada husaidia kurejesha ujuzi wa mawasiliano.',
        },
      },
    },
  },

  /* ───────────────────────────────
      AGNOSIA
  ──────────────────────────────── */
  agnosia: {
    slug: 'agnosia',
    hero: {
      title: { en: 'Agnosia', sw: 'Agnosia' },
      subtitle: {
        en: 'Impairment in recognizing objects, people, sounds, shapes, or smells.',
        sw: 'Shida ya kutambua vitu, watu, sauti, umbo, au harufu.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Agnosia is the inability to recognize familiar objects, faces, sounds, or smells, usually due to brain injury.

  **Causes & Risk Factors:** Stroke, trauma, infections, or neurological disease.

  **Impact:** Can interfere with daily activities and safety.

  **Long-Term Outlook:** Depends on the brain area affected; rehabilitation can help.`,
          sw: `Agnosia ni kushindwa kutambua vitu, nyuso, sauti, au harufu zinazojulikana, mara nyingi kutokana na jeraha la ubongo.

  **Sababu & Vizingiti:** Kiharusi, jeraha, maambukizi, au ugonjwa wa neva.

  **Athari:** Inaweza kuathiri shughuli za kila siku na usalama.

  **Matokeo ya Muda Mrefu:** Inategemea sehemu ya ubongo iliyoharibika; urejeshaji unaweza kusaidia.`,
        },
      },
      symptoms: {
        early: {
          en: ['Cannot recognize familiar objects', 'Difficulty identifying faces', 'Confusion with sounds'],
          sw: ['Hawezi kutambua vitu vinavyojulikana', 'Shida ya kutambua nyuso', 'Kuchanganyikiwa na sauti'],
        },
        other: {
          en: ['Difficulty with shapes or colors', 'Loss of sense of smell', 'Trouble navigating familiar places'],
          sw: ['Shida na maumbo au rangi', 'Kupoteza harufu', 'Shida ya kutembea kwenye sehemu zinazojulikana'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Sudden difficulty recognizing people or objects',
            'Interference with daily life',
            'After stroke or brain injury',
          ],
          sw: [
            'Shida ghafla ya kutambua watu au vitu',
            'Inaathiri maisha ya kila siku',
            'Baada ya kiharusi au jeraha la ubongo',
          ],
        },
        reassurance: {
          en: 'Occupational therapy and supportive strategies improve adaptation.',
          sw: 'Tiba ya kazi na mikakati ya msaada huongeza ufanisi wa kuzoea.',
        },
      },
    },
  },

  /* ───────────────────────────────
     BELL’S PALSY
──────────────────────────────── */
bellsPalsy: {
  slug: 'bellsPalsy',
  hero: {
    title: { en: "Bell’s Palsy", sw: 'Kupooza kwa Bell' },
    subtitle: {
      en: 'Sudden weakness or paralysis of facial muscles.',
      sw: 'Udhaifu au kupooza ghafla kwa misuli ya uso.',
    },
  },
  sections: {
    overview: {
      content: {
        en: `Bell’s palsy is a condition that causes sudden weakness or paralysis of the muscles on one side of the face. It usually results from inflammation or compression of the facial nerve.

**Causes & Risk Factors:** Often linked to viral infections. Pregnancy, diabetes, and recent infections increase risk.

**What Happens in the Body:** The facial nerve becomes inflamed, disrupting signals to facial muscles.

**Who is Affected:** Can affect any age group, most commonly adults.

**Long-Term Outlook:** Most people recover fully within weeks to months, especially with early treatment.`,
        sw: `Kupooza kwa Bell ni hali inayosababisha udhaifu au kupooza ghafla kwa misuli ya upande mmoja wa uso. Mara nyingi husababishwa na kuvimba kwa neva ya uso.

**Sababu & Vizingiti:** Mara nyingi huhusishwa na maambukizi ya virusi. Ujauzito, kisukari, na maambukizi ya hivi karibuni huongeza hatari.

**Kinachotokea Mwili:** Neva ya uso huvimba na kuathiri mawasiliano na misuli ya uso.

**Wapi Wengi Wanaathirika:** Inaweza kutokea kwa umri wowote, zaidi kwa watu wazima.

**Matokeo ya Muda Mrefu:** Wengi hupona kabisa ndani ya wiki au miezi, hasa kwa matibabu ya mapema.`,
      },
    },
    symptoms: {
      early: {
        en: [
          'Sudden facial drooping',
          'Difficulty closing one eye',
          'Loss of facial expression',
        ],
        sw: [
          'Uso kudondoka ghafla',
          'Shida ya kufumba jicho moja',
          'Kupoteza mionekano ya uso',
        ],
      },
      other: {
        en: ['Drooling', 'Altered taste', 'Ear pain'],
        sw: ['Kutoka mate', 'Kubadilika kwa ladha', 'Maumivu ya sikio'],
      },
    },
    help: {
      whenToSeekHelp: {
        en: [
          'Sudden facial weakness',
          'Difficulty closing eye',
          'Concern for stroke-like symptoms',
        ],
        sw: [
          'Udhaifu wa ghafla wa uso',
          'Shida ya kufumba jicho',
          'Hofu ya dalili zinazofanana na kiharusi',
        ],
      },
      reassurance: {
        en: 'Most cases improve significantly with time and early care.',
        sw: 'Kesi nyingi huimarika kwa muda na huduma ya mapema.',
      },
    },
  },
},

/* ───────────────────────────────
     BRAIN TUMOR
  ──────────────────────────────── */
  brainTumor: {
    slug: 'brainTumor',
    hero: {
      title: { en: 'Brain Tumor', sw: 'Uvimbe wa Ubongo' },
      subtitle: {
        en: 'Abnormal growth of cells in or around the brain.',
        sw: 'Ukuaji usio wa kawaida wa seli ndani au karibu na ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `A brain tumor is a mass of abnormal cells in the brain. Tumors may be benign or malignant and can disrupt brain function.

  **Causes & Risk Factors:** Often unknown; genetics and radiation exposure may contribute.

  **Impact:** Symptoms depend on tumor size and location.

  **Long-Term Outlook:** Varies widely; early diagnosis improves treatment options.`,
          sw: `Uvimbe wa ubongo ni mkusanyiko wa seli zisizo za kawaida ndani ya ubongo. Uvimbe unaweza kuwa hatari au usio hatari lakini huathiri kazi za ubongo.

  **Sababu & Vizingiti:** Mara nyingi hazijulikani; urithi na mionzi vinaweza kuchangia.

  **Athari:** Dalili hutegemea ukubwa na eneo la uvimbe.

  **Matokeo ya Muda Mrefu:** Hutofautiana; utambuzi wa mapema huongeza chaguzi za matibabu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Persistent headaches', 'Seizures', 'Nausea or vomiting'],
          sw: ['Maumivu ya kichwa sugu', 'Degedege', 'Kichefuchefu au kutapika'],
        },
        other: {
          en: ['Vision problems', 'Memory changes', 'Personality changes'],
          sw: ['Matatizo ya kuona', 'Mabadiliko ya kumbukumbu', 'Mabadiliko ya tabia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Severe or worsening headaches',
            'New seizures',
            'Neurological changes',
          ],
          sw: [
            'Maumivu makali au yanayoongezeka ya kichwa',
            'Degedege mpya',
            'Mabadiliko ya neva',
          ],
        },
        reassurance: {
          en: 'Modern imaging and treatments offer effective management options.',
          sw: 'Teknolojia za kisasa hutoa njia bora za kudhibiti hali hii.',
        },
      },
    },
  },

  /* ───────────────────────────────
      BRAIN INJURY (TRAUMATIC)
  ──────────────────────────────── */
  brainInjury: {
    slug: 'brainInjury',
    hero: {
      title: { en: 'Brain Injury (Traumatic)', sw: 'Jeraha la Ubongo' },
      subtitle: {
        en: 'Damage to the brain caused by an external force.',
        sw: 'Uharibifu wa ubongo unaosababishwa na nguvu ya nje.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Traumatic brain injury (TBI) occurs when an external force injures the brain, often due to accidents or falls.

  **Causes & Risk Factors:** Road accidents, falls, violence, sports injuries.

  **Impact:** Can affect thinking, memory, emotions, and physical abilities.

  **Long-Term Outlook:** Ranges from full recovery to long-term disability.`,
          sw: `Jeraha la ubongo hutokea pale nguvu ya nje inapoharibu ubongo, mara nyingi kutokana na ajali au kuanguka.

  **Sababu & Vizingiti:** Ajali za barabarani, kuanguka, vurugu, majeraha ya michezo.

  **Athari:** Huathiri ufikiri, kumbukumbu, hisia, na uwezo wa mwili.

  **Matokeo ya Muda Mrefu:** Hutofautiana kutoka kupona kabisa hadi ulemavu wa muda mrefu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Loss of consciousness', 'Confusion', 'Headache'],
          sw: ['Kupoteza fahamu', 'Kuchanganyikiwa', 'Maumivu ya kichwa'],
        },
        other: {
          en: ['Memory problems', 'Mood changes', 'Difficulty concentrating'],
          sw: ['Shida ya kumbukumbu', 'Mabadiliko ya hisia', 'Shida ya umakini'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Loss of consciousness',
            'Persistent confusion',
            'Worsening headaches',
          ],
          sw: [
            'Kupoteza fahamu',
            'Kuchanganyikiwa kunakoendelea',
            'Maumivu ya kichwa yanayoongezeka',
          ],
        },
        reassurance: {
          en: 'Early treatment and rehabilitation greatly improve recovery.',
          sw: 'Matibabu ya mapema na urejeshaji huongeza sana nafuu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      BRUXISM (NEUROLOGICAL-RELATED)
  ──────────────────────────────── */
  bruxism: {
    slug: 'bruxism',
    hero: {
      title: { en: 'Bruxism', sw: 'Kukaza Meno' },
      subtitle: {
        en: 'Involuntary grinding or clenching of teeth.',
        sw: 'Kukaza au kusaga meno bila hiari.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Bruxism involves involuntary grinding or clenching of teeth, often linked to neurological stress pathways.

  **Causes & Risk Factors:** Stress, anxiety, sleep disorders, neurological conditions.

  **Impact:** Jaw pain, headaches, tooth damage.

  **Long-Term Outlook:** Manageable with therapy, stress control, and dental care.`,
          sw: `Bruxism ni kukaza au kusaga meno bila hiari, mara nyingi huhusishwa na njia za neva zinazohusiana na msongo.

  **Sababu & Vizingiti:** Msongo wa mawazo, wasiwasi, matatizo ya usingizi, hali za neva.

  **Athari:** Maumivu ya taya, maumivu ya kichwa, uharibifu wa meno.

  **Matokeo ya Muda Mrefu:** Inaweza kudhibitiwa kwa tiba, udhibiti wa msongo, na huduma ya meno.`,
        },
      },
      symptoms: {
        early: {
          en: ['Jaw tightness', 'Morning headaches', 'Tooth sensitivity'],
          sw: ['Kukaza kwa taya', 'Maumivu ya kichwa asubuhi', 'Meno kuwa nyeti'],
        },
        other: {
          en: ['Facial pain', 'Sleep disturbance', 'Worn teeth'],
          sw: ['Maumivu ya uso', 'Kuvurugika kwa usingizi', 'Meno kuharibika'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent jaw pain',
            'Sleep disruption',
            'Tooth damage',
          ],
          sw: [
            'Maumivu ya taya yanayoendelea',
            'Kuvurugika kwa usingizi',
            'Uharibifu wa meno',
          ],
        },
        reassurance: {
          en: 'Lifestyle changes and therapy often reduce symptoms significantly.',
          sw: 'Mabadiliko ya mtindo wa maisha na tiba hupunguza dalili kwa kiasi kikubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
      BENIGN ESSENTIAL TREMOR
  ──────────────────────────────── */
  essentialTremor: {
    slug: 'essential-tremor',
    hero: {
      title: { en: 'Benign Essential Tremor', sw: 'Mtikisiko wa Kawaida' },
      subtitle: {
        en: 'A common movement disorder causing rhythmic shaking.',
        sw: 'Hali ya kawaida ya mwendo inayosababisha mtikisiko wa kurudia.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Essential tremor is a neurological condition causing rhythmic shaking, most commonly in the hands.

  **Causes & Risk Factors:** Often inherited; worsens with stress or fatigue.

  **Impact:** Difficulty with fine motor tasks like writing or eating.

  **Long-Term Outlook:** Not life-threatening and manageable with treatment.`,
          sw: `Mtikisiko wa kawaida ni hali ya neva inayosababisha mtikisiko wa kurudia, mara nyingi mikononi.

  **Sababu & Vizingiti:** Mara nyingi hurithiwa; huongezeka kwa msongo au uchovu.

  **Athari:** Shida ya kufanya kazi ndogo kama kuandika au kula.

  **Matokeo ya Muda Mrefu:** Sio hatari kwa maisha na inaweza kudhibitiwa.`,
        },
      },
      symptoms: {
        early: {
          en: ['Hand tremors', 'Shaking during movement', 'Voice tremor'],
          sw: ['Mikono kutetemeka', 'Mtikisiko wakati wa harakati', 'Sauti kutetemeka'],
        },
        other: {
          en: ['Head nodding', 'Balance issues', 'Anxiety-related worsening'],
          sw: ['Kichwa kutikisika', 'Shida ya usawa', 'Kuongezeka kwa msongo'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Tremors affecting daily activities',
            'Worsening shaking',
            'Difficulty with coordination',
          ],
          sw: [
            'Mtikisiko unaoathiri maisha ya kila siku',
            'Kuongezeka kwa mtikisiko',
            'Shida ya uratibu',
          ],
        },
        reassurance: {
          en: 'Medications and lifestyle adjustments help control symptoms.',
          sw: 'Dawa na marekebisho ya maisha husaidia kudhibiti dalili.',
        },
      },
    },
  },

  /* ───────────────────────────────
     CEREBRAL PALSY
  ──────────────────────────────── */
  cerebralPalsy: {
    slug: 'cerebralPalsy',
    hero: {
      title: { en: 'Cerebral Palsy', sw: 'Upungufu wa Ubongo' },
      subtitle: {
        en: 'A group of disorders affecting movement and muscle tone.',
        sw: 'Kundi la matatizo yanayoathiri mwendo na msukumo wa misuli.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Cerebral palsy (CP) is caused by abnormal brain development or damage, often before birth. It affects movement, posture, and coordination.

  **Causes & Risk Factors:** Premature birth, lack of oxygen during birth, brain infections.

  **Impact:** Muscle stiffness or floppiness, balance issues, difficulty with motor skills.

  **Long-Term Outlook:** CP is lifelong, but therapies improve function and quality of life.`,
          sw: `Upungufu wa ubongo (CP) husababishwa na ukuaji wa ubongo usio wa kawaida au uharibifu, mara nyingi kabla ya kuzaliwa. Huathiri mwendo, mkao, na uratibu.

  **Sababu & Vizingiti:** Kuzaliwa mapema, ukosefu wa oksijeni wakati wa kuzaliwa, maambukizi ya ubongo.

  **Athari:** Ugumu au unyumbufu wa misuli, matatizo ya usawa, shida ya ujuzi wa mwendo.

  **Matokeo ya Muda Mrefu:** CP ni ya maisha yote, lakini tiba huongeza utendaji na ubora wa maisha.`,
        },
      },
      symptoms: {
        early: {
          en: ['Delayed motor milestones', 'Stiff or floppy limbs', 'Poor coordination'],
          sw: ['Kuchelewa kufikia hatua za mwendo', 'Miili ngumu au nyepesi', 'Uratibu duni'],
        },
        other: {
          en: ['Speech difficulties', 'Seizures', 'Intellectual disability'],
          sw: ['Shida ya kuzungumza', 'Degedege', 'Upungufu wa akili'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Noticeable delay in movement milestones',
            'Abnormal muscle tone',
            'Persistent difficulty with balance or posture',
          ],
          sw: [
            'Kuchelewa kufikia hatua za mwendo',
            'Msukumo wa misuli usio wa kawaida',
            'Shida ya kudumu ya usawa au mkao',
          ],
        },
        reassurance: {
          en: 'Early intervention and therapy significantly improve function and independence.',
          sw: 'Kuingilia mapema na tiba huboresha sana utendaji na uhuru.',
        },
      },
    },
  },

  /* ───────────────────────────────
      CHRONIC MIGRAINE
  ──────────────────────────────── */
  chronicMigraine: {
    slug: 'chronicMigraine',
    hero: {
      title: { en: 'Chronic Migraine', sw: 'Kichwa Kikali cha Migraine' },
      subtitle: {
        en: 'Frequent, long-lasting migraine headaches.',
        sw: 'Maumivu ya kichwa ya migraine yanayojirudia mara kwa mara na kudumu.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Chronic migraine involves headache attacks occurring 15 or more days per month for over three months. Often accompanied by nausea, light sensitivity, and visual disturbances.

  **Causes & Risk Factors:** Genetics, hormonal changes, stress, poor sleep.

  **Impact:** Interferes with work, school, and daily activities.

  **Long-Term Outlook:** Manageable with medications and lifestyle changes.`,
          sw: `Migraine sugu inahusisha mashambulizi ya maumivu ya kichwa yanayotokea siku 15 au zaidi kwa mwezi kwa zaidi ya miezi mitatu. Mara nyingi huambatana na kichefuchefu, hisia za mwanga, na matatizo ya kuona.

  **Sababu & Vizingiti:** Urithi, mabadiliko ya homoni, msongo, usingizi duni.

  **Athari:** Huathiri kazi, shule, na shughuli za kila siku.

  **Matokeo ya Muda Mrefu:** Inaweza kudhibitiwa kwa dawa na mabadiliko ya mtindo wa maisha.`,
        },
      },
      symptoms: {
        early: {
          en: ['Pulsating headache', 'Nausea', 'Sensitivity to light or sound'],
          sw: ['Maumivu ya kichwa yanayopiga', 'Kichefuchefu', 'Hisia kwa mwanga au sauti'],
        },
        other: {
          en: ['Visual auras', 'Fatigue', 'Irritability'],
          sw: ['Auras za kuona', 'Uchovu', 'Hasira'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Headaches lasting more than 72 hours',
            'New neurological symptoms',
            'Severe interference with daily life',
          ],
          sw: [
            'Maumivu ya kichwa yanayodumu zaidi ya masaa 72',
            'Dalili mpya za neva',
            'Kukwamisha sana maisha ya kila siku',
          ],
        },
        reassurance: {
          en: 'Regular treatment and lifestyle adjustments reduce frequency and severity.',
          sw: 'Matibabu ya kawaida na mabadiliko ya mtindo wa maisha hupunguza mara na ukali.',
        },
      },
    },
  },

  /* ───────────────────────────────
      CARPAL TUNNEL SYNDROME
  ──────────────────────────────── */
  carpalTunnel: {
    slug: 'carpalTunnel',
    hero: {
      title: { en: 'Carpal Tunnel Syndrome', sw: 'Hali ya Carpal Tunnel' },
      subtitle: {
        en: 'Compression of the median nerve in the wrist.',
        sw: 'Kukandamiza neva ya kati kwenye kiwiko.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Carpal tunnel syndrome occurs when the median nerve is compressed at the wrist, causing numbness, tingling, and weakness in the hand.

  **Causes & Risk Factors:** Repetitive hand movements, arthritis, diabetes.

  **Impact:** Difficulty gripping objects, performing fine motor tasks.

  **Long-Term Outlook:** Often improves with ergonomic adjustments, splints, or surgery.`,
          sw: `Hali ya Carpal Tunnel hutokea pale neva ya kati inapokandamizwa kwenye kiwiko, na kusababisha ganzi, maumivu ya kushika, na udhaifu wa mkono.

  **Sababu & Vizingiti:** Harakati za mkono zinazorudiwa, arthritis, kisukari.

  **Athari:** Shida ya kushika vitu, kufanya kazi ndogo za mikono.

  **Matokeo ya Muda Mrefu:** Mara nyingi huboreka kwa marekebisho ya ergonomic, splints, au upasuaji.`,
        },
      },
      symptoms: {
        early: {
          en: ['Numbness in fingers', 'Tingling sensation', 'Hand weakness'],
          sw: ['Ganzi kwenye vidole', 'Hisia ya kushika', 'Udhaifu wa mkono'],
        },
        other: {
          en: ['Pain radiating to arm', 'Difficulty gripping objects', 'Wrist stiffness'],
          sw: ['Maumivu yanayosambaa hadi mkono', 'Shida ya kushika vitu', 'Ugumu wa kiwiko'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent numbness or tingling',
            'Weak grip or hand function loss',
            'Pain interfering with daily tasks',
          ],
          sw: [
            'Ganzi au hisia ya kushika inayoendelea',
            'Kupoteza nguvu ya kushika au kazi ya mkono',
            'Maumivu yanayozuia shughuli za kila siku',
          ],
        },
        reassurance: {
          en: 'Early diagnosis and ergonomic interventions prevent long-term disability.',
          sw: 'Utambuzi wa mapema na marekebisho ya ergonomic huzuia ulemavu wa muda mrefu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      CERVICAL MYELOPATHY
  ──────────────────────────────── */
  cervicalMyelopathy: {
    slug: 'cervicalMyelopathy',
    hero: {
      title: { en: 'Cervical Myelopathy', sw: 'Myelopathy ya Kifua' },
      subtitle: {
        en: 'Spinal cord compression in the neck causing neurological deficits.',
        sw: 'Kukandamiza uti wa mgongo kwenye shingo kunasababisha ulemavu wa neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Cervical myelopathy occurs when the spinal cord in the neck is compressed, affecting motor and sensory pathways.

  **Causes & Risk Factors:** Degenerative changes, arthritis, trauma.

  **Impact:** Weakness, numbness, balance issues, fine motor impairment.

  **Long-Term Outlook:** Surgical and non-surgical treatments can improve function.`,
          sw: `Myelopathy ya kifua hutokea pale uti wa mgongo kwenye shingo unapokandamizwa, ukiharibu njia za motor na hisia.

  **Sababu & Vizingiti:** Mabadiliko ya kuzeeka, arthritis, jeraha.

  **Athari:** Udhaifu, ganzi, matatizo ya usawa, kuharibika kwa ujuzi wa mwendo.

  **Matokeo ya Muda Mrefu:** Matibabu ya upasuaji na yasiyo ya upasuaji huongeza utendaji.`,
        },
      },
      symptoms: {
        early: {
          en: ['Neck pain', 'Hand numbness', 'Difficulty walking'],
          sw: ['Maumivu ya shingo', 'Ganzi la mkono', 'Shida ya kutembea'],
        },
        other: {
          en: ['Balance problems', 'Weak grip', 'Muscle spasticity'],
          sw: ['Matatizo ya usawa', 'Shida ya kushika', 'Kukaza kwa misuli'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Persistent neck pain',
            'Progressive numbness or weakness',
            'Difficulty with fine motor tasks',
          ],
          sw: [
            'Maumivu ya shingo yanayoendelea',
            'Kuongezeka kwa ganzi au udhaifu',
            'Shida ya kufanya kazi ndogo za mikono',
          ],
        },
        reassurance: {
          en: 'Early detection and treatment prevent long-term neurological damage.',
          sw: 'Uchunguzi na matibabu ya mapema huzuia uharibifu wa neva wa muda mrefu.',
        },
      },
    },
  },
  
};
