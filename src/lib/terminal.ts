import { appPath } from './paths'
import { getLatencyPetStats, pingLatencyPet } from './latencyPet'

type TerminalApi = {
  open: () => void
  close: () => void
  toggle: () => void
  isOpen: () => boolean
}

type LineTone = '' | 'term-muted' | 'term-error'

const MAX_INPUT_LENGTH = 120

const BOOT_TAGLINES = [
  'guest session · read-only · no script execution',
  'guest session · sudo disabled · vibes enabled',
  'guest session · yaml-free zone (mostly)',
  'guest session · latency pet is watching',
  'guest session · please do not feed the pipelines',
  'guest session · commits welcome, force-push denied',
  'guest session · coffee.exe has stopped responding',
  'guest session · production is someone else’s problem',
  'guest session · typed with love, deployed with fear',
  'guest session · rm -rf blocked by friendship',
] as const

const BOOT_LINES = ['turtle-shell v0.1 — type `help` for commands'] as const

const COMMAND_HELP = [
  'help / ?             show commands',
  'whoami / id          identity check',
  'ls                   list routes',
  'open <route>         go somewhere (work, blogs, …)',
  'ping / pet           poke or inspect the latency pet',
  'uptime / date        session clock bits',
  'neofetch             fake system flex',
  'fortune / joke       free wisdom (quality not guaranteed)',
  'commit               random commit message',
  'cowsay [text]        profound livestock commentary',
  'echo [text]          repeat yourself safely',
  'guitar / coffee      morale commands',
  'hire / status        availability vibes',
  'matrix               extremely responsible rain',
  'clear / exit         housekeeping',
] as const

const FORTUNES = [
  'The pipeline that bores you never pages you.',
  'rm -rf is not a personality. Usually.',
  'If it only works on your laptop, it does not work.',
  'Yaml is fine until it is not, which is immediately.',
  'Future you is also a stakeholder. Be kind.',
  'Observability is just empathy for machines.',
  'Ship small. Panic less.',
] as const

const JOKES = [
  'There are only two hard things: cache invalidation, naming things, and off-by-one errors.',
  'A SQL query walks into a bar, walks up to two tables and asks: may I join you?',
  'I would tell you a UDP joke, but you might not get it.',
  'Kubernetes: because your problems deserved orchestration.',
] as const

const COMMITS = [
  'fix: it worked on my machine',
  'feat: add latency pet snacks',
  'chore: remove TODO from 2019 (replaced with newer TODO)',
  'docs: pretend the README is up to date',
  'refactor: move mess into a folder called utils',
  'perf: blame the network',
  'style: confident whitespace',
] as const

const ROUTE_ALIASES = Object.freeze({
  home: '/',
  '.': '/',
  about: '/about-me',
  'about-me': '/about-me',
  cmdb: '/cmdb',
  encrypt: '/encrypt',
  '1nplace': '/encrypt',
  work: '/work',
  services: '/service-offerings',
  'service-offerings': '/service-offerings',
  tech: '/tech-stack',
  'tech-stack': '/tech-stack',
  stack: '/tech-stack',
  blogs: '/blogs',
  blog: '/blogs',
  contact: '/contact',
} as const)

const ALLOWED_PATHS = new Set<string>(Object.values(ROUTE_ALIASES))

const LS_ROUTES = Object.freeze(
  [...new Set(Object.values(ROUTE_ALIASES))].filter((path) => path !== '/').sort(),
)

const startedAt = Date.now()
let api: TerminalApi | null = null

function pick<T extends string>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)] ?? items[0]
}

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  if (minutes === 0) {
    return `${seconds}s`
  }
  return `${minutes}m ${seconds}s`
}

function stripControlChars(value: string): string {
  let output = ''
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0
    if (code < 32 || code === 127) {
      continue
    }
    output += char
  }
  return output
}

