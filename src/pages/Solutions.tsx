import { TrendingDown, Lock, Zap, DollarSign, ArrowRight, Check, X, LucideIcon } from 'lucide-react';
import { useState } from 'react';

type Solution = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  stats: { value: string; label: string };
  modalContent: {
    keyFeatures: string[];
    caseStudy: { title: string; description: string };
    testimonial: { quote: string; author: string };
  };
};

export default function Solutions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<Solution | null>(null);

  const solutions: Solution[] = [
    {
      icon: TrendingDown,
      title: 'Cloud Cost Optimization',
      tagline: 'Spend Smarter. Scale Faster.',
      description: 'Our AI-driven engine analyzes your AWS, GCP, and Azure usage to detect wastage, forecast future spending, and recommend rightsizing strategies — ensuring you only pay for what you need.',
      benefits: [
        'Reduce spend by 20–40%',
        'Real-time anomaly detection',
        'Predictive cost analytics',
        'Reserved instance & savings plan suggestions'
      ],
      stats: { value: '40%', label: 'Potential Cost Reduction' },
      modalContent: {
        keyFeatures: [
          'Multi-cloud resource monitoring across AWS, Azure, and GCP',
          'Real-time cost anomaly detection with instant alerts',
          'Automated resource scheduling and auto-scaling based on usage patterns',
          'Reserved instance and savings plan optimization recommendations',
          'Waste identification for idle and underutilized resources',
          'Custom budget alerts and forecasting',
          'Cost allocation and tagging strategies'
        ],
        caseStudy: {
          title: 'How a SaaS Company Reduced Cloud Spend by 42%',
          description: 'A rapidly growing SaaS provider was struggling with escalating AWS costs as they scaled. Our AI-driven optimization engine identified unused resources, recommended right-sizing opportunities, and implemented automated scheduling for non-production environments, resulting in a 42% reduction in monthly cloud expenditure within 30 days.'
        },
        testimonial: {
          quote: 'Vyomira\'s cost optimization platform paid for itself within weeks. Their recommendations helped us identify spending issues we didn\'t even know existed.',
          author: 'CTO, Enterprise SaaS Company'
        }
      }
    },
    {
      icon: Lock,
      title: 'Security & Compliance Automation',
      tagline: 'Secure by Design. Compliant by Default.',
      description: 'We thoroughly assess your infrastructure to uncover vulnerabilities, misconfigurations, and compliance gaps. You\'ll receive detailed remediation steps, helping you achieve PCI DSS, ISO 27001, SOC2, and CIS compliance quickly and confidently.',
      benefits: [
        'Infrastructure-wide risk analysis',
        'Automated benchmark checks',
        'Continuous compliance monitoring',
        'Actionable gap-fix recommendations',
        'Exportable audit-ready reports'
      ],
      stats: { value: '99%', label: 'Compliance Coverage' },
      modalContent: {
        keyFeatures: [
          'Continuous security posture assessment',
          'Automated compliance checks for PCI DSS, HIPAA, ISO 27001, SOC2, and GDPR',
          'Real-time vulnerability scanning and remediation recommendations',
          'Network security monitoring and intrusion detection',
          'Identity and access management best practices',
          'Data encryption and protection controls',
          'Audit-ready compliance reporting'
        ],
        caseStudy: {
          title: 'Achieving SOC2 Compliance in Record Time',
          description: 'A fintech startup needed to achieve SOC2 compliance quickly to close enterprise deals. Using our compliance automation platform, they identified and remediated over 150 control gaps across their AWS environment in just 6 weeks, successfully completing their audit and accelerating their sales cycle.'
        },
        testimonial: {
          quote: 'The security automation tools from Vyomira dramatically simplified our compliance journey. What would have taken months of manual work was completed in weeks.',
          author: 'CISO, Fintech Startup'
        }
      }
    },
    {
      icon: Zap,
      title: 'DevOps Managed Services',
      tagline: 'We Build. You Scale.',
      description: 'Our dedicated DevOps engineers manage your CI/CD pipelines, infrastructure provisioning, monitoring, and automation. Focus on your product while we ensure reliability, scalability, and security.',
      benefits: [
        'Infrastructure automation (Terraform/Ansible)',
        'CI/CD pipeline setup & management',
        '24×7 environment monitoring',
        'High-availability & disaster recovery'
      ],
      stats: { value: '24/7', label: 'Expert Support' },
      modalContent: {
        keyFeatures: [
          'Infrastructure as Code (IaC) implementation with Terraform and CloudFormation',
          'CI/CD pipeline setup and optimization (GitHub Actions, Jenkins, GitLab)',
          'Kubernetes cluster management and optimization',
          'Microservices architecture implementation',
          'Monitoring and observability setup (Prometheus, Grafana, ELK)',
          'Incident response and management',
          'Performance optimization and auto-scaling'
        ],
        caseStudy: {
          title: 'Accelerating Deployment Frequency by 300%',
          description: 'An e-commerce platform was struggling with lengthy, error-prone deployments that occurred once per month. Our DevOps team implemented a fully automated CI/CD pipeline with comprehensive testing, enabling them to deploy multiple times per day with zero downtime, resulting in faster feature delivery and improved customer satisfaction.'
        },
        testimonial: {
          quote: 'Vyomira\'s DevOps team transformed our deployment process from a monthly headache into a daily non-event. Our developers can now focus on building features instead of fighting infrastructure issues.',
          author: 'VP of Engineering, E-commerce Platform'
        }
      }
    },
    {
      icon: DollarSign,
      title: 'Cloud Billing Partner / Reseller',
      tagline: 'Simplify Cloud Payments.',
      description: 'Vyomira consolidates and manages your multi-cloud billing. Get a unified invoice, detailed usage analytics, and flexible payment options — all in one dashboard.',
      benefits: [
        'Centralized billing for AWS/GCP/Azure',
        'AI-based spend forecasting',
        'Credit utilization tracking',
        'Transparent, single-window payments'
      ],
      stats: { value: '1', label: 'Unified Invoice' },
      modalContent: {
        keyFeatures: [
          'Consolidated billing across AWS, Azure, and GCP',
          'Extended payment terms (Net-30, Net-45, Net-60)',
          'Detailed usage analytics and allocation by department',
          'Budget management and forecasting tools',
          'Credit utilization tracking and optimization',
          'Volume-based discounts and cost savings',
          'Custom billing cycles and payment options'
        ],
        caseStudy: {
          title: 'Streamlining Multi-Cloud Billing for Global Enterprise',
          description: 'A multinational corporation with operations across 12 countries was managing over 30 different cloud accounts across three providers. By consolidating their billing through Vyomira, they eliminated administrative overhead, gained visibility into global cloud spending patterns, and negotiated better rates based on their total usage volume.'
        },
        testimonial: {
          quote: 'Managing our cloud bills used to require a dedicated finance person. With Vyomira\'s consolidated billing, we\'ve simplified the process and gained insights that have helped us optimize our spending across all cloud providers.',
          author: 'CFO, Global Retail Company'
        }
      }
    }
  ];

  const openModal = (solution: Solution) => {
    setCurrentSolution(solution);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Four Pillars. <span className="text-gradient">One Secure Cloud Future.</span>
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
                <h2 className="text-4xl font-bold mb-2">{solution.title}</h2>
                <p className="text-xl text-blue-400 font-medium mb-4">{solution.tagline}</p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-gradient mb-2">{solution.stats.value}</div>
                  <div className="text-gray-400">{solution.stats.label}</div>
                </div>

                <button
                  onClick={() => openModal(solution)}
                  className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all group"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
                  <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit: string, benefitIdx: number) => (
                      <li key={benefitIdx} className="flex items-start">
                        <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{benefit}</span>
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
          <h2 className="text-4xl font-bold mb-6">Combine cost savings with security excellence</h2>
          <p className="text-xl text-gray-400 mb-8">
            Experience Vyomira today and transform your cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button"
            >
              Request Demo
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white/20 rounded-lg font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
  {modalOpen && currentSolution && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gray-900 z-10 flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                  <currentSolution.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{currentSolution.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{currentSolution.tagline}</h4>
                <p className="text-gray-300 leading-relaxed">{currentSolution.description}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {currentSolution.modalContent.keyFeatures.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-950/30 to-transparent p-6 rounded-lg border border-white/5">
                <h4 className="text-xl font-semibold mb-4">Case Study</h4>
                <h5 className="text-lg font-medium mb-2 text-blue-400">{currentSolution.modalContent.caseStudy.title}</h5>
                <p className="text-gray-300 leading-relaxed">{currentSolution.modalContent.caseStudy.description}</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-white/5">
                <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">
                  "{currentSolution.modalContent.testimonial.quote}"
                </blockquote>
                <p className="text-blue-400 font-medium">— {currentSolution.modalContent.testimonial.author}</p>
              </div>
              
              <div className="flex justify-center pt-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
