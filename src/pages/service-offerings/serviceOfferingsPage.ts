import { serviceOfferingsData } from '../../data/serviceOfferingsData'

export function ServiceOfferingsPage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${serviceOfferingsData.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const offeringButtons = serviceOfferingsData.offerings
    .map(
      (offering, index) => `
        <button
          type="button"
          data-offering-button
          data-offering-index="${index}"
          class="service-offering-button rise-in rounded-xl border p-4 text-left"
          style="animation-delay: ${120 + index * 80}ms"
          aria-selected="${index === 0 ? 'true' : 'false'}"
        >
          <p class="service-offering-title text-base font-semibold tracking-tight text-white">${offering.title}</p>
          <p class="mt-2 text-sm leading-relaxed text-stone-200">${offering.summary}</p>
        </button>
      `,
    )
    .join('')

  const firstOffering = serviceOfferingsData.offerings[0]
  const firstExamples = firstOffering.examples
    .map((example) => `<li class="service-offering-example">${example}</li>`)
    .join('')

  return `
    <section data-service-offerings-root class="rise-in mt-10 rounded-2xl border border-cyan-300/55 bg-stone-950/92 p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-white">${serviceOfferingsData.title}</h2>
        <a href="#/" class="inline-flex rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-300/10">${serviceOfferingsData.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-100" style="${summaryTypewriterStyle}">${serviceOfferingsData.summary}</p>
      <div class="rise-in mt-4 rounded-xl border border-cyan-200/45 bg-cyan-900/30 p-4" style="animation-delay: 100ms">
        <p class="text-sm leading-relaxed text-stone-50">${serviceOfferingsData.intro}</p>
        <p class="mt-3 text-sm leading-relaxed text-stone-50">
          ${serviceOfferingsData.contactParagraph}
          <span class="font-semibold text-white"> alexcrts298@gmail.com</span>.
        </p>
      </div>
      <div class="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>

      <p class="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">Select a service to view details and examples</p>
      <div class="mt-5 grid gap-3 sm:grid-cols-2">${offeringButtons}</div>

      <article data-offering-panel class="service-offering-panel mt-5 rounded-2xl border border-cyan-200/50 bg-gradient-to-r from-cyan-950/70 via-sky-950/65 to-emerald-950/65 p-5">
        <h3 data-offering-title class="text-xl font-semibold text-white">${firstOffering.title}</h3>
        <p data-offering-details class="mt-2 text-base leading-relaxed text-stone-100">${firstOffering.details}</p>
        <p class="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">Examples</p>
        <ul data-offering-examples class="mt-2 grid gap-2 sm:grid-cols-2">${firstExamples}</ul>
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

  if (!panel || !title || !details || !examples || buttons.length === 0) {
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
      button.classList.toggle('service-offering-button-active', selected)
    })

    title.textContent = offering.title
    details.textContent = offering.details
    examples.innerHTML = offering.examples.map((example) => `<li class="service-offering-example">${example}</li>`).join('')

    panel.classList.remove('service-offering-panel-enter')
    void panel.offsetWidth
    panel.classList.add('service-offering-panel-enter')
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => setActive(index))
  })

  setActive(0)
}
