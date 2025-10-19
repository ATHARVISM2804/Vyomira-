import { Target, Eye, Award, Users, Shield, Brain, Lock, DollarSign, Code } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engineering <span className="text-gradient">Trust</span> in Every Cloud.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded with a vision to make cloud infrastructure intelligent, secure, and cost-efficient, 
              Vyomira Tech Solutions Pvt Ltd delivers enterprise-grade DevOps, security, and cloud automation 
              services — powered by AI.
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
                To simplify and secure the cloud journey of every business.
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
                To be the most trusted partner for intelligent, secure, and compliant cloud operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our <span className="text-gradient">Unique Approach</span>
          </h2>

          <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent mb-16">
            <p className="text-xl text-center text-gray-300 leading-relaxed">
              Vyomira bridges the gap between <span className="font-bold text-blue-400">DevOps</span>, 
              <span className="font-bold text-cyan-400"> Security</span>, and 
              <span className="font-bold text-green-400"> Finance</span>, empowering organizations 
              to save costs, stay compliant, and scale with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">DevOps</h3>
              <p className="text-gray-400 leading-relaxed">
                Our expert team handles everything from infrastructure setup to CI/CD pipeline optimization. 
                We implement best practices that ensure your applications are reliable, scalable, and 
                continuously delivered with confidence.
              </p>
            </div>

            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Security is built into everything we do. From automated compliance scanning to 
                real-time threat detection, our security-first architecture protects your 
                infrastructure around the clock while meeting industry standards.
              </p>
            </div>

            <div className="group p-8 border border-white/5 rounded-lg hover:border-blue-500/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <DollarSign size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Finance</h3>
              <p className="text-gray-400 leading-relaxed">
                Our AI-powered cost optimization tools analyze your cloud usage patterns to identify 
                savings opportunities, forecast spending, and ensure you're getting maximum value 
                from your cloud investment.
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
                title: 'Integrity & Transparency',
                description: 'We believe in clear communication and honest business practices.'
              },
              {
                icon: Shield,
                title: 'Security & Trust',
                description: 'Your data and infrastructure security are our top priorities.'
              },
              {
                icon: Brain,
                title: 'Innovation & Automation',
                description: 'We constantly pursue better, smarter ways to solve problems.'
              },
              {
                icon: Users,
                title: 'Customer-Centric Delivery',
                description: 'Your success drives everything we build and deliver.'
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
