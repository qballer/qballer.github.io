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
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Contact channels. Email is intentionally NOT rendered as a visible mailto:
// (a honeypot-protected form handles direct contact, so scrapers can't harvest it).
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/qballer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/doron-tsur' },
];

// Form notification target (used by Netlify Forms config, not shown on-page).
export const CONTACT_EMAIL = 'doron@yay.dev';
