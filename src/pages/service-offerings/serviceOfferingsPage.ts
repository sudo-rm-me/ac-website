import { serviceOfferingsData } from '../../data/serviceOfferingsData'
import { siteConfig } from '../../data/siteConfig'
import { appPath } from '../../lib/paths'

function enquireHref(serviceTitle: string): string {
  return appPath(`/contact?service=${encodeURIComponent(serviceTitle)}`)
}

function examplesHtml(examples: string[]): string {
  return examples.map((example) => `<li class="service-offering-example">${example}</li>`).join('')
}

export function ServiceOfferingsPage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${serviceOfferingsData.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const offeringButtons = serviceOfferingsData.offerings
    .map(
      (offering, index) => `
        <button
          type="button"
          role="tab"
          id="service-tab-${index}"
          data-offering-button
          data-offering-index="${index}"
          class="service-offering-button rise-in rounded-xl border p-4 text-left"
          style="animation-delay: ${120 + index * 80}ms"
          aria-selected="${index === 0 ? 'true' : 'false'}"
          aria-controls="service-panel"
          tabindex="${index === 0 ? '0' : '-1'}"
        >
          <p class="service-offering-title text-base font-semibold tracking-tight text-white">${offering.title}</p>
          <p class="mt-2 text-sm leading-relaxed text-stone-200">${offering.summary}</p>
        </button>
      `,
    )
    .join('')

  const firstOffering = serviceOfferingsData.offerings[0]
  const firstExamples = examplesHtml(firstOffering.examples)

  return `
    <section data-service-offerings-root class="rise-in mt-10 rounded-2xl border border-cyan-300/55 bg-stone-950/92 p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-white">${serviceOfferingsData.title}</h2>
        <a href="${appPath('/')}" class="inline-flex rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-300/10">${serviceOfferingsData.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-100" style="${summaryTypewriterStyle}">${serviceOfferingsData.summary}</p>
      <div class="rise-in mt-4 rounded-xl border border-cyan-200/45 bg-cyan-900/30 p-4" style="animation-delay: 100ms">
        <p class="text-sm leading-relaxed text-stone-50">${serviceOfferingsData.intro}</p>
        <p class="mt-3 text-sm leading-relaxed text-stone-50">
          ${serviceOfferingsData.contactParagraph}
          <a href="mailto:${siteConfig.email}" class="font-semibold text-white underline decoration-cyan-300/50 underline-offset-2 hover:decoration-cyan-200">${siteConfig.email}</a>,
          or <a href="${appPath('/contact')}" class="font-semibold text-white underline decoration-cyan-300/50 underline-offset-2 hover:decoration-cyan-200">use the contact form</a>.
        </p>
      </div>
      <div class="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>

      <p class="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85" id="service-tabs-label">Select a service to view details and examples</p>
      <div class="mt-5 grid gap-3 sm:grid-cols-2" role="tablist" aria-labelledby="service-tabs-label">${offeringButtons}</div>

      <article
        id="service-panel"
        role="tabpanel"
        data-offering-panel
        class="service-offering-panel mt-5 rounded-2xl border border-cyan-200/50 bg-gradient-to-r from-cyan-950/70 via-sky-950/65 to-emerald-950/65 p-5"
        aria-labelledby="service-tab-0"
      >
        <h3 data-offering-title class="text-xl font-semibold text-white">${firstOffering.title}</h3>
        <p data-offering-details class="mt-2 text-base leading-relaxed text-stone-100">${firstOffering.details}</p>
        <p class="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">Examples</p>
        <ul data-offering-examples class="mt-2 grid gap-2 sm:grid-cols-2">${firstExamples}</ul>
        <a
          data-offering-enquire
          href="${enquireHref(firstOffering.title)}"
          class="mt-5 inline-flex rounded-xl border border-cyan-200/55 bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
        >${serviceOfferingsData.enquireLabel}</a>
      </article>
    </section>
  `
}

export function initServiceOfferingsInteractions(): void {
  const root = document.querySelector<HTMLElement>('[data-service-offerings-root]')
  if (!root) {
    return
  }

  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-offering-button]'))
  const panel = root.querySelector<HTMLElement>('[data-offering-panel]')
  const title = root.querySelector<HTMLElement>('[data-offering-title]')
  const details = root.querySelector<HTMLElement>('[data-offering-details]')
  const examples = root.querySelector<HTMLElement>('[data-offering-examples]')
  const enquire = root.querySelector<HTMLAnchorElement>('[data-offering-enquire]')

  if (!panel || !title || !details || !examples || !enquire || buttons.length === 0) {
    return
  }

  const setActive = (index: number): void => {
    const offering = serviceOfferingsData.offerings[index]
    if (!offering) {
      return
    }

    buttons.forEach((button, buttonIndex) => {
      const selected = buttonIndex === index
      button.setAttribute('aria-selected', selected ? 'true' : 'false')
      button.setAttribute('tabindex', selected ? '0' : '-1')
      button.classList.toggle('service-offering-button-active', selected)
    })

    panel.setAttribute('aria-labelledby', `service-tab-${index}`)
    title.textContent = offering.title
    details.textContent = offering.details
    examples.innerHTML = examplesHtml(offering.examples)
    enquire.href = enquireHref(offering.title)

    panel.classList.remove('service-offering-panel-enter')
    void panel.offsetWidth
    panel.classList.add('service-offering-panel-enter')
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => setActive(index))
    button.addEventListener('keydown', (event) => {
      let next: number | undefined
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        next = (index + 1) % buttons.length
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        next = (index - 1 + buttons.length) % buttons.length
      } else if (event.key === 'Home') {
        next = 0
      } else if (event.key === 'End') {
        next = buttons.length - 1
      }

      if (next === undefined) {
        return
      }

      event.preventDefault()
      setActive(next)
      buttons[next]?.focus()
    })
  })

  setActive(0)
}
