import { HeroSection } from './heroSection'
import { ProductShowcase } from './productShowcase'
import { aboutMeShowcaseText } from '../data/aboutMeShowcaseData'
import { cmdbShowcaseText } from '../data/cmdbShowcaseData'
import { encryptShowcaseText } from '../data/encryptShowcaseData'

export function HomePage(): string {
  return `
    <div class="home-stack home-stack-products">
      ${HeroSection()}
      ${ProductShowcase(aboutMeShowcaseText, 200)}
      ${ProductShowcase(cmdbShowcaseText, 320)}
      ${ProductShowcase(encryptShowcaseText, 440)}
    </div>
  `
}
