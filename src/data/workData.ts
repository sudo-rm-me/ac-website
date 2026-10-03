import type { BasePageText } from './dataTypes.ts'

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  role: string
  timeframe: string
  tags: string[]
  enquireService: string
  problem: string
  approach: string[]
  outcome: string[]
}

export type WorkPageText = BasePageText & {
  intro: string
  filterAllLabel: string
}

export const workPageText: WorkPageText = {
  title: 'Work',
  summary: 'Selected delivery stories — problem, approach, outcome.',
  intro:
    'A short set of anonymised engagements across web delivery, cloud automation, infrastructure as code, and team enablement.',
  filterAllLabel: 'All',
  backHomeLabel: 'About Me',
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'company-website-typescript',
    title: 'Company website built and hosted in TypeScript',
    summary: 'Designed, built, and hosted a new company site with a typed frontend and a repeatable deploy path.',
    role: 'Web / delivery',
    timeframe: '6 weeks',
    tags: ['Web', 'TypeScript', 'Hosting'],
    enquireService: 'Web App Development',
    problem:
      'The company needed a new public website that looked intentional, was easy to update, and could be deployed without fragile manual steps.',
    approach: [
      'Scoped content, structure, and brand constraints with stakeholders before writing UI.',
      'Built the site in TypeScript with a clear component and content layout.',
      'Set up hosting, TLS, and a simple build → publish pipeline.',
      'Handed over a short runbook for content changes and redeploys.',
    ],
    outcome: [
      'A production site the company could ship updates to without developer archaeology.',
      'Typed codebase that is easier to extend than a one-off static dump.',
      'Hosting and deploy path that survived the first round of real edits.',
    ],
  },
  {
    slug: 'tenant-backup-automation',
    title: 'Reliable backup automation across Azure and AWS tenants',
    summary: 'Automated backup coverage for multi-tenant estates so recovery stopped depending on manual checklists.',
    role: 'Cloud / DevOps',
    timeframe: '8 weeks',
    tags: ['Azure', 'AWS', 'Backup', 'Automation'],
    enquireService: 'Cloud, DevOps, and Security',
    problem:
      'Tenant backups were inconsistent across Azure and AWS. Coverage gaps were discovered late, and restore confidence was uneven between environments.',
    approach: [
      'Inventoried workloads and mapped what “good backup” meant per tenant and service type.',
      'Automated backup policy application and verification across Azure and AWS.',
      'Added reporting and alerting for missed jobs, failed snapshots, and coverage drift.',
      'Documented restore paths and ran sample recovery checks with the ops team.',
    ],
    outcome: [
      'Backup coverage became measurable instead of assumed.',
      'Failed or missing jobs surfaced early enough to fix before they mattered.',
      'Ops gained a repeatable restore story for the tenants that needed it most.',
    ],
  },
  {
    slug: 'cloud-iac-staff-training',
    title: 'Training IT staff on Azure, AWS, and Terraform',
    summary: 'Hands-on enablement so the team could operate cloud and infrastructure-as-code work without waiting on one specialist.',
    role: 'Enablement / consulting',
    timeframe: '4 weeks',
    tags: ['Azure', 'AWS', 'Terraform', 'Training'],
    enquireService: 'Platform Tooling and Team Enablement',
    problem:
      'IT staff needed practical cloud and Terraform skills, not slide-deck theory. Knowledge was concentrated, which slowed delivery and raised bus-factor risk.',
    approach: [
      'Built a short curriculum around the team’s real services and pain points.',
      'Ran guided labs on Azure, AWS, and Terraform with safe sandbox accounts.',
      'Paired on live tickets so concepts stuck in the workflows they already owned.',
      'Left cheat sheets, repo examples, and a follow-up practice path.',
    ],
    outcome: [
      'Staff could navigate core Azure and AWS tasks with less escalation.',
      'Terraform basics moved from “someone else’s job” to a shared team skill.',
      'Fewer blockers while waiting for the one person who knew the cloud estate.',
    ],
  },
  {
    slug: 'terraform-tenant-from-scratch',
    title: 'Tenant built from scratch in Terraform',
    summary: 'Stood up a new cloud tenant with infrastructure as code so environments were repeatable from day one.',
    role: 'Infrastructure / IaC',
    timeframe: '5 weeks',
    tags: ['Terraform', 'Azure', 'AWS', 'IaC'],
    enquireService: 'Cloud, DevOps, and Security',
    problem:
      'A new tenant needed to be stood up cleanly. Click-ops would have created drift immediately and made the next environment a rewrite.',
    approach: [
      'Defined modules for identity, networking, baseline security, and core shared services.',
      'Codified environment promotion with clear variables and remote state.',
      'Applied least-privilege access patterns and baseline logging from the first apply.',
      'Validated the stack by rebuilding a secondary environment from the same code.',
    ],
    outcome: [
      'A working tenant that could be reproduced instead of reverse-engineered.',
      'Lower risk of snowflake config as more services landed.',
      'A Terraform baseline the team could extend for the next tenant.',
    ],
  },
  {
    slug: 'confidential-training-program',
    title: 'Confidential client training program with assessments and AI',
    summary:
      'Built a JS/HTML training experience with persistence, assessments, AI-assisted learning, and custom CSS — for a sensitive client engagement.',
    role: 'Web / product',
    timeframe: '10 weeks',
    tags: ['JavaScript', 'HTML', 'CSS', 'AI', 'Assessments'],
    enquireService: 'Web App Development',
    problem:
      'A confidential client needed a branded training program learners could progress through securely, with saved progress, assessments, and AI support — without exposing sensitive context in a generic off-the-shelf tool.',
    approach: [
      'Delivered the experience in HTML, JavaScript, and custom CSS so the UI matched the client’s training tone and constraints.',
      'Added persistence so learners could resume modules, track completion, and keep assessment state across sessions.',
      'Integrated AI assistance for guided learning moments while keeping prompts and data handling appropriate for a sensitive engagement.',
      'Built assessments with clear pass/fail feedback and progress visibility for learners and facilitators.',
    ],
    outcome: [
      'A self-contained training program the client could run without leaking material into public LMS defaults.',
      'Learners retained progress and assessment results instead of restarting from scratch.',
      'AI support and assessments sat inside one coherent, designed experience rather than a patchwork of tools.',
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getWorkTags(): string[] {
  const tags = new Set<string>()
  caseStudies.forEach((study) => {
    study.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
}
