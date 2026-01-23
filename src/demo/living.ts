// demo/living.ts
export const livingData = {
  hero: {
    title: {
      en: 'Living with Neurological Conditions',
      sw: 'Kuishi na Hali za Neurolojia',
    },
    subtitle: {
      en: 'Practical guidance, rehabilitation tips and encouragement for everyday life.',
      sw: 'Mwongozo wa vitendo, ushauri wa urejeshaji na faraja kwa maisha ya kila siku.',
    },
    image: require('../../assets/images/living-hero.jpg'),
  },

  sections: [
    {
      id: 'intro',
      type: 'text',
      title: {
        en: 'You Are Not Alone',
        sw: 'Huko Peke Yako',
      },
      content: {
        en: 'Living with a neurological condition can affect movement, thinking, emotions and daily routines. While challenges are real, many people find new ways to adapt, remain independent and live meaningful lives.',
        sw: 'Kuishi na hali ya neurolojia kunaweza kuathiri mwendo, fikra, hisia na shughuli za kila siku. Ingawa changamoto zipo, watu wengi hupata njia mpya za kuendelea kujitegemea na kuishi maisha yenye maana.',
      },
    },

    {
      id: 'rehab',
      type: 'cardList',
      title: {
        en: 'Rehabilitation & Daily Support',
        sw: 'Urejeshaji na Msaada wa Kila Siku',
      },
      cards: [
        {
          title: {
            en: 'Physical Rehabilitation',
            sw: 'Urejeshaji wa Mwili',
          },
          description: {
            en: 'Exercises and therapies that help improve strength, balance and movement over time.',
            sw: 'Mazoezi na tiba zinazosaidia kuboresha nguvu, usawa na mwendo, hatua kwa hatua.',
          },
        },
        {
          title: {
            en: 'Speech & Communication',
            sw: 'Hotuba na Mawasiliano',
          },
          description: {
            en: 'Support for speech, swallowing and alternative ways to communicate effectively.',
            sw: 'Msaada wa hotuba, kumeza na njia mbadala za mawasiliano.',
          },
        },
        {
          title: {
            en: 'Cognitive Support',
            sw: 'Msaada wa Kumbukumbu na Fikra',
          },
          description: {
            en: 'Strategies to manage memory, attention and problem-solving challenges.',
            sw: 'Mikakati ya kukabiliana na changamoto za kumbukumbu, umakini na utatuzi wa matatizo.',
          },
        },
      ],
    },

    {
      id: 'dailyLife',
      type: 'text',
      title: {
        en: 'Managing Everyday Life',
        sw: 'Kusimamia Maisha ya Kila Siku',
      },
      content: {
        en: 'Simple adjustments—such as pacing activities, using assistive devices and planning rest—can reduce fatigue and increase independence.',
        sw: 'Marekebisho madogo kama kupanga shughuli, kutumia vifaa saidizi na kupumzika yanaweza kupunguza uchovu na kuongeza uhuru.',
      },
    },

    {
      id: 'encouragement',
      type: 'reassurance',
      message: {
        en: 'Progress may be slow and some days are harder than others. That does not erase your strength or your worth.',
        sw: 'Maendeleo yanaweza kuwa ya polepole na siku zingine kuwa ngumu zaidi. Hilo halipunguzi nguvu au thamani yako.',
      },
    },
  ],
};
