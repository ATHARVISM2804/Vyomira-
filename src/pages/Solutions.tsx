import { TrendingDown, Lock, Zap, DollarSign, ArrowRight, Check } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: TrendingDown,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud spending by up to 60% with AI-powered cost analysis and optimization recommendations.',
      features: [
        'Real-time cost monitoring and alerts',
        'AI-powered optimization recommendations',
        'Reserved instance and savings plan analysis',
        'Multi-cloud cost comparison',
        'Automated resource rightsizing',
        'Detailed cost attribution and tagging'
      ],
      stats: { value: '60%', label: 'Average Cost Reduction' }
    },
    {
      icon: Lock,
      title: 'Security & Compliance Automation',
      description: 'Automated security scanning, compliance reporting, and threat detection for enterprise-grade protection.',
      features: [
        'Continuous security posture monitoring',
        'Automated compliance reporting (SOC 2, GDPR, HIPAA)',
        'Vulnerability scanning and remediation',
        'Real-time threat detection',
        'Access control and audit logging',
        'Security policy enforcement'
      ],
      stats: { value: '99.9%', label: 'Uptime SLA' }
    },
    {
      icon: Zap,
      title: 'DevOps Managed Services',
      description: 'End-to-end DevOps support including infrastructure setup, CI/CD pipelines, and 24/7 monitoring.',
      features: [
        '24/7 infrastructure monitoring',
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Kubernetes)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      stats: { value: '24/7', label: 'Expert Support' }
    },
    {
      icon: DollarSign,
      title: 'Cloud Billing Partner / Reseller',
      description: 'Simplified cloud billing management with consolidated invoicing and flexible payment options.',
      features: [
        'Consolidated multi-cloud billing',
        'Flexible payment terms',
        'Usage analytics and forecasting',
        'Cost allocation and chargeback',
        'Volume-based discounts',
        'Dedicated account management'
      ],
      stats: { value: '$2M+', label: 'Savings Delivered' }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Solutions & <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive cloud solutions designed to optimize costs, enhance security,
              and accelerate your digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg items-center justify-center mb-6">
                  <solution.icon size={32} />
                </div>
                <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-gradient mb-2">{solution.stats.value}</div>
                  <div className="text-gray-400">{solution.stats.label}</div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all group"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {solution.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cloud?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a demo to see how Vyomira can optimize your cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button"
            >
              Request a Demo
            </a>
            <a
              href="/platform"
              className="px-8 py-4 border border-white/20 rounded-lg font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
            >
              View Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
