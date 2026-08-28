import type { BasePageText } from './dataTypes'

export type ServiceOffering = {
  title: string
  summary: string
  details: string
  examples: string[]
}

export type ServiceOfferingsData = BasePageText & {
  intro: string
  contactParagraph: string
  offerings: ServiceOffering[]
}

export const serviceOfferingsData: ServiceOfferingsData = {
  title: 'Service Offerings',
  summary: 'Ways I can help build, improve, and support your products and platforms.',
  intro:
    'I provide affordable, tailored solutions based on your goals, timelines, and budget. Whether you need a focused one-off engagement or ongoing support, I shape each project to fit your specific needs rather than forcing a one-size-fits-all approach.',
  contactParagraph:
    'If you would like to discuss your project requirements, timelines, or engagement options, please contact me at',
  offerings: [
    {
      title: 'Web App Development',
      summary: 'Modern frontend builds with TypeScript and robust UI architecture.',
      details:
        'I design and build responsive, maintainable web interfaces with clear structure, strong typing, and polished interaction patterns. Engagements can include greenfield builds, incremental upgrades, and UX refinements, with a focus on accessibility, predictable state flows, and long-term maintainability for growing codebases.',
      examples: [
        'Landing pages and portfolio sites with custom design systems',
        'Feature-rich dashboards and internal tooling UIs',
        'Refactors from brittle frontend code to scalable component architecture',
        'Accessibility-first UI passes with keyboard and screen-reader support',
      ],
    },
    {
      title: 'Cloud, DevOps, and Security',
      summary: 'Delivery automation and security guardrails for stable production releases.',
      details:
        'I help standardize and automate delivery pipelines so releases are safer, faster, and easier to repeat across environments. This includes practical cloud and DevOps foundations paired with security controls, so teams can move quickly with stronger confidence in release quality and compliance readiness.',
      examples: [
        'Pipeline setup for build, test, and deploy workflows',
        'Infrastructure-as-code templates and deployment guardrails',
        'Release process improvements with stronger rollback and observability',
        'Environment promotion flows for development, staging, and production',
      ],
    },
    {
      title: 'API and Integration Engineering',
      summary: 'Reliable service integrations and API-first system design.',
      details:
        'I build and connect APIs so services communicate cleanly, with predictable contracts, robust error handling, and easier long-term maintenance. I emphasize consistency in request and response models, clear integration boundaries, and diagnostics that reduce time-to-resolution when issues occur in distributed systems.',
      examples: [
        'REST API design with versioned contracts and clear error schemas',
        'Third-party service integrations with retry and timeout strategies',
        'Webhook processing pipelines with validation and idempotency',
        'Data mapping layers between external and internal system models',
      ],
    },
    {
      title: 'Platform Tooling and Team Enablement',
      summary: 'Developer experience, workflow automation, and hands-on team support.',
      details:
        'I identify friction in engineering workflows and implement practical improvements that reduce manual effort and speed up teams. This combines platform and tooling upgrades with lightweight leadership support, so teams get better engineering systems and better execution habits at the same time.',
      examples: [
        'Automation scripts for repetitive operational tasks',
        'Repository standards for consistency across projects',
        'Local development setup improvements for faster onboarding',
        'Template repos and starter kits for consistent project setup',
      ],
    },
    {
      title: 'Performance, Reliability, and Modernization',
      summary: 'Stability and speed improvements paired with pragmatic legacy upgrades.',
      details:
        'I focus on removing performance bottlenecks and reducing failure points so applications stay responsive and dependable under real-world load. I pair this with incremental modernization strategies that reduce technical debt safely, without forcing disruptive all-at-once rewrites.',
      examples: [
        'Frontend performance audits and loading strategy improvements',
        'Caching and data-fetch optimization for API-heavy views',
        'Alerting and monitoring baselines for early issue detection',
        'Post-incident improvement plans with practical hardening tasks',
      ],
    },
    {
      title: 'Technical Consulting and Data Strategy',
      summary: 'Architecture guidance, delivery planning, and practical analytics direction.',
      details:
        'I provide clear technical direction at the planning stage to avoid rework and ensure architecture choices match delivery goals. This also includes data and reporting strategy support so leadership and product teams can make decisions from trusted, understandable metrics.',
      examples: [
        'Architecture reviews for new and existing systems',
        'Roadmap planning for incremental feature delivery',
        'Trade-off analysis between speed, cost, and maintainability',
        'Technical risk discovery before implementation begins',
      ],
    },
  ],
  backHomeLabel: 'Back home',
}
