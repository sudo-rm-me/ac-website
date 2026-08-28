import { heroSectionText } from '../data/textData'

export function HeroSection(): string {
  const introLength = heroSectionText.intro.length

  return `
    <img src="/ac-logo.svg" alt="AC logo" class="rise-in mb-5 h-20 w-20 rounded-2xl border border-cyan-200/30 bg-stone-900/70 p-2 shadow-[0_16px_40px_-18px_rgba(34,211,238,0.75)]" style="animation-delay: 80ms"/>

    <p class="rise-in mb-4 inline-flex w-fit rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
      ${heroSectionText.badge}
    </p>

    <h1 class="rise-in max-w-4xl text-4xl font-black leading-tight tracking-tight text-stone-50 sm:text-6xl" style="animation-delay: 120ms">
      ${heroSectionText.heading}
    </h1>

    <p class="rise-in mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg" style="animation-delay: 240ms">
      <span class="typewriter-text" style="--typewriter-ch: ${introLength};">${heroSectionText.intro}</span>
    </p>
  `
}
