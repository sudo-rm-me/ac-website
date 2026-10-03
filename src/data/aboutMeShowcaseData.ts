import type { ProductShowcaseText } from './dataTypes'
import { appPath } from '../lib/paths'

export const aboutMeShowcaseText: ProductShowcaseText = {
  id: 'about-me',
  name: 'About Me',
  subtitle: 'Bio · work · services',
  pitch:
    'DevOps engineer who ships platforms, APIs, and polished web apps - plus the case studies, tech stack, and services behind that work.',
  href: appPath('/about-me'),
  pageSummary: 'Who I am, how I work, and how to reach me.',
  features: [
    'Tech stack I use to ship and operate',
    'Case studies and delivery stories',
    'Service offerings tailored to your goals',
    'Blog notes from building and operating',
  ],
  detailSections: [],
  stack: [],
  screenshotLabel: 'Portrait coming soon',
  demoLabel: 'Explore About Me',
  accent: 'sky',
  backHomeLabel: 'Back Home',
  learnMoreLabel: 'Explore About Me',
}
