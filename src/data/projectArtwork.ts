const assets = import.meta.glob<string>('../assets/projects/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const artwork: Record<string, { slug: string; alt: string }> = {
  trustfin: { slug: 'trustfin-ai', alt: 'Conceptual financial AI artwork: question and language interfaces connect through evidence documents to a teal, source-grounded answer panel.' },
  haqooq: { slug: 'haqooq-ai-overview', alt: 'Supplied Haqooq AI homepage screenshot showing its Pakistani legal assistant introduction and legal consultation entry point.' },
  sahara: { slug: 'sahara-ai-polished', alt: 'Refined Sahara product visualization showing the supplied mobile interface with four colorful action tiles against a restrained graphite and teal studio background.' },
  smarthire: { slug: 'smarthire-ai-blue', alt: 'Supplied SmartHire AI recruitment mockup with blue interface accents on a laptop dashboard and mobile screen, preserving the original studio composition.' },
  islamic: { slug: 'islamic-insights-supplied', alt: 'Supplied Islamic Insights promotional artwork in emerald and gold, showing app screens for prayer timings, Quran navigation, Qibla, Tasbeeh and Hadith.' },
  knockup: { slug: 'knockup-studio-v2', alt: 'Refined KnockUp product visualization based on the supplied screens: light-blue agent navigation and a dark messaging view on two phones.' },
  sql: { slug: 'sql-helper-refined', alt: 'Refined SQL Helper studio mockup based on the supplied mobile interface, showing query input, optional error context, Fix My Query, corrected SQL and explanation, and Generator, Explainer and Fixer navigation.' },
  summarizer: { slug: 'ai-summarizer', alt: 'Conceptual summarization artwork: many source pages pass through a processing layer into a compact structured document.' },
  driving: { slug: 'driving-school-studio', alt: 'Laptop studio mockup adapted from the live Reliable Driving School website, showing its navigation, driving-course introduction and appointment action.' },
  careem: { slug: 'careem-db', alt: 'Conceptual ride-hailing database artwork: seven relational entity panels connected above a subtle route topology, without company branding.' },
  shop: { slug: 'shop-smart-studio', alt: 'Refined Shop Smart mobile product mockup based on the supplied storefront with a promotional banner, latest products, category tiles and bottom navigation.' },
  onebullet: { slug: 'one-bullet', alt: 'One-Bullet repository showcase showing the mobile game start menu, gameplay and AI Commander overlays across four screens.' },
};

export function getProjectArtwork(id: string) {
  const item = artwork[id];
  if (!item) return {};
  const path = `../assets/projects/${item.slug}`;
  const dimensions:Record<string,[number,number]> = {smarthire:[1200,1200],islamic:[1536,1024],haqooq:[1600,740],sql:[1600,900],shop:[1600,900],onebullet:[1024,682],driving:[1600,900]};
  const [width,height] = dimensions[id] ?? [1600,900];
  return {
    image: assets[`${path}.webp`],
    imageSmall: assets[`${path}-800.webp`],
    imageThumb: assets[`${path}-320.webp`],
    imageAlt: item.alt,
    imageWidth: width,
    imageHeight: height,
    imageSmallWidth: Math.min(800,width),
    imageCredit: ['islamic','onebullet'].includes(id) ? 'supplied' as const : ['sahara','smarthire','knockup','sql','driving','shop'].includes(id) ? 'adapted' as const : ['haqooq','sql','shop','driving'].includes(id) ? 'screenshot' as const : 'generated' as const,
  };
}






