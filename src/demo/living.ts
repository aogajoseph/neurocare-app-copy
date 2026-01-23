// src/demo/living.ts
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
          slug: 'physical-rehabilitation',
          title: {
            en: 'Physical Rehabilitation',
            sw: 'Urejeshaji wa Mwili',
          },
          description: {
            en: 'Exercises and therapies that help improve strength, balance and movement over time.',
            sw: 'Mazoezi na tiba zinazosaidia kuboresha nguvu, usawa na mwendo, hatua kwa hatua.',
          },
          content: {
            en: `Physical rehabilitation focuses on helping your body move as well as it can, given your condition.
            This may include exercises to improve strength, balance, coordination and flexibility. 
            For some people, rehabilitation helps regain lost abilities. For others, it helps prevent complications and maintain independence.
            Small, consistent movements matter more than intensity. Working with a physiotherapist or trained health worker can help you learn safe exercises you can continue at home.
            Remember: progress is not always linear. Rest is part of rehabilitation, not a failure.`,
            sw: `Urejeshaji wa mwili hulenga kusaidia mwili wako kufanya kazi kwa uwezo wake bora kulingana na hali yako.
            Hii inaweza kujumuisha mazoezi ya kuboresha nguvu, usawa, uratibu na unyumbufu. Kwa wengine, urejeshaji husaidia kurejesha uwezo uliopotea. 
            Kwa wengine, husaidia kuzuia matatizo na kudumisha uhuru.
            Mwendo mdogo lakini wa mara kwa mara una umuhimu zaidi kuliko nguvu. 
            Kufanya kazi na mtaalamu wa mazoezi ya tiba au mhudumu wa afya aliyefunzwa husaidia kujifunza mazoezi salama ya kufanya nyumbani.
            Kumbuka: maendeleo si ya mstari mmoja. Kupumzika ni sehemu ya urejeshaji, si kushindwa.`,
          },
        },
        {
          slug: 'speech-communication',
          title: {
            en: 'Speech & Communication',
            sw: 'Hotuba na Mawasiliano',
          },
          description: {
            en: 'Support for speech, swallowing and alternative ways to communicate effectively.',
            sw: 'Msaada wa hotuba, kumeza na njia mbadala za mawasiliano.',
          },
          content: {
            en: `Neurological conditions can affect speech, voice, understanding or swallowing.
            Speech and language therapy supports people to communicate in ways that work for them. 
            Either through speech exercises, gestures, writing, communication boards or assistive technology.
            Difficulties with swallowing are also common and should be assessed early to reduce the risk of choking or infections.
            Communication is more than words. 
            Being understood and heard is essential to dignity, relationships and mental wellbeing.`,
            sw: `Hali za neurolojia zinaweza kuathiri hotuba, sauti uelewa au kumeza.
            Tiba ya hotuba na lugha husaidia watu kuwasiliana kwa njia zinazowafaa. 
            Iwe kupitia mazoezi ya hotuba, ishara, kuandika, mabango ya mawasiliano au teknolojia saidizi.
            Changamoto za kumeza pia ni za kawaida na zinapaswa kuchunguzwa mapema ili kupunguza hatari ya kusongwa au maambukizi.
            Mawasiliano ni zaidi ya maneno. 
            Kueleweka na kusikilizwa ni muhimu kwa heshima, mahusiano na afya ya akili.`,
          },
        },
        {
          slug: 'cognitive-support',
          title: {
            en: 'Cognitive Support',
            sw: 'Msaada wa Kumbukumbu na Fikra',
          },
          description: {
            en: 'Strategies to manage memory, attention and problem-solving challenges.',
            sw: 'Mikakati ya kukabiliana na changamoto za kumbukumbu, umakini na utatuzi wa matatizo.',
          },
          content: {
            en: `Cognitive challenges may affect memory, attention, planning or problem-solving.
            Cognitive support focuses on practical strategies rather than “fixing” the brain. 
            This may include routines, reminders, simplifying tasks and reducing distractions.
            Some people benefit from cognitive rehabilitation with trained professionals, while others rely on family support and environmental adjustments.
            Needing support with thinking does not reduce your intelligence, value or identity. 
            Adaptation is a form of strength.`,
            sw: `Changamoto za utambuzi zinaweza kuathiri kumbukumbu, umakini, kupanga au kutatua matatizo.
            Msaada wa utambuzi hulenga mikakati ya vitendo badala ya “kurekebisha” ubongo. 
            Hii inaweza kujumuisha ratiba, vikumbusho, kurahisisha shughuli na kupunguza vishawishi.
            Wengine hunufaika na urejeshaji wa utambuzi kutoka kwa wataalamu, huku wengine wakitegemea msaada wa familia na marekebisho ya mazingira.
            Kuhitaji msaada wa kufikiri hakupunguzi akili, thamani au utambulisho wako. 
            Kujibadilisha ni aina ya nguvu.`,
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

// 🔹 Export a dedicated array for detail slug screens
export const livingDetailSections = livingData.sections
  .filter((section) => section.cards)
  .flatMap((section) => section.cards)
  .map((card) => ({
    slug: card.slug,
    title: card.title,
    content: card.content,
  }));
