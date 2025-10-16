import { ArrowRight, Shield, Zap, Cloud, BarChart3, CheckCircle, Users, Award, TrendingUp, Clock, Globe, Lock, DollarSign, FileCheck, Cog, CreditCard } from 'lucide-react';
import { useState } from 'react';
import CalendlyPopup from '../components/Calendlypopup';

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Expert Support' }
  ];

  const features = [
   
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
    },
    {
      icon: DollarSign,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud spending with intelligent resource allocation and optimization.',
      color: 'from-emerald-500 to-green-400'
    },
    {
      icon: FileCheck,
      title: 'Security & Compliance Automation',
      description: 'Automate security checks and compliance protocols across your infrastructure.',
      color: 'from-orange-500 to-red-400'
    },
    {
      icon: Cog,
      title: 'DevOps Managed Services',
      description: 'End-to-end management of your DevOps pipeline for maximum efficiency.',
      color: 'from-blue-500 to-indigo-400'
    },
    {
      icon: CreditCard,
      title: 'Cloud Billing Partner',
      description: 'Consolidated billing and payment optimization for all your cloud providers.',
      color: 'from-pink-500 to-purple-400'
    }
  ];

  const benefits = [
    'AI-Driven Cloud Intelligence – Detect anomalies, forecast usage, and optimize spend.',
    'Security-First Architecture – Identify misconfigurations, enforce compliance, and stay audit-ready.',
    'Unified Billing & Cost Control – Consolidate AWS, GCP, and Azure payments under one secure roof.',
    'End-to-End DevOps Expertise – From architecture to automation, we help you build resilient systems.'
  ];

  const companyLogos = [
    { 
      name: 'Fanatics', 
      logo: '/logos/fanatics.svg',
      color: 'from-blue-600/20 to-blue-800/20'
    },
    { 
      name: 'Microsoft', 
      logo: '/logos/microsoft.svg',
      color: 'from-blue-500/20 to-cyan-500/20' 
    },
    { 
      name: 'GitHub', 
      logo: '/logos/github.svg',
      color: 'from-purple-600/20 to-purple-800/20' 
    },
    { 
      name: 'Accenture', 
      logo: '/logos/accenture.svg',
      color: 'from-indigo-600/20 to-indigo-800/20' 
    },
    { 
      name: 'Kong', 
      logo: '/logos/kong.svg',
      color: 'from-red-600/20 to-red-800/20' 
    },
    { 
      name: 'Dell', 
      logo: '/logos/dell.svg',
      color: 'from-cyan-600/20 to-blue-800/20' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="aurora-blob aurora-blob-1" style={{ top: '10%', right: '10%' }}></div>
      <div className="aurora-blob aurora-blob-2" style={{ bottom: '20%', left: '5%' }}></div>
      <div className="aurora-blob aurora-blob-3" style={{ top: '50%', left: '50%' }}></div>

      <section className="relative min-h-[90vh] flex items-center py-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-[#0a0a0a] to-cyan-950/20"></div>
          <div className="absolute inset-0 grid-crosses opacity-[0.15]"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glassmorphism rounded-full text-xs sm:text-sm text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                3.0 beta is live
                <ArrowRight size={14} className="hidden sm:inline-block" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1]">
                The fastest way to<br />
                <span className="text-gradient">build tomorrow's cloud.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
                Vyomira Tech Solutions helps organizations take complete control of their cloud ecosystem with AI-powered insights, cost optimization, compliance automation, and managed DevOps services.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow text-sm sm:text-base"
                >
                  Schedule a Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Our Platform
                </a>
                {showCalendly && (
                  <CalendlyPopup
                    url="https://calendly.com/vyomira/demo"
                    open={showCalendly}
                    onClose={() => setShowCalendly(false)}
                    title="Schedule a Demo"
                  />
                )}
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

            {/* Mobile-only simplified hero image */}
            <div className="lg:hidden relative h-60 sm:h-72 mt-4 animate-fade-in-up">
              <div className="relative w-full h-full glassmorphism-strong rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>
                <div className="text-center space-y-4 relative z-10 px-4">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    <span className="block text-gray-200">NEXT-GEN</span>
                    <span className="block text-gradient">IS HERE</span>
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">Power anything you can imagine.</p>
                  <div className="flex gap-2 justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
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
        <div className="aurora-blob aurora-blob-2" style={{ top: '30%', right: '15%', opacity: 0.3 }}></div>
        <div className="aurora-blob aurora-blob-3" style={{ bottom: '10%', left: '20%', opacity: 0.2 }}></div>
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 sm:mb-20 text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted by industry <span className="text-gradient">leaders</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Vyomira powers mission-critical infrastructure for Fortune 500 companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {companyLogos.map((company, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-36 sm:h-40 rounded-2xl flex items-center justify-center p-6 transition-all duration-500 hover:scale-[1.02] relative">
                  {/* Enhanced glassmorphism background */}
                  <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-40 backdrop-blur-md rounded-2xl border border-white/5"></div>
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-40"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/10 rounded-tl-md"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10 rounded-tr-md"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10 rounded-bl-md"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/10 rounded-br-md"></div>
                  
                  {/* Company name */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-medium text-gray-100 group-hover:text-white transition-colors">
                      {company.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced testimonial card */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up">
            <div className="rounded-2xl relative overflow-hidden">
              {/* Enhanced glassmorphism background */}
              <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-50 backdrop-blur-md"></div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5"></div>
              
              {/* Border highlights */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/10 rounded-tl-md"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/10 rounded-br-md"></div>
              
              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                  <div className="w-full sm:w-1/4 flex-shrink-0 mb-6 sm:mb-0">
                    <div className="relative h-20 w-full rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Enterprise logo box */}
                      <div className="absolute inset-0 bg-[#222] bg-opacity-70 backdrop-blur-md border border-white/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">Enterprise</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-200 text-sm sm:text-base italic">
                      "Vyomira's cloud optimization platform reduced our AWS costs by 42% while improving overall performance. The implementation was seamless and their support team has been exceptional."
                    </blockquote>
                    <div className="mt-4 text-sm text-gray-400">
                      <span className="font-medium text-white">Chief Technology Officer</span> • Fortune 100 Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        How Vyomira <span className="text-gradient">Transforms</span> Your Cloud
      </h2>
      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
        Our comprehensive approach covers every aspect of modern cloud infrastructure management
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
      {[
        {
          title: "AI-Powered Cost Optimization",
          description: "Our intelligent algorithms analyze your usage patterns to identify waste and recommend optimal resource allocation, typically reducing costs by 30-60%.",
          icon: DollarSign,
          metrics: "Avg. Savings: 42%"
        },
        {
          title: "Security & Compliance",
          description: "Automated scans detect misconfigurations, vulnerabilities, and policy violations before they become problems. Stay compliant with HIPAA, GDPR, SOC 2, and more.",
          icon: Shield,
          metrics: "100+ Security Checks"
        },
        {
          title: "Performance Monitoring",
          description: "Real-time monitoring with intelligent alerting ensures your applications run at peak performance. Identify bottlenecks before they affect your users.",
          icon: BarChart3,
          metrics: "99.9% SLA Guarantee"
        },
        {
          title: "Multi-Cloud Management",
          description: "Unified dashboard to manage AWS, Azure, GCP, and other providers from a single interface. Standardize operations across your entire infrastructure.",
          icon: Globe,
          metrics: "7+ Cloud Providers"
        },
        {
          title: "DevOps Automation",
          description: "Infrastructure as code templates, CI/CD pipeline optimization, and containerization solutions to accelerate your development lifecycle.",
          icon: Cog,
          metrics: "70% Faster Deployments"
        },
        {
          title: "24/7 Expert Support",
          description: "Our team of certified cloud architects and engineers are available around the clock to help troubleshoot issues and optimize your infrastructure.",
          icon: Users,
          metrics: "15min Avg. Response Time"
        }
      ].map((item, idx) => (
        <div 
          key={idx} 
          className="glassmorphism rounded-2xl p-6 hover:glassmorphism-strong transition-all duration-300"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center mb-5">
            <item.icon size={24} className="text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center mt-auto pt-4 border-t border-white/5">
            <div className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
              {item.metrics}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 glassmorphism rounded-2xl p-8 animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Ready to see it in action?</h3>
          <p className="text-gray-400 mb-6">
            Schedule a personalized demo with our cloud specialists to see how Vyomira can transform your specific infrastructure challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              Visit Solutions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/platform"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              Explore Platform
            </a>
          </div>
        </div>
        <div className="glassmorphism-dark rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-3 text-gradient">Industry Success Metrics</h4>
          <div className="space-y-4">
            {[
              { label: "Average Cost Reduction", value: "42%" },
              { label: "Implementation Time", value: "< 2 weeks" },
              { label: "Performance Improvement", value: "35%" },
              { label: "Security Incident Reduction", value: "76%" }
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-gray-400">{stat.label}</span>
                <span className="text-white font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
