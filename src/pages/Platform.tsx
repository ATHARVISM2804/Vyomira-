import { BarChart3, Shield, TrendingDown, Activity, Database, Zap, ArrowRight } from 'lucide-react';

export default function Platform() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A unified cloud management platform powered by AI, designed for modern enterprises
              who demand security, efficiency, and scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold mb-6">Cost Optimization Dashboard</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get real-time visibility into your cloud spending across all providers.
                Our AI engine analyzes usage patterns and provides actionable recommendations
                to reduce costs without sacrificing performance.
              </p>
              <ul className="space-y-4">
                {[
                  'Multi-cloud cost visibility',
                  'AI-powered savings recommendations',
                  'Budget alerts and forecasting',
                  'Resource utilization analytics'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Cost Overview</h3>
                <TrendingDown className="text-green-400" size={24} />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">This Month</span>
                    <span className="text-white font-semibold">$12,450</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Last Month</span>
                    <span className="text-gray-500">$18,320</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-600" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Savings</span>
                    <span className="text-2xl font-bold text-green-400">$5,870</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">32% reduction from last month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Security Score</h3>
                  <Shield className="text-blue-400" size={24} />
                </div>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-gradient mb-2">94</div>
                  <p className="text-gray-400">Out of 100</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-sm text-gray-300">Critical Issues</span>
                    <span className="text-sm font-semibold text-red-400">0</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-sm text-gray-300">High Priority</span>
                    <span className="text-sm font-semibold text-orange-400">2</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded">
                    <span className="text-sm text-gray-300">Medium Priority</span>
                    <span className="text-sm font-semibold text-yellow-400">5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Security & Compliance</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Continuous security monitoring with automated compliance reporting.
                Stay ahead of vulnerabilities and maintain compliance with industry standards
                including SOC 2, GDPR, and HIPAA.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time threat detection',
                  'Automated compliance scans',
                  'Vulnerability assessments',
                  'Policy enforcement automation'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Powered by <span className="text-gradient">AI-Driven Insights</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Predictive Analytics',
                description: 'Machine learning models forecast usage patterns and predict cost trends before they impact your budget.'
              },
              {
                icon: Activity,
                title: 'Anomaly Detection',
                description: 'AI algorithms continuously monitor for unusual activity, security threats, and performance issues.'
              },
              {
                icon: Zap,
                title: 'Smart Optimization',
                description: 'Automated recommendations for resource rightsizing, reserved capacity, and architecture improvements.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all group">
                <div className="inline-flex w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
              <Database className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Multi-Cloud Support</h3>
              <p className="text-gray-400 mb-6">
                Manage AWS, Azure, Google Cloud, and more from a single unified dashboard.
                No more switching between consoles.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'].map((provider) => (
                  <span key={provider} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm">
                    {provider}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
              <Zap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">API & Integrations</h3>
              <p className="text-gray-400 mb-6">
                Seamlessly integrate with your existing tools and workflows. Full REST API
                and webhooks for custom automation.
              </p>
              <a href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                View Documentation
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">See the Platform in Action</h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a personalized demo to explore how Vyomira can transform your cloud operations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </div>
  );
}
