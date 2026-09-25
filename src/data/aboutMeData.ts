import type { BasePageText } from './dataTypes'

export type AboutMeText = BasePageText & {
  positioning: string
  aboutMeBody: string[]
}

export const aboutMeText: AboutMeText = {
  title: 'About Me',
  summary: 'DevOps engineer who also ships web apps (and sometimes other things).',
  positioning:
    'I help teams automate infrastructure, harden delivery, and build the web interfaces and APIs that sit on top — pragmatic work shaped to your goals, not a one-size-fits-all package.',
  backHomeLabel: 'Back home',
  aboutMeBody: [
    'My name is Alex.',
    'I am a DevOps and IT Operations engineer with a bias toward clear systems, reliable releases, and software people can actually maintain.',
    'Day to day I focus on automating infrastructure, improving system reliability, and shipping solutions across a variety of industries — from pipelines and cloud guardrails to typed web UIs when the product needs them.',
    'My path in tech has been driven by curiosity, continuous learning, and a firm resolve to never work in sales again.',
    'Outside of work I explore new tools, play classical guitar, and spend time with my family.',
    'If you need a focused engagement or ongoing support on platforms, integrations, or web delivery, that is the work I am looking for next.',
  ],
}
