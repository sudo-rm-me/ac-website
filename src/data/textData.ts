export type FeatureText = {
  title: string
  description: string
  href: string
  colorClass: string
  shadowClass: string
}

export type BasePageText = {
  title: string
  summary: string
  backHomeLabel: string
}

export type ListPageText = BasePageText & {
  items: string[]
}

export type HeroSectionText = {
  badge: string
  heading: string
  intro: string
}

export const heroSectionText: HeroSectionText = {
  badge: 'Made with love in TypeScript',
  heading: 'Sudo-rm-me (aka Alex)',
  intro: 'Welcome to my website. I hope you enjoy your stay.',
}

export const featureGridText: FeatureText[] = [
  {
    title: 'About Me',
    description: 'A little about me...',
    href: '#/about-me',
    colorClass: 'text-emerald-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(16,185,129,0.7)]',
  },
  {
    title: 'Tech Stack',
    description: 'Technologies and systems I work with.',
    href: '#/tech-stack',
    colorClass: 'text-sky-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(56,189,248,0.7)]',
  },
  {
    title: 'Blogs',
    description: 'Boring insights into nothing interesting.',
    href: '#/blogs',
    colorClass: 'text-rose-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(244,63,94,0.65)]',
  },
]
