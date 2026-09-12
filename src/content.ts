export const site = {
  name: 'Jyri Ilama',
  title: 'Jyri Ilama — AWS Architect & DevOps',
  description:
    'I help teams ship on AWS: architecture, CI/CD, infrastructure as code, plus the audits and training that make it stick.',
  role: 'Freelance AWS architect and DevOps consultant.',
  intro:
    'I help teams ship on AWS: architecture, CI/CD, infrastructure as code, plus the audits and training that make it stick.',
  tagline: 'Your DevOps Partner',
  brand: 'iLama',
  company: 'iLama Oy',
  location: 'Helsinki',
  year: 2026,
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
        'Terraform and CloudFormation that review cleanly, fail loudly, and survive the next engineer.',
    },
    {
      title: 'Audits and training',
      detail:
        'Find the gaps, close them, and leave the team able to keep them closed without you.',
    },
  ],
} as const;
