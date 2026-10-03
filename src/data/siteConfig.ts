export const siteConfig = {
  name: 'Alex',
  handle: 'sudo-rm-me',
  email: 'contact@1nplace.com',
  titleDefault: '1nPlace',
  descriptionDefault:
    'Builder of 1nPlace CMDB and 1nPlace — encrypted local-first workspace. DevOps engineer shipping platforms, APIs, and polished web apps.',
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