function sanitizeInput(raw: string): string | null {
  if (raw.length > MAX_INPUT_LENGTH) {
    return null
  }

  const cleaned = stripControlChars(raw).trim()
  if (!cleaned) {
    return ''
  }

  if (/[<>\\]|javascript:|data:|vbscript:/i.test(cleaned)) {
    return null
  }

  return cleaned
}

function isSafeAppPath(path: string): boolean {
  return ALLOWED_PATHS.has(path) && /^\/[a-z0-9/-]*$/.test(path)
}

function navigateAllowed(path: string): boolean {
  if (!isSafeAppPath(path)) {
    return false
  }

  const href = appPath(path)
  const url = new URL(href, window.location.origin)

  if (url.origin !== window.location.origin) {
    return false
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return false
  }

  if (url.hash || url.search) {
    return false
  }

  window.history.pushState({}, '', url.pathname)
  window.dispatchEvent(new PopStateEvent('popstate'))
  return true
}

function resolveRouteAlias(alias: string): string | undefined {
  if (!/^[a-z0-9./-]+$/i.test(alias)) {
    return undefined
  }
  const key = alias.toLowerCase() as keyof typeof ROUTE_ALIASES
  return ROUTE_ALIASES[key]
}

function writeCowsay(message: string, writeln: (line: string, tone?: LineTone) => void): void {
  const text = message.slice(0, 48) || 'moo'
  const border = '-'.repeat(text.length + 2)
  writeln(` ${border}`)
  writeln(`< ${text} >`)
  writeln(` ${border}`)
  writeln('        \\   ^__^')
  writeln('         \\  (oo)\\_______')
  writeln('            (__)\\       )\\/\\')
  writeln('                ||----w |')
  writeln('                ||     ||')
}

