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

export type ListPageText = BasePageText & {
  items: string[]
}

export type HeroSectionText = {
  badge: string
  heading: string
  enquiries: string
}
