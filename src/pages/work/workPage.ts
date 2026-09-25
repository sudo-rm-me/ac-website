import { caseStudies, getCaseStudyBySlug, getWorkTags, workPageText } from '../../data/workData'
import { appPath } from '../../lib/paths'

function caseStudyCard(study: (typeof caseStudies)[number], index: number): string {
  return `
    <a
      href="${appPath(`/work/${study.slug}`)}"
      data-work-card
      data-work-tags="${study.tags.join(',')}"
      class="rise-in group block rounded-2xl border border-amber-300/30 bg-stone-900/70 p-5 transition hover:-translate-y-0.5 hover:border-amber-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
      style="animation-delay: ${120 + index * 70}ms"
    >
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">${study.role}</span>
        <span class="text-xs text-stone-400">${study.timeframe}</span>
      </div>
      <h3 class="mt-3 text-lg font-bold text-amber-50">${study.title}</h3>
      <p class="mt-2 text-sm text-stone-300">${study.summary}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${study.tags.map((tag) => `<span class="rounded bg-amber-300/15 px-2 py-1 text-xs text-amber-100">${tag}</span>`).join('')}
      </div>
    </a>
  `
}

export function WorkPage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${workPageText.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`
  const tags = getWorkTags()

  const filters = [
    `<button type="button" data-work-filter="all" class="work-filter work-filter-active rounded-lg border px-3 py-1.5 text-xs font-semibold" aria-pressed="true">${workPageText.filterAllLabel}</button>`,
    ...tags.map(
      (tag) =>
        `<button type="button" data-work-filter="${tag}" class="work-filter rounded-lg border px-3 py-1.5 text-xs font-semibold" aria-pressed="false">${tag}</button>`,
    ),
  ].join('')

  const cards = caseStudies.map((study, index) => caseStudyCard(study, index)).join('')

  return `
    <section data-work-root class="rise-in mt-10 rounded-2xl border border-amber-400/30 bg-stone-900/80 p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-amber-100">${workPageText.title}</h2>
        <a href="${appPath('/')}" class="inline-flex rounded-lg border border-amber-300/40 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10">${workPageText.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-300" style="${summaryTypewriterStyle}">${workPageText.summary}</p>
      <p class="mt-4 text-sm leading-relaxed text-stone-300">${workPageText.intro}</p>
      <div class="mt-5 h-px w-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"></div>
      <div class="mt-5" role="group" aria-label="Filter case studies by tag">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Filter</p>
        <div class="flex flex-wrap gap-2">${filters}</div>
      </div>
      <div data-work-grid class="mt-6 grid gap-4 md:grid-cols-2">${cards}</div>
      <p data-work-empty class="mt-6 hidden text-sm text-stone-400">No case studies match that filter.</p>
    </section>
  `
}

export function WorkCasePage(slug: string): string {
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return `
      <section class="rise-in mt-10 rounded-2xl border border-rose-400/30 bg-stone-900/80 p-6">
        <h2 class="text-2xl font-bold text-rose-100">Case study not found</h2>
        <p class="mt-3 text-stone-300">That project does not exist or was moved.</p>
        <a href="${appPath('/work')}" class="mt-6 inline-flex rounded-lg border border-rose-300/40 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:bg-rose-300/10">Back to work</a>
      </section>
    `
  }

  return `
    <article class="rise-in mt-10 rounded-2xl border border-amber-400/30 bg-stone-900/80 p-6">
      <a href="${appPath('/work')}" class="inline-flex rounded-lg border border-amber-300/40 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10">Back to work</a>
      <p class="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">${study.role} · ${study.timeframe}</p>
      <h2 class="mt-2 text-3xl font-black text-amber-50">${study.title}</h2>
      <p class="mt-3 text-stone-300">${study.summary}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${study.tags.map((tag) => `<span class="rounded bg-amber-300/15 px-2 py-1 text-xs text-amber-100">${tag}</span>`).join('')}
      </div>
      <div class="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"></div>
      <h3 class="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100/90">Problem</h3>
      <p class="mt-2 leading-relaxed text-stone-200">${study.problem}</p>
      <h3 class="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100/90">Approach</h3>
      <ul class="mt-2 list-disc space-y-2 pl-5 text-stone-200">
        ${study.approach.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <h3 class="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100/90">Outcome</h3>
      <ul class="mt-2 list-disc space-y-2 pl-5 text-stone-200">
        ${study.outcome.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <a href="${appPath(`/contact?service=${encodeURIComponent(study.enquireService)}`)}" class="mt-8 inline-flex rounded-xl border border-amber-200/50 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:bg-amber-300/20">Enquire about similar work</a>
    </article>
  `
}

export function initWorkFilters(): void {
  const root = document.querySelector<HTMLElement>('[data-work-root]')
  if (!root) {
    return
  }

  const filters = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-work-filter]'))
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-work-card]'))
  const empty = root.querySelector<HTMLElement>('[data-work-empty]')

  const applyFilter = (value: string): void => {
    filters.forEach((button) => {
      const active = button.dataset.workFilter === value
      button.classList.toggle('work-filter-active', active)
      button.setAttribute('aria-pressed', active ? 'true' : 'false')
    })

    let visible = 0
    cards.forEach((card) => {
      const tags = (card.dataset.workTags ?? '').split(',').filter(Boolean)
      const show = value === 'all' || tags.includes(value)
      card.classList.toggle('hidden', !show)
      if (show) {
        visible += 1
      }
    })

    if (empty) {
      empty.classList.toggle('hidden', visible > 0)
    }
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.workFilter ?? 'all'))
  })
}
