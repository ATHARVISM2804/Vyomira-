import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import CalendlyPopup from './Calendlypopup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glassmorphism-strong shadow-lg shadow-black/20' : 'glassmorphism'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <a href="/" className="flex items-center space-x-3 group relative z-10">
            <div className="relative">
              {/* Replace the icon with the Cloudinary image */}
              <img 
                src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1760688501/Screenshot_2025-10-17_133657_k6alu1.png" 
                alt="Vyomira Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-base sm:text-lg font-bold text-white group-hover:text-gradient transition-all">Vyomira</span>
          </a>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/solutions' },
              { label: 'About Us', href: '/about' },
              // { label: 'Gallery', href: '/gallery' },
              { label: 'Success Stories', href: '/testimonials' },
              // { label: 'Teams', href: '/teams' },
              { label: 'Contact', href: '/contact' },
              // { label: 'Platform', href: '/platform' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="relative px-3 lg:px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowCalendly(true);
              }}
              className="ml-4 px-4 lg:px-5 py-2 text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={14} />
              <span>Book Free Audit</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowCalendly(true);
                setIsOpen(false);
              }}
              className="px-3 py-1.5 text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-1"
            >
              <Phone size={12} />
              <span>Book</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-all relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glassmorphism-strong border-t border-white/10 animate-fade-in backdrop-blur-2xl">
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/solutions' },
              { label: 'About Us', href: '/about' },
              // { label: 'Gallery', href: '/gallery' },
              { label: 'Success Stories', href: '/testimonials' },
              // { label: 'Teams', href: '/teams' },
              { label: 'Contact', href: '/contact' },
              // { label: 'Platform', href: '/platform' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block text-sm text-gray-400 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowCalendly(true);
                setIsOpen(false);
              }}
              className=" text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg px-4 py-3 text-center mt-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${8 * 50}ms` }}
            >
              <Phone size={16} />
              <span>Book a Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Calendly Popup */}
      <CalendlyPopup
        url="https://calendly.com/rohit-vyomiratech/30min"
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Book Your Call"
      />
    </nav>
  );
}
