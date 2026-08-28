import { featureGridText, type FeatureText } from '../data/textData'

function FeatureCard({ title, colorClass, shadowClass, description, href }: FeatureText): string {
  return `
    <a href="${href}" class="group rounded-2xl border border-stone-700/70 bg-stone-900/75 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${shadowClass}">
      <h2 class="text-sm font-semibold uppercase tracking-[0.14em] ${colorClass}">${title}</h2>
      <p class="mt-2 text-stone-300">${description}</p>
    </a>
  `
}

export function FeatureGrid(): string {
  const cards = featureGridText
    .map((feature, index) => {
      const delay = 320 + index * 120
      return FeatureCard(feature)
        .replace('rounded-2xl', 'rise-in rounded-2xl')
        .replace('<a ', `<a style="animation-delay: ${delay}ms" `)
    })
    .join('')

  return `<div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">${cards}</div>`
}
