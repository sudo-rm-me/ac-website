import './style.css'
import { FeatureGrid } from './components/featureGrid'
import { HeroSection } from './components/heroSection'
import { AboutMePage } from './pages/about-me/aboutMePage'
import { BlogPostPage, BlogsPage } from './pages/blogs/blogsPage'
import { NotFoundPage } from './pages/not-found/notFoundPage'
import { initServiceOfferingsInteractions, ServiceOfferingsPage } from './pages/service-offerings/serviceOfferingsPage'
import { initTechStackTabs, TechStackPage } from './pages/tech-stack/techStackPage'

type Route =
  | { name: 'home' }
  | { name: 'about-me' }
  | { name: 'service-offerings' }
  | { name: 'tech-stack' }
  | { name: 'blogs' }
  | { name: 'blog-post'; slug: string }
  | { name: 'not-found' }

function getRoute(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash.length === 0) {
    return { name: 'home' }
  }

  if (hash.startsWith('blogs/')) {
    const slug = hash.slice('blogs/'.length)
    if (slug.length > 0) {
      return { name: 'blog-post', slug }
    }
    return { name: 'not-found' }
  }

  switch (hash) {
    case 'about-me':
      return { name: 'about-me' }
    case 'service-offerings':
      return { name: 'service-offerings' }
    case 'tech-stack':
      return { name: 'tech-stack' }
    case 'blogs':
      return { name: 'blogs' }
    default:
      return { name: 'not-found' }
  }
}

function renderRoute(route: Route): string {
  switch (route.name) {
    case 'about-me':
      return AboutMePage()
    case 'service-offerings':
      return ServiceOfferingsPage()
    case 'tech-stack':
      return TechStackPage()
    case 'blogs':
      return BlogsPage()
    case 'blog-post':
      return BlogPostPage(route.slug)
    case 'not-found':
      return NotFoundPage()
    default:
      return `<div class="home-stack">${HeroSection()}${FeatureGrid()}</div>`
  }
}

function App(route: Route): string {
  return `
  <main class="relative isolate min-h-screen overflow-hidden bg-stone-950 text-stone-100">
    <div class="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"></div>
    <div class="pointer-events-none absolute left-[22%] top-[52%] h-72 w-72 rounded-full bg-sky-400/18 blur-3xl"></div>
    <div class="pointer-events-none absolute right-[18%] top-[18%] h-72 w-72 rounded-full bg-emerald-400/14 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-500/18 blur-3xl"></div>

    <section class="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
      ${renderRoute(route)}
    </section>
  </main>
  `
}

const appElement = document.querySelector<HTMLDivElement>('#app')

function render(): void {
  if (!appElement) {
    return
  }

  const route = getRoute()
  appElement.innerHTML = App(route)

  if (route.name === 'tech-stack') {
    initTechStackTabs()
  }

  if (route.name === 'service-offerings') {
    initServiceOfferingsInteractions()
  }
}

window.addEventListener('hashchange', render)
render()