function runCommand(
  input: string,
  writeln: (line: string, tone?: LineTone) => void,
  clearOutput: () => void,
): void {
  const [rawCommand, ...args] = input.split(/\s+/).slice(0, 8)
  const command = rawCommand.toLowerCase()
  const rest = args.join(' ').trim()

  switch (command) {
    case 'help':
    case '?':
      COMMAND_HELP.forEach((line) => writeln(line, 'term-muted'))
      break
    case 'whoami':
    case 'id':
      writeln('alex · sudo-rm-me')
      writeln('uid=guest gid=portfolio groups=devops,web,no-sales', 'term-muted')
      break
    case 'ls':
      writeln(LS_ROUTES.join('  '))
      writeln('tip: open work', 'term-muted')
      break
    case 'open':
    case 'cd':
    case 'goto': {
      const alias = args[0] ?? ''
      const path = resolveRouteAlias(alias)
      if (!path) {
        writeln(`unknown route: ${alias || '(none)'}`, 'term-error')
        writeln('try: open work', 'term-muted')
        break
      }
      if (!navigateAllowed(path)) {
        writeln('navigation blocked', 'term-error')
        break
      }
      writeln(`navigating → ${path}`)
      pingLatencyPet('nav')
      break
    }
    case 'ping':
      writeln('pong · latency pet noticed you')
      pingLatencyPet('manual')
      break
    case 'pet':
    case 'status': {
      const stats = getLatencyPetStats()
      writeln(`latency pet · ${stats.latencyMs}ms · health ${stats.health}% · hops ${stats.hops}`)
      writeln(stats.health >= 80 ? 'mood: thriving' : stats.health >= 40 ? 'mood: caffeinated' : 'mood: needs deploys', 'term-muted')
      break
    }
    case 'uptime':
      writeln(`session uptime ${formatUptime(Date.now() - startedAt)}`)
      break
    case 'date':
      writeln(new Date().toUTCString())
      break
    case 'neofetch':
    case 'screenfetch':
      writeln('guest@ac-website')
      writeln('----------------')
      writeln('OS: PortfolioOS (browser)')
      writeln(`Host: ${window.location.host || 'localhost'}`)
      writeln(`Shell: turtle-shell 0.1`)
      writeln('Theme: dark')
      writeln(`Uptime: ${formatUptime(Date.now() - startedAt)}`)
      writeln('Packages: 0 (on purpose)')
      writeln('CPU: one tab, many intentions')
      break
    case 'fortune':
    case 'quote':
      writeln(pick(FORTUNES))
      break
    case 'joke':
      writeln(pick(JOKES))
      break
    case 'commit':
      writeln(pick(COMMITS))
      writeln('git push --force-with-lease reality', 'term-muted')
      break
    case 'cowsay':
      writeCowsay(rest || 'hire alex', writeln)
      break
    case 'echo':
      writeln(rest || '')
      break
    case 'guitar':
      writeln('♪ classical break requested')
      writeln('imaginary nylon strings: tuned · focus: restored', 'term-muted')
      break
    case 'coffee':
    case 'tea':
      writeln(command === 'tea' ? 'brewing tea…' : 'brewing coffee…')
      writeln('productivity += 1 (placebo)', 'term-muted')
      pingLatencyPet('manual')
      break
    case 'hire':
    case 'available':
      writeln('status: interested in focused engagements')
      writeln('try: open contact', 'term-muted')
      break
    case 'matrix':
      writeln('wake up, guest...')
      writeln('01001000 01101001 01110010 01100101 00100000 01000001 01101100 01100101 01111000')
      writeln('the latency pet has you.', 'term-muted')
      pingLatencyPet('manual')
      break
    case 'uname':
      writeln('PortfolioOS guest 0.1 browser-arch')
      break
    case 'cat':
      if ((args[0] ?? '').toLowerCase() === 'readme') {
        writeln('# ac-website')
        writeln('personal site. type help. pet the ping orb. do not sudo.')
      } else {
        writeln('usage: cat readme', 'term-muted')
      }
      break
    case 'clear':
    case 'cls':
      clearOutput()
      break
    case 'exit':
    case 'close':
    case 'q':
      api?.close()
      break
    case 'rm':
      writeln('nice try.', 'term-error')
      writeln('permission denied: this is a portfolio, not prod', 'term-muted')
      break
    case 'sudo':
      writeln('sudo: no. we talked about this.', 'term-error')
      break
    case 'contact':
      if (!navigateAllowed('/contact')) {
        writeln('navigation blocked', 'term-error')
        break
      }
      writeln('opening /contact')
      pingLatencyPet('nav')
      break
    case 'eval':
    case 'exec':
    case 'fetch':
    case 'curl':
    case 'wget':
    case 'source':
    case 'bash':
    case 'sh':
    case 'node':
    case 'python':
    case 'perl':
      writeln('command disabled in guest shell', 'term-error')
      break
    default:
      writeln(`command not found: ${command}`, 'term-error')
      writeln('type help', 'term-muted')
  }
}

