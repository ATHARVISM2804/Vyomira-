import { ArrowRight, Shield, Zap, Cloud, BarChart3, CheckCircle, Users, Award, TrendingUp, Clock, Globe, Lock } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Expert Support' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with automated compliance and real-time threat detection.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with edge computing and intelligent caching strategies.',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud',
      description: 'Seamless integration across AWS, Azure, Google Cloud, and more platforms.',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'AI-powered insights with predictive analytics and cost optimization.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team communication and project management.',
      color: 'from-indigo-500 to-blue-400'
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'SOC 2, ISO 27001, HIPAA, and GDPR compliance out of the box.',
      color: 'from-red-500 to-pink-400'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 60%',
    'Deploy faster with automated CI/CD pipelines',
    '24/7 monitoring and instant alerting',
    'Scale automatically based on demand',
    'Enterprise-grade security and compliance',
    'Expert support from cloud architects'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="aurora-blob aurora-blob-1" style={{ top: '10%', right: '10%' }}></div>
      <div className="aurora-blob aurora-blob-2" style={{ bottom: '20%', left: '5%' }}></div>
      <div className="aurora-blob aurora-blob-3" style={{ top: '50%', left: '50%' }}></div>

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-[#0a0a0a] to-cyan-950/20"></div>
          <div className="absolute inset-0 grid-crosses opacity-[0.15]"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full text-sm text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                3.0 beta is live
                <ArrowRight size={14} />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
                The fastest way to<br />
                <span className="text-gradient">build tomorrow's cloud.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                Power anything from cost optimization to security automation with Vyomira's AI-powered cloud platform & modern admin UI that you truly own.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow"
                >
                  Schedule a Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </div>

            <div className="relative perspective-1000 animate-slide-in-right hidden lg:block">
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 transform rotate-y-15 animate-float">
                  <div className="relative w-full h-full glassmorphism-strong rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-900 via-black to-gray-950 flex items-center justify-center p-12">
                      <div className="text-center space-y-6">
                        <h3 className="text-5xl sm:text-6xl font-bold tracking-tight">
                          <span className="block text-gray-200">NEXT-GEN</span>
                          <span className="block text-gradient">IS HERE</span>
                        </h3>
                        <p className="text-gray-400 text-lg">Power anything you can imagine.</p>
                        <div className="flex gap-2 justify-center">
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-gray-900 rounded-b-2xl"></div>

                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-700 rounded-b-2xl flex items-center justify-center gap-8 px-12">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-8 h-1 bg-gray-600 rounded-full"></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-2 bg-gradient-to-r from-transparent via-black/50 to-transparent blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glassmorphism rounded-2xl p-6 sm:p-8 text-center hover:glassmorphism-strong transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative z-10 border-t border-white/5">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 sm:mb-20 text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted by industry <span className="text-gradient">leaders</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Vyomira powers mission-critical infrastructure for Fortune 500 companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 mb-12">
            {[
              { name: 'Fanatics', type: 'text' },
              { name: 'Microsoft', type: 'text' },
              { name: '⬡', type: 'icon' },
              { name: '⚙', type: 'icon' },
              { name: 'accenture', type: 'text' },
              { name: 'Kong', type: 'text' }
            ].map((company, idx) => (
              <div
                key={idx}
                className="relative aspect-square glassmorphism flex items-center justify-center hover:glassmorphism-strong transition-all duration-300 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 rounded"></div>
                {company.type === 'icon' ? (
                  <div className="text-4xl sm:text-5xl opacity-40 group-hover:opacity-60 transition-opacity">{company.name}</div>
                ) : (
                  <span className="text-base sm:text-xl font-medium text-gray-400 group-hover:text-white transition-colors">{company.name}</span>
                )}
              </div>
            ))}
            <div className="col-span-2 aspect-[2/1] glassmorphism hover:glassmorphism-strong transition-all duration-300"></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative z-10 overflow-hidden">
        <div className="aurora-blob aurora-blob-2" style={{ top: '20%', right: '10%' }}></div>
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Powerful <span className="text-gradient">features</span> for modern teams
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale cloud infrastructure with confidence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 glassmorphism rounded-2xl hover:glassmorphism-strong transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative z-10 border-t border-white/5">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-2 glassmorphism rounded-full text-sm text-cyan-400 mb-6">
                Why Choose Vyomira
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Transform your cloud infrastructure with <span className="text-gradient">AI-powered automation</span>
              </h2>
              <p className="text-gray-400 mb-8 text-base sm:text-lg">
                Join hundreds of companies that have already modernized their cloud operations with Vyomira's intelligent platform.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 glassmorphism p-4 rounded-lg hover:glassmorphism-strong transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism-dark rounded-2xl p-8 sm:p-12 animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: TrendingUp, label: '300% ROI', subtitle: 'Average return' },
                  { icon: Clock, label: '10 mins', subtitle: 'Setup time' },
                  { icon: Globe, label: '150+', subtitle: 'Countries' },
                  { icon: Award, label: '#1 Rated', subtitle: 'Cloud platform' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 glassmorphism rounded-xl hover:glassmorphism-strong transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <item.icon size={32} className="mx-auto mb-3 text-blue-400" />
                    <div className="text-2xl font-bold mb-1">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative z-10 border-t border-white/5">
        <div className="aurora-blob aurora-blob-1" style={{ bottom: '10%', left: '20%' }}></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="glassmorphism-dark rounded-3xl p-8 sm:p-16 animate-scale-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your <span className="text-gradient">cloud infrastructure?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Start your free trial today. No credit card required. Get up and running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow"
              >
                Get Started Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
