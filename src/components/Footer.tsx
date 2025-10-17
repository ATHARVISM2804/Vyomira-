import { Linkedin, Mail, ArrowRight, Phone, MessageSquare, X, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

// Enhanced Modal component for displaying policies
const PolicyModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Handle escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl animate-scale-in">
        {/* Enhanced glassmorphism effect */}
        <div className="absolute inset-0 bg-[#121218]/80 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"></div>
        
        {/* Modal header with gradient border */}
        <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Modal content with scrollable area */}
        <div className="relative p-6 sm:p-8 overflow-y-auto max-h-[calc(85vh-80px)] policy-content">
          {children}
        </div>
      </div>
    </div>
  );
};

// Policy content component with enhanced styling
const PolicySection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">{title}</h2>
    {children}
  </div>
);

const PolicySubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 text-cyan-400">{title}</h3>
    {children}
  </div>
);

const PolicyParagraph = ({ children }) => (
  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{children}</p>
);

const PolicyList = ({ items }) => (
  <ul className="space-y-2 mb-4 pl-6">
    {items.map((item, idx) => (
      <li key={idx} className="text-gray-300 text-sm sm:text-base relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-cyan-400">{item}</li>
    ))}
  </ul>
);

export default function Footer() {
  // State to track which modal is open
  const [activeModal, setActiveModal] = useState(null);

  // Simplified navigation links - single column
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Teams', href: '/teams' },
    { label: 'Contact', href: '/contact' },
    { label: 'Platform', href: '/platform' }
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/vyomira-tech-solutions-private-limited/', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/vyomiratech?igsh=NjFxdTZuNGo2cDJv', label: 'Instagram' },
    { Icon: Youtube, href: 'https://youtube.com/@vyomira-tech?si=bJznRsZG0Cq5B1mM', label: 'YouTube' },
    { Icon: Mail, href: 'mailto:info@vyomiratech.com', label: 'Email' }
  ];

  const contactInfo = [
    { Icon: Mail, text: 'contact@vyomira.com', href: 'mailto:contact@vyomira.com' },
    { Icon: Phone, text: '+91 9034370807', href: 'tel:+919034370807' },
    { Icon: MessageSquare, text: 'WhatsApp Chat', href: 'https://wa.me/919034370807?text=Hello%20Vyomira%2C%20I%27m%20interested%20in%20your%20services' }
  ];

  // Enhanced policy content
  const policyContent = {
    privacy: (
      <>
        <div className="text-sm text-gray-400 mb-6 pb-6 border-b border-white/5">Last updated: June 1, 2025</div>
        
        <PolicySection title="Introduction">
          <PolicyParagraph>
            Vyomira Tech Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cloud optimization and management services.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Information We Collect">
          <PolicyParagraph>
            We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.
          </PolicyParagraph>
          
          <PolicySubSection title="Information You Provide">
            <PolicyList items={[
              "Account information such as name, email address, phone number, and company details",
              "Billing information such as payment card details and billing address",
              "User content that you submit through our services",
              "Communications with us including customer support requests"
            ]} />
          </PolicySubSection>
          
          <PolicySubSection title="Automatically Collected Information">
            <PolicyList items={[
              "Usage information such as features used, actions taken, and timestamps",
              "Device information such as IP address, browser type, and operating system",
              "Cookies and similar tracking technologies"
            ]} />
          </PolicySubSection>
        </PolicySection>
        
        <PolicySection title="How We Use Your Information">
          <PolicyParagraph>
            We use the information we collect for various purposes, including:
          </PolicyParagraph>
          <PolicyList items={[
            "Providing, maintaining, and improving our services",
            "Processing transactions and managing your account",
            "Communicating with you about services, promotions, and updates",
            "Personalizing your experience and providing tailored content",
            "Analyzing usage patterns and optimizing our services",
            "Detecting, investigating, and preventing fraudulent or unauthorized activities"
          ]} />
        </PolicySection>
        
        <PolicySection title="Data Security">
          <PolicyParagraph>
            We implement appropriate technical and organizational measures to protect your information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Contact Us">
          <PolicyParagraph>
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@vyomira.com" className="text-cyan-400 hover:text-cyan-300 underline">privacy@vyomira.com</a>.
          </PolicyParagraph>
        </PolicySection>
      </>
    ),
    
    terms: (
      <>
        <div className="text-sm text-gray-400 mb-6 pb-6 border-b border-white/5">Last updated: June 1, 2025</div>
        
        <PolicySection title="Acceptance of Terms">
          <PolicyParagraph>
            By accessing or using Vyomira's services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not use our services.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Services Description">
          <PolicyParagraph>
            Vyomira provides cloud infrastructure optimization, management, and security services designed to help businesses improve efficiency and reduce costs.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="User Accounts">
          <PolicyParagraph>
            To access certain features of our services, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Payment Terms">
          <PolicyParagraph>
            Certain services require payment of fees. You agree to pay all fees as specified at the time of purchase. All payments are non-refundable unless otherwise stated.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Intellectual Property">
          <PolicyParagraph>
            Our services and all content included on or available through our services are protected by intellectual property rights owned by Vyomira or its licensors.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Limitation of Liability">
          <PolicyParagraph>
            To the maximum extent permitted by law, Vyomira shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Termination">
          <PolicyParagraph>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Governing Law">
          <PolicyParagraph>
            These Terms shall be governed by the laws of [Jurisdiction], without regard to its conflict of law provisions.
          </PolicyParagraph>
        </PolicySection>
      </>
    ),
    
    cookies: (
      <>
        <div className="text-sm text-gray-400 mb-6 pb-6 border-b border-white/5">Last updated: June 1, 2025</div>
        
        <PolicySection title="What Are Cookies">
          <PolicyParagraph>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Types of Cookies We Use">
          <PolicySubSection title="Essential Cookies">
            <PolicyParagraph>
              These cookies are necessary for the website to function properly and cannot be switched off in our systems.
            </PolicyParagraph>
          </PolicySubSection>
          
          <PolicySubSection title="Performance Cookies">
            <PolicyParagraph>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </PolicyParagraph>
          </PolicySubSection>
          
          <PolicySubSection title="Functional Cookies">
            <PolicyParagraph>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences.
            </PolicyParagraph>
          </PolicySubSection>
          
          <PolicySubSection title="Targeting Cookies">
            <PolicyParagraph>
              These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
            </PolicyParagraph>
          </PolicySubSection>
        </PolicySection>
        
        <PolicySection title="Managing Cookies">
          <PolicyParagraph>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.
          </PolicyParagraph>
        </PolicySection>
        
        <PolicySection title="Changes to This Cookie Policy">
          <PolicyParagraph>
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
          </PolicyParagraph>
        </PolicySection>
      </>
    )
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-crosses opacity-[0.05]"></div>
      <div className="aurora-blob aurora-blob-1" style={{ bottom: '0', right: '0', opacity: 0.5 }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Call to action section */}
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

          {/* Main footer content - 3 column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Left column: Logo and company text */}
            <div>
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  {/* Replace Sparkles icon with the new logo */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1760688501/Screenshot_2025-10-17_133657_k6alu1.png" 
                      alt="Vyomira Logo" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span className="text-lg font-bold text-white">Vyomira</span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-4">We don't just optimize cloud.</h3>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">We make it intelligent.</h3>
              </div>
              
              <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
                Join hundreds of innovators who've partnered with Vyomira to build the future of AI-powered cloud infrastructure.
              </p>
            </div>
            
            {/* Middle column: Single column navigation */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {navigationLinks.map((link, idx) => (
                  <li key={idx}>
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
            
            {/* Right column: Contact info and social media links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <item.Icon size={18} className="text-cyan-400" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group animate-glow"
              >
                Book Free Consultation
                <ArrowRight size={18} className="ml-1" />
              </a>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
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
            </div>
          </div>

          {/* Copyright section */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              © 2025 Vyomira. All rights reserved. Built with precision and care.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <button 
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setActiveModal('cookies')}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      <PolicyModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy"
      >
        {policyContent.privacy}
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service"
      >
        {policyContent.terms}
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === 'cookies'} 
        onClose={() => setActiveModal(null)} 
        title="Cookie Policy"
      >
        {policyContent.cookies}
      </PolicyModal>
    </footer>
  );
}
