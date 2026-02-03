import { Shield, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const successStories = [
    {
      title: 'FinTech Compliance Audit',
      icon: Shield,
      challenge: 'A financial services application required urgent PCI-DSS compliance to secure their Series A funding.',
      solution: 'We architected a secure AWS environment using Private Subnets, AWS WAF, and GuardDuty. Implemented automated compliance checks using AWS Config.',
      result: 'The infrastructure passed the third-party security audit in 2 weeks with zero critical vulnerabilities.',
      resultHighlight: 'Zero Critical Vulnerabilities',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'High-Scale Cost Optimization',
      icon: DollarSign,
      challenge: 'A SaaS platform was overspending by 40% on idle EC2 instances and unoptimized RDS databases.',
      solution: 'We implemented an auto-scaling architecture and Spot Instance strategy for non-critical workloads.',
      result: 'Reduced monthly cloud billing by 35% while maintaining 99.99% uptime.',
      resultHighlight: '35% Cost Reduction',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16 text-center mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full text-sm text-cyan-400 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Real Results, Real Impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Recent <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              See how we've helped companies achieve bank-grade security and significant cost savings.
            </p>
          </div>

          {/* Success Story Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group glassmorphism rounded-2xl p-8 hover:glassmorphism-strong transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <story.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                    <div className={`inline-block px-3 py-1 mt-1 rounded-full text-xs font-medium bg-gradient-to-r ${story.color} text-white`}>
                      {story.resultHighlight}
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">The Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">{story.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Our Solution</h4>
                  <p className="text-gray-300 leading-relaxed">{story.solution}</p>
                </div>

                {/* Result */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-1">Result</h4>
                      <p className="text-white font-medium">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="glassmorphism rounded-2xl p-8 sm:p-12 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring bank-grade security and cost optimization to your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow"
              >
                Get Your Free Security Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
