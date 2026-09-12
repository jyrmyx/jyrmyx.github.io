export const site = {
  name: 'Jyri Ilama',
  title: 'Jyri Ilama — AWS Architect & DevOps',
  description:
    'Freelance AWS architect and DevOps consultant. Multi-account Terraform, CI/CD, and the cost and security work that makes it stick.',
  role: 'Freelance AWS architect and DevOps consultant.',
  shortRole: 'AWS architect & DevOps',
  intro:
    'I help teams ship on AWS: architecture, CI/CD, infrastructure as code, plus the audits and training that make it stick.',
  careerStartYear: 2008,
  company: 'iLama Oy',
  location: 'Helsinki',
  email: 'jyri.ilama@gmail.com',
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
        'Modular Terraform — reusable modules, not copy-pasted stacks. Everything is code: the cloud, and the tools — how they are set up, installed, and configured, not only the infra they sit on.',
    },
    {
      title: 'Cost, security, audits',
      detail:
        'GuardDuty, Security Hub, the cleanup nobody scheduled, and training so the team can keep it that way.',
    },
    {
      title: 'AI in the work',
      detail:
        'Analysis, code, tests, infra, reviews — the model drafts, the same gates still apply. Faster loops without lowering the bar.',
    },
  ],
} as const;
