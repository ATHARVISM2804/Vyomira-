import { Twitter, Linkedin, Github, Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/solutions' },
      { label: 'Pricing', href: '/contact' },
      { label: 'Security', href: '/solutions' },
      { label: 'Roadmap', href: '/about' }
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/teams' },
      { label: 'Blog', href: '/about' },
      { label: 'Press Kit', href: '/gallery' }
    ],
    Resources: [
      { label: 'Documentation', href: '/solutions' },
      { label: 'API Reference', href: '/solutions' },
      { label: 'Community', href: '/testimonials' },
      { label: 'Support', href: '/contact' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Mail, href: 'mailto:hello@vyomira.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-crosses opacity-[0.05]"></div>
      <div className="aurora-blob aurora-blob-1" style={{ bottom: '0', right: '0' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-12 sm:py-16">
          <div className="glassmorphism rounded-3xl p-8 sm:p-12 mb-12 sm:mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Start building the <span className="text-gradient">future</span> today
              </h3>
              <p className="text-gray-400 mb-8 text-sm sm:text-base">
                Join thousands of companies already using Vyomira to power their cloud infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group/btn"
                >
                  Get Started Free
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-50"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                </div>
                <span className="text-lg font-bold text-white">Vyomira</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-xs">
                Smarter Clouds. Safer Futures. Empowering businesses with AI-powered cloud infrastructure.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 group/icon"
                  >
                    <social.Icon size={18} className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links], idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-white transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              © 2025 Vyomira. All rights reserved. Built with precision and care.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Status</a>
              <a href="#" className="hover:text-white transition-colors">Changelog</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
