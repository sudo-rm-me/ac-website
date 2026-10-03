import { heroSectionText } from '../data/heroSectionData'
import { appPath } from '../lib/paths'

export function HeroSection(): string {
  const logoSrc = `${import.meta.env.BASE_URL}1nplace-logo.png`

  return `
    <a href="${appPath('/')}" aria-label="Home" class="home-fab rise-in mx-auto inline-flex w-fit items-center justify-center rounded-2xl border p-1 sm:p-1.5">
      <img src="${logoSrc}" alt="" width="112" height="112" class="home-fab-logo h-24 w-24 rounded-[1.15rem] sm:h-28 sm:w-28 sm:rounded-[1.35rem]" />
    </a>

    <p class="rise-in inline-flex w-fit self-center rounded-full border border-sky-200/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100" style="animation-delay: 120ms">
      ${heroSectionText.badge}
    </p>
  `
}
