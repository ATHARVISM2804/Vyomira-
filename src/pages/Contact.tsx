import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to transform your cloud infrastructure? Let's talk about how
              Vyomira can help you optimize costs and enhance security.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:hello@vyomira.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      hello@vyomira.com
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-gray-400 text-sm">Click the chat icon in the bottom right</p>
                    <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-white/5 rounded-lg bg-gradient-to-br from-blue-950/20 to-transparent">
                <h3 className="text-xl font-semibold mb-4">Enterprise Sales</h3>
                <p className="text-gray-400 mb-4">
                  Looking for custom enterprise solutions or volume pricing?
                  Our sales team is here to help.
                </p>
                <a href="mailto:sales@vyomira.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  sales@vyomira.com
                </a>
              </div>
            </div>

            <div>
              <div className="p-8 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                    Thank you! We'll be in touch soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      placeholder="Tell us about your cloud infrastructure needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all glow-button flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg hover:shadow-blue-500/50 glow-button z-40">
        <MessageSquare size={24} />
      </div>
    </div>
  );
}
