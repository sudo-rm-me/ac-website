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
  badge: 'Made with love in TypeScript + Tailwind v4',
  heading: 'Sudo-rm-me',
  intro: 'Welcome to my website. I hope you enjoy your stay.',
}

export const featureGridText: FeatureText[] = [
  {
    title: 'Personal History',
    description: 'A little about me...',
    href: '#/personal-history',
    colorClass: 'text-emerald-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(16,185,129,0.7)]',
  },
  {
    title: 'Tech Stack',
    description: 'Technologies and tools I use in my projects.',
    href: '#/tech-stack',
    colorClass: 'text-amber-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(251,191,36,0.7)]',
  },
  {
    title: 'Blogs',
    description: 'Writing, notes, and lessons learned.',
    href: '#/blogs',
    colorClass: 'text-violet-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(167,139,250,0.8)]',
  },
]
