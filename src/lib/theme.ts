export function initTheme(): void {
  document.documentElement.dataset.theme = 'dark'
  document.documentElement.style.colorScheme = 'dark'
  localStorage.removeItem('ac-theme')
}
