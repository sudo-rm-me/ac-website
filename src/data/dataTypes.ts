export type FeatureText = {
  title: string
  description: string
  href: string
  colorClass: string
  shadowClass: string
}

export type BasePageText = {
  title: string
  summary: string
  backHomeLabel: string
}

export type HeroSectionText = {
  badge: string
  heading: string
}

export type ProductShowcaseAccent = 'aqua' | 'forest' | 'sky'

export type ProductDetailSection = {
  title: string
  body: string
  bullets?: string[]
}

export type ProductShowcaseText = {
  id: string
  name: string
  subtitle: string
  pitch: string
  href: string
  pageSummary: string
  features: string[]
  detailSections: ProductDetailSection[]
  stack: string[]
  screenshotLabel: string
  demoLabel: string
  accent: ProductShowcaseAccent
  backHomeLabel: string
  learnMoreLabel: string
}
