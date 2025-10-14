import { Target, Eye, Award, Users, Shield, Brain, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-gradient">Vyomira</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're building the future of cloud management with AI-powered insights,
              security-first architecture, and enterprise-grade managed services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To empower businesses with intelligent cloud solutions that drive efficiency,
                security, and growth. We believe cloud infrastructure should be simple,
                secure, and cost-effective.
              </p>
              <div className="flex items-start space-x-4">
                <Target className="text-blue-400 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Focused on Results</h3>
                  <p className="text-gray-400">We measure success by your cost savings, security improvements, and operational efficiency.</p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
              <Eye className="text-cyan-400 mb-4" size={32} />
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the world's most trusted cloud management platform, where every
                business can harness the full potential of cloud technology without complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Why Vyomira is <span className="text-gradient">Different</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security-First Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Every feature we build starts with security. From automated compliance scanning
                to real-time threat detection, we protect your infrastructure 24/7. Our platform
                is SOC 2 Type II certified and GDPR compliant.
              </p>
            </div>

            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
              <p className="text-gray-400 leading-relaxed">
                Our machine learning algorithms continuously analyze your cloud usage patterns,
                identifying optimization opportunities you didn't know existed. Save up to 60%
                on cloud costs with intelligent recommendations.
              </p>
            </div>

            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fully Managed Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Our expert DevOps team handles everything from infrastructure setup to 24/7
                monitoring. You focus on building products while we ensure your cloud
                infrastructure is optimized, secure, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in everything we build.'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your success is our success. We prioritize your needs.'
              },
              {
                icon: Shield,
                title: 'Trust',
                description: 'Security and transparency are non-negotiable.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We push boundaries with cutting-edge technology.'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg items-center justify-center mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for talented individuals who share our passion for
            innovation and excellence.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