export function ensureTerminal(): TerminalApi {
  if (api) {
    return api
  }

  const root = document.createElement('div')
  root.className = 'term-root'
  root.hidden = true
  root.dataset.termRoot = ''

  const backdrop = document.createElement('div')
  backdrop.className = 'term-backdrop'
  backdrop.dataset.termBackdrop = ''

  const panel = document.createElement('section')
  panel.className = 'term-panel'
  panel.role = 'dialog'
  panel.ariaModal = 'true'
  panel.setAttribute('aria-label', 'Terminal overlay')

  const header = document.createElement('header')
  header.className = 'term-header'

  const dots = document.createElement('div')
  dots.className = 'term-dots'
  dots.setAttribute('aria-hidden', 'true')
  for (let i = 0; i < 3; i += 1) {
    dots.appendChild(document.createElement('span'))
  }

  const title = document.createElement('p')
  title.className = 'term-title'
  title.textContent = 'guest@ac-website — zsh'

  const closeBtn = document.createElement('button')
  closeBtn.type = 'button'
  closeBtn.className = 'term-close'
  closeBtn.dataset.termClose = ''
  closeBtn.setAttribute('aria-label', 'Close terminal')
  closeBtn.textContent = 'esc'

  header.append(dots, title, closeBtn)

  const output = document.createElement('div')
  output.className = 'term-output'
  output.dataset.termOutput = ''
  output.tabIndex = -1

  const form = document.createElement('form')
  form.className = 'term-form'
  form.dataset.termForm = ''

  const label = document.createElement('label')
  label.className = 'term-prompt'
  label.htmlFor = 'term-input'
  const promptGlyph = document.createElement('span')
  promptGlyph.setAttribute('aria-hidden', 'true')
  promptGlyph.textContent = '›'
  const promptSr = document.createElement('span')
  promptSr.className = 'sr-only'
  promptSr.textContent = 'Command'
  label.append(promptGlyph, promptSr)

  const input = document.createElement('input')
  input.id = 'term-input'
  input.className = 'term-input'
  input.dataset.termInput = ''
  input.type = 'text'
  input.autocomplete = 'off'
  input.spellcheck = false
  input.maxLength = MAX_INPUT_LENGTH
  input.inputMode = 'text'

  form.append(label, input)
  panel.append(header, output, form)
  root.append(backdrop, panel)
  document.body.appendChild(root)

  const writeln = (line: string, tone: LineTone = ''): void => {
    const row = document.createElement('p')
    row.className = tone ? `term-line ${tone}` : 'term-line'
    row.textContent = line
    output.appendChild(row)
    output.scrollTop = output.scrollHeight
  }

  const clearOutput = (): void => {
    output.replaceChildren()
  }

  let previouslyFocused: HTMLElement | null = null

  const getFocusable = (): HTMLElement[] =>
    Array.from(panel.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1,
    )

  const onFocusTrap = (event: KeyboardEvent): void => {
    if (root.hidden || event.key !== 'Tab') {
      return
    }

    const focusable = getFocusable()
    if (focusable.length === 0) {
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement

    if (event.shiftKey && active === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const isCompactViewport = (): boolean => window.matchMedia('(max-width: 1023px)').matches

  const open = (): void => {
    if (isCompactViewport()) {
      return
    }

    previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    root.hidden = false
    document.body.classList.add('term-open')
    if (output.childElementCount === 0) {
      BOOT_LINES.forEach((line) => writeln(line, 'term-muted'))
      writeln(pick(BOOT_TAGLINES), 'term-muted')
    }
    window.setTimeout(() => input.focus(), 30)
  }

  const close = (): void => {
    root.hidden = true
    document.body.classList.remove('term-open')
    previouslyFocused?.focus()
    previouslyFocused = null
  }

  const toggle = (): void => {
    if (root.hidden) {
      open()
    } else {
      close()
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const raw = input.value
    input.value = ''

    const sanitized = sanitizeInput(raw)
    if (sanitized === null) {
      writeln('› [blocked]', 'term-error')
      writeln('input rejected (length or unsafe characters)', 'term-muted')
      return
    }

    writeln(`› ${sanitized}`)
    if (!sanitized) {
      return
    }

    runCommand(sanitized, writeln, clearOutput)
  })

  closeBtn.addEventListener('click', close)
  backdrop.addEventListener('click', close)
  panel.addEventListener('keydown', onFocusTrap)

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !root.hidden) {
      event.preventDefault()
      close()
      return
    }

    const target = event.target
    const typingInField =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)

    if (
      event.key === '`' &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey &&
      !typingInField &&
      !isCompactViewport()
    ) {
      event.preventDefault()
      toggle()
    }
  })

  window.addEventListener('ac:open-terminal', () => open())

  api = {
    open,
    close,
    toggle,
    isOpen: () => !root.hidden,
  }

  return api
}

export function initTerminal(): void {
  ensureTerminal()
}

export function openTerminal(): void {
  ensureTerminal().open()
}
