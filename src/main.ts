import './style.css'
import { FeatureGrid } from './components/featureGrid'
import { HeroSection } from './components/heroSection'
import { BlogPostPage, BlogsPage } from './pages/blogs/blogsPage'
import { PersonalHistoryPage } from './pages/personal-history/personalHistoryPage'
import { TechStackPage } from './pages/tech-stack/techStackPage'

type Route =
  | { name: 'home' }
  | { name: 'personal-history' }
  | { name: 'tech-stack' }
  | { name: 'blogs' }
  | { name: 'blog-post'; slug: string }

function getRoute(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash.startsWith('blogs/')) {
    const slug = hash.slice('blogs/'.length)
    if (slug.length > 0) {
      return { name: 'blog-post', slug }
    }
  }

  switch (hash) {
    case 'personal-history':
      return { name: 'personal-history' }
    case 'tech-stack':
      return { name: 'tech-stack' }
    case 'blogs':
      return { name: 'blogs' }
    default:
      return { name: 'home' }
  }
}

function renderRoute(route: Route): string {
  switch (route.name) {
    case 'personal-history':
      return PersonalHistoryPage()
    case 'tech-stack':
      return TechStackPage()
    case 'blogs':
      return BlogsPage()
    case 'blog-post':
      return BlogPostPage(route.slug)
    default:
      return `${HeroSection()}${FeatureGrid()}`
  }
}

function App(route: Route): string {
  return `
  <main class="relative isolate min-h-screen overflow-hidden bg-stone-950 text-stone-100">
    <div class="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"></div>

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

  appElement.innerHTML = App(getRoute())
}

window.addEventListener('hashchange', render)
render()
