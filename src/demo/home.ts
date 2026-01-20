// src/demo/home.ts
export const DEMO_HOME = {
  hero: {
    welcome: {
      en: 'Welcome',
      sw: 'Karibu',
    },
    intro: {
      en: 'Trusted information, guidance, and support for neurological health — for patients, caregivers, and communities.',
      sw: 'Taarifa, mwongozo na msaada wa afya ya mfumo wa neva — kwa wagonjwa, walezi na jamii.',
    },
  },

  sectionTitles: {
    whatYouCanDo: { en: 'What can you do here?', sw: 'Unaweza kufanya nini hapa?' },
    conditionsAZ: { en: 'Conditions A–Z', sw: 'Magonjwa A–Z' },
    learnWithConfidence: { en: 'Learn with confidence', sw: 'Jifunze kwa uhakika' },
    helpNow: { en: 'Need help now?', sw: 'Unahitaji msaada sasa?' },
  },

  whatYouCanDo: [
    {
      id: 'conditions',
      title: { en: 'Understand Conditions', sw: 'Fahamu Magonjwa' },
      description: {
        en: 'Learn about neurological conditions, symptoms, and treatments.',
        sw: 'Jifunze kuhusu magonjwa ya neva, dalili na matibabu.',
      },
      route: '/(drawer)/(content)/learn/neurology',
    },
    {
      id: 'living',
      title: { en: 'Living Well', sw: 'Kuishi Vizuri' },
      description: {
        en: 'Practical guidance for daily life and wellbeing.',
        sw: 'Mwongozo wa maisha ya kila siku na ustawi.',
      },
      route: '/(drawer)/(content)/learn/living',
    },
    {
      id: 'support',
      title: { en: 'Support & Safety', sw: 'Msaada na Usalama' },
      description: {
        en: 'Emergency help and trusted support.',
        sw: 'Msaada wa dharura na msaada wa kuaminika.',
      },
      route: '/(drawer)/(content)/support/help',
    },
  ],

  popularConditions: [
    { slug: 'stroke', label: 'Stroke' },
    { slug: 'epilepsy', label: 'Epilepsy' },
    { slug: 'parkinsons', label: 'Parkinson’s' },
    { slug: 'migraine', label: 'Migraine' },
    { slug: 'dementia', label: 'Dementia' },
  ],

  viewAll: { en: 'View all', sw: 'Tazama zote' },

  learnWithConfidence: [
    {
      id: 'myths',
      title: { en: 'Myths vs Facts', sw: 'Hadithi dhidi ya Ukweli' },
      description: {
        en: 'Clear misconceptions and learn what’s medically accurate.',
        sw: 'Ondoa dhana potofu na ujifunze ukweli wa kitabibu.',
      },
      route: '/(drawer)/(content)/learn/myths',
    },
    {
      id: 'caregiver',
      title: { en: 'Caregiver Guidance', sw: 'Mwongozo wa Walezi' },
      description: {
        en: 'Support and practical advice for caregivers and families.',
        sw: 'Pata msaada na ushauri wa vitendo kwa walezi na familia.',
      },
      route: '/(drawer)/(content)/learn/caregiver',
    },
    {
      id: 'child',
      title: { en: 'Child Protection', sw: 'Ulinzi wa Mtoto' },
      description: {
        en: 'Safeguarding children with neurological conditions.',
        sw: 'Kulinda watoto wenye magonjwa ya mfumo wa neva',
      },
      route: '/(drawer)/(content)/legal/child-protection',
    },
  ],

  helpNow: [
    {
      id: 'emergency',
      title: { en: 'Emergency Resources', sw: 'Rasilimali za Dharura' },
      description: {
        en: 'Find urgent help and emergency guidance.',
        sw: 'Pata msaada wa haraka na mwongozo wa dharura.',
      },
      route: '/(drawer)/(content)/support/emergency',
    },
    {
      id: 'report',
      title: { en: 'Report a Concern', sw: 'Ripoti Tatizo' },
      description: {
        en: 'Raise concerns safely and confidentially.',
        sw: 'Toa taarifa za wasiwasi kwa usalama na kwa siri.',
      },
      route: '/(drawer)/(content)/support/report',
    },
  ],

  reassurance: {
    en: 'You are not alone. Whether you are living with a neurological condition, caring for someone, or simply seeking knowledge — Neuro Care is here to guide, support, and empower you.',
    sw: 'Hauko peke yako. Iwe unaishi na hali ya neva, unamlea mtu, au unatafuta maarifa — Neuro Care iko hapa kukuongoza, kukusaidia na kukutia nguvu.',
  },
};