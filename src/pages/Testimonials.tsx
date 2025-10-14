import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'Vyomira transformed our cloud infrastructure. We reduced costs by 60% and improved security posture significantly. The AI-powered insights are game-changing.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'DataFlow Solutions',
      rating: 5,
      text: 'The managed DevOps services freed up our team to focus on product development. Best decision we made this year.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Director',
      company: 'SecureBank',
      rating: 5,
      text: 'Outstanding security compliance automation. Vyomira helped us achieve SOC 2 certification in record time.',
      image: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'CloudScale Inc',
      rating: 5,
      text: 'The multi-cloud management platform is intuitive and powerful. Our ops team loves it.',
      image: '👨‍💼'
    },
    {
      name: 'Lisa Anderson',
      role: 'CFO',
      company: 'FinTech Global',
      rating: 5,
      text: 'Real-time cost analytics gave us visibility we never had before. ROI was immediate.',
      image: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'DevOps Lead',
      company: 'AppInnovate',
      rating: 5,
      text: 'Their 24/7 support is phenomenal. Infrastructure issues are resolved before they impact users.',
      image: '👨‍💻'
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
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Hear from industry leaders who transformed their cloud infrastructure with Vyomira.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <p className="text-gray-300 mb-6 leading-relaxed text-sm">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glassmorphism rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join 500+ Happy Clients</h3>
              <p className="text-gray-400 mb-8">Start your cloud transformation journey today.</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 animate-glow"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
