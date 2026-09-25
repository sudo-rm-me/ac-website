import type { FeatureText } from './dataTypes'
import { appPath } from '../lib/paths'

export const featureGridText: FeatureText[] = [
  {
    title: 'Tech Stack',
    description: 'Tools I ship and operate with.',
    href: appPath('/tech-stack'),
    colorClass: 'text-rose-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(244,63,94,0.65)]',
  },
  {
    title: 'Work',
    description: 'Case studies and delivery stories.',
    href: appPath('/work'),
    colorClass: 'text-emerald-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(16,185,129,0.7)]',
  },
  {
    title: 'Service Offerings',
    description: 'How I can help your team.',
    href: appPath('/service-offerings'),
    colorClass: 'text-cyan-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(34,211,238,0.7)]',
  },
  {
    title: 'About Me',
    description: 'Who I am and how I work.',
    href: appPath('/about-me'),
    colorClass: 'text-sky-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(56,189,248,0.7)]',
  },
  {
    title: 'Blogs',
    description: 'Notes from building and operating.',
    href: appPath('/blogs'),
    colorClass: 'text-indigo-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(129,140,248,0.7)]',
  },
  {
    title: 'Contact',
    description: 'Start a conversation.',
    href: appPath('/contact'),
    colorClass: 'text-violet-200',
    shadowClass: 'shadow-[0_10px_40px_-18px_rgba(167,139,250,0.7)]',
  },
]
