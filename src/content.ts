export const site = {
  name: 'Jyri Ilama',
  title: 'Jyri Ilama — AWS Architect & DevOps',
  description:
    'Freelance AWS architect and DevOps consultant. Multi-account Terraform, CI/CD, and the cost and security work that makes it stick.',
  role: 'Freelance AWS architect and DevOps consultant.',
  shortRole: 'AWS architect & DevOps',
  intro:
    'I help teams ship on AWS: architecture, CI/CD, infrastructure as code, plus the audits and training that make it stick.',
  company: 'iLama Oy',
  location: 'Helsinki',
  year: 2026,
  portrait: {
    src: '/jyri.jpg',
    alt: 'Portrait of Jyri Ilama',
    width: 480,
    height: 480,
  },
  links: {
    linkedin: {
      label: 'LinkedIn',
      href: 'https://fi.linkedin.com/in/jyriilama',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/jyrmyx',
    },
  },
  selectedWork: [
    {
      period: '2026 –',
      org: 'Finnish telecom operator',
      title: 'AWS architect',
      detail:
        'Run AWS for the operator’s B2B end customers — the ones who buy operations, not a cloud team. Terraform and Account Factory for Terraform across several estates, GuardDuty and Security Hub switched on, costs cut hard with cleanup and boring optimization.',
    },
    {
      period: '2020 –',
      org: 'Public sector / education',
      title: 'DevOps and infrastructure as code',
      detail:
        'Long engagement: pipelines the product teams can own, tens of AWS accounts, then a maintenance-mode move off Kubernetes onto ECS Fargate so the remaining team could actually run it.',
    },
    {
      period: '2014 – 2019',
      org: 'Large-scale product engineering',
      title: 'CI/CD at hundreds of agents',
      detail:
        'Designed a from-scratch CI system, later moved it Azure → AWS, and came back to stabilize it when it had grown out of bounds. Parallelism in the hundreds; pipeline time and cloud bill both down about 30%.',
    },
  ],
  capabilities: [
    {
      title: 'AWS architecture',
      detail:
        'Multi-account foundations, networking, and service choices sized to the blast radius you can live with.',
    },
    {
      title: 'CI/CD',
      detail:
        'Pipelines that promote the same artifact every time — with gates that catch drift before production does.',
    },
    {
      title: 'Infrastructure as code',
      detail:
        'Terraform — including Account Factory for Terraform — that reviews cleanly, fails loudly, and survives the next engineer.',
    },
    {
      title: 'Cost, security, audits',
      detail:
        'GuardDuty, Security Hub, the cleanup nobody scheduled, and training so the team can keep it that way.',
    },
  ],
} as const;
