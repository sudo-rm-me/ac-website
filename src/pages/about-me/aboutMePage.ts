import { aboutMeText } from '../../data/aboutMeData'
import { appPath } from '../../lib/paths'

export function AboutMePage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${aboutMeText.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const bodyHtml = aboutMeText.aboutMeBody
    .map((paragraph) => `<p class="mt-3 text-stone-300">${paragraph}</p>`)
    .join('')

  return `
    <section class="rise-in mt-10 rounded-2xl border border-emerald-400/30 bg-stone-900/80 p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-emerald-100">${aboutMeText.title}</h2>
        <a href="${appPath('/')}" class="inline-flex rounded-lg border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/10">${aboutMeText.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-300" style="${summaryTypewriterStyle}">${aboutMeText.summary}</p>
      <p class="mt-4 rounded-xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-relaxed text-emerald-50">${aboutMeText.positioning}</p>
      <div class="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent"></div>
      ${bodyHtml}
      <a href="${appPath('/contact')}" class="mt-6 inline-flex rounded-xl border border-emerald-200/45 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70">Get in touch</a>
    </section>
  `
}
