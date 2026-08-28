export type TechItem = {
  name: string
  summary: string
  iconPath: string
  iconAccentClass: string
}

export type TechCategory = {
  title: string
  description: string
  items: TechItem[]
}

export type TechStackData = {
  title: string
  summary: string
  backHomeLabel: string
  categories: TechCategory[]
}

export const techStackData: TechStackData = {
  title: 'Tech Stack',
  summary: 'Tools and technologies I use to design, ship, and scale products.',
  backHomeLabel: 'Back home',
  categories: [
    {
      title: 'Frontend',
      description: 'UI architecture, styling systems, and fast iteration loops.',
      items: [
        {
          name: 'TypeScript',
          summary: 'Typed JavaScript for reliable refactors and safer APIs.',
          iconPath:
            'M6 6h20v20H6z M11 14h10v2h-4v8h-2v-8h-4z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Tailwind CSS',
          summary: 'Utility-first styling with fast composition and consistency.',
          iconPath:
            'M6 14c2-4 4-6 8-6 6 0 6 6 9 6 2 0 4-1 5-4-2 4-4 6-8 6-6 0-6-6-9-6-2 0-4 1-5 4zm0 8c2-4 4-6 8-6 6 0 6 6 9 6 2 0 4-1 5-4-2 4-4 6-8 6-6 0-6-6-9-6-2 0-4 1-5 4z',
          iconAccentClass: 'text-cyan-300',
        },
      ],
    },
    {
      title: 'Build and Tooling',
      description: 'Developer experience, bundling performance, and deployment prep.',
      items: [
        {
          name: 'Vite',
          summary: 'Lightning-fast dev server and modern build pipeline.',
          iconPath:
            'M16 5l8 3-2 11-6 7-6-7-2-11 8-3zm0 5l-4 2 1 6 3 4 3-4 1-6-4-2z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'pnpm',
          summary: 'Disk-efficient package management with deterministic installs.',
          iconPath:
            'M6 6h6v6H6z M13 6h6v6h-6z M20 6h6v6h-6z M6 13h6v6H6z M13 13h6v6h-6z M20 13h6v6h-6z M13 20h6v6h-6z',
          iconAccentClass: 'text-amber-300',
        },
      ],
    },
    {
      title: 'Quality',
      description: 'Formatting, linting, and maintainability guardrails.',
      items: [
        {
          name: 'ESLint',
          summary: 'Static checks to catch bugs and enforce coding standards.',
          iconPath:
            'M16 4l9 5v10l-9 5-9-5V9l9-5zm0 4l-5 3v6l5 3 5-3v-6l-5-3z',
          iconAccentClass: 'text-indigo-300',
        },
        {
          name: 'Prettier',
          summary: 'Consistent formatting that keeps diffs focused and readable.',
          iconPath:
            'M8 7h16v3H8z M8 12h12v3H8z M8 17h16v3H8z M8 22h10v3H8z',
          iconAccentClass: 'text-rose-300',
        },
      ],
    },
  ],
}