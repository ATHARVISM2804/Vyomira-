import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number with gradient */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] font-bold leading-none text-gradient opacity-20">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glassmorphism rounded-full p-6">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the cloud. 
          Don't worry, let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 glassmorphism-strong rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={18} />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="glassmorphism rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Services', href: '/solutions' },
              { label: 'About Us', href: '/about' },
              { label: 'Success Stories', href: '/testimonials' },
              { label: 'Contact', href: '/contact' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                <ArrowLeft size={14} className="rotate-180" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
