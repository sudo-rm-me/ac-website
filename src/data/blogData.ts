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
  backHomeLabel: 'About Me',
}

export const blogData: BlogPost[] = [
  {
    slug: 'introducing-1nplace-encrypt',
    title: 'Introducing 1nPlace Encrypt',
    excerpt:
      'A local-first AES-256 workspace for passwords, notes, sheets, and files - no cloud account, no sync server.',
    publishedOn: '2026-09-01',
    tags: ['1nPlace', 'Security', 'Desktop', 'Tauri'],
    content: [
      '1nPlace Encrypt is my take on private productivity: one vault on your machine for logins, notes, journals, tasks, spreadsheets, contacts, bookmarks, files, and voice memos.',
      'Everything is encrypted with AES-256-GCM. The master passphrase never leaves the device, and key material is wiped from memory when you lock. There is no cloud account and no sync server by design.',
      'Passwords sit next to TOTP codes, with a strong generator and CSV import from common browsers and password managers. Notes support rich text and code snippets. Sheets handle real formulas. Files stay encrypted at rest.',
      'I built it as a Windows desktop app on Tauri so the UI can stay fast while the sensitive work stays local. Encrypted .e1p packages cover backup and sharing without pretending the vault lives in someone else’s datacenter.',
      'If you want private tools that do not require trusting a sync backend, this is the product I wanted for myself - and shipped so others can use it too.',
    ],
  },
  {
    slug: 'introducing-1nplace-cmdb',
    title: 'Introducing 1nPlace CMDB',
    excerpt:
      'An IT/infra configuration management database for inventory, relationships, impact, discovery, and reporting.',
    publishedOn: '2026-08-01',
    tags: ['1nPlace', 'CMDB', 'DevOps', 'Infrastructure'],
    content: [
      '1nPlace CMDB is a configuration management database aimed at MSPs and mid-size IT teams - inventory you can actually keep honest, without pretending to be a full ITSM suite.',
      'Configuration items get stable CI IDs, lifecycle, ownership, health, tags, and custom attributes. Miller-column browsers make assets, categories, relationships, and services feel navigable instead of buried in endless tables.',
      'Relationships are first-class: runs_on, managed_by, member_of, and more feed impact analysis and service maps. When something changes, you can see what else is in the blast radius.',
      'Discovery adapters and CSV import bring data in; reconciliation and webhooks keep it moving. A report builder covers saved views and scheduled delivery when stakeholders need a regular pulse.',
      'It runs as a web app and a Tauri desktop client, with local SQLite for getting started or Postgres when you need a shared backend. Auth covers the usual ops reality: roles, OIDC, and audit trails.',
      'If your inventory lives in spreadsheets and tribal knowledge, CMDB is the system I wish teams had on day one.',
    ],
  },
  {
    slug: 'my-journey',
    title: 'How I Became a Software Engineer',
    excerpt: 'Leaving sales for engineering - curiosity, a bootcamp, and finding work that actually fits.',
    publishedOn: '2026-07-01',
    tags: ['Career', 'Engineering'],
    content: [
      'For about a decade I worked in sales and marketing, mostly around tech. I liked the products more than the pitch.',
      'Curiosity won. I enrolled in a software engineering bootcamp, learned the fundamentals, and started building things that had to work under real constraints - not just look good in a deck.',
      'I have been engineering for roughly two years now across side projects and larger delivery work. The learning curve never really flattens, which is part of the appeal.',
      'What I enjoy most is the mix of creativity and logic: clear systems, reliable outcomes, and the satisfaction of shipping something people can depend on.',
      'Finding work you both enjoy and are good at is rare. Getting paid to keep getting better at it is better.',
    ],
  },
  {
    slug: 'loud-integrations',
    title: 'Integrations Should Fail Loudly',
    excerpt: 'Silent webhook failures are not resilience - they are delayed incidents.',
    publishedOn: '2026-06-01',
    tags: ['APIs', 'Observability', 'Reliability'],
    content: [
      'Third-party integrations fail. Timeouts happen. Payloads arrive weird. That is normal.',
      'What should not be normal is finding out three days later because a customer noticed first.',
      'I prefer loud failures: validation at the edge, structured logs, idempotent handlers, and alerts on sustained error rates.',
      'Retries help, but only with clear limits. Infinite hope is not a strategy - it is a way to amplify a bad dependency.',
      'Document ownership next to the technical controls. When something pages, the first question should not be “whose problem is this?”',
      'Make the unhappy path as designed as the happy path. Future you will thank present you.',
    ],
  },
  {
    slug: 'boring-pipelines-on-purpose',
    title: 'Make the Pipeline Boring On Purpose',
    excerpt: 'The best delivery path is the one nobody has to invent again at 11pm.',
    publishedOn: '2026-05-01',
    tags: ['DevOps', 'CI/CD', 'Reliability'],
    content: [
      'Exciting release processes are usually a warning sign. If every deploy needs a hero, the system is asking for help.',
      'I aim for boring pipelines: build, test, promote, observe. Same steps in every environment. Same failure messages. Same rollback story.',
      'Boring does not mean rigid. It means the team can change the product without reinventing how software reaches production.',
      'Start with the path you already have. Write down the real steps, including the awkward ones. Then remove decisions that only live in one person’s head.',
      'Add gates where risk is real - not where ceremony feels productive. A flaky check that everyone ignores is worse than no check at all.',
      'When the pipeline is boring, incidents get quieter too. People already know where to look, what “good” looks like, and how to undo a bad change.',
    ],
  },
  {
    slug: 'building-this-site',
    title: 'Why I Built This Site (And How I Put It Together)',
    excerpt: 'A hand-built Tailwind + TypeScript personal site made to look good and show what I can do.',
    publishedOn: '2026-04-01',
    tags: ['TypeScript', 'Tailwind CSS', 'Vite', 'Architecture'],
    content: [
      'This site was created to showcase my skills and because I enjoy making things.',
      'It was built by hand in Tailwind CSS, TypeScript, and Vite - no framework tax, just clear modules and data-driven pages.',
      'It was not made to shake the world apart with incredible innovation.',
      'It was made to look intentional and give you a small insight into how I build and design.',
      'It is simple, fun, and effective.',
      'I hope you like it.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug)
}
