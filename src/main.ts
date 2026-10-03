import './style.css'
import { HomePage } from './components/homePage'
import { AboutMePage } from './pages/about-me/aboutMePage'
import { BlogPostPage, BlogsPage } from './pages/blogs/blogsPage'
import { ContactPage } from './pages/contact/contactPage'
import { NotFoundPage } from './pages/not-found/notFoundPage'
import { CmdbPage, EncryptPage } from './pages/products/productPage'
import { initServiceOfferingsInteractions, ServiceOfferingsPage } from './pages/service-offerings/serviceOfferingsPage'
import { initTechStackTabs, TechStackPage } from './pages/tech-stack/techStackPage'
import { initWorkFilters, WorkCasePage, WorkPage } from './pages/work/workPage'
import { initContactForm, prefillContactService } from './lib/contactForm'
import { applyRouteMeta } from './lib/meta'
import { getRoute, migrateLegacyHashRoute, onRouteChange, type Route } from './lib/router'
import { initTheme } from './lib/theme'
import { initTerminal } from './lib/terminal'
import { initLatencyPet, notifyPetOfRoute } from './lib/latencyPet'

function renderRoute(route: Route): string {
  switch (route.name) {
    case 'about-me':
      return AboutMePage()
    case 'cmdb':
      return CmdbPage()
    case 'encrypt':
      return EncryptPage()
    case 'work':
      return WorkPage()
    case 'work-case':
      return WorkCasePage(route.slug)
    case 'service-offerings':
      return ServiceOfferingsPage()
    case 'tech-stack':
      return TechStackPage()
    case 'blogs':
      return BlogsPage()
    case 'blog-post':
      return BlogPostPage(route.slug)
    case 'contact':
      return ContactPage()
    case 'not-found':
      return NotFoundPage()
    default:
      return HomePage()
  }
}

function App(route: Route): string {
  const scrollStack =
    route.name === 'home' || route.name === 'about-me' || route.name === 'cmdb' || route.name === 'encrypt'
  const sectionAlign = scrollStack ? 'justify-start' : 'justify-center'

  return `
  <main class="app-shell relative isolate min-h-screen overflow-hidden">
    <div class="app-orb app-orb-rose pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="app-orb app-orb-emerald pointer-events-none absolute left-[22%] top-[52%] h-72 w-72 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="app-orb app-orb-sky pointer-events-none absolute right-[18%] top-[18%] h-72 w-72 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="app-orb app-orb-violet pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl" aria-hidden="true"></div>

    <section class="mx-auto flex min-h-screen w-full max-w-6xl flex-col ${sectionAlign} px-6 py-16">
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
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  applyRouteMeta(route)
  notifyPetOfRoute(route.name)

  if (route.name === 'tech-stack') {
    initTechStackTabs()
  }

  if (route.name === 'service-offerings') {
    initServiceOfferingsInteractions()
  }

  if (route.name === 'work') {
    initWorkFilters()
  }

  if (route.name === 'contact') {
    prefillContactService()
    initContactForm()
  }
}

migrateLegacyHashRoute()
initTheme()
initLatencyPet()
initTerminal()
onRouteChange(render)
render()
