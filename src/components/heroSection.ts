import { heroSectionText } from '../data/heroSectionData'

export function HeroSection(): string {
  const logoSrc = `${import.meta.env.BASE_URL}ac-logo.svg`
  const headingTop = heroSectionText.heading.split('|')[0]?.trim() ?? heroSectionText.heading

  return `
    <a href="#/" aria-label="Home" class="home-fab rise-in mx-auto inline-flex w-fit items-center justify-center rounded-2xl border p-0 sm:p-0.5">
      <span class="home-fab-logo-wrap inline-flex h-24 w-24 items-center justify-center rounded-xl sm:h-28 sm:w-28">
        <img src="${logoSrc}" alt="AC logo" class="h-20 w-20 sm:h-24 sm:w-24" />
      </span>
    </a>

    <div class="rise-in text-center text-xl font-black leading-tight tracking-tight text-stone-50 sm:text-3xl" style="animation-delay: 120ms">
      <p>${headingTop}</p>
    </div>

    <p class="rise-in inline-flex w-fit self-center rounded-full border border-sky-200/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100" style="animation-delay: 180ms">
      ${heroSectionText.badge}
    </p>

  `
}
