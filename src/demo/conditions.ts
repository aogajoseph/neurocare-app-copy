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
  
};
