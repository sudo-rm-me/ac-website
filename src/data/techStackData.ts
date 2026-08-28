export type TechItem = {
  name: string
  summary: string
  iconPath: string
  iconAccentClass: string
}

export type TechCategory = {
  title: string
  description: string
  items: TechItem[]
}

export type TechStackData = {
  title: string
  summary: string
  backHomeLabel: string
  categories: TechCategory[]
}

export const techStackData: TechStackData = {
  title: 'Tech Stack',
  summary: 'My tech stack and related IT skills.',
  backHomeLabel: 'Back home',
  categories: [
    {
      title: 'Languages and Markup',
      description: 'Core languages I write daily for product and platform work.',
      items: [
        {
          name: 'TypeScript',
          summary: 'Typed JavaScript for reliable refactors and safer APIs.',
          iconPath: 'M6 6h20v20H6z M11 14h10v2h-4v8h-2v-8h-4z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'JavaScript',
          summary: 'Modern ES modules, browser APIs, and Node.js runtime fluency.',
          iconPath: 'M6 6h20v20H6z M12 20c1.5 1 3 1.6 4.8 1.6 2.2 0 4.2-.8 5.8-2.2',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'HTML5',
          summary: 'Semantic structure, accessibility-first markup, and SEO-conscious layout.',
          iconPath: 'M7 5h18l-2 22-7 2-7-2L7 5zm5 6h8l.2-2H11.8l.2 2zm.3 4l.2 2h5.1l-.2 3-1.4.4-1.5-.4-.1-1.2h-2.7l.2 3 4.1 1.3 4-1.3.6-7.1h-8.5z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'CSS3',
          summary: 'Modern layout systems, custom properties, animation, and responsive design.',
          iconPath: 'M7 5h18l-2 22-7 2-7-2L7 5zm4 4l-.2 2h8.1l.2-2H11zm-.4 5l.1 2h5.2l-.2 3-1.7.5-1.8-.5-.1-1.5h-2.7l.2 3.3 4.4 1.3 4.4-1.3.5-7.1h-8.3z',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'Python',
          summary: 'Automation, scripting, and backend tasks where rapid iteration matters.',
          iconPath: 'M16 5c-5 0-7 2-7 5v3h8v1H6c-2 0-3 2-3 4v2c0 2 2 4 4 4h3v-3c0-3 2-5 6-5h7c2 0 4-2 4-4V10c0-3-2-5-6-5h-5zm-3 3a1.3 1.3 0 110 2.6A1.3 1.3 0 0113 8z M16 27c5 0 7-2 7-5v-3h-8v-1h11c2 0 3-2 3-4v-2c0-2-2-4-4-4h-3v3c0 3-2 5-6 5h-7c-2 0-4 2-4 4v2c0 3 2 5 6 5h5zm3-3a1.3 1.3 0 110-2.6A1.3 1.3 0 0119 24z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Bash',
          summary: 'Shell scripting for automation, deployment helpers, and developer workflows.',
          iconPath: 'M6 8h20v16H6z M11 12l4 4-4 4 M17 20h5',
          iconAccentClass: 'text-lime-300',
        },
        {
          name: 'SQL',
          summary: 'Querying, modeling, and optimizing relational data structures.',
          iconPath: 'M16 6c6 0 10 2 10 4s-4 4-10 4-10-2-10-4 4-4 10-4zm-10 8v4c0 2 4 4 10 4s10-2 10-4v-4c-2 2-6 3-10 3s-8-1-10-3zm0 7v3c0 2 4 4 10 4s10-2 10-4v-3c-2 2-6 3-10 3s-8-1-10-3z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'PowerShell',
          summary: 'Task automation and systems administration in Windows-heavy environments.',
          iconPath: 'M6 7h20v18H6z M11 12l4 4-4 4 M16 20h5',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'YAML',
          summary: 'Configuration authoring for pipelines, infrastructure, and deployment manifests.',
          iconPath: 'M6 7h20v18H6z M10 11h12 M10 15h9 M10 19h7',
          iconAccentClass: 'text-violet-200',
        },
        {
          name: 'C#',
          summary: 'Strongly typed application development for APIs, services, and enterprise tooling.',
          iconPath: 'M6 10l10-5 10 5v12l-10 5-10-5V10zm8 6h4M16 14v4M11 18h8',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Go',
          summary: 'Efficient backend and CLI development with simple concurrency patterns.',
          iconPath: 'M7 16h18M10 13h3m-3 6h3m8-6h3m-3 6h3M9 10h14l3 6-3 6H9l-3-6 3-6z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'JSON',
          summary: 'Structured data modeling for APIs, configuration, and schema-driven workflows.',
          iconPath: 'M11 8c-2 2-3 4-3 8s1 6 3 8 M21 8c2 2 3 4 3 8s-1 6-3 8 M14 10h4v12h-4',
          iconAccentClass: 'text-emerald-300',
        },
      ],
    },
    {
      title: 'Frameworks and UI',
      description: 'Frontend frameworks and design systems for polished, production-ready UX.',
      items: [
        {
          name: 'Tailwind CSS',
          summary: 'Utility-first styling with fast composition and consistency.',
          iconPath:
            'M6 14c2-4 4-6 8-6 6 0 6 6 9 6 2 0 4-1 5-4-2 4-4 6-8 6-6 0-6-6-9-6-2 0-4 1-5 4zm0 8c2-4 4-6 8-6 6 0 6 6 9 6 2 0 4-1 5-4-2 4-4 6-8 6-6 0-6-6-9-6-2 0-4 1-5 4z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'React',
          summary: 'Component-driven architecture for scalable and maintainable interfaces.',
          iconPath: 'M16 9c-4 0-7 1-9 3 2 2 5 3 9 3s7-1 9-3c-2-2-5-3-9-3zm0 8c-4 0-7 1-9 3 2 2 5 3 9 3s7-1 9-3c-2-2-5-3-9-3z M10 12c0 4 1 7 3 9 2-2 3-5 3-9s-1-7-3-9c-2 2-3 5-3 9zm8 0c0 4 1 7 3 9 2-2 3-5 3-9s-1-7-3-9c-2 2-3 5-3 9z M16 16m-2 0a2 2 0 104 0a2 2 0 10-4 0',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Next.js',
          summary: 'Hybrid rendering, routing, and deployment-focused app workflows.',
          iconPath: 'M6 6h20v20H6z M11 21V11l10 10M17 11h4v4',
          iconAccentClass: 'text-violet-200',
        },
        {
          name: 'Vite',
          summary: 'Lightning-fast dev server and modern build pipeline.',
          iconPath: 'M16 5l8 3-2 11-6 7-6-7-2-11 8-3zm0 5l-4 2 1 6 3 4 3-4 1-6-4-2z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Node.js',
          summary: 'Backend runtime and tooling foundation for modern JavaScript development.',
          iconPath: 'M16 4l9 5v14l-9 5-9-5V9l9-5zm0 4.5l-5 2.8v9.4l5 2.8 5-2.8v-9.4L16 8.5z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Framer Motion',
          summary: 'Expressive UI animation for polished transitions and interaction feedback.',
          iconPath: 'M8 6h16v8H16l8 12H8l8-12H8V6z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Vue.js',
          summary: 'Progressive component framework used for fast prototyping and internal tools.',
          iconPath: 'M6 8h7l3 5 3-5h7l-10 16L6 8z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Sass',
          summary: 'Structured styling with nesting, variables, and reusable mixins.',
          iconPath: 'M8 8c3-3 8-3 11 0 2 2 2 5 0 7-2 2-4 2-6 3-2 1-3 2-3 4 0 2 2 3 4 3 3 0 5-2 5-5',
          iconAccentClass: 'text-pink-300',
        },
        {
          name: 'Storybook',
          summary: 'Component documentation and isolated UI development workflows.',
          iconPath: 'M8 6l8-2 8 2v20l-8 2-8-2V6zm5 7c1-1 3-1 4 0 1 1 1 3 0 4-1 1-3 1-4 0-1-1-1-3 0-4z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Express.js',
          summary: 'Minimal server framework for APIs, middleware chains, and backend services.',
          iconPath: 'M7 10h18v4H7z M7 18h12v4H7z M21 18h4v4h-4z',
          iconAccentClass: 'text-stone-200',
        },
        {
          name: 'Astro',
          summary: 'Content-focused web architecture with excellent performance defaults.',
          iconPath: 'M16 6l8 20-8-4-8 4 8-20zm0 6l-3 7 3-1.5 3 1.5-3-7z',
          iconAccentClass: 'text-fuchsia-300',
        },
        {
          name: 'Svelte',
          summary: 'Compiler-based UI development for lightweight, highly reactive interfaces.',
          iconPath: 'M16 7c4 0 6 2 6 5-1 2-3 3-6 3-2 0-3 1-3 2s1 2 3 2c2 0 3-1 4-2l3 2c-1 3-4 5-8 5-4 0-7-2-7-6 0-3 2-5 6-5 2 0 3-1 3-2s-1-2-2-2c-2 0-3 1-4 2l-3-2c1-3 4-4 8-4z',
          iconAccentClass: 'text-orange-300',
        },
        {
          name: 'Bootstrap',
          summary: 'Component library and responsive layout helpers for rapid prototyping.',
          iconPath: 'M9 6h10c4 0 6 2 6 5 0 2-1 3-3 4 2 1 3 2 3 5 0 4-3 6-7 6H9V6zm4 4v4h4c2 0 3-1 3-2s-1-2-3-2h-4zm0 8v4h5c2 0 3-1 3-2s-1-2-3-2h-5z',
          iconAccentClass: 'text-violet-300',
        },
      ],
    },
    {
      title: 'Build and Tooling',
      description: 'DX and release tooling that keeps iteration tight and shipping fast.',
      items: [
        {
          name: 'pnpm',
          summary: 'Disk-efficient package management with deterministic installs.',
          iconPath:
            'M6 6h6v6H6z M13 6h6v6h-6z M20 6h6v6h-6z M6 13h6v6H6z M13 13h6v6h-6z M20 13h6v6h-6z M13 20h6v6h-6z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'GitHub Actions',
          summary: 'Automated checks, builds, and deployments for repeatable delivery.',
          iconPath: 'M16 4l11 6v12l-11 6L5 22V10l11-6zm0 5l-6 3.2v7.6l6 3.2 6-3.2v-7.6L16 9z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Docker',
          summary: 'Containerized development and deployment parity across environments.',
          iconPath: 'M5 18h16v4H5z M7 14h3v3H7z M11 14h3v3h-3z M15 14h3v3h-3z M11 10h3v3h-3z M15 10h3v3h-3z M21 16c2-.2 3-1.4 3-3 .9.1 1.6.5 2 1.2-.5 2.9-3 4.8-6.6 4.8',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Git',
          summary: 'Branching, rebasing, and release workflows for collaborative development.',
          iconPath: 'M10 6l16 16-8 8L2 14l8-8zm5 7a2 2 0 10-1.8 2.8V20a2 2 0 101.6 0v-4.2A2 2 0 0015 13z',
          iconAccentClass: 'text-orange-300',
        },
        {
          name: 'GitHub Pages',
          summary: 'Static site deployment with CI-driven publishing from repository workflows.',
          iconPath: 'M16 5l9 4v14l-9 4-9-4V9l9-4zm-5 7h10v2H11zm0 4h10v2H11z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'npm',
          summary: 'Package management and script orchestration for JavaScript projects.',
          iconPath: 'M6 8h20v16H6z M10 12v8 M10 12h3v8 M16 12h3v8 M19 12h3v8',
          iconAccentClass: 'text-red-300',
        },
        {
          name: 'Turbo',
          summary: 'Monorepo task caching and parallel pipelines for faster team builds.',
          iconPath: 'M7 8h18l-9 16L7 8zm5 5h8l-4 7-4-7z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'VS Code',
          summary: 'Primary development environment with extension-driven productivity.',
          iconPath: 'M7 16l6-6 12-6v24l-12-6-6-6zm7-4v8l7 3V9l-7 3z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'webpack',
          summary: 'Asset bundling, module graph optimization, and advanced frontend build tuning.',
          iconPath: 'M16 5l9 5v12l-9 5-9-5V10l9-5zm0 4l-5 3v6l5 3 5-3v-6l-5-3z',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'esbuild',
          summary: 'Fast TypeScript and JavaScript transforms for local build acceleration.',
          iconPath: 'M7 8h18l-4 8 4 8H7l4-8-4-8zm7 4l-2 4 2 4h4l-2-4 2-4h-4z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'Rollup',
          summary: 'Tree-shaken package bundling for efficient library and app outputs.',
          iconPath: 'M16 6a10 10 0 1010 10A10 10 0 0016 6zm0 4a6 6 0 11-6 6 6 6 0 016-6z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'GitLab CI',
          summary: 'Pipeline automation and environment promotion for continuous delivery.',
          iconPath: 'M8 20l8-14 8 14-8 7-8-7zm4-2h8l-4-7-4 7z',
          iconAccentClass: 'text-orange-300',
        },
      ],
    },
    {
      title: 'Cloud and Infrastructure',
      description: 'Cloud architecture, IaC, and platform operations across Microsoft environments.',
      items: [
        {
          name: 'Microsoft Azure',
          summary: 'Cloud compute, networking, identity, and managed services for production workloads.',
          iconPath: 'M7 25L16 5l9 20h-6l-3.2-7.5L12.5 25H7z M14.6 19h4l-2-4.8-2 4.8z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Terraform',
          summary: 'Infrastructure as code for repeatable environments and policy-controlled provisioning.',
          iconPath: 'M6 9l7-4 7 4-7 4-7-4zm0 6l7 4v8l-7-4v-8zm14 0l7-4v8l-7 4v-8z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Bicep',
          summary: 'Native Azure IaC templates with concise syntax and modular deployments.',
          iconPath: 'M7 7h18v6H7z M7 15h11v4H7z M20 15h5v10h-5z M7 21h11v4H7z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Kubernetes',
          summary: 'Container orchestration for resilient microservices and rolling deployments.',
          iconPath: 'M16 5l9 5v10l-9 5-9-5V10l9-5zm0 4l-5 3v6l5 3 5-3v-6l-5-3zm0 1.5l2.3 1.3v2.5L16 15.5l-2.3-1.2v-2.5L16 10.5z',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'Azure DevOps',
          summary: 'Boards, repos, and release pipelines for enterprise delivery workflows.',
          iconPath: 'M6 10l7-4 6 3v5l-6 3-7-4v-3zm13-2l7 4v10l-7 4-6-3v-5l6-3 7 4v-6l-7-4z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Azure Functions',
          summary: 'Serverless workloads for event-driven APIs and background processing.',
          iconPath: 'M8 7h16v5H14l6 13h-4l-6-13H8V7z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'Azure Monitor',
          summary: 'Metrics, logs, and alerting to maintain platform reliability and visibility.',
          iconPath: 'M6 24h20v2H6z M9 21h3v-6H9v6zm5 0h3V11h-3v10zm5 0h3v-8h-3v8z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'Azure Key Vault',
          summary: 'Centralized secret management and certificate lifecycle controls.',
          iconPath: 'M8 14h16v11H8V14zm3-4a5 5 0 1110 0v2h-2v-2a3 3 0 10-6 0v2h-2v-2z M16 18a2 2 0 00-1 3.7V23h2v-1.3A2 2 0 0016 18z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'Azure App Service',
          summary: 'Managed application hosting with integrated deployment pipelines.',
          iconPath: 'M7 9h18v6H7z M7 17h18v6H7z M10 12h12 M10 20h12',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Azure Storage',
          summary: 'Blob, queue, and file services for scalable cloud data workloads.',
          iconPath: 'M6 9h20v14H6z M10 9v14 M16 9v14 M22 9v14 M6 14h20 M6 18h20',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'AKS',
          summary: 'Managed Kubernetes clusters on Azure for scalable service orchestration.',
          iconPath: 'M16 4l10 6v12l-10 6-10-6V10l10-6zm0 5l-5 3v6l5 3 5-3v-6l-5-3z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Azure SQL Database',
          summary: 'Managed relational data platform with backup, scaling, and security controls.',
          iconPath: 'M16 7c5 0 9 2 9 4s-4 4-9 4-9-2-9-4 4-4 9-4zm-9 7v4c0 2 4 4 9 4s9-2 9-4v-4c-2 2-5 3-9 3s-7-1-9-3z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'Azure Container Registry',
          summary: 'Private image registry for secure container distribution and release workflows.',
          iconPath: 'M7 10h18v14H7z M10 13h5v8h-5z M17 13h5v8h-5z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Azure Front Door',
          summary: 'Global edge routing, acceleration, and WAF controls for distributed apps.',
          iconPath: 'M16 5l10 6v10l-10 6-10-6V11l10-6zm0 6l-6 3 6 3 6-3-6-3zm-6 5v3l6 3v-3l-6-3zm12 0l-6 3v3l6-3v-3z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Cloudflare',
          summary: 'DNS, CDN, and edge security capabilities for fast and resilient delivery.',
          iconPath: 'M9 21h13a4 4 0 001-7.8A6 6 0 0011 11a5 5 0 00-5 5 5 5 0 003 5z',
          iconAccentClass: 'text-orange-300',
        },
      ],
    },
    {
      title: 'Microsoft Ecosystem',
      description: 'Productivity, collaboration, identity, and low-code tooling in the Microsoft stack.',
      items: [
        {
          name: 'Microsoft 365',
          summary: 'Administration and integration across Exchange, Teams, SharePoint, and OneDrive.',
          iconPath: 'M6 7l7-2 6 2v18l-6 2-7-2V7zm13 2l7-2v18l-7 2V9z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Teams',
          summary: 'Collaboration workflows, channel automation, and app-level integrations.',
          iconPath: 'M6 9h14v14H6z M11 12h4v2h-1v6h-2v-6h-1z M22 11h4v10h-4z',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'SharePoint',
          summary: 'Content architecture, permissions strategy, and document lifecycle management.',
          iconPath: 'M7 10c0-2 2-4 5-4h8v5h-8v10h-1c-2 0-4-2-4-4v-7zm6 3h12v9c0 2-2 4-4 4h-8V13z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Exchange Online',
          summary: 'Mail flow, compliance controls, and tenant-level messaging operations.',
          iconPath: 'M5 9h22v14H5z M8 11l8 5 8-5 M8 21h16',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Entra ID',
          summary: 'Identity governance, conditional access, and application authentication.',
          iconPath: 'M16 4c6 0 10 4 10 10v8l-10 6-10-6v-8c0-6 4-10 10-10zm0 5c-3 0-5 2-5 5v5l5 3 5-3v-5c0-3-2-5-5-5z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Power Platform',
          summary: 'Power Apps, Power Automate, and Dataverse solutions for operational workflows.',
          iconPath: 'M7 8l7 4v12l-7-4V8zm7 4l11-6v12l-11 6V12z M9 15l3 1.7v2.5L9 17.5V15z',
          iconAccentClass: 'text-violet-200',
        },
        {
          name: 'Intune',
          summary: 'Endpoint policy, compliance, and device management across organizations.',
          iconPath: 'M16 4l10 5v6c0 7-4.5 11-10 13-5.5-2-10-6-10-13V9l10-5zm0 5l-5 2.5v3.5c0 4.7 2.7 7.4 5 8.7 2.3-1.3 5-4 5-8.7v-3.5L16 9z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Defender for Cloud',
          summary: 'Security posture management, threat detection, and cloud workload protection.',
          iconPath: 'M16 4l9 4v7c0 6-3.8 10-9 13-5.2-3-9-7-9-13V8l9-4zm0 6a4 4 0 00-4 4v1h2v-1a2 2 0 114 0v1h2v-1a4 4 0 00-4-4zm-3 6h6v5h-6v-5z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Microsoft Purview',
          summary: 'Governance, compliance, and data lifecycle controls across services.',
          iconPath: 'M16 5l10 4v7c0 6-4.2 10.4-10 13-5.8-2.6-10-7-10-13V9l10-4zm0 5l-5 2v4c0 4 2.5 6.8 5 8 2.5-1.2 5-4 5-8v-4l-5-2z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'Power BI',
          summary: 'Dashboarding and analytics for operational visibility and reporting.',
          iconPath: 'M7 24h18v2H7z M9 20h3v4H9v-4zm5-5h3v9h-3v-9zm5-3h3v12h-3V12z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'OneDrive',
          summary: 'Cloud file collaboration, sync, and sharing governance.',
          iconPath: 'M11 22h11a4 4 0 001-7.9A6 6 0 0012 10a5 5 0 00-5 5v.2A4 4 0 0011 22z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Microsoft Graph',
          summary: 'Unified API access to Microsoft 365 identity, messaging, and files.',
          iconPath: 'M16 5l10 6v10l-10 6-10-6V11l10-6zm0 5l-5 3v6l5 3 5-3v-6l-5-3z M13 16h6v2h-6z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Microsoft Sentinel',
          summary: 'Cloud-native SIEM and SOAR for security operations and incident response.',
          iconPath: 'M16 5l9 4v7c0 6-4 10-9 13-5-3-9-7-9-13V9l9-4zm0 6l-3 3 3 3 3-3-3-3zm0 5l-2 2 2 2 2-2-2-2z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Defender for Office 365',
          summary: 'Email and collaboration threat protection with policy-based controls.',
          iconPath: 'M6 9h20v14H6z M9 12l7 4 7-4 M16 18v5',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Endpoint Manager',
          summary: 'Unified endpoint security posture and application management workflows.',
          iconPath: 'M7 8h18v16H7z M10 11h12v10H10z M13 14h6v4h-6z',
          iconAccentClass: 'text-violet-200',
        },
        {
          name: 'Copilot for Microsoft 365',
          summary: 'AI-assisted productivity workflows across Word, Teams, Outlook, and more.',
          iconPath: 'M16 6c5 0 8 3 8 7v7c0 4-3 7-8 7s-8-3-8-7v-7c0-4 3-7 8-7zm0 4a3 3 0 00-3 3v7a3 3 0 006 0v-7a3 3 0 00-3-3z',
          iconAccentClass: 'text-cyan-300',
        },
      ],
    },
    {
      title: 'Quality',
      description: 'Formatting, linting, and maintainability guardrails.',
      items: [
        {
          name: 'ESLint',
          summary: 'Static checks to catch bugs and enforce coding standards.',
          iconPath: 'M16 4l9 5v10l-9 5-9-5V9l9-5zm0 4l-5 3v6l5 3 5-3v-6l-5-3z',
          iconAccentClass: 'text-indigo-300',
        },
        {
          name: 'Prettier',
          summary: 'Consistent formatting that keeps diffs focused and readable.',
          iconPath: 'M8 7h16v3H8z M8 12h12v3H8z M8 17h16v3H8z M8 22h10v3H8z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Vitest',
          summary: 'Fast unit testing integrated with the Vite toolchain.',
          iconPath: 'M6 9h20l-10 16L6 9zm10 4l-4 6h8l-4-6z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Playwright',
          summary: 'Reliable end-to-end browser testing across Chromium, Firefox, and WebKit.',
          iconPath: 'M6 22l4-12h12l4 12h-4l-2.5-8h-7L10 22H6zm7-6h6v2h-6z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'Lighthouse',
          summary: 'Performance and accessibility audits to improve frontend quality.',
          iconPath: 'M16 5l4 7h-8l4-7zm-2 8h4v9h-4v-9zm-5 10h14v2H9z',
          iconAccentClass: 'text-amber-300',
        },
        {
          name: 'Jest',
          summary: 'Mature JavaScript testing ecosystem for unit and integration coverage.',
          iconPath: 'M16 6c3 0 5 2 5 5 0 2-1 3-2 4 1 1 2 2 2 4 0 3-2 5-5 5s-5-2-5-5c0-2 1-3 2-4-1-1-2-2-2-4 0-3 2-5 5-5zm0 3a2 2 0 100 4 2 2 0 000-4zm0 8a2 2 0 100 4 2 2 0 000-4z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Axe',
          summary: 'Automated accessibility testing to catch issues early in development.',
          iconPath: 'M16 6l7 20h-3l-1.5-4h-5L12 26H9l7-20zm0 5l-1.8 6h3.6L16 11z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Dependabot',
          summary: 'Automated dependency update PRs for healthier and safer projects.',
          iconPath: 'M16 7a6 6 0 00-6 6v2H8v10h16V15h-2v-2a6 6 0 00-6-6zm0 3a3 3 0 013 3v2h-6v-2a3 3 0 013-3z M13 19h6v3h-6v-3z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Cypress',
          summary: 'Browser-based end-to-end testing for application workflows and regressions.',
          iconPath: 'M16 7a9 9 0 109 9h-3a6 6 0 11-6-6V7z M16 12a4 4 0 104 4h-2a2 2 0 11-2-2v-2z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'SonarQube',
          summary: 'Code quality and security analysis integrated into CI pipelines.',
          iconPath: 'M7 20c4-5 11-5 18 0M9 16c3-3 8-3 13 0M12 12c2-1 5-1 8 0',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'OWASP ZAP',
          summary: 'Security testing and automated vulnerability scanning for web applications.',
          iconPath: 'M16 6l4 8h-3l2 12h-6l2-9h-3l4-11z',
          iconAccentClass: 'text-amber-300',
        },
      ],
    },
    {
      title: 'Data and Observability',
      description: 'Storage, telemetry, and analytics tools that support reliable delivery.',
      items: [
        {
          name: 'PostgreSQL',
          summary: 'Relational database design, indexing, and query optimization for production apps.',
          iconPath: 'M16 6c-5 0-8 3-8 7v8h4v5h3v-5h2c4 0 7-3 7-7V13c0-4-3-7-8-7zm0 4c2 0 4 1 4 3v1c0 2-2 3-4 3h-4v-4c0-2 2-3 4-3z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Redis',
          summary: 'High-performance caching and ephemeral data patterns for responsive systems.',
          iconPath: 'M16 7l9 4-9 4-9-4 9-4zm-9 7l9 4 9-4v4l-9 4-9-4v-4zm0 7l9 4 9-4v4l-9 4-9-4v-4z',
          iconAccentClass: 'text-rose-300',
        },
        {
          name: 'Application Insights',
          summary: 'End-to-end telemetry, distributed tracing, and error diagnostics on Azure.',
          iconPath: 'M6 24h20v2H6z M10 20h3v-8h-3v8zm5 0h3V9h-3v11zm5 0h3v-5h-3v5z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Grafana',
          summary: 'Operational dashboards and alert-focused monitoring for service health.',
          iconPath: 'M16 7c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm0 4a5 5 0 105 5 5 5 0 00-5-5zm-7-2l2 3M23 9l-2 3',
          iconAccentClass: 'text-orange-300',
        },
        {
          name: 'MongoDB',
          summary: 'Document database modeling for flexible schemas and rapid iteration.',
          iconPath: 'M16 5c4 4 6 8 6 12 0 5-3 8-6 10-3-2-6-5-6-10 0-4 2-8 6-12zm0 6c-2 2-3 4-3 7 0 2 1 4 3 6 2-2 3-4 3-6 0-3-1-5-3-7z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'Elasticsearch',
          summary: 'Distributed search and analytics for logs, metrics, and app data.',
          iconPath: 'M16 6c5 0 9 4 9 9 0 3-1 5-3 7l3 4-2 1-3-4c-1 1-3 2-4 2-5 0-9-4-9-9s4-9 9-9zm0 4a5 5 0 100 10 5 5 0 000-10z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'Prometheus',
          summary: 'Metrics collection and alerting for observable distributed systems.',
          iconPath: 'M16 7l7 4v10l-7 4-7-4V11l7-4zm0 4l-3 2v4l3 2 3-2v-4l-3-2z M16 4v3 M6 16h3 M23 16h3 M10 8l2 2 M20 8l-2 2',
          iconAccentClass: 'text-orange-300',
        },
        {
          name: 'OpenTelemetry',
          summary: 'Standardized tracing and metrics instrumentation across services.',
          iconPath: 'M16 6l8 5v10l-8 5-8-5V11l8-5zm0 4l-4 2.5v5L16 20l4-2.5v-5L16 10z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'Datadog',
          summary: 'Unified observability platform for infrastructure, applications, and security.',
          iconPath: 'M9 22V10l4 2 3-4 3 6 4-2v10H9zm4-5h2v3h-2v-3zm4-3h2v6h-2v-6z',
          iconAccentClass: 'text-purple-300',
        },
      ],
    },
    {
      title: 'Systems and Networking',
      description: 'Operating systems, web servers, identity services, and network fundamentals.',
      items: [
        {
          name: 'Linux',
          summary: 'Command-line administration, process management, and service hardening workflows.',
          iconPath: 'M16 6c4 0 7 4 7 9 0 6-3 11-7 11s-7-5-7-11c0-5 3-9 7-9zm-2 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm4 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z M12 19c1 1 2.5 1.5 4 1.5s3-.5 4-1.5',
          iconAccentClass: 'text-yellow-300',
        },
        {
          name: 'Windows Server',
          summary: 'Role-based management, policy controls, and service hosting at scale.',
          iconPath: 'M6 7l9-2v10H6V7zm11-2l9-2v12h-9V5zM6 17h9v10l-9-2V17zm11 0h9v12l-9-2V17z',
          iconAccentClass: 'text-sky-300',
        },
        {
          name: 'Nginx',
          summary: 'Reverse proxying, load balancing, and static content delivery optimization.',
          iconPath: 'M16 5l10 6v10l-10 6-10-6V11l10-6zm0 6l-4 2.5v5L16 21l4-2.5v-5L16 11z',
          iconAccentClass: 'text-emerald-300',
        },
        {
          name: 'IIS',
          summary: 'Windows-native web hosting, app pools, and enterprise deployment management.',
          iconPath: 'M7 8h18v16H7z M10 12h12 M10 16h12 M10 20h8',
          iconAccentClass: 'text-blue-300',
        },
        {
          name: 'Active Directory',
          summary: 'Directory services, group policy, and centralized identity administration.',
          iconPath: 'M16 6a5 5 0 110 10 5 5 0 010-10zm-8 16c0-4 4-6 8-6s8 2 8 6v2H8v-2z',
          iconAccentClass: 'text-violet-300',
        },
        {
          name: 'DNS',
          summary: 'Domain resolution, record management, and routing behavior troubleshooting.',
          iconPath: 'M16 6c6 0 10 4 10 10s-4 10-10 10S6 22 6 16 10 6 16 6zm0 4a6 6 0 100 12 6 6 0 000-12zm-1 2h2v8h-2v-8zm-3 3h8v2h-8v-2z',
          iconAccentClass: 'text-cyan-300',
        },
        {
          name: 'VPN',
          summary: 'Secure remote connectivity patterns for distributed teams and operations.',
          iconPath: 'M8 14h16v10H8V14zm3-4a5 5 0 1110 0v2h-2v-2a3 3 0 10-6 0v2h-2v-2z',
          iconAccentClass: 'text-rose-300',
        },
      ],
    },
  ],
}