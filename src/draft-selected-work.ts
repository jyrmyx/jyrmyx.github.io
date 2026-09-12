/** Draft only — not rendered on the site. */
export const selectedWork = [
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
] as const;
