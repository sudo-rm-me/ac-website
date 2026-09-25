export function appPath(path = '/'): string {
  const base = import.meta.env.BASE_URL
  const normalized = path === '/' ? '' : path.replace(/^\//, '')
  if (!normalized) {
    return base
  }
  return `${base}${normalized}`
}

export function stripBasePath(pathname: string): string {
  const base = import.meta.env.BASE_URL
  if (base !== '/' && pathname.startsWith(base)) {
    return pathname.slice(base.length - 1) || '/'
  }
  if (base !== '/' && pathname === base.replace(/\/$/, '')) {
    return '/'
  }
  return pathname
}
