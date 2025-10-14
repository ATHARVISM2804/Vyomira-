import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'VP Security',
      company: 'Payment Startup',
      rating: 5,
      text: 'Vyomira helped us pass our PCI DSS audit with zero non-conformities.',
      image: '🔒'
    },
    {
      name: 'CTO',
      company: 'SaaS Enterprise',
      rating: 5,
      text: 'From day one, Vyomira\'s team identified hidden cost leaks across our AWS accounts and saved us nearly 35%.',
      image: '💰'
    },
    {
      name: 'Head of DevOps',
      company: 'Fintech Company',
      rating: 5,
      text: 'The unified dashboard and their quick response support team make cloud management effortless.',
      image: '⚙️'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16 text-center mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Clients <span className="text-gradient">Speak for Us</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Real stories from companies that transformed their cloud operations with Vyomira.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group p-8 glassmorphism rounded-2xl hover:glassmorphism-strong transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-blue-500/20 w-12 h-12" />
                  <div className="flex items-center gap-1 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg font-medium">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="glassmorphism rounded-2xl p-8 sm:p-12 h-full">
                <h3 className="text-3xl font-bold mb-6">Featured Success Stories</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-sm flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-400">35% Cost Reduction</h4>
                      <p className="text-gray-400">For a SaaS platform running on AWS, Azure, and GCP</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-sm flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-400">PCI DSS Compliance</h4>
                      <p className="text-gray-400">Zero non-conformities for a payment processing startup</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-sm flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-400">99.99% Uptime</h4>
                      <p className="text-gray-400">For a critical fintech application with 24/7 support</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glassmorphism rounded-2xl p-8 sm:p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Join Our Success Story</h3>
                <p className="text-gray-400 mb-8">Experience the Vyomira difference with our cloud experts by your side.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 animate-glow"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
