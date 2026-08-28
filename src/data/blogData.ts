import type { ListPageText } from './textData'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedOn: string
  readTime: string
  tags: string[]
  content: string[]
}

export const blogData: BlogPost[] = [
  {
    slug: 'building-this-site',
    title: 'Building This Site With Vite + TypeScript',
    excerpt: 'How I set up a fast personal site with a clean structure and maintainable copy.',
    publishedOn: '2026-08-28',
    readTime: '4 min read',
    tags: ['TypeScript', 'Vite', 'Architecture'],
    content: [
      'I started by scaffolding a lightweight TypeScript site so iteration would stay fast.',
      'From there, I separated UI sections into components and moved copy into data files for easier editing.',
      'The result is a small, maintainable codebase that is simple to scale as content grows.',
    ],
  },
  {
    slug: 'tailwind-v4-notes',
    title: 'Tailwind v4 Setup Notes',
    excerpt: 'A practical walkthrough of wiring Tailwind CSS v4 into a Vite project.',
    publishedOn: '2026-08-27',
    readTime: '3 min read',
    tags: ['Tailwind CSS', 'Styling'],
    content: [
      'Using the official Vite plugin keeps setup straightforward and build performance solid.',
      'I leaned on utility classes for layout and typography while keeping custom CSS focused on animation details.',
      'This balance gives speed during development without losing design control.',
    ],
  },
  {
    slug: 'content-first-frontend',
    title: 'Content-First Frontend Structure',
    excerpt: 'Why centralizing text content can make personal sites easier to maintain over time.',
    publishedOn: '2026-08-25',
    readTime: '5 min read',
    tags: ['Frontend', 'Maintainability'],
    content: [
      'When copy lives near configuration data, updating pages stops requiring template rewrites.',
      'It also makes localization or A/B copy experiments much easier later.',
      'For small sites, this pattern gives most of the value of a CMS with very little overhead.',
    ],
  },
]

export const blogsText: ListPageText = {
  title: 'Blogs',
  summary: 'Publish posts, tutorials, and retrospectives here.',
  items: [
    'Post idea: Building this site with TypeScript + Tailwind.',
    'Post idea: Project lessons learned and architecture notes.',
  ],
  backHomeLabel: 'Back home',
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug)
}