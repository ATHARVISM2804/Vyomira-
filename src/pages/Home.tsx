import { ArrowRight, Shield, BarChart3, CheckCircle, Users, Award, TrendingUp, Clock, Globe, DollarSign,  Cog} from 'lucide-react';
import { useState } from 'react';
import CalendlyPopup from '../components/Calendlypopup';
import Chatbot from '../components/Chatbot';

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const stats = [
    { value: '9+', label: 'Years Experience' },
    { value: '100%', label: 'Audit Focus' },
    { value: '24/7', label: 'Support' },
    { value: '30-50%', label: 'Cost Reduction' }
  ];

  // const features = [
   
  //   {
  //     icon: Zap,
  //     title: 'Lightning Fast',
  //     description: 'Optimized performance with edge computing and intelligent caching strategies.',
  //     color: 'from-yellow-500 to-orange-400'
  //   },
  //   {
  //     icon: Cloud,
  //     title: 'Multi-Cloud',
  //     description: 'Seamless integration across AWS, Azure, Google Cloud, and more platforms.',
  //     color: 'from-purple-500 to-pink-400'
  //   },
  //   {
  //     icon: BarChart3,
  //     title: 'Analytics',
  //     description: 'AI-powered insights with predictive analytics and cost optimization.',
  //     color: 'from-green-500 to-emerald-400'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Team Collaboration',
  //     description: 'Built-in tools for seamless team communication and project management.',
  //     color: 'from-indigo-500 to-blue-400'
  //   },
  //   {
  //     icon: Lock,
  //     title: 'Compliance Ready',
  //     description: 'SOC 2, ISO 27001, HIPAA, and GDPR compliance out of the box.',
  //     color: 'from-red-500 to-pink-400'
  //   },
  //   {
  //     icon: DollarSign,
  //     title: 'Cloud Cost Optimization',
  //     description: 'Reduce cloud spending with intelligent resource allocation and optimization.',
  //     color: 'from-emerald-500 to-green-400'
  //   },
  //   {
  //     icon: FileCheck,
  //     title: 'Security & Compliance Automation',
  //     description: 'Automate security checks and compliance protocols across your infrastructure.',
  //     color: 'from-orange-500 to-red-400'
  //   },
  //   {
  //     icon: Cog,
  //     title: 'DevOps Managed Services',
  //     description: 'End-to-end management of your DevOps pipeline for maximum efficiency.',
  //     color: 'from-blue-500 to-indigo-400'
  //   },
  //   {
  //     icon: CreditCard,
  //     title: 'Cloud Billing Partner',
  //     description: 'Consolidated billing and payment optimization for all your cloud providers.',
  //     color: 'from-pink-500 to-purple-400'
  //   }
  // ];

  const benefits = [
    'Compliance & Security – Full architecture audits for PCI-DSS, ISO 27001, and HIPAA compliance.',
    'Cloud Cost Optimization – Stop wasting money on idle AWS/GCP/Azure resources. We typically reduce spend by 30-50%.',
    'Fractional DevOps – Get a Senior DevOps Engineer for a fraction of the cost of a full-time hire.',
    'End-to-End DevOps Expertise – CI/CD, Automation, Infrastructure as Code, and 24/7 Maintenance included.'
  ];

  // Technology Stack with SVG icons
  const techStackItems = [
    { 
      name: 'AWS', 
      subtitle: 'Cloud Infrastructure',
      glowColor: '#FF9900',
      gradientFrom: 'from-orange-500/20',
      gradientTo: 'to-amber-600/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <path d="M18.9 32.2c0 1.1.1 2 .4 2.6.2.5.4 1 .8 1.6.1.2.2.4.2.5 0 .2-.1.4-.4.7l-1.4.9c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-.9-.2-.3-.4-.7-.6-1.2-1.5 1.8-3.4 2.7-5.7 2.7-1.6 0-2.9-.5-3.9-1.4-1-.9-1.5-2.2-1.5-3.8 0-1.7.6-3.1 1.8-4.1 1.2-1 2.9-1.5 5-1.5.7 0 1.4.1 2.1.2.8.1 1.5.3 2.3.5v-1.5c0-1.5-.3-2.6-1-3.2-.6-.7-1.7-1-3.3-1-.7 0-1.4.1-2.2.3-.7.2-1.5.5-2.2.8-.3.2-.6.3-.7.3-.2 0-.3-.2-.3-.5v-1.1c0-.3 0-.5.1-.6.1-.1.2-.3.5-.4.7-.4 1.5-.7 2.5-1 1-.3 2-.4 3.1-.4 2.4 0 4.1.5 5.2 1.6 1.1 1.1 1.7 2.7 1.7 4.9v6.4zm-7.8 2.9c.7 0 1.4-.1 2.1-.4.8-.3 1.4-.7 2-1.3.3-.4.6-.8.7-1.3.1-.5.2-1 .2-1.7v-.8c-.6-.2-1.2-.3-1.8-.4-.7-.1-1.3-.1-2-.1-1.3 0-2.3.3-3 .8-.6.5-1 1.3-1 2.3 0 .9.2 1.6.8 2.1.5.5 1.2.8 2 .8zm15.4 2c-.3 0-.5 0-.6-.1-.2-.1-.3-.3-.4-.7l-4.5-14.8c-.1-.3-.2-.5-.2-.7 0-.3.1-.4.4-.4h2.2c.3 0 .5 0 .6.1.2.1.3.3.4.7l3.2 12.6L30 21.4c.1-.3.2-.6.4-.7.1-.1.4-.1.7-.1h1.8c.3 0 .5 0 .7.1.1.1.3.3.4.7l3.2 12.7 3.3-12.7c.1-.3.2-.6.4-.7.1-.1.4-.1.6-.1h2.1c.3 0 .4.1.4.4 0 .1 0 .2 0 .3 0 .1-.1.3-.2.5l-4.6 14.8c-.1.3-.2.6-.4.7-.1.1-.4.1-.6.1h-1.9c-.3 0-.5 0-.7-.1s-.3-.3-.4-.7l-3.1-12.2-3.1 12.2c-.1.3-.2.6-.4.7-.1.1-.4.1-.7.1h-1.9zm24.6.6c-1 0-2.1-.1-3-.4-1-.3-1.8-.6-2.3-1-.3-.2-.5-.4-.6-.6 0-.2-.1-.3-.1-.5v-1.1c0-.3.1-.5.3-.5.1 0 .2 0 .3.1.1.1.3.1.5.3.7.3 1.4.6 2.2.8.8.2 1.5.3 2.3.3 1.2 0 2.2-.2 2.8-.7.6-.5.9-1.1.9-2 0-.6-.2-1.1-.5-1.4-.4-.4-1-.7-1.9-1l-2.7-.8c-1.4-.4-2.4-1.1-3-2-.6-.8-.9-1.8-.9-2.8 0-.8.2-1.5.5-2.2.4-.6.8-1.2 1.5-1.6.6-.4 1.3-.8 2.1-1 .8-.2 1.7-.3 2.6-.3.5 0 .9 0 1.4.1.5.1.9.2 1.3.3.4.1.8.2 1.1.4.3.1.6.3.8.4.3.2.4.3.5.5.1.2.1.4.1.7v1c0 .3-.1.5-.3.5-.1 0-.3-.1-.6-.3-1.2-.6-2.5-.8-3.9-.8-1.1 0-2 .2-2.6.6-.6.4-.9 1-.9 1.8 0 .6.2 1.1.6 1.5.4.4 1.1.7 2.1 1.1L52 27c1.4.4 2.3 1.1 2.9 1.9.6.8.8 1.7.8 2.7 0 .8-.2 1.6-.5 2.3-.3.7-.8 1.3-1.5 1.8-.6.5-1.3.9-2.2 1.1-.9.3-1.8.5-2.8.5z" fill="#FF9900"/>
          <path d="M52.8 47.7c-6.2 4.6-15.3 7-23 7-10.9 0-20.7-4-28.1-10.7-.6-.5-.1-1.3.6-.8 8 4.6 17.9 7.4 28.1 7.4 6.9 0 14.5-1.4 21.4-4.4 1.1-.3 1.9.8.9 1.5z" fill="#FF9900"/>
          <path d="M55.5 44.6c-.8-1-5.1-.5-7.1-.2-.6.1-.7-.4-.2-.8 3.5-2.4 9.1-1.7 9.8-.9.6.8-.2 6.3-3.4 9-.5.4-1 .2-.8-.3.8-1.9 2.4-6 1.7-6.8z" fill="#FF9900"/>
        </svg>
      )
    },
    { 
      name: 'Docker', 
      subtitle: 'Containerization',
      glowColor: '#2496ED',
      gradientFrom: 'from-blue-500/20',
      gradientTo: 'to-cyan-500/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <path d="M59.4 25.4c-1.4-1-4.6-1.3-7.1-.8-.3-2.3-1.7-4.3-3.9-6l-1.3-.9-.9 1.3c-1.2 1.8-1.8 4.2-1.6 6.3.1 1.1.4 2.5 1.2 3.5-.8.5-1.6.8-2.4 1.1-1.5.5-3.1.7-4.6.7H4.2l-.1 1.3c-.3 3.4.2 6.9 1.7 10.2l.1.1c3.1 5.6 8.2 8.1 14.7 8.1 12.5 0 22.7-5.4 28.3-18.7 2.2.1 5.1 0 6.9-1.8.5-.5 1-1.3 1.3-2.2l.4-1.2-1.1-.7z" fill="#2496ED"/>
          <rect x="29.4" y="5.7" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="29.4" y="13" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="21.6" y="13" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="13.8" y="13" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="29.4" y="20.3" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="21.6" y="20.3" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="13.8" y="20.3" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="6" y="20.3" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
          <rect x="37.2" y="20.3" width="6.1" height="5.6" rx=".4" fill="#2496ED"/>
        </svg>
      )
    },
    { 
      name: 'Kubernetes', 
      subtitle: 'Container Orchestration',
      glowColor: '#326CE5',
      gradientFrom: 'from-blue-600/20',
      gradientTo: 'to-indigo-600/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <path d="M32 6.5c-1.1 0-2.1.5-2.7 1.4L11.5 26.3c-.6.9-.8 2-.5 3l6.6 22.1c.3 1 1.1 1.9 2.1 2.3l20.6 8.8c1 .4 2.1.4 3 0l20.6-8.8c1-.4 1.8-1.2 2.1-2.3l6.6-22.1c.3-1 .1-2.1-.5-3L54.7 7.9c-.6-.9-1.6-1.4-2.7-1.4H32z" fill="#326CE5" opacity=".1"/>
          <path d="M32 10c-.6 0-1.1.3-1.5.7L14.7 27.1c-.3.5-.4 1.1-.3 1.6l3.6 12c.2.5.6 1 1.1 1.2l11.2 4.8c.5.2 1.1.2 1.7 0l11.2-4.8c.5-.2.9-.7 1.1-1.2l3.6-12c.2-.5.1-1.1-.3-1.6L30.5 10.7c-.4-.4-.9-.7-1.5-.7z" fill="#326CE5"/>
          <path d="M32 18v2m0 18v2m7-16l-1.7 1m-10.6 6.2L25 32.2m14 0l-1.7-1m-10.6-6.2L25 24m0 8.2h2m10 0h2m-7-5.5v11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="32" cy="28.7" r="2.5" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'Terraform', 
      subtitle: 'Infrastructure as Code',
      glowColor: '#7B42BC',
      gradientFrom: 'from-purple-600/20',
      gradientTo: 'to-violet-600/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <path d="M22.5 11v14.5l12.6 7.3V18.3L22.5 11z" fill="#7B42BC"/>
          <path d="M36.9 18.3v14.5l12.6-7.3V11l-12.6 7.3z" fill="#7B42BC" opacity=".7"/>
          <path d="M8 3.8v14.5l12.6 7.3V11.1L8 3.8z" fill="#7B42BC" opacity=".5"/>
          <path d="M22.5 40.7v14.5L35.1 48V33.5l-12.6 7.2z" fill="#7B42BC"/>
        </svg>
      )
    },
    { 
      name: 'Jenkins', 
      subtitle: 'CI/CD Pipeline',
      glowColor: '#D33833',
      gradientFrom: 'from-red-500/20',
      gradientTo: 'to-rose-600/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <circle cx="32" cy="32" r="24" fill="#D33833" opacity=".15"/>
          <circle cx="32" cy="28" r="12" fill="#D33833" opacity=".3"/>
          <path d="M32 16c-6.6 0-12 5.4-12 12 0 4.4 2.4 8.3 6 10.4V44c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5.6c3.6-2.1 6-6 6-10.4 0-6.6-5.4-12-12-12z" fill="#D33833"/>
          <path d="M28 46h8v2c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2z" fill="#D33833" opacity=".8"/>
          <circle cx="28" cy="26" r="2" fill="white"/>
          <circle cx="36" cy="26" r="2" fill="white"/>
          <path d="M28 32c0 0 2 3 4 3s4-3 4-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 18l-3-4M40 18l3-4M32 16v-4" stroke="#D33833" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: 'Python', 
      subtitle: 'Automation & Scripting',
      glowColor: '#FFD43B',
      gradientFrom: 'from-yellow-500/20',
      gradientTo: 'to-blue-600/10',
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
          <path d="M31.9 8c-7 0-6.6 3-6.6 3l0 3.1h6.7v.9H19.8s-4.5-.5-4.5 6.6 3.9 6.8 3.9 6.8h2.3v-3.3s-.1-3.9 3.9-3.9h6.7s3.7.1 3.7-3.6V12.4S36.5 8 31.9 8zM28.3 11c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#3776AB"/>
          <path d="M32.1 56c7 0 6.6-3 6.6-3l0-3.1h-6.7v-.9h12.2s4.5.5 4.5-6.6-3.9-6.8-3.9-6.8h-2.3v3.3s.1 3.9-3.9 3.9h-6.7s-3.7-.1-3.7 3.6V51.6s-.7 4.4 3.9 4.4zm3.6-3c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#FFD43B"/>
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      <Chatbot />
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
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Now Accepting New Audit Clients
                <ArrowRight size={14} className="hidden sm:inline-block" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1]">
                Bank-Grade Cloud Security<br />
                <span className="text-gradient">& DevOps for Your Business</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
                We bring FinTech-level compliance (PCI-DSS, ISO 27001) to every industry. Get Senior-Level Cloud Infrastructure that passes audits on Day 1.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow text-sm sm:text-base"
                >
                  Get Your Free Security Check
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  View Services
                </a >
                {showCalendly && (
                  <CalendlyPopup
                    url="https://calendly.com/rohit-vyomiratech/30min"
                    open={showCalendly}
                    onClose={() => setShowCalendly(false)}
                    title="Schedule Your Free Security Check"
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
                          <span className="block text-gray-200">BANK-GRADE</span>
                          <span className="block text-gradient">SECURITY</span>
                        </h3>
                        <p className="text-gray-400 text-lg">Senior-level DevOps from Day 1</p>
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
                    <span className="block text-gray-200">BANK-GRADE</span>
                    <span className="block text-gradient">SECURITY</span>
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">Senior-level DevOps from Day 1</p>
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
              Our Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              We leverage industry-leading tools to build secure, scalable infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
            {techStackItems.map((tech, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Animated gradient border */}
                <div 
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" 
                  style={{ background: `linear-gradient(135deg, ${tech.glowColor}40, transparent 50%, ${tech.glowColor}20)` }}
                ></div>
                
                <div className="relative h-44 sm:h-52 rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 cursor-default">
                  {/* Dark background */}
                  <div className="absolute inset-0 bg-[#111318] rounded-2xl border border-white/[0.06]"></div>
                  
                  {/* Subtle gradient overlay matching tech color */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradientFrom} ${tech.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>
                  
                  {/* Top shine line */}
                  <div 
                    className="absolute top-0 left-[20%] right-[20%] h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `linear-gradient(90deg, transparent, ${tech.glowColor}60, transparent)` }}
                  ></div>
                  
                  {/* Corner accents with tech color */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/[0.08] rounded-tl-2xl group-hover:border-white/20 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/[0.08] rounded-br-2xl group-hover:border-white/20 transition-colors duration-500"></div>
                  
                  {/* Radial glow behind icon on hover */}
                  <div 
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                    style={{ backgroundColor: `${tech.glowColor}15` }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
                    {/* Icon container */}
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      {tech.icon}
                    </div>
                    
                    {/* Tech name */}
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                        {tech.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Founder's Message */}
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
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">The Vyomira Promise</h3>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                    "I started Vyomira to give startups the same security standards as banks. We don't outsource your security to juniors. You get senior-level attention from day one."
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                      RK
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-white">Rohit Kumar</div>
                      <div className="text-sm text-gray-400">Founder, Vyomira Tech Solutions</div>
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
                Our Core Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Enterprise-grade DevOps <span className="text-gradient">without the enterprise price</span>
              </h2>
              <p className="text-gray-400 mb-8 text-base sm:text-lg">
                We give startups and growing companies the same security standards as Fortune 500 companies.
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
