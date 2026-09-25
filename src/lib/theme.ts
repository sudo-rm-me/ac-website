export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'ac-theme'
const WIPE_MS = 780
const SWAP_AT_MS = 360

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function getTheme(): Theme {
  const current = document.documentElement.dataset.theme
  return current === 'light' ? 'light' : 'dark'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  localStorage.setItem(STORAGE_KEY, theme)
  syncToggleUi()
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function syncToggleUi(): void {
  const theme = getTheme()
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
  if (!button) {
    return
  }

  const next = theme === 'dark' ? 'light' : 'dark'
  button.setAttribute('aria-label', `Switch to ${next} mode`)
  button.dataset.themeState = theme
}

let wipeInFlight = false

export async function toggleThemeWithWipe(): Promise<void> {
  if (wipeInFlight) {
    return
  }

  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark'

  if (prefersReducedMotion()) {
    applyTheme(next)
    return
  }

  wipeInFlight = true
  const wipe = document.createElement('div')
  wipe.className = 'theme-wipe'
  wipe.dataset.wipeTo = next
  wipe.setAttribute('aria-hidden', 'true')
  document.body.appendChild(wipe)
  void wipe.offsetWidth
  wipe.classList.add('theme-wipe-active')

  await wait(SWAP_AT_MS)
  applyTheme(next)
  await wait(WIPE_MS - SWAP_AT_MS)
  wipe.remove()
  wipeInFlight = false
}

export function ensureThemeToggle(): void {
  if (document.querySelector('[data-theme-toggle]')) {
    syncToggleUi()
    return
  }

  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'theme-toggle'
  button.dataset.themeToggle = ''
  button.innerHTML = `
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-thumb"></span>
      <svg class="theme-toggle-icon theme-toggle-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
      </svg>
      <svg class="theme-toggle-icon theme-toggle-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"></path>
      </svg>
    </span>
  `
  button.addEventListener('click', () => {
    void toggleThemeWithWipe()
  })
  document.body.appendChild(button)
  syncToggleUi()
}

export function initTheme(): void {
  applyTheme(getStoredTheme())
  ensureThemeToggle()
}
