import { SITE_URL } from './site-url.mjs';

/** One piece of the home-page intro. `em: true` segments are set in italics. */
export interface IntroSegment {
  text: string;
  em?: boolean;
}

export const site = {
  name: 'Nishant Panchal',
  url: SITE_URL,
  description:
    'Nishant Panchal builds machine learning and agentic AI systems and researches cooperative multi-agent reinforcement learning.',

  /** The home-page intro, split so the LaTeX animation can find the emphasised parts. */
  intro: [
    { text: 'I build ' },
    { text: 'machine learning', em: true },
    { text: ' and ' },
    { text: 'agentic AI', em: true },
    { text: ' systems, and I’m researching how agents ' },
    { text: 'learn to cooperate', em: true },
    {
      text: ' for my honours in computer science at Monash University. I’m also passionate about mathematics, physics and quantum computing.',
    },
  ] satisfies IntroSegment[],

  /** Home-page "About" paragraph, shown below the role line. Plain text. */
  about:
    'My passion for building started with LEGO: hours spent turning small, simple pieces into complicated creations. Software turned out to be the same game with more interesting pieces. What fascinates me most is how models rooted in statistics can power systems that feel intelligent, and I like the work of making those ideas hold up in practice, from low-level architecture to high-level design.',

  role: {
    title: 'Software Engineer, AI',
    org: 'Australian Government',
    location: 'Melbourne',
  },

  /** Stored in parts so the plain address never appears in the HTML. */
  email: {
    user: 'nishantppanchal',
    domain: 'gmail',
    tld: 'com',
  },

  github: 'https://github.com/Nishantppanchal',
  linkedin: 'https://www.linkedin.com/in/nishantppanchal/',
} as const;

export const roleLine = [site.role.title, site.role.org, site.role.location].join(' · ');

export const introPlainText = site.intro.map((s) => s.text).join('');

export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
  { href: '/experience/', label: 'Experience' },
] as const;
