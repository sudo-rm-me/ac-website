import { heroSectionText } from '../data/textData'

export function HeroSection(): string {
  const introLength = heroSectionText.intro.length

  return `
    <p class="rise-in mb-4 inline-flex w-fit rounded-full border border-sky-200/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
      ${heroSectionText.badge}
    </p>

    <p class="rise-in mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg" style="animation-delay: 240ms">
      <span class="typewriter-text" style="--typewriter-ch: ${introLength};">${heroSectionText.intro}</span>
    </p>

  `
}
