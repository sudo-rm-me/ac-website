export const siteConfig = {
  name: 'Alex',
  handle: 'sudo-rm-me',
  email: 'alexcrts298@gmail.com',
  titleDefault: 'Alex | DevOps Engineer & Web Builder',
  descriptionDefault:
    'DevOps and IT Operations engineer who ships reliable platforms, APIs, and polished web apps. Available for tailored freelance engagements.',
  locale: 'en_GB',
  get siteUrl(): string {
    const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
    if (fromEnv && fromEnv.length > 0) {
      return fromEnv.replace(/\/$/, '')
    }
    if (typeof window !== 'undefined' && window.location?.origin) {
      const base = import.meta.env.BASE_URL.replace(/\/$/, '')
      return `${window.location.origin}${base}`
    }
    return ''
  },
}
