type PetMood = 'idle' | 'ping' | 'happy' | 'sleepy'

const STORAGE_KEY = 'ac-latency-pet'
const MAX_HEALTH = 100
const MIN_HEALTH = 12

type PetState = {
  health: number
  hops: number
}

let root: HTMLButtonElement | null = null
let health = 40
let hops = 0
let moodTimer = 0

function loadState(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return
    }
    const parsed = JSON.parse(raw) as PetState
    if (typeof parsed.health === 'number') {
      health = Math.min(MAX_HEALTH, Math.max(MIN_HEALTH, parsed.health))
    }
    if (typeof parsed.hops === 'number') {
      hops = parsed.hops
    }
  } catch {
    // ignore bad storage
  }
}

function saveState(): void {
  const payload: PetState = { health, hops }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

function setMood(mood: PetMood): void {
  if (!root) {
    return
  }
  root.dataset.mood = mood
  window.clearTimeout(moodTimer)
  if (mood === 'ping' || mood === 'happy') {
    moodTimer = window.setTimeout(() => {
      if (root) {
        root.dataset.mood = health < 28 ? 'sleepy' : 'idle'
      }
    }, 900)
  }
}

function syncUi(): void {
  if (!root) {
    return
  }

  const bar = root.querySelector<HTMLElement>('[data-pet-bar]')
  const label = root.querySelector<HTMLElement>('[data-pet-label]')
  const ms = root.querySelector<HTMLElement>('[data-pet-ms]')

  if (bar) {
    bar.style.width = `${health}%`
  }

  const latencyMs = Math.round(220 - health * 1.6)
  if (ms) {
    ms.textContent = `${Math.max(12, latencyMs)}ms`
  }

  if (label) {
    if (health >= 80) {
      label.textContent = 'synced'
    } else if (health >= 50) {
      label.textContent = 'warm'
    } else if (health >= 28) {
      label.textContent = 'jittery'
    } else {
      label.textContent = 'sleepy'
    }
  }

  if (root.dataset.mood !== 'ping' && root.dataset.mood !== 'happy') {
    root.dataset.mood = health < 28 ? 'sleepy' : 'idle'
  }
  root.style.setProperty('--pet-health', `${health / 100}`)
}

export function pingLatencyPet(reason: 'nav' | 'manual' | 'work' = 'nav'): void {
  if (!root) {
    ensureLatencyPet()
  }

  const boost = reason === 'work' ? 14 : reason === 'manual' ? 10 : 8
  health = Math.min(MAX_HEALTH, health + boost)
  hops += 1
  saveState()
  setMood(reason === 'work' ? 'happy' : 'ping')
  syncUi()
}

export function ensureLatencyPet(): void {
  if (root) {
    syncUi()
    return
  }

  loadState()

  root = document.createElement('button')
  root.type = 'button'
  root.className = 'latency-pet'
  root.dataset.latencyPet = ''
  root.dataset.mood = health < 28 ? 'sleepy' : 'idle'
  root.setAttribute('aria-label', 'Latency pet - click to open terminal')
  root.title = 'Latency pet · click for terminal · press ` to open shell'
  root.innerHTML = `
    <span class="latency-pet-orb" aria-hidden="true">
      <span class="latency-pet-eye"></span>
      <span class="latency-pet-eye"></span>
      <span class="latency-pet-pulse"></span>
    </span>
    <span class="latency-pet-meta">
      <span class="latency-pet-name">ping</span>
      <span class="latency-pet-row">
        <span data-pet-label>warm</span>
        <span data-pet-ms>156ms</span>
      </span>
      <span class="latency-pet-track" aria-hidden="true"><span class="latency-pet-bar" data-pet-bar></span></span>
    </span>
  `

  root.addEventListener('click', () => {
    pingLatencyPet('manual')
    window.dispatchEvent(new CustomEvent('ac:open-terminal'))
  })

  document.body.appendChild(root)
  syncUi()

  window.setInterval(() => {
    health = Math.max(MIN_HEALTH, health - 3)
    saveState()
    if (root && root.dataset.mood !== 'ping' && root.dataset.mood !== 'happy') {
      root.dataset.mood = health < 28 ? 'sleepy' : 'idle'
    }
    syncUi()
  }, 45000)
}

export function getLatencyPetStats(): { health: number; hops: number; latencyMs: number } {
  const latencyMs = Math.max(12, Math.round(220 - health * 1.6))
  return { health, hops, latencyMs }
}

export function initLatencyPet(): void {
  ensureLatencyPet()
}

export function notifyPetOfRoute(routeName: string): void {
  if (routeName === 'work' || routeName === 'work-case' || routeName === 'tech-stack') {
    pingLatencyPet('work')
    return
  }
  pingLatencyPet('nav')
}
