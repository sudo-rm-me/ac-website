export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedOn: string
  tags: string[]
  content: string[]
}

export type BlogsPageText = {
  title: string
  summary: string
  backHomeLabel: string
}

export const blogsText: BlogsPageText = {
  title: 'Blogs',
  summary: 'Short notes from building and operating software.',
  backHomeLabel: 'Back home',
}

export const blogData: BlogPost[] = [
  {
    slug: 'building-this-site',
    title: 'Why I Built This Site (And How I Put It Together)',
    excerpt: 'A hand-built Tailwind + TypeScript personal site made to look good and show what I can do.',
    publishedOn: '2026-08-28',
    tags: ['TypeScript', 'Tailwind CSS', 'Vite', 'Architecture'],
    content: [
      'This site was created to showcase my skills and because I enjoy making things.',
      'It was built by hand in Tailwind CSS, TypeScript, and Vite — no framework tax, just clear modules and data-driven pages.',
      'It was not made to shake the world apart with incredible innovation.',
      'It was made to look intentional and give you a small insight into how I build and design.',
      'It is simple, fun, and effective.',
      'I hope you like it.',
    ],
  },
  {
    slug: 'boring-pipelines-on-purpose',
    title: 'Make the Pipeline Boring On Purpose',
    excerpt: 'The best delivery path is the one nobody has to invent again at 11pm.',
    publishedOn: '2026-09-12',
    tags: ['DevOps', 'CI/CD', 'Reliability'],
    content: [
      'Exciting release processes are usually a warning sign. If every deploy needs a hero, the system is asking for help.',
      'I aim for boring pipelines: build, test, promote, observe. Same steps in every environment. Same failure messages. Same rollback story.',
      'Boring does not mean rigid. It means the team can change the product without reinventing how software reaches production.',
      'Start with the path you already have. Write down the real steps, including the awkward ones. Then remove decisions that only live in one person’s head.',
      'Add gates where risk is real — not where ceremony feels productive. A flaky check that everyone ignores is worse than no check at all.',
      'When the pipeline is boring, incidents get quieter too. People already know where to look, what “good” looks like, and how to undo a bad change.',
    ],
  },
  {
    slug: 'loud-integrations',
    title: 'Integrations Should Fail Loudly',
    excerpt: 'Silent webhook failures are not resilience — they are delayed incidents.',
    publishedOn: '2026-09-20',
    tags: ['APIs', 'Observability', 'Reliability'],
    content: [
      'Third-party integrations fail. Timeouts happen. Payloads arrive weird. That is normal.',
      'What should not be normal is finding out three days later because a customer noticed first.',
      'I prefer loud failures: validation at the edge, structured logs, idempotent handlers, and alerts on sustained error rates.',
      'Retries help, but only with clear limits. Infinite hope is not a strategy — it is a way to amplify a bad dependency.',
      'Document ownership next to the technical controls. When something pages, the first question should not be “whose problem is this?”',
      'Make the unhappy path as designed as the happy path. Future you will thank present you.',
    ],
  },
  {
    slug: 'my-journey',
    title: 'How I Became a Software Engineer',
    excerpt: 'Leaving sales for engineering — curiosity, a bootcamp, and finding work that actually fits.',
    publishedOn: '2026-09-25',
    tags: ['Career', 'Engineering'],
    content: [
      'For about a decade I worked in sales and marketing, mostly around tech. I liked the products more than the pitch.',
      'Curiosity won. I enrolled in a software engineering bootcamp, learned the fundamentals, and started building things that had to work under real constraints — not just look good in a deck.',
      'I have been engineering for roughly two years now across side projects and larger delivery work. The learning curve never really flattens, which is part of the appeal.',
      'What I enjoy most is the mix of creativity and logic: clear systems, reliable outcomes, and the satisfaction of shipping something people can depend on.',
      'Finding work you both enjoy and are good at is rare. Getting paid to keep getting better at it is better.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug)
}
