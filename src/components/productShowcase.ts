import type { ProductShowcaseText } from '../data/dataTypes'
import { productAccentClasses } from '../lib/productAccent'

export function ProductShowcase(product: ProductShowcaseText, animationDelayMs = 0): string {
  const accent = productAccentClasses[product.accent]
  const previewFeatures = product.features.slice(0, 4)
  const features = previewFeatures
    .map(
      (feature) => `
        <li class="flex gap-2 text-sm leading-relaxed text-stone-300">
          <span class="${accent.bullet}" aria-hidden="true">›</span>
          <span>${feature}</span>
        </li>`,
    )
    .join('')

  return `
    <a
      href="${product.href}"
      class="product-showcase rise-in group block rounded-2xl border ${accent.panel} bg-stone-900/80 p-6 transition hover:-translate-y-0.5 hover:border-opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
      style="animation-delay: ${animationDelayMs}ms"
      aria-labelledby="showcase-${product.id}-title"
      data-showcase="${product.id}"
    >
      <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h2 id="showcase-${product.id}-title" class="text-2xl font-bold ${accent.title}">${product.name}</h2>
        <p class="text-xs font-semibold uppercase tracking-[0.16em] ${accent.subtitle}">${product.subtitle}</p>
      </div>
      <p class="mt-3 text-stone-300 leading-relaxed">${product.pitch}</p>
      <div class="mt-4 h-px w-full bg-gradient-to-r from-transparent ${accent.divider} to-transparent"></div>
      <ul class="mt-4 grid gap-2 sm:grid-cols-2">
        ${features}
      </ul>
      ${
        product.id === 'about-me'
          ? `
      <div class="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs leading-relaxed text-stone-400">Bio, case studies, tech stack, services, writing, and contact.</p>
        <span class="inline-flex items-center justify-center rounded-xl border ${accent.cta} px-4 py-2.5 text-sm font-semibold transition group-hover:bg-opacity-100">
          ${product.learnMoreLabel}
        </span>
      </div>`
          : `
      <div class="product-showcase-media mt-6 grid gap-4 sm:grid-cols-[1.4fr_0.6fr] sm:items-stretch">
        <div
          class="product-screenshot-placeholder flex min-h-40 items-center justify-center rounded-xl border border-dashed ${accent.screenshot} px-4 py-8 text-center text-sm font-medium tracking-wide"
          role="img"
          aria-label="${product.screenshotLabel}"
        >
          ${product.screenshotLabel}
        </div>
        <div class="flex flex-col justify-center gap-3">
          <span class="inline-flex items-center justify-center rounded-xl border ${accent.cta} px-4 py-2.5 text-sm font-semibold transition group-hover:bg-opacity-100">
            ${product.learnMoreLabel}
          </span>
          <p class="text-xs leading-relaxed text-stone-400">Full product page with features, stack, and demo placeholder.</p>
        </div>
      </div>`
      }
    </a>
  `
}
