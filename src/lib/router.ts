import { appPath, stripBasePath } from './paths'

export type Route =
  | { name: 'home' }
  | { name: 'about-me' }
  | { name: 'cmdb' }
  | { name: 'encrypt' }
  | { name: 'work' }
  | { name: 'work-case'; slug: string }
  | { name: 'service-offerings' }
  | { name: 'tech-stack' }
  | { name: 'blogs' }
  | { name: 'blog-post'; slug: string }
  | { name: 'contact' }
  | { name: 'not-found' }

export function getRoute(pathname = window.location.pathname): Route {
  const relative = stripBasePath(pathname)
  const segments = relative.replace(/^\//, '').split('/').filter(Boolean)

  if (segments.length === 0) {
    return { name: 'home' }
  }

  const [first, second] = segments

  if (first === 'blogs') {
    if (!second) {
      return { name: 'blogs' }
    }
    return { name: 'blog-post', slug: second }
  }

  if (first === 'work') {
    if (!second) {
      return { name: 'work' }
    }
    return { name: 'work-case', slug: second }
  }

  switch (first) {
    case 'about-me':
      return { name: 'about-me' }
    case 'cmdb':
      return { name: 'cmdb' }
    case 'encrypt':
      return { name: 'encrypt' }
    case 'service-offerings':
      return { name: 'service-offerings' }
    case 'tech-stack':
      return { name: 'tech-stack' }
    case 'contact':
      return { name: 'contact' }
    default:
      return { name: 'not-found' }
  }
}

export function migrateLegacyHashRoute(): void {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) {
    return
  }

  const target = appPath(`/${raw}`)
  window.history.replaceState({}, '', `${target}${window.location.search}`)
}

function isSpaNavigationTarget(url: URL): boolean {
  if (url.origin !== window.location.origin) {
    return false
  }

  if (/\.\w+$/.test(url.pathname)) {
    return false
  }

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (!basePath) {
    return true
  }

  return url.pathname === basePath || url.pathname.startsWith(`${basePath}/`)
}

export function onRouteChange(handler: () => void): void {
  window.addEventListener('popstate', handler)

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }

    const anchor = target.closest('a')
    if (!(anchor instanceof HTMLAnchorElement)) {
      return
    }

    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }

    if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
      return
    }

    const hrefAttr = anchor.getAttribute('href')
    if (!hrefAttr || hrefAttr.startsWith('#') || hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) {
      return
    }

    const url = new URL(anchor.href, window.location.href)
    if (!isSpaNavigationTarget(url)) {
      return
    }

    event.preventDefault()
    const next = `${url.pathname}${url.search}${url.hash}`
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
    if (next !== current) {
      window.history.pushState({}, '', next)
    }
    handler()
  })
}
