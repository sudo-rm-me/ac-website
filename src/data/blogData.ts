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

export const blogsText: ListPageText = {
  title: 'Blogs',
  summary: 'Boring insights into nothing interesting.',
  items: [
    'Post idea: Building this site with TypeScript + Tailwind.',
    'Post idea: Project lessons learned and architecture notes.',
  ],
  backHomeLabel: 'Back home',
}

export const blogData: BlogPost[] = [
  {
    slug: 'building-this-site',
    title: 'Why I Built This Site (And How I Put It Together)',
    excerpt: 'A hand-built Tailwind + TypeScript + Node.js personal site made to look good and show what I can do.',
    publishedOn: '2026-08-28',
    readTime: '5 min read',
    tags: ['TypeScript', 'Tailwind CSS', 'Node.js', 'Vite', 'Architecture'],
    content: [
      'This site was created to showcase my skills and I just love making things.',
      'It was built by hand in Tailwind CSS, TypeScript, and Node.js.',
      'It was not made to shake the world apart with incredible innovation.',
      'It was made to look pretty and give you a small insight into my dev and design skills.',
      'It is simple, fun, and effective.',
      'I hope you like it.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug)
}