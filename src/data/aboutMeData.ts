import type { BasePageText } from './textData'

export type AboutMeText = BasePageText & {
  aboutMeBody: string[]
}

export const aboutMeText: AboutMeText = {
  title: 'About Me',
  summary: 'My work, my life, and my passions.',
  backHomeLabel: 'Back home',
  aboutMeBody: [
    'My name is Alex.',
    'I am a passionate developer and IT Operations Engineer with a love for creating efficient and elegant solutions.',
    'My journey in tech has been driven by curiosity, a desire to continuously learn and grow, and a strong resolve to never work in sales again.',
    'Currently, I work in Devops, focusing on automating infrastructure, improving system reliability, and developing solutions in a variety of industries.',
    'Outside of work, I enjoy exploring new technologies, playing classical guitar, and spending time with my family.',
  ],
}