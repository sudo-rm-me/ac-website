import type { ProductShowcaseText } from './dataTypes'
import { appPath } from '../lib/paths'

export const encryptShowcaseText: ProductShowcaseText = {
  id: 'encrypt',
  name: '1nPlace Encrypt',
  subtitle: 'Encrypted local-first workspace',
  pitch:
    'Private productivity in one place: logins with TOTP, rich notes, checklists, sheets, and encrypted files - locked behind your master passphrase.',
  href: appPath('/encrypt'),
  pageSummary: 'AES-256 local vault for passwords, notes, sheets, and files.',
  features: [
    'AES-256 encrypted vault with Argon2id - no cloud account, no sync server',
    'Passwords with TOTP, strong generator, and browser CSV import',
    'Rich notes, code snippets, journals, and task checklists',
    'Full spreadsheets with formulas plus CSV import/export',
    'Encrypted files, voice memos, contacts, and bookmarks',
    'Windows desktop via Tauri - everything stays on your machine',
  ],
  detailSections: [
    {
      title: 'One vault, many suites',
      body: 'Passwords, notes, journals, tasks, sheets, contacts, bookmarks, files, and voice memos live in a single encrypted workspace - no cloud account and no sync server.',
      bullets: [
        'TOTP authenticator codes next to logins',
        'Rich notes with code snippets and form templates',
        'Spreadsheets with formulas, plus lightweight tables',
      ],
    },
    {
      title: 'Security model',
      body: 'Vault contents are encrypted with AES-256-GCM. Your master passphrase never leaves the device; unlocked item keys are wiped from memory when you lock.',
      bullets: [
        'Argon2id key derivation with Standard / High / Paranoid presets',
        'Configurable idle auto-lock',
        'Encrypted one-click backups to a folder you choose',
      ],
    },
    {
      title: 'Organization and UX',
      body: 'Built for daily use: multiple vaults, folders, favourites, pinned items, trash, and global search.',
      bullets: [
        'Ctrl+K search across the vault',
        'Custom themes and keyboard shortcuts',
        'System tray with quick lock',
      ],
    },
    {
      title: 'Import, export, and platform',
      body: 'Move data in and out without surrendering the local-first model.',
      bullets: [
        'Encrypted .e1p packages for vault or folder sharing',
        'Password CSV and bookmark HTML/CSV import',
        'Native Windows app (Tauri) with MSI and NSIS installers',
      ],
    },
  ],
  stack: ['Tauri 2', 'React + Vite', 'AES-256-GCM', 'Argon2id', 'TipTap notes', 'Windows desktop'],
  screenshotLabel: 'Screenshot coming soon',
  demoLabel: 'Demo coming soon',
  accent: 'forest',
  backHomeLabel: 'Back Home',
  learnMoreLabel: 'View product details',
}
