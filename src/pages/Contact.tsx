import { useState } from 'react';
import { Mail, Send, MapPin, Phone, ArrowRight } from 'lucide-react';
import CalendlyPopup from '../components/Calendlypopup';

export default function Contact() {
  const [showBookCall, setShowBookCall] = useState(false);
  const [showContactSale, setShowContactSale] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Build a <span className="text-gradient">Secure, Smarter</span> Cloud Together
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Whether you want a demo of our platform or need custom DevOps consulting,
              our team is just a click away.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-10 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-4"></span>
                Contact Us
              </h2>

              <div className="space-y-8 mb-12">
                <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">Office address:   5th Floor, Tower A, Building 10, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana - 122002</p>
                  </div>
                </div>

                <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@vyomira.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@vyomiratech.com
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+91XXXXXXXXXX" className="text-blue-400 hover:text-blue-300 transition-colors">
                     +91 90343 70807
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-white/5 rounded-xl bg-gradient-to-br from-blue-950/30 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="text-blue-400 text-2xl mr-3">⚡</span>
                  How We Can Help
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3 group">
                    <div className="h-2 w-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Cloud cost optimization consulting</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Security & compliance automation</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="h-2 w-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">DevOps managed services</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Cloud billing & reseller services</span>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setShowBookCall(true)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center"
                  >
                    Book a Call
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button
                    onClick={() => setShowContactSale(true)}
                    className="w-full px-4 py-3 border border-blue-500/30 bg-blue-500/10 rounded-lg font-medium hover:bg-blue-500/20 transition-all flex items-center justify-center"
                  >
                    Contact Sales
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
                
                {showBookCall && (
                  <CalendlyPopup
                    url="https://calendly.com/vyomira/call"
                    open={showBookCall}
                    onClose={() => setShowBookCall(false)}
                    title="Book a Call"
                  />
                )}
                
                {showContactSale && (
                  <CalendlyPopup
                    url="https://calendly.com/vyomira/sales"
                    open={showContactSale}
                    onClose={() => setShowContactSale(false)}
                    title="Contact Sales Team"
                  />
                )}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="p-8 md:p-10 border border-white/10 rounded-xl bg-gradient-to-b from-black to-gray-900/70 backdrop-blur-md shadow-xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center justify-between">
                  <span>Submit Your Inquiry</span>
                  <span className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                </h2>

                {submitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-400 font-medium">Thank you for reaching out!</p>
                        <p className="text-green-500/80 text-sm">Our team will contact you shortly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message / Requirements <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      placeholder="Describe your cloud infrastructure needs or specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button flex items-center justify-center group"
                  >
                    Submit Inquiry
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
