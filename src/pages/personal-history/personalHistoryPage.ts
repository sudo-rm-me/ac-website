import { personalHistoryText } from '../../data/personalHistoryData'

export function PersonalHistoryPage(): string {
  return `
    <section class="rise-in mt-10 rounded-2xl border border-emerald-400/30 bg-stone-900/80 p-6">
      <h2 class="text-2xl font-bold text-emerald-100">${personalHistoryText.title}</h2>
      <p class="mt-3 text-stone-300">${personalHistoryText.summary}</p>
      <a href="#/" class="mt-6 inline-flex rounded-lg border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/10">${personalHistoryText.backHomeLabel}</a>
    </section>
  `
}
