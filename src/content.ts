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
        'Run AWS for the operator’s end customers — they buy operations, not a cloud team. Terraform and Account Factory for Terraform across several estates, GuardDuty and Security Hub switched on. Precise cleanup and optimization that cut monthly costs by tens of percent.',
    },
    {
      period: '2020 –',
      org: 'Public sector / education',
      title: 'DevOps and infrastructure as code',
      detail:
        'A large knowledge-base product with plenty of on-prem and cloud integrations. First the CI: shared Jenkins libraries so the development teams could own their pipelines. Then the platform as code — tens of AWS accounts, IAM, networks, VPNs. When it went to maintenance, moved Kubernetes to ECS Fargate and Spinnaker to Jenkins so a smaller team could actually run it.',
    },
    {
      period: '2014 – 2019',
      org: 'Large-scale product engineering',
      title: 'CI/CD lead',
      detail:
        'Built a CI/CD system from scratch: hundreds of feature branches, 200–300 machines a day, first in Azure, then AWS. Golden AMIs, CloudFormation deploys, one-click test environments for the testers. Came back when it had grown unstable — agent connections, tenancy, parallelism — and pipeline time and direct cloud cost both dropped about 30%.',
    },
    {
      period: '2008 – 2014',
      org: 'Telecom and consulting',
      title: 'CI, test automation, team lead',
      detail:
        'Started automating tests on a 3G network-element platform, then years of CI in telecom — Robot Framework, Jenkins, coaching teams here and in China. Led a DevOps team of about ten while still doing the work: audits, pipelines from scratch, getting people onto shared tools.',
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
