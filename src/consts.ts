// Single source of truth for site-wide copy, metadata and links.

export const SITE = {
  name: 'yay.dev',
  url: 'https://yay.dev',
  // Person behind the practice
  author: 'Doron Tsur',
  role: 'Platform & Distributed Systems Architect',
  title: 'Doron Tsur · Platform & Distributed Systems Architect',
  description:
    'Doron Tsur (yay.dev). Platform and distributed systems engineering: large scale search, data pipelines, event driven systems and the infrastructure as code underneath them. Independent consulting practice.',
  locale: 'en',
  // Default Open Graph / Twitter card image (in /public)
  ogImage: '/og.png',
} as const;

// Top navigation (left logo links home)
export const NAV: { label: string; href: string }[] = [
  { label: 'Résumé', href: '/resume' },
  { label: 'Talks', href: '/talks' },
  { label: 'Notes', href: '/notes' },
  { label: 'Contact', href: '/contact' },
];

// Conference talks (public, no rights concerns). Thumbnails self-hosted in
// /public/talks so we link out to YouTube without weakening the CSP.
export const TALKS: {
  title: string;
  event: string;
  year: string;
  thumb: string;
  youtubeId: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: 'TestContainers: Real Integration Tests Without the Pain',
    event: 'NodeTLV',
    year: '2025',
    thumb: '/talks/testcontainers.jpg',
    youtubeId: 'Eea247tlBAc',
    links: [{ label: 'Watch', href: 'https://www.youtube.com/watch?v=Eea247tlBAc' }],
  },
  {
    title: 'Are we Deno yet?',
    event: 'NodeTLV',
    year: '2021',
    thumb: '/talks/deno.jpg',
    youtubeId: '0FfzP7Tmlmc',
    links: [
      { label: 'Watch (English)', href: 'https://www.youtube.com/watch?v=0FfzP7Tmlmc' },
      { label: 'Hebrew version', href: 'https://www.youtube.com/watch?v=uM64dDlBikI' },
    ],
  },
];

// Contact channels. Email is intentionally NOT rendered as a visible mailto:
// (a honeypot-protected form handles direct contact, so scrapers can't harvest it).
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/qballer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/doron-tsur' },
  // wa.me number is international format, no + or leading 0 (IL 054... -> 97254...)
  { label: 'WhatsApp', href: 'https://wa.me/972546342237' },
];

// Form notification target (used by Netlify Forms config, not shown on-page).
export const CONTACT_EMAIL = 'doron@yay.dev';
