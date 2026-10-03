import type { ProductShowcaseText } from './dataTypes'
import { appPath } from '../lib/paths'

export const cmdbShowcaseText: ProductShowcaseText = {
  id: 'cmdb',
  name: '1nPlace CMDB',
  subtitle: 'IT / infra configuration management',
  pitch:
    'Configuration Management Database for IT and infrastructure inventory — assets, relationships, impact analysis, discovery, and reporting in one place.',
  href: appPath('/cmdb'),
  pageSummary: 'Inventory, relationships, impact, and reporting for IT teams.',
  features: [
    'Configuration items with lifecycle, owners, health, tags, and custom attributes',
    'Miller-column browsers for assets, categories, relationships, and services',
    'Relationship graph with impact analysis and service maps',
    'CSV import plus discovery adapters, with reconciliation and webhooks',
    'Report builder with saved reports and scheduled delivery',
    'Web app and Tauri desktop — local SQLite or remote Postgres',
  ],
  detailSections: [
    {
      title: 'Inventory that stays useful',
      body: 'Track configuration items with stable CI IDs, lifecycle state, environment, ownership, health, tags, and custom attributes — built for MSPs and mid-size IT teams without pretending to be a full ITSM suite.',
      bullets: [
        'Categories with attribute schema inheritance',
        'Soft-delete and restore for safer cleanup',
        'Global search across assets and settings',
      ],
    },
    {
      title: 'Relationships and impact',
      body: 'Model how things connect — runs_on, managed_by, member_of, and more — then walk impact when something changes or fails.',
      bullets: [
        'Miller-column browsers with resizable columns',
        'Service maps for dependency context',
        'Orphan and stale reporting to keep the CMDB honest',
      ],
    },
    {
      title: 'Discovery, import, and reporting',
      body: 'Bring inventory in from CSV or discovery adapters, reconcile conflicts, and ship reports on a schedule.',
      bullets: [
        'Discovery adapters for nmap, cloud, and endpoint sources',
        'Webhooks for integration hooks',
        'Report builder with filters, columns, group-by, and SMTP delivery',
      ],
    },
    {
      title: 'Auth and operations',
      body: 'Local or remote deployment with roles that match how teams actually work.',
      bullets: [
        'Argon2, JWT refresh, OIDC SSO, and SCIM provisioning',
        'Admin / editor / viewer roles',
        'Audit log and GDPR self-export',
      ],
    },
  ],
  stack: ['pnpm monorepo', 'Fastify + Prisma', 'SQLite / Postgres', 'React 19 + Vite', 'Tauri 2', 'OpenAPI docs'],
  screenshotLabel: 'Screenshot coming soon',
  demoLabel: 'Demo coming soon',
  accent: 'aqua',
  backHomeLabel: 'Back Home',
  learnMoreLabel: 'View product details',
}
