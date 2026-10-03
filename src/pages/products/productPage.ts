import type { ProductShowcaseText } from '../../data/dataTypes'
import { productAccentClasses } from '../../lib/productAccent'
import { appPath } from '../../lib/paths'
import { cmdbShowcaseText } from '../../data/cmdbShowcaseData'
import { encryptShowcaseText } from '../../data/encryptShowcaseData'

function renderDetailSections(product: ProductShowcaseText): string {
  const accent = productAccentClasses[product.accent]

  return product.detailSections
    .map(
      (section) => `
      <section class="mt-6 rounded-xl border border-stone-700/60 bg-stone-950/35 p-5">
        <h3 class="text-lg font-bold ${accent.sectionTitle}">${section.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-stone-300">${section.body}</p>
        ${
          section.bullets?.length
            ? `<ul class="mt-3 grid gap-2">
                ${section.bullets
                  .map(
                    (bullet) => `
                  <li class="flex gap-2 text-sm text-stone-300">
                    <span class="${accent.bullet}" aria-hidden="true">›</span>
                    <span>${bullet}</span>
                  </li>`,
                  )
                  .join('')}
              </ul>`
            : ''
        }
      </section>`,
    )
    .join('')
}

export function ProductPage(product: ProductShowcaseText): string {
  const accent = productAccentClasses[product.accent]
  const summaryTypewriterStyle = `--typewriter-ch: ${product.pageSummary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const featureList = product.features
    .map(
      (feature) => `
      <li class="flex gap-2 text-sm leading-relaxed text-stone-300">
        <span class="${accent.bullet}" aria-hidden="true">›</span>
        <span>${feature}</span>
      </li>`,
    )
    .join('')

  const stackChips = product.stack
    .map((item) => `<span class="rounded px-2 py-1 text-xs font-medium ${accent.chip}">${item}</span>`)
    .join('')

  return `
    <article class="product-detail rise-in mt-10 rounded-2xl border ${accent.panel} bg-stone-900/80 p-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.16em] ${accent.subtitle}">${product.subtitle}</p>
          <h2 class="mt-2 text-3xl font-black ${accent.titleStrong}">${product.name}</h2>
        </div>
        <a href="${appPath('/')}" class="inline-flex rounded-lg border px-4 py-2 text-sm font-semibold transition ${accent.link}">${product.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-300" style="${summaryTypewriterStyle}">${product.pageSummary}</p>
      <p class="mt-4 text-stone-300 leading-relaxed">${product.pitch}</p>

      <div class="product-showcase-media mt-6 grid gap-4 lg:grid-cols-[1.45fr_0.55fr] lg:items-stretch">
        <div
          class="product-screenshot-placeholder flex min-h-52 items-center justify-center rounded-xl border border-dashed ${accent.screenshot} px-4 py-12 text-center text-sm font-medium tracking-wide"
          role="img"
          aria-label="${product.screenshotLabel}"
        >
          ${product.screenshotLabel}
        </div>
        <div class="flex flex-col justify-center gap-3 rounded-xl border border-stone-700/60 bg-stone-950/35 p-5">
          <span
            class="inline-flex cursor-not-allowed items-center justify-center rounded-xl border ${accent.demo} px-4 py-2.5 text-sm font-semibold opacity-70"
            aria-disabled="true"
            title="${product.demoLabel}"
          >
            ${product.demoLabel}
          </span>
          <p class="text-xs leading-relaxed text-stone-400">Demo link placeholder - swap in a live URL when ready.</p>
        </div>
      </div>

      <div class="mt-6 h-px w-full bg-gradient-to-r from-transparent ${accent.divider} to-transparent"></div>

      <section class="mt-6">
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] ${accent.subtitle}">Highlights</h3>
        <ul class="mt-4 grid gap-2 sm:grid-cols-2">${featureList}</ul>
      </section>

      ${renderDetailSections(product)}

      <section class="mt-6">
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] ${accent.subtitle}">Stack</h3>
        <div class="mt-3 flex flex-wrap gap-2">${stackChips}</div>
      </section>
    </article>
  `
}

export function CmdbPage(): string {
  return ProductPage(cmdbShowcaseText)
}

export function EncryptPage(): string {
  return ProductPage(encryptShowcaseText)
}
