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
     ENCEPHALITIS
  ──────────────────────────────── */
  encephalitis: {
    slug: 'encephalitis',
    hero: {
      title: { en: 'Encephalitis', sw: 'Uvimbe wa Ubongo' },
      subtitle: {
        en: 'Inflammation of the brain, often caused by infection or autoimmune reactions.',
        sw: 'Uvimbe wa ubongo, mara nyingi unasababishwa na maambukizi au mwitikio wa kinga ya mwili.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Encephalitis is brain inflammation that can lead to severe neurological symptoms.

  **Causes & Risk Factors:** Viral infections, autoimmune disorders, bacterial infections.

  **Impact:** Fever, headache, confusion, seizures.

  **Long-Term Outlook:** Prompt treatment improves outcomes; severe cases may leave lasting impairment.`,
          sw: `Uvimbe wa ubongo ni hali inayosababisha dalili kubwa za neva.

  **Sababu & Vizingiti:** Maambukizi ya virusi, matatizo ya kinga ya mwili, maambukizi ya bakteria.

  **Athari:** Homa, maumivu ya kichwa, kuchanganyikiwa, degedege.

  **Matokeo ya Muda Mrefu:** Matibabu ya haraka huboresha matokeo; kesi mbaya zinaweza kuacha ulemavu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Fever', 'Headache', 'Confusion', 'Fatigue'],
          sw: ['Homa', 'Maumivu ya kichwa', 'Kuchanganyikiwa', 'Uchovu'],
        },
        other: {
          en: ['Seizures', 'Sensitivity to light', 'Memory problems'],
          sw: ['Degedege', 'Hisia za mwanga', 'Matatizo ya kumbukumbu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['High fever with confusion', 'Seizures', 'Neurological deterioration'],
          sw: ['Homa kubwa na kuchanganyikiwa', 'Degedege', 'Kupungua kwa hali ya neva'],
        },
        reassurance: {
          en: 'Early diagnosis and treatment prevent severe complications.',
          sw: 'Uchunguzi na matibabu mapema huzuia matatizo makubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
      ESSENTIAL TREMOR
  ──────────────────────────────── */
  essentialTremor: {
    slug: 'essentialTremor',
    hero: {
      title: { en: 'Essential Tremor', sw: 'Kutetemeka kwa Asili' },
      subtitle: {
        en: 'A nervous system disorder causing involuntary shaking, typically in hands.',
        sw: 'Tatizo la mfumo wa neva linasababisha kutetemeka kisichokusudiwa, kawaida mikononi.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Essential tremor is a common movement disorder, often hereditary, causing rhythmic shaking.

  **Causes & Risk Factors:** Genetics, aging.

  **Impact:** Difficulty with fine motor tasks like writing or eating.

  **Long-Term Outlook:** Medications or therapy improve control; rarely disabling.`,
          sw: `Kutetemeka kwa asili ni tatizo la mwendo linalojitokeza mara nyingi, mara nyingi la urithi, linasababisha kutetemeka kwa midundo.

  **Sababu & Vizingiti:** Urithi, kuzeeka.

  **Athari:** Shida katika kazi za mikono ndogo kama kuandika au kula.

  **Matokeo ya Muda Mrefu:** Dawa au tiba huboresha udhibiti; mara chache husababisha ulemavu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Shaking hands', 'Head nodding', 'Voice tremor'],
          sw: ['Mikono kutetemeka', 'Kichwa kinakikutikia', 'Kizunguzungu cha sauti'],
        },
        other: {
          en: ['Difficulty with writing', 'Difficulty drinking from cup', 'Balance issues'],
          sw: ['Shida ya kuandika', 'Shida ya kunywa kutoka kikombe', 'Matatizo ya usawa'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Interferes with daily tasks', 'Progressive worsening', 'Severe tremors'],
          sw: ['Inaathiri shughuli za kila siku', 'Inazidi kuwa mbaya', 'Kutetemeka kwa kiwango kikubwa'],
        },
        reassurance: {
          en: 'Treatment options improve function and quality of life.',
          sw: 'Chaguzi za matibabu huboresha utendaji na ubora wa maisha.',
        },
      },
    },
  },

  /* ───────────────────────────────
      ENCEPHALOPATHY
  ──────────────────────────────── */
  encephalopathy: {
    slug: 'encephalopathy',
    hero: {
      title: { en: 'Encephalopathy', sw: 'Hali ya Ubongo' },
      subtitle: {
        en: 'General term for brain dysfunction from various causes.',
        sw: 'Neno la jumla kwa uharibifu wa ubongo unaosababishwa na sababu mbalimbali.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Encephalopathy encompasses disorders where brain function is impaired by toxins, lack of oxygen, infection, or metabolic issues.

  **Causes & Risk Factors:** Liver disease, infections, hypoxia, metabolic disorders.

  **Impact:** Confusion, memory problems, reduced alertness.

  **Long-Term Outlook:** Addressing underlying causes often improves outcomes.`,
          sw: `Encephalopathy inahusu matatizo ambapo kazi ya ubongo inaathirika na sumu, upungufu wa oksijeni, maambukizi, au matatizo ya metabolism.

  **Sababu & Vizingiti:** Ugonjwa wa ini, maambukizi, upungufu wa oksijeni, matatizo ya metabolism.

  **Athari:** Kuchanganyikiwa, matatizo ya kumbukumbu, kupungua kwa tahadhari.

  **Matokeo ya Muda Mrefu:** Kutatua sababu zinazochangia huboresha matokeo mara nyingi.`,
        },
      },
      symptoms: {
        early: {
          en: ['Confusion', 'Memory loss', 'Lethargy'],
          sw: ['Kuchanganyikiwa', 'Kupoteza kumbukumbu', 'Uchovu'],
        },
        other: {
          en: ['Difficulty concentrating', 'Mood changes', 'Seizures'],
          sw: ['Shida ya kuzingatia', 'Mabadiliko ya hisia', 'Degedege'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Sudden confusion', 'Seizures', 'Worsening neurological function'],
          sw: ['Kuchanganyikiwa ghafla', 'Degedege', 'Kupungua kwa hali ya neva'],
        },
        reassurance: {
          en: 'Treatment of underlying cause can reverse or reduce symptoms.',
          sw: 'Matibabu ya sababu msingi yanaweza kurudisha au kupunguza dalili.',
        },
      },
    },
  },

  /* ───────────────────────────────
      EXTRAPYRAMIDAL DISORDER
  ──────────────────────────────── */
  extrapyramidal: {
    slug: 'extrapyramidal',
    hero: {
      title: { en: 'Extrapyramidal Disorder', sw: 'Tatizo la Extrapyramidal' },
      subtitle: {
        en: 'Movement disorders caused by basal ganglia or medication side effects.',
        sw: 'Matatizo ya mwendo yanayosababishwa na basal ganglia au madhara ya dawa.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Extrapyramidal disorders affect motor control, often due to neurological conditions or medications.

  **Causes & Risk Factors:** Parkinson’s medications, antipsychotics, basal ganglia disorders.

  **Impact:** Tremors, rigidity, abnormal movements.

  **Long-Term Outlook:** Adjusting medications and therapy improve mobility and function.`,
          sw: `Tatizo la extrapyramidal linaathiri udhibiti wa mwendo, mara nyingi kutokana na hali za neva au dawa.

  **Sababu & Vizingiti:** Dawa za Parkinson, antipsychotics, matatizo ya basal ganglia.

  **Athari:** Kutetemeka, ukimya wa misuli, mienendo isiyo ya kawaida.

  **Matokeo ya Muda Mrefu:** Kubadilisha dawa na tiba huboresha mwendo na utendaji.`,
        },
      },
      symptoms: {
        early: {
          en: ['Tremors', 'Stiffness', 'Abnormal posture'],
          sw: ['Kutetemeka', 'Ukimya wa misuli', 'Mwenendo usio wa kawaida'],
        },
        other: {
          en: ['Slowed movements', 'Difficulty walking', 'Speech changes'],
          sw: ['Mwendo wa polepole', 'Shida ya kutembea', 'Mabadiliko ya kuzungumza'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Progressive movement difficulties',
            'Severe tremors affecting daily life',
            'Medication side effects causing dysfunction',
          ],
          sw: [
            'Shida za mwendo zinazozidi',
            'Kutetemeka kwa kiwango kikubwa kinachoathiri maisha ya kila siku',
            'Madhara ya dawa yanayosababisha kazi mbaya',
          ],
        },
        reassurance: {
          en: 'Therapy and medication adjustment improve quality of life.',
          sw: 'Tiba na kurekebisha dawa huboresha ubora wa maisha.',
        },
      },
    },
  },

  /* ───────────────────────────────
      EPILEPTIFORM DISORDERS (non-Epilepsy)
  ──────────────────────────────── */
  epileptiformDisorders: {
    slug: 'epileptiformDisorders',
    hero: {
      title: { en: 'Epileptiform Disorders', sw: 'Matatizo ya Epileptiform' },
      subtitle: {
        en: 'Seizure-like disorders not classified as epilepsy.',
        sw: 'Matatizo yanayofanana na degedege lakini hayahesabiwi kama kifafa.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Epileptiform disorders mimic seizures but differ in cause, frequency, or severity.

  **Causes & Risk Factors:** Brain injury, metabolic disorders, sleep deprivation.

  **Impact:** Temporary seizure-like episodes, confusion.

  **Long-Term Outlook:** Managing triggers and therapy reduces episodes.`,
          sw: `Matatizo ya Epileptiform yanafanana na degedege lakini yanatofautiana kwa sababu, mara za kutokea, au ukali.

  **Sababu & Vizingiti:** Jeraha la ubongo, matatizo ya metabolism, usingizi mdogo.

  **Athari:** Vipindi vya muda vya kufanana na degedege, kuchanganyikiwa.

  **Matokeo ya Muda Mrefu:** Kudhibiti vichocheo na tiba hupunguza vipindi.`,
        },
      },
      symptoms: {
        early: {
          en: ['Brief seizure-like episodes', 'Confusion', 'Mild twitching'],
          sw: ['Vipindi vya muda vinavyofanana na degedege', 'Kuchanganyikiwa', 'Kutetemeka kidogo'],
        },
        other: {
          en: ['Fatigue', 'Headache', 'Mood changes'],
          sw: ['Uchovu', 'Maumivu ya kichwa', 'Mabadiliko ya hisia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Frequent episodes', 'Loss of consciousness', 'Injury during episodes'],
          sw: ['Vipindi vinavyorudiwa', 'Kupoteza fahamu', 'Jeraha wakati wa vipindi'],
        },
        reassurance: {
          en: 'Tracking triggers and medical follow-up improves outcomes.',
          sw: 'Kufuata vichocheo na ufuatiliaji wa kitiba huboresha matokeo.',
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
    slug: 'diffuseAxonalInjury',
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
  ATTENTION DEFICIT HYPERACTIVITY DISORDER (ADHD)
  ──────────────────────────────── */
  adhd: {
    slug: 'adhd',
    hero: {
      title: { en: 'Attention Deficit Hyperactivity Disorder (ADHD)', sw: 'Upungufu wa Umakini na Msukumo (ADHD)' },
      subtitle: {
        en: 'A neurodevelopmental condition affecting attention, impulse control, and activity levels.',
        sw: 'Hali ya ukuaji wa neva inayoathiri umakini, udhibiti wa msukumo, na kiwango cha shughuli.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `ADHD is a neurodevelopmental condition that affects the brain’s ability to regulate attention, impulses, and activity levels. It often begins in childhood and may continue into adolescence and adulthood.
  
  **Causes & Risk Factors:** Genetics play a major role. Other factors may include premature birth, low birth weight, exposure to toxins, and differences in brain development.
  
  **How It Affects the Brain:** ADHD is linked to differences in brain regions responsible for attention, planning, and self-control, particularly in how neurotransmitters function.
  
  **Who Is Affected:** ADHD affects children and adults of all genders. Symptoms may appear differently, with some people showing more inattentive traits and others more hyperactive or impulsive behaviors.
  
  **Long-Term Outlook:** With appropriate support, behavioral strategies, and when needed medication, individuals with ADHD can thrive academically, socially, and professionally.`,
          sw: `ADHD ni hali ya ukuaji wa neva inayoathiri uwezo wa ubongo kudhibiti umakini, msukumo, na kiwango cha shughuli. Mara nyingi huanza utotoni na inaweza kuendelea hadi utu uzima.
  
  **Sababu & Vizingiti:** Urithi wa familia una mchango mkubwa. Sababu nyingine zinaweza kujumuisha kuzaliwa mapema, uzito mdogo wakati wa kuzaliwa, kuathiriwa na sumu, na tofauti za ukuaji wa ubongo.
  
  **Kinachotokea Ubongoni:** ADHD huhusishwa na tofauti katika maeneo ya ubongo yanayodhibiti umakini, kupanga, na kujizuia, hasa katika utendaji wa kemikali za neva.
  
  **Wapi Wengi Wanaathirika:** ADHD huathiri watoto na watu wazima wa jinsia zote. Dalili zinaweza kujitokeza kwa njia tofauti, wengine wakionyesha zaidi ukosefu wa umakini na wengine msukumo au shughuli kupita kiasi.
  
  **Matokeo ya Muda Mrefu:** Kwa msaada sahihi, mbinu za tabia, na inapohitajika dawa, watu wenye ADHD wanaweza kufanikiwa kielimu, kijamii, na kikazi.`,
        },
      },
  
      symptoms: {
        early: {
          en: [
            'Difficulty sustaining attention',
            'Easily distracted',
            'Forgetfulness in daily activities',
            'Difficulty following instructions',
          ],
          sw: [
            'Shida ya kudumisha umakini',
            'Kuvurugika kwa urahisi',
            'Kusahau shughuli za kila siku',
            'Shida ya kufuata maagizo',
          ],
        },
        other: {
          en: [
            'Impulsivity or acting without thinking',
            'Restlessness or excessive activity',
            'Difficulty organizing tasks',
            'Emotional regulation challenges',
          ],
          sw: [
            'Msukumo wa kufanya mambo bila kufikiri',
            'Kutotulia au shughuli kupita kiasi',
            'Shida ya kupanga kazi',
            'Changamoto za kudhibiti hisia',
          ],
        },
      },
  
      help: {
        whenToSeekHelp: {
          en: [
            'When attention or behavior interferes with learning or work',
            'If symptoms affect relationships or self-esteem',
            'When emotional or behavioral difficulties persist',
          ],
          sw: [
            'Umakini au tabia zinapoathiri masomo au kazi',
            'Dalili zinapoathiri mahusiano au kujiamini',
            'Changamoto za kihisia au tabia zinapodumu',
          ],
        },
        reassurance: {
          en: 'ADHD is not a failure or lack of intelligence. With understanding, structure, and support, many people with ADHD lead highly successful and fulfilling lives.',
          sw: 'ADHD si kushindwa wala ukosefu wa akili. Kwa uelewa, mpangilio, na msaada, watu wengi wenye ADHD huishi maisha yenye mafanikio na kuridhisha.',
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

  /* ───────────────────────────────
     FACIAL NEUROPATHY
  ──────────────────────────────── */
  facialNeuropathy: {
    slug: 'facialNeuropathy',
    hero: {
      title: { en: 'Facial Neuropathy', sw: 'Neuropathi ya Uso' },
      subtitle: {
        en: 'Damage to facial nerves causing weakness or paralysis of facial muscles.',
        sw: 'Uharibifu wa neva za uso unasababisha udhaifu au kupooza kwa misuli ya uso.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Facial neuropathy affects the nerves controlling facial expression, often sudden in onset.

  **Causes & Risk Factors:** Viral infections (like Bell’s palsy), trauma, diabetes.

  **Impact:** Drooping of one side of the face, difficulty closing eyes, speaking or eating.

  **Long-Term Outlook:** Most recover fully; therapy may accelerate improvement.`,
          sw: `Neuropathi ya uso inaathiri neva zinazosimamia usemi wa uso, mara nyingi hujitokeza ghafla.

  **Sababu & Vizingiti:** Maambukizi ya virusi (kama Bell’s palsy), jeraha, kisukari.

  **Athari:** Upooza upande mmoja wa uso, shida kufunga macho, kuzungumza au kula.

  **Matokeo ya Muda Mrefu:** Wengi hurudi kwenye afya kamili; tiba inaweza kuharakisha nafuu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Sudden facial droop', 'Difficulty closing eye', 'Loss of facial expression'],
          sw: ['Kupooza ghafla uso', 'Shida kufunga jicho', 'Kupoteza hisia za uso'],
        },
        other: {
          en: ['Pain around ear', 'Tingling or numbness', 'Headache'],
          sw: ['Maumivu karibu na sikio', 'Kuchanganyikiwa au ganzi', 'Maumivu ya kichwa'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Sudden facial weakness', 'Difficulty speaking or swallowing', 'Eye irritation due to incomplete closure'],
          sw: ['Udhaifu wa ghafla wa uso', 'Shida ya kuzungumza au kumeza', 'Ishara za jicho kutokana na kufunga kisichokamilika'],
        },
        reassurance: {
          en: 'Early therapy improves recovery; most patients regain full function.',
          sw: 'Tiba ya mapema huboresha nafuu; wagonjwa wengi hurudi kwenye afya kamili.',
        },
      },
    },
  },

  /* ───────────────────────────────
      FIBROMYALGIA (NEUROLOGICAL ASPECT)
  ──────────────────────────────── */
  fibromyalgia: {
    slug: 'fibromyalgia',
    hero: {
      title: { en: 'Fibromyalgia', sw: 'Fibromyalgia' },
      subtitle: {
        en: 'Chronic disorder characterized by widespread pain and nervous system sensitivity.',
        sw: 'Hali ya muda mrefu inayojitokeza kwa maumivu panapoenea na unyeti wa mfumo wa neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Fibromyalgia involves chronic widespread musculoskeletal pain, fatigue, and nervous system hypersensitivity.

  **Causes & Risk Factors:** Genetic predisposition, infections, stress.

  **Impact:** Pain, fatigue, sleep disturbances, cognitive difficulties.

  **Long-Term Outlook:** Symptom management improves quality of life.`,
          sw: `Fibromyalgia inahusisha maumivu ya muda mrefu katika misuli na mifupa, uchovu, na unyeti wa mfumo wa neva.

  **Sababu & Vizingiti:** Urithi, maambukizi, msongo wa mawazo.

  **Athari:** Maumivu, uchovu, matatizo ya usingizi, changamoto za kifikra.

  **Matokeo ya Muda Mrefu:** Kudhibiti dalili huboresha ubora wa maisha.`,
        },
      },
      symptoms: {
        early: {
          en: ['Widespread pain', 'Fatigue', 'Sleep disturbances'],
          sw: ['Maumivu panapoenea', 'Uchovu', 'Matatizo ya usingizi'],
        },
        other: {
          en: ['Cognitive difficulties', 'Headaches', 'Mood changes'],
          sw: ['Changamoto za kifikra', 'Maumivu ya kichwa', 'Mabadiliko ya hisia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Persistent pain affecting daily life', 'Severe fatigue', 'Sleep problems'],
          sw: ['Maumivu endelevu yanayoathiri maisha ya kila siku', 'Uchovu mkali', 'Matatizo ya usingizi'],
        },
        reassurance: {
          en: 'Lifestyle changes, therapy, and medication help manage symptoms effectively.',
          sw: 'Mabadiliko ya mtindo wa maisha, tiba, na dawa husaidia kudhibiti dalili kwa ufanisi.',
        },
      },
    },
  },

  /* ───────────────────────────────
      FRONTAL LOBE DISORDER
  ──────────────────────────────── */
  frontalLobeDisorder: {
    slug: 'frontalLobeDisorder',
    hero: {
      title: { en: 'Frontal Lobe Disorder', sw: 'Tatizo la Frontal Lobe' },
      subtitle: {
        en: 'Impairment of the frontal lobe affecting personality, behavior, and executive function.',
        sw: 'Uharibifu wa frontal lobe unaoathiri tabia, mienendo, na utendaji wa akili.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Frontal lobe disorders impact planning, judgment, personality, and voluntary movement.

  **Causes & Risk Factors:** Trauma, stroke, tumors, neurodegenerative diseases.

  **Impact:** Changes in behavior, poor decision-making, motor impairments.

  **Long-Term Outlook:** Rehabilitation and therapy may help regain function.`,
          sw: `Matatizo ya frontal lobe huathiri kupanga, uamuzi, tabia, na mwendo wa hiari.

  **Sababu & Vizingiti:** Jeraha, kiharusi, uvimbe, magonjwa yanayoharibu neva.

  **Athari:** Mabadiliko ya tabia, uamuzi mbaya, ulemavu wa mwendo.

  **Matokeo ya Muda Mrefu:** Urejeshaji na tiba huweza kusaidia kurudisha kazi.`,
        },
      },
      symptoms: {
        early: {
          en: ['Personality changes', 'Impulsivity', 'Difficulty planning'],
          sw: ['Mabadiliko ya tabia', 'Uamuzi wa haraka bila fikiria', 'Shida ya kupanga'],
        },
        other: {
          en: ['Poor judgment', 'Reduced motor control', 'Speech difficulties'],
          sw: ['Uamuzi mbaya', 'Udhibiti mdogo wa mwendo', 'Shida ya kuzungumza'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Sudden behavioral changes', 'Cognitive decline', 'Motor difficulties'],
          sw: ['Mabadiliko ya tabia ghafla', 'Kupungua kwa kifikra', 'Shida za mwendo'],
        },
        reassurance: {
          en: 'Early intervention and therapy improve outcomes.',
          sw: 'Uingiliaji na tiba ya mapema huboresha matokeo.',
        },
      },
    },
  },

  /* ───────────────────────────────
      FOCAL SEIZURES
  ──────────────────────────────── */
  focalSeizures: {
    slug: 'focalSeizures',
    hero: {
      title: { en: 'Focal Seizures', sw: 'Degedege za Eneo' },
      subtitle: {
        en: 'Seizures that affect a specific part of the brain, causing localized symptoms.',
        sw: 'Degedege zinazoathiri sehemu maalum ya ubongo, zikiwa na dalili za eneo hilo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Focal seizures originate in one area of the brain and can cause motor, sensory, or cognitive symptoms.

  **Causes & Risk Factors:** Brain injury, stroke, tumors, infections.

  **Impact:** Twitching, abnormal sensations, confusion in affected areas.

  **Long-Term Outlook:** Medications usually control seizures effectively.`,
          sw: `Degedege za eneo huanza katika sehemu moja ya ubongo na zinaweza kusababisha dalili za mwendo, hisia, au kifikra.

  **Sababu & Vizingiti:** Jeraha la ubongo, kiharusi, uvimbe, maambukizi.

  **Athari:** Kutetemeka, hisia zisizo za kawaida, kuchanganyikiwa katika maeneo yaliyoathirika.

  **Matokeo ya Muda Mrefu:** Dawa kwa kawaida hudhibiti degedege kwa ufanisi.`,
        },
      },
      symptoms: {
        early: {
          en: ['Localized twitching', 'Unusual sensations', 'Brief confusion'],
          sw: ['Kutetemeka eneo maalum', 'Hisia zisizo za kawaida', 'Kuchanganyikiwa kwa muda mfupi'],
        },
        other: {
          en: ['Changes in vision', 'Speech disturbances', 'Emotional changes'],
          sw: ['Mabadiliko ya kuona', 'Matatizo ya kuzungumza', 'Mabadiliko ya hisia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Seizures that interfere with daily life', 'Frequent episodes', 'Seizures lasting more than 5 minutes'],
          sw: ['Degedege zinazoharibu shughuli za kila siku', 'Vipindi vinavyorudiwa', 'Degedege zinazoendelea zaidi ya dakika 5'],
        },
        reassurance: {
          en: 'With treatment and monitoring, most people regain control.',
          sw: 'Kwa matibabu na ufuatiliaji, wengi hurudisha udhibiti.',
        },
      },
    },
  },

  /* ───────────────────────────────
      FREY SYNDROME
  ──────────────────────────────── */
  freySyndrome: {
    slug: 'freySyndrome',
    hero: {
      title: { en: 'Frey Syndrome', sw: 'Syndrome ya Frey' },
      subtitle: {
        en: 'Sweating and flushing in the cheek area due to nerve injury.',
        sw: 'Kukohoa na kupasha sehemu ya shavu kutokana na jeraha la neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Frey syndrome is a rare condition where nerves controlling salivation are damaged, causing sweating while eating.

  **Causes & Risk Factors:** Surgery near parotid gland, trauma, nerve injury.

  **Impact:** Facial flushing, sweating, discomfort while eating.

  **Long-Term Outlook:** Symptoms can be managed with therapy or botox injections.`,
          sw: `Syndrome ya Frey ni hali ya nadra ambapo neva zinazodhibiti mate zimeharibiwa, husababisha kukohoa wakati wa kula.

  **Sababu & Vizingiti:** Upasuaji karibu na tezi ya parotid, jeraha, uharibifu wa neva.

  **Athari:** Kupasha uso, kukohoa, usumbufu wakati wa kula.

  **Matokeo ya Muda Mrefu:** Dalili zinaweza kudhibitiwa kwa tiba au sindano za botox.`,
        },
      },
      symptoms: {
        early: {
          en: ['Flushing of cheek while eating', 'Sweating in cheek area', 'Mild discomfort'],
          sw: ['Kupasha shavu wakati wa kula', 'Kukohoa sehemu ya shavu', 'Usumbufu mdogo'],
        },
        other: {
          en: ['Itching', 'Burning sensation', 'Embarrassment during meals'],
          sw: ['Kuchoka', 'Hisia ya kuchoma', 'Aibu wakati wa kula'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Severe or bothersome symptoms', 'Interference with eating', 'Emotional distress'],
          sw: ['Dalili mbaya au zinazosumbua', 'Inaathiri kula', 'Msongo wa kihisia'],
        },
        reassurance: {
          en: 'Most cases are manageable with therapy or minor procedures.',
          sw: 'Kesi nyingi zinaweza kudhibitiwa kwa tiba au taratibu ndogo.',
        },
      },
    },
  },

  /* ───────────────────────────────
     GUILLAIN-BARRÉ SYNDROME
  ──────────────────────────────── */
  guillainBarre: {
    slug: 'guillainBarre',
    hero: {
      title: { en: 'Guillain-Barré Syndrome', sw: 'Ugonjwa wa Guillain-Barré' },
      subtitle: {
        en: 'A rare condition where the immune system attacks the nerves.',
        sw: 'Hali nadra ambapo kinga ya mwili hushambulia mishipa ya fahamu.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Guillain-Barré Syndrome (GBS) is a rare neurological disorder in which the body’s immune system mistakenly attacks peripheral nerves. It often follows an infection and can progress rapidly.

  **Causes & Triggers:** Often triggered by respiratory or gastrointestinal infections. In rare cases, surgery or vaccination may precede onset.

  **What Happens in the Body:** Damage to the protective covering of nerves disrupts signal transmission, leading to weakness and paralysis.

  **Who Is Affected:** Can affect people of all ages and genders.

  **Long-Term Outlook:** Many people recover fully with treatment, though recovery may take months.`,
          sw: `Guillain-Barré ni ugonjwa nadra wa neva ambapo kinga ya mwili hushambulia mishipa ya fahamu ya pembeni. Mara nyingi hutokea baada ya maambukizi na huweza kuendelea haraka.

  **Sababu & Vichochezi:** Mara nyingi husababishwa na maambukizi ya mfumo wa kupumua au tumbo.

  **Kinachotokea Mwili:** Uharibifu wa kinga ya mishipa husababisha udhaifu na kupooza.

  **Wapi Wengi Wanaathirika:** Huathiri watu wa rika zote.

  **Matokeo ya Muda Mrefu:** Wengi hupata nafuu kamili kwa matibabu, ingawa urejeshaji unaweza kuchukua muda.`,
        },
      },
      symptoms: {
        early: {
          en: [
            'Tingling or numbness in feet and hands',
            'Progressive muscle weakness',
            'Difficulty walking',
          ],
          sw: [
            'Hisia za ganzi kwenye miguu na mikono',
            'Udhaifu unaoongezeka',
            'Shida ya kutembea',
          ],
        },
        other: {
          en: [
            'Paralysis',
            'Breathing difficulties',
            'Irregular heart rate',
          ],
          sw: [
            'Kupooza',
            'Shida ya kupumua',
            'Mapigo ya moyo yasiyo ya kawaida',
          ],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Rapidly worsening weakness',
            'Breathing or swallowing difficulty',
            'Loss of movement',
          ],
          sw: [
            'Udhaifu unaoongezeka haraka',
            'Shida ya kupumua au kumeza',
            'Kupoteza uwezo wa kusogea',
          ],
        },
        reassurance: {
          en: 'Early hospital care greatly improves recovery outcomes.',
          sw: 'Huduma ya mapema hospitalini huongeza sana nafuu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      GENERALIZED ANXIETY DISORDER
  ──────────────────────────────── */
  generalizedAnxietyDisorder: {
    slug: 'generalizedAnxietyDisorder',
    hero: {
      title: { en: 'Generalized Anxiety Disorder', sw: 'Wasiwasi wa Kudumu' },
      subtitle: {
        en: 'Persistent and excessive worry affecting daily life.',
        sw: 'Wasiwasi unaoendelea na unaoathiri maisha ya kila siku.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Generalized Anxiety Disorder (GAD) is a condition characterized by persistent and excessive worry about everyday matters.

  **Causes & Risk Factors:** Genetics, brain chemistry, trauma, and chronic stress.

  **Brain Impact:** Overactivity in brain areas regulating fear and stress.

  **Long-Term Outlook:** Highly manageable with therapy and support.`,
          sw: `Wasiwasi wa Kudumu ni hali ya kiafya inayosababisha hofu na wasiwasi wa muda mrefu kuhusu mambo ya kawaida.

  **Sababu & Vizingiti:** Urithi, kemikali za ubongo, msongo wa mawazo, na kiwewe.

  **Athari Ubongoni:** Shughuli kupita kiasi katika maeneo ya ubongo yanayodhibiti hofu.

  **Matokeo ya Muda Mrefu:** Hali inayoweza kudhibitiwa kwa matibabu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Constant worrying', 'Restlessness', 'Difficulty concentrating'],
          sw: ['Kuwaza kupita kiasi', 'Kutotulia', 'Shida ya kuzingatia'],
        },
        other: {
          en: ['Sleep problems', 'Muscle tension', 'Fatigue'],
          sw: ['Shida ya usingizi', 'Misuli kukakamaa', 'Uchovu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: [
            'Worry interferes with daily functioning',
            'Physical symptoms persist',
          ],
          sw: [
            'Wasiwasi unaathiri maisha ya kila siku',
            'Dalili za mwili zinaendelea',
          ],
        },
        reassurance: {
          en: 'Anxiety disorders are common and very treatable.',
          sw: 'Hali za wasiwasi ni za kawaida na zinatibika.',
        },
      },
    },
  },

  /* ───────────────────────────────
      GLIOMA
  ──────────────────────────────── */
  glioma: {
    slug: 'glioma',
    hero: {
      title: { en: 'Glioma', sw: 'Uvimbe wa Ubongo (Glioma)' },
      subtitle: {
        en: 'A type of tumor arising from brain or spinal cord cells.',
        sw: 'Aina ya uvimbe unaotokana na seli za ubongo au uti wa mgongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Gliomas are tumors that develop from glial cells in the brain or spinal cord.

  **Types:** Range from slow-growing to aggressive forms.

  **Impact:** Symptoms depend on tumor location.

  **Outlook:** Varies widely based on tumor type and treatment.`,
          sw: `Glioma ni uvimbe unaokua kutoka seli za glia katika ubongo au uti wa mgongo.

  **Aina:** Hutofautiana kutoka polepole hadi kali.

  **Athari:** Dalili hutegemea eneo la uvimbe.

  **Matokeo:** Hutofautiana kulingana na aina na matibabu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Headaches', 'Seizures', 'Vision problems'],
          sw: ['Maumivu ya kichwa', 'Degedege', 'Shida ya kuona'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Persistent headaches', 'New seizures'],
          sw: ['Maumivu ya kichwa yasiyoisha', 'Degedege mpya'],
        },
        reassurance: {
          en: 'Early diagnosis allows more treatment options.',
          sw: 'Utambuzi wa mapema hutoa chaguo zaidi za matibabu.',
        },
      },
    },
  },

  /* ───────────────────────────────
      GLOSSOPHARYNGEAL NEURALGIA
  ──────────────────────────────── */
  glossopharyngealNeuralgia: {
    slug: 'glossopharyngealNeuralgia',
    hero: {
      title: { en: 'Glossopharyngeal Neuralgia', sw: 'Maumivu ya Neva ya Glossopharyngeal' },
      subtitle: {
        en: 'Severe throat and ear pain caused by nerve irritation.',
        sw: 'Maumivu makali ya koo na sikio kutokana na neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `A rare pain disorder affecting the glossopharyngeal nerve.

  **Trigger:** Swallowing, talking, or coughing.

  **Impact:** Sudden intense pain episodes.`,
          sw: `Hali nadra ya maumivu inayohusisha neva ya glossopharyngeal.

  **Vichochezi:** Kumeza, kuzungumza, au kukohoa.

  **Athari:** Maumivu makali ya ghafla.`,
        },
      },
      symptoms: {
        early: {
          en: ['Sharp throat pain', 'Ear pain'],
          sw: ['Maumivu makali ya koo', 'Maumivu ya sikio'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Severe recurring pain'],
          sw: ['Maumivu makali yanayorudia'],
        },
        reassurance: {
          en: 'Treatment can greatly reduce pain episodes.',
          sw: 'Matibabu hupunguza maumivu kwa kiasi kikubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
      GROWTH HORMONE DEFICIENCY (NEUROLOGICAL CAUSE)
  ──────────────────────────────── */
  growthHormoneDeficiency: {
    slug: 'growthHormoneDeficiency',
    hero: {
      title: { en: 'Growth Hormone Deficiency', sw: 'Upungufu wa Homoni ya Ukuaji' },
      subtitle: {
        en: 'A condition linked to pituitary and brain function.',
        sw: 'Hali inayohusiana na kazi ya tezi ya pituitary na ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `This condition occurs when the pituitary gland does not produce enough growth hormone.

  **Neurological Link:** Often related to brain injury or tumors.

  **Impact:** Affects growth, energy, and metabolism.`,
          sw: `Hali hii hutokea wakati tezi ya pituitary haitoi homoni ya ukuaji ya kutosha.

  **Uhusiano wa Neva:** Mara nyingi huhusishwa na jeraha au uvimbe wa ubongo.

  **Athari:** Huathiri ukuaji, nguvu, na kimetaboliki.`,
        },
      },
      symptoms: {
        early: {
          en: ['Poor growth in children', 'Low energy'],
          sw: ['Ukuaji duni kwa watoto', 'Nguvu ndogo'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Delayed growth', 'Hormonal imbalance symptoms'],
          sw: ['Ukuaji kuchelewa', 'Dalili za homoni'],
        },
        reassurance: {
          en: 'Hormone therapy can be very effective.',
          sw: 'Tiba ya homoni husaidia sana.',
        },
      },
    },
  },

  /* ───────────────────────────────
      HEAD INJURY
    ─────────────────────────────── */
  headInjury: {
    slug: 'headInjury',
    hero: {
      title: { en: 'Head Injury', sw: 'Jeraha la Kichwa' },
      subtitle: {
        en: 'Damage to the brain caused by external force.',
        sw: 'Uharibifu wa ubongo unaosababishwa na mshtuko wa nje.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `A head injury occurs when an external force impacts the head and affects brain function.

  **Neurological Link:** May cause concussion, bleeding, or swelling in the brain.

  **Impact:** Can affect memory, movement, emotions, or consciousness.`,
          sw: `Jeraha la kichwa hutokea pale nguvu ya nje inapogonga kichwa na kuathiri kazi ya ubongo.

  **Uhusiano wa Neva:** Huenda likasababisha mtikisiko wa ubongo, damu, au uvimbe.

  **Athari:** Huathiri kumbukumbu, mwendo, hisia, au fahamu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Headache', 'Confusion', 'Dizziness'],
          sw: ['Maumivu ya kichwa', 'Kuchanganyikiwa', 'Kizunguzungu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Loss of consciousness', 'Persistent vomiting', 'Severe headache'],
          sw: ['Kupoteza fahamu', 'Kutapika mara kwa mara', 'Maumivu makali ya kichwa'],
        },
        reassurance: {
          en: 'Early medical care greatly improves recovery.',
          sw: 'Huduma ya mapema huongeza uwezekano wa kupona.',
        },
      },
    },
  },

  /* ───────────────────────────────
        HEADACHE DISORDERS
    ─────────────────────────────── */
  headacheDisorders: {
    slug: 'headacheDisorders',
    hero: {
      title: { en: 'Headache Disorders', sw: 'Magonjwa ya Maumivu ya Kichwa' },
      subtitle: {
        en: 'Recurring headaches linked to brain and nerve activity.',
        sw: 'Maumivu ya kichwa ya mara kwa mara yanayohusiana na neva.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Headache disorders include migraines, tension headaches, and cluster headaches.

  **Neurological Link:** Involves abnormal pain signaling in the brain.

  **Impact:** Can disrupt daily life, focus, and sleep.`,
          sw: `Magonjwa haya yanajumuisha kipandauso, maumivu ya mvutano, na cluster headaches.

  **Uhusiano wa Neva:** Hutokana na ishara zisizo za kawaida za maumivu katika ubongo.

  **Athari:** Huathiri kazi za kila siku, umakini, na usingizi.`,
        },
      },
      symptoms: {
        early: {
          en: ['Throbbing pain', 'Light sensitivity', 'Nausea'],
          sw: ['Maumivu yanayodunda', 'Kusumbuliwa na mwanga', 'Kichefuchefu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Frequent headaches', 'Sudden severe headache'],
          sw: ['Maumivu ya mara kwa mara', 'Maumivu makali ya ghafla'],
        },
        reassurance: {
          en: 'Most headache disorders can be managed effectively.',
          sw: 'Magonjwa mengi ya maumivu ya kichwa hudhibitika.',
        },
      },
    },
  },

  /* ───────────────────────────────
        HEMIPLEGIA
    ─────────────────────────────── */
  hemiplegia: {
    slug: 'hemiplegia',
    hero: {
      title: { en: 'Hemiplegia', sw: 'Kupooza Nusu ya Mwili' },
      subtitle: {
        en: 'Paralysis affecting one side of the body.',
        sw: 'Kupooza kunakoathiri upande mmoja wa mwili.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Hemiplegia is paralysis on one side of the body, commonly caused by stroke or brain injury.

  **Neurological Link:** Damage to motor pathways in the brain.

  **Impact:** Affects movement, balance, and independence.`,
          sw: `Hemiplegia ni kupooza kwa upande mmoja wa mwili, mara nyingi husababishwa na kiharusi au jeraha la ubongo.

  **Uhusiano wa Neva:** Uharibifu wa njia za mwendo kwenye ubongo.

  **Athari:** Huathiri harakati, usawa, na kujitegemea.`,
        },
      },
      symptoms: {
        early: {
          en: ['Loss of movement on one side', 'Muscle stiffness'],
          sw: ['Kupoteza mwendo upande mmoja', 'Misuli kukakamaa'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Sudden paralysis', 'Speech difficulty'],
          sw: ['Kupooza ghafla', 'Ugumu wa kuzungumza'],
        },
        reassurance: {
          en: 'Rehabilitation can significantly improve function.',
          sw: 'Ukarabati unaweza kuboresha uwezo kwa kiasi kikubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
        HUNTINGTON’S DISEASE
    ─────────────────────────────── */
  huntingtonsDisease: {
    slug: 'huntingtonsDisease',
    hero: {
      title: { en: "Huntington’s Disease", sw: 'Ugonjwa wa Huntington' },
      subtitle: {
        en: 'A genetic condition affecting movement and cognition.',
        sw: 'Ugonjwa wa kurithi unaoathiri mwendo na fikra.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Huntington’s disease is a progressive genetic disorder affecting the brain.

  **Neurological Link:** Causes gradual loss of nerve cells.

  **Impact:** Leads to movement problems, memory decline, and emotional changes.`,
          sw: `Ugonjwa wa Huntington ni ugonjwa wa kurithi unaoendelea kuathiri ubongo.

  **Uhusiano wa Neva:** Husababisha kupotea kwa seli za neva polepole.

  **Athari:** Huathiri mwendo, kumbukumbu, na hali ya kihisia.`,
        },
      },
      symptoms: {
        early: {
          en: ['Involuntary movements', 'Mood changes'],
          sw: ['Harakati zisizodhibitiwa', 'Mabadiliko ya hisia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Family history with symptoms', 'Progressive movement issues'],
          sw: ['Historia ya kifamilia na dalili', 'Matatizo ya mwendo yanayoendelea'],
        },
        reassurance: {
          en: 'Supportive care can improve quality of life.',
          sw: 'Huduma saidizi huboresha ubora wa maisha.',
        },
      },
    },
  },

  /* ───────────────────────────────
        HYDROCEPHALUS
    ─────────────────────────────── */
  hydrocephalus: {
    slug: 'hydrocephalus',
    hero: {
      title: { en: 'Hydrocephalus', sw: 'Maji Kuzidi Kwenye Ubongo' },
      subtitle: {
        en: 'Excess fluid buildup in the brain.',
        sw: 'Kuzidi kwa maji ndani ya ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Hydrocephalus occurs when cerebrospinal fluid accumulates in the brain.

  **Neurological Link:** Increases pressure on brain tissue.

  **Impact:** Can affect thinking, walking, and vision.`,
          sw: `Hydrocephalus hutokea pale maji ya ubongo yanapozidi na kukusanyika.

  **Uhusiano wa Neva:** Huongeza shinikizo kwenye ubongo.

  **Athari:** Huathiri kufikiri, kutembea, na kuona.`,
        },
      },
      symptoms: {
        early: {
          en: ['Head enlargement in infants', 'Balance problems'],
          sw: ['Kichwa kuongezeka kwa watoto', 'Matatizo ya usawa'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Rapid head growth', 'Worsening balance or confusion'],
          sw: ['Ukuaji wa haraka wa kichwa', 'Kuzorota kwa usawa au kuchanganyikiwa'],
        },
        reassurance: {
          en: 'Surgical treatment can be life-changing.',
          sw: 'Upasuaji unaweza kubadilisha maisha.',
        },
      },
    },
  },

  /* ───────────────────────────────
      INSOMNIA (NEUROLOGICAL)
    ─────────────────────────────── */
  insomnia: {
    slug: 'insomnia',
    hero: {
      title: { en: 'Insomnia', sw: 'Kukosa Usingizi' },
      subtitle: {
        en: 'Difficulty falling or staying asleep linked to brain activity.',
        sw: 'Ugumu wa kupata au kudumisha usingizi unaohusiana na ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Insomnia is a sleep disorder where the brain remains overly alert, preventing restful sleep.

  **Neurological Link:** Involves disrupted brain signaling that regulates sleep-wake cycles.

  **Impact:** Affects mood, concentration, memory, and overall health.`,
          sw: `Insomnia ni tatizo la usingizi ambapo ubongo hubaki katika hali ya tahadhari kupita kiasi.

  **Uhusiano wa Neva:** Hutokana na kuvurugika kwa ishara za ubongo zinazosimamia usingizi.

  **Athari:** Huathiri hisia, umakini, kumbukumbu, na afya kwa ujumla.`,
        },
      },
      symptoms: {
        early: {
          en: ['Difficulty falling asleep', 'Frequent waking', 'Daytime fatigue'],
          sw: ['Ugumu wa kulala', 'Kuamka mara kwa mara', 'Uchovu wa mchana'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Persistent sleep problems', 'Daytime impairment'],
          sw: ['Matatizo ya usingizi yanayoendelea', 'Kushindwa kufanya kazi za mchana'],
        },
        reassurance: {
          en: 'Sleep-focused treatment can restore healthy rest.',
          sw: 'Matibabu ya usingizi yanaweza kurejesha mapumziko bora.',
        },
      },
    },
  },

  /* ───────────────────────────────
        INTRACRANIAL PRESSURE (INCREASED)
    ─────────────────────────────── */
  increasedIntracranialPressure: {
    slug: 'increasedIntracranialPressure',
    hero: {
      title: { en: 'Increased Intracranial Pressure', sw: 'Shinikizo Kubwa Ndani ya Fuvu' },
      subtitle: {
        en: 'Raised pressure within the skull affecting the brain.',
        sw: 'Kuongezeka kwa shinikizo ndani ya fuvu la kichwa.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `This condition occurs when pressure inside the skull increases due to swelling, bleeding, or fluid buildup.

  **Neurological Link:** Compresses brain tissue and blood vessels.

  **Impact:** Can cause severe headaches, vision problems, or loss of consciousness.`,
          sw: `Hali hii hutokea shinikizo linapoongezeka ndani ya fuvu kutokana na uvimbe, damu, au maji kuzidi.

  **Uhusiano wa Neva:** Hukandamiza tishu za ubongo na mishipa ya damu.

  **Athari:** Huleta maumivu makali ya kichwa, matatizo ya kuona, au kupoteza fahamu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Severe headache', 'Blurred vision', 'Nausea'],
          sw: ['Maumivu makali ya kichwa', 'Kuona ukungu', 'Kichefuchefu'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Sudden severe headache', 'Vision loss', 'Confusion'],
          sw: ['Maumivu makali ya ghafla', 'Kupoteza kuona', 'Kuchanganyikiwa'],
        },
        reassurance: {
          en: 'Prompt treatment can prevent serious brain damage.',
          sw: 'Matibabu ya haraka huzuia uharibifu mkubwa wa ubongo.',
        },
      },
    },
  },

  /* ───────────────────────────────
        INTELLECTUAL DISABILITY (NEUROLOGICAL)
    ─────────────────────────────── */
  intellectualDisability: {
    slug: 'intellectualDisability',
    hero: {
      title: { en: 'Intellectual Disability', sw: 'Ulemavu wa Akili' },
      subtitle: {
        en: 'Limitations in cognitive functioning due to brain development differences.',
        sw: 'Upungufu wa uwezo wa kufikiri kutokana na maendeleo ya ubongo.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Intellectual disability involves challenges with learning, reasoning, and problem-solving.

  **Neurological Link:** Results from differences or injury to the developing brain.

  **Impact:** Affects education, communication, and independent living.`,
          sw: `Ulemavu wa akili unahusisha changamoto katika kujifunza, kufikiri, na kutatua matatizo.

  **Uhusiano wa Neva:** Hutokana na tofauti au jeraha katika ukuaji wa ubongo.

  **Athari:** Huathiri elimu, mawasiliano, na kujitegemea.`,
        },
      },
      symptoms: {
        early: {
          en: ['Delayed development', 'Learning difficulties'],
          sw: ['Ukuaji kuchelewa', 'Changamoto za kujifunza'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Developmental delays', 'School learning concerns'],
          sw: ['Kuchelewa kwa maendeleo', 'Changamoto za masomo'],
        },
        reassurance: {
          en: 'Early support can greatly improve outcomes.',
          sw: 'Msaada wa mapema huboresha maisha kwa kiasi kikubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
        ISCHEMIC STROKE
    ─────────────────────────────── */
  ischemicStroke: {
    slug: 'ischemicStroke',
    hero: {
      title: { en: 'Ischemic Stroke', sw: 'Kiharusi cha Kuziba Mishipa' },
      subtitle: {
        en: 'A stroke caused by blocked blood flow to the brain.',
        sw: 'Kiharusi kinachosababishwa na kuziba kwa mishipa ya damu.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `An ischemic stroke occurs when a blood vessel supplying the brain is blocked.

  **Neurological Link:** Brain cells are damaged due to lack of oxygen.

  **Impact:** Can impair movement, speech, vision, or cognition.`,
          sw: `Kiharusi cha ischemic hutokea mshipa wa damu unapoziba na kuzuia damu kufika ubongoni.

  **Uhusiano wa Neva:** Seli za ubongo huharibika kwa kukosa oksijeni.

  **Athari:** Huathiri mwendo, usemi, kuona, au fikra.`,
        },
      },
      symptoms: {
        early: {
          en: ['Sudden weakness on one side', 'Slurred speech'],
          sw: ['Udhaifu ghafla upande mmoja', 'Usemi usioeleweka'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Face drooping', 'Arm weakness', 'Speech difficulty'],
          sw: ['Uso kulegea', 'Mkono kudhoofika', 'Ugumu wa kuzungumza'],
        },
        reassurance: {
          en: 'Fast treatment can save brain function.',
          sw: 'Matibabu ya haraka huokoa uwezo wa ubongo.',
        },
      },
    },
  },

  /* ───────────────────────────────
      JUVENILE EPILEPSY
   ─────────────────────────────── */
  juvenileEpilepsy: {
    slug: 'juvenileEpilepsy',
    hero: {
      title: { en: 'Juvenile Epilepsy', sw: 'Kifafa cha Vijana' },
      subtitle: {
        en: 'A seizure disorder beginning in childhood or adolescence.',
        sw: 'Ugonjwa wa mshtuko unaoanza utotoni au ujana.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Juvenile epilepsy refers to forms of epilepsy that begin in childhood or teenage years.

  **Neurological Link:** Caused by abnormal electrical activity in the brain.

  **Impact:** Can affect learning, independence, and daily activities.`,
          sw: `Kifafa cha vijana ni aina ya kifafa kinachoanza utotoni au kipindi cha ujana.

  **Uhusiano wa Neva:** Husababishwa na shughuli zisizo za kawaida za umeme kwenye ubongo.

  **Athari:** Huathiri masomo, kujitegemea, na shughuli za kila siku.`,
        },
      },
      symptoms: {
        early: {
          en: ['Seizures', 'Brief loss of awareness', 'Muscle jerks'],
          sw: ['Mshtuko', 'Kupoteza fahamu kwa muda', 'Misuli kujitikisa'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['First seizure', 'Increasing seizure frequency'],
          sw: ['Mshtuko wa kwanza', 'Kuongezeka kwa mshtuko'],
        },
        reassurance: {
          en: 'Many young people achieve good seizure control with treatment.',
          sw: 'Vijana wengi hudhibiti kifafa vizuri kwa matibabu.',
        },
      },
    },
  },

  /* ───────────────────────────────
        JUVENILE MYOCLONIC EPILEPSY (JME)
    ─────────────────────────────── */
  juvenileMyoclonicEpilepsy: {
    slug: 'juvenileMyoclonicEpilepsy',
    hero: {
      title: { en: 'Juvenile Myoclonic Epilepsy', sw: 'Kifafa cha Misuli kwa Vijana' },
      subtitle: {
        en: 'A common epilepsy syndrome with muscle jerks.',
        sw: 'Aina ya kifafa kinachosababisha mishtuko ya misuli.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Juvenile myoclonic epilepsy is a common genetic epilepsy syndrome.

  **Neurological Link:** Characterized by sudden muscle jerks due to abnormal brain signals.

  **Impact:** Seizures often occur after waking and may affect daily routine.`,
          sw: `Kifafa cha misuli kwa vijana ni ugonjwa wa kifafa unaotokana na vinasaba.

  **Uhusiano wa Neva:** Huonekana kwa mishtuko ya ghafla ya misuli kutokana na ishara zisizo za kawaida za ubongo.

  **Athari:** Mshtuko mara nyingi hutokea baada ya kuamka na huathiri ratiba ya siku.`,
        },
      },
      symptoms: {
        early: {
          en: ['Sudden muscle jerks', 'Morning seizures'],
          sw: ['Mishtuko ya ghafla ya misuli', 'Mshtuko wa asubuhi'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Dropping objects suddenly', 'Recurrent morning jerks'],
          sw: ['Kuangusha vitu ghafla', 'Mishtuko ya asubuhi inayojirudia'],
        },
        reassurance: {
          en: 'Long-term treatment is often very effective.',
          sw: 'Matibabu ya muda mrefu mara nyingi hufaulu sana.',
        },
      },
    },
  },

  /* ───────────────────────────────
        JUVENILE PARKINSONISM
    ─────────────────────────────── */
  juvenileParkinsonism: {
    slug: 'juvenileParkinsonism',
    hero: {
      title: { en: 'Juvenile Parkinsonism', sw: 'Parkinson kwa Vijana' },
      subtitle: {
        en: 'Early-onset movement disorder affecting young people.',
        sw: 'Ugonjwa wa mwendo unaoanza mapema kwa vijana.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Juvenile parkinsonism is a rare condition where Parkinson-like symptoms appear at a young age.

  **Neurological Link:** Involves disruption of dopamine pathways in the brain.

  **Impact:** Causes stiffness, slowness, and movement difficulties.`,
          sw: `Parkinson kwa vijana ni hali adimu ambapo dalili za Parkinson huanza mapema.

  **Uhusiano wa Neva:** Hutokana na kuvurugika kwa njia za dopamini katika ubongo.

  **Athari:** Husababisha kukakamaa, polepole wa mwendo, na ugumu wa harakati.`,
        },
      },
      symptoms: {
        early: {
          en: ['Muscle stiffness', 'Slow movement', 'Tremor'],
          sw: ['Misuli kukakamaa', 'Mwendo wa polepole', 'Kutetemeka'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Progressive movement slowing', 'Unexplained stiffness in youth'],
          sw: ['Kupungua kwa mwendo kunakoendelea', 'Kukakamaa bila sababu kwa vijana'],
        },
        reassurance: {
          en: 'Specialized care can greatly improve quality of life.',
          sw: 'Huduma maalum huboresha maisha kwa kiwango kikubwa.',
        },
      },
    },
  },

  /* ───────────────────────────────
      KERNS–SAYRE SYNDROME
   ─────────────────────────────── */
  kearnsSayreSyndrome: {
    slug: 'kearnsSayreSyndrome',
    hero: {
      title: { en: 'Kearns–Sayre Syndrome', sw: 'Ugonjwa wa Kearns–Sayre' },
      subtitle: {
        en: 'A rare neurological disorder caused by mitochondrial dysfunction.',
        sw: 'Ugonjwa adimu wa neva unaotokana na hitilafu za mitochondria.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Kearns–Sayre syndrome is a rare genetic disorder that affects the brain, eyes, and muscles.

  **Neurological Link:** Caused by mitochondrial DNA abnormalities affecting nerve cells.

  **Impact:** Leads to muscle weakness, vision loss, and coordination problems.`,
          sw: `Ugonjwa wa Kearns–Sayre ni ugonjwa adimu wa kijenetiki unaoathiri ubongo, macho, na misuli.

  **Uhusiano wa Neva:** Hutokana na hitilafu za DNA ya mitochondria zinazoathiri seli za neva.

  **Athari:** Husababisha udhaifu wa misuli, kupoteza uwezo wa kuona, na matatizo ya uratibu.`,
        },
      },
      symptoms: {
        early: {
          en: ['Drooping eyelids', 'Muscle weakness', 'Vision problems'],
          sw: ['Kope kulegea', 'Udhaifu wa misuli', 'Matatizo ya kuona'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Early vision loss', 'Progressive muscle weakness'],
          sw: ['Kupoteza kuona mapema', 'Udhaifu wa misuli unaoendelea'],
        },
        reassurance: {
          en: 'Supportive care can help manage symptoms.',
          sw: 'Huduma saidizi husaidia kudhibiti dalili.',
        },
      },
    },
  },

  /* ───────────────────────────────
        KURU
    ─────────────────────────────── */
  kuru: {
    slug: 'kuru',
    hero: {
      title: { en: 'Kuru', sw: 'Kuru' },
      subtitle: {
        en: 'A rare neurodegenerative prion disease.',
        sw: 'Ugonjwa adimu wa neva unaosababishwa na prion.',
      },
    },
    sections: {
      overview: {
        content: {
          en: `Kuru is a fatal neurodegenerative disease historically found in specific populations.

  **Neurological Link:** Caused by prions that damage brain tissue.

  **Impact:** Leads to loss of coordination, tremors, and cognitive decline.`,
          sw: `Kuru ni ugonjwa hatari wa neva uliopatikana kihistoria katika jamii fulani.

  **Uhusiano wa Neva:** Husababishwa na prion zinazoharibu tishu za ubongo.

  **Athari:** Husababisha kupoteza uratibu, kutetemeka, na kupungua kwa uwezo wa kufikiri.`,
        },
      },
      symptoms: {
        early: {
          en: ['Unsteady walking', 'Tremors', 'Mood changes'],
          sw: ['Kutembea bila usawa', 'Kutetemeka', 'Mabadiliko ya hisia'],
        },
      },
      help: {
        whenToSeekHelp: {
          en: ['Progressive coordination loss'],
          sw: ['Kupoteza uratibu kunakoendelea'],
        },
        reassurance: {
          en: 'Modern public health practices have made this condition extremely rare.',
          sw: 'Hatua za kisasa za afya ya jamii zimeufanya ugonjwa huu kuwa nadra sana.',
        },
      },
    },
  },
  
};
