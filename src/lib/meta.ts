import { siteConfig } from '../data/siteConfig'
import type { Route } from './router'
import { appPath, stripBasePath } from './paths'
import { getBlogPostBySlug } from '../data/blogData'
import { getCaseStudyBySlug } from '../data/workData'

type MetaInput = {
  title: string
  description: string
  path: string
  robots?: string
}

function upsertMeta(selector: string, attrs: Record<string, string>): void {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => {
    el!.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function resolveMeta(route: Route): MetaInput {
  switch (route.name) {
    case 'about-me':
      return {
        title: `About Me | ${siteConfig.name}`,
        description:
          'DevOps and IT Operations engineer who also ships web apps — automation, reliability, and clear delivery.',
        path: '/about-me',
      }
    case 'work':
      return {
        title: `Work | ${siteConfig.name}`,
        description: 'Selected case studies across DevOps, platforms, APIs, and web delivery.',
        path: '/work',
      }
    case 'work-case': {
      const study = getCaseStudyBySlug(route.slug)
      if (!study) {
        return {
          title: `Not found | ${siteConfig.name}`,
          description: 'That case study does not exist or was moved.',
          path: `/work/${route.slug}`,
          robots: 'noindex,follow',
        }
      }
      return {
        title: `${study.title} | Work`,
        description: study.summary,
        path: `/work/${route.slug}`,
      }
    }
    case 'service-offerings':
      return {
        title: `Services | ${siteConfig.name}`,
        description: 'Web apps, DevOps, APIs, tooling, performance, and technical consulting — tailored to your goals.',
        path: '/service-offerings',
      }
    case 'tech-stack':
      return {
        title: `Tech Stack | ${siteConfig.name}`,
        description: 'Languages, cloud, observability, and tooling I use to ship and operate software.',
        path: '/tech-stack',
      }
    case 'blogs':
      return {
        title: `Blog | ${siteConfig.name}`,
        description: 'Notes on building, operating, and improving software systems.',
        path: '/blogs',
      }
    case 'blog-post': {
      const post = getBlogPostBySlug(route.slug)
      if (!post) {
        return {
          title: `Not found | ${siteConfig.name}`,
          description: 'That blog entry does not exist or was moved.',
          path: `/blogs/${route.slug}`,
          robots: 'noindex,follow',
        }
      }
      return {
        title: `${post.title} | Blog`,
        description: post.excerpt,
        path: `/blogs/${route.slug}`,
      }
    }
    case 'contact':
      return {
        title: `Contact | ${siteConfig.name}`,
        description: `Get in touch with ${siteConfig.name} about a project, engagement, or question.`,
        path: '/contact',
      }
    case 'not-found':
      return {
        title: `Not found | ${siteConfig.name}`,
        description: siteConfig.descriptionDefault,
        path: stripBasePath(window.location.pathname),
        robots: 'noindex,follow',
      }
    default:
      return {
        title: siteConfig.titleDefault,
        description: siteConfig.descriptionDefault,
        path: '/',
      }
  }
}

export function applyRouteMeta(route: Route): void {
  const meta = resolveMeta(route)
  const path = meta.path.startsWith('/') ? meta.path : `/${meta.path}`
  const url = `${siteConfig.siteUrl}${appPath(path)}`.replace(/([^:]\/)\/+/g, '$1')
  const image = `${siteConfig.siteUrl}${appPath('/og-share.png')}`.replace(/([^:]\/)\/+/g, '$1')

  document.title = meta.title

  upsertMeta('meta[name="description"]', { name: 'description', content: meta.description })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: meta.robots ?? 'index,follow' })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: siteConfig.locale })
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  upsertLink('canonical', url)
}
