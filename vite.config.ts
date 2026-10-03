import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const rootDir = dirname(fileURLToPath(import.meta.url))
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const repoOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? process.env.GITHUB_REPOSITORY_OWNER ?? ''
const base = isGitHubActions && repoName ? `/${repoName}/` : '/'

type BlogPostLite = {
  slug: string
  title: string
  excerpt: string
  publishedOn: string
}

type CaseStudyLite = {
  slug: string
}

const STATIC_PATHS = [
  '/',
  '/about-me',
  '/cmdb',
  '/encrypt',
  '/work',
  '/service-offerings',
  '/tech-stack',
  '/blogs',
  '/contact',
] as const

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function resolveSiteUrl(): string {
  if (process.env.VITE_SITE_URL) {
    return process.env.VITE_SITE_URL.replace(/\/$/, '')
  }

  if (isGitHubActions && repoOwner && repoName) {
    return `https://${repoOwner}.github.io/${repoName}`
  }

  return 'http://localhost:9999'
}

function buildRssXml(siteUrl: string, posts: BlogPostLite[]): string {
  const channelLink = siteUrl.replace(/\/$/, '')
  const items = posts
    .map((post) => {
      const link = `${channelLink}/blogs/${post.slug}`
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${new Date(post.publishedOn).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Alex - Blog</title>
    <link>${escapeXml(channelLink)}/blogs</link>
    <description>Notes on building, operating, and improving software systems.</description>
    <language>en-gb</language>${items}
  </channel>
</rss>
`
}

function buildSitemapXml(siteUrl: string, posts: BlogPostLite[], studies: CaseStudyLite[]): string {
  const origin = siteUrl.replace(/\/$/, '')
  const paths = [
    ...STATIC_PATHS,
    ...posts.map((post) => `/blogs/${post.slug}`),
    ...studies.map((study) => `/work/${study.slug}`),
  ]

  const urls = paths
    .map(
      (path) => `
  <url>
    <loc>${escapeXml(`${origin}${path === '/' ? '/' : path}`)}</loc>
  </url>`,
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`
}

function buildRobotsTxt(siteUrl: string): string {
  const origin = siteUrl.replace(/\/$/, '')
  return `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`
}

async function loadContent(): Promise<{ posts: BlogPostLite[]; studies: CaseStudyLite[] }> {
  const blogModule = (await import('./src/data/blogData.ts')) as { blogData: BlogPostLite[] }
  const workModule = (await import('./src/data/workData.ts')) as { caseStudies: CaseStudyLite[] }
  return { posts: blogModule.blogData, studies: workModule.caseStudies }
}

function writeTextFile(filePath: string, contents: string): void {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, contents, 'utf8')
}

function spaPagesPlugin(): Plugin {
  return {
    name: 'spa-pages-and-feeds',
    async buildStart() {
      const siteUrl = resolveSiteUrl()
      const { posts, studies } = await loadContent()
      writeTextFile(resolve(rootDir, 'public/rss.xml'), buildRssXml(siteUrl, posts))
      writeTextFile(resolve(rootDir, 'public/sitemap.xml'), buildSitemapXml(siteUrl, posts, studies))
      writeTextFile(resolve(rootDir, 'public/robots.txt'), buildRobotsTxt(siteUrl))
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split('?')[0] ?? ''
        try {
          const siteUrl = resolveSiteUrl()
          if (path === '/rss.xml') {
            const module = (await server.ssrLoadModule('/src/data/blogData.ts')) as {
              blogData: BlogPostLite[]
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
            res.end(buildRssXml(siteUrl, module.blogData))
            return
          }
          if (path === '/sitemap.xml') {
            const { posts, studies } = await loadContent()
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            res.end(buildSitemapXml(siteUrl, posts, studies))
            return
          }
          if (path === '/robots.txt') {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(buildRobotsTxt(siteUrl))
            return
          }
        } catch (error) {
          next(error)
          return
        }
        next()
      })
    },
    async closeBundle() {
      const dist = resolve(rootDir, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      const siteUrl = resolveSiteUrl()
      const { posts, studies } = await loadContent()
      writeTextFile(resolve(dist, 'rss.xml'), buildRssXml(siteUrl, posts))
      writeTextFile(resolve(dist, 'sitemap.xml'), buildSitemapXml(siteUrl, posts, studies))
      writeTextFile(resolve(dist, 'robots.txt'), buildRobotsTxt(siteUrl))
    },
  }
}

export default defineConfig({
  base,
  plugins: [tailwindcss(), spaPagesPlugin()],
  server: {
    port: 9999,
  },
})
