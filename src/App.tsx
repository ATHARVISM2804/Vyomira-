import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Teams from './pages/Teams';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/about') setCurrentPage('about');
    else if (path === '/solutions') setCurrentPage('solutions');
    else if (path === '/platform') setCurrentPage('platform');
    else if (path === '/contact') setCurrentPage('contact');
    else if (path === '/login') setCurrentPage('login');
    else if (path === '/gallery') setCurrentPage('gallery');
    else if (path === '/testimonials') setCurrentPage('testimonials');
    else if (path === '/teams') setCurrentPage('teams');
    else setCurrentPage('home');

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/"]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href') || '/';
        window.history.pushState({}, '', href);

        if (href === '/about') setCurrentPage('about');
        else if (href === '/solutions') setCurrentPage('solutions');
        else if (href === '/platform') setCurrentPage('platform');
        else if (href === '/contact') setCurrentPage('contact');
        else if (href === '/login') setCurrentPage('login');
        else if (href === '/gallery') setCurrentPage('gallery');
        else if (href === '/testimonials') setCurrentPage('testimonials');
        else if (href === '/teams') setCurrentPage('teams');
        else setCurrentPage('home');

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <About />;
      case 'solutions': return <Solutions />;
      case 'platform': return <Platform />;
      case 'contact': return <Contact />;
      case 'login': return <Login />;
      case 'gallery': return <Gallery />;
      case 'testimonials': return <Testimonials />;
      case 'teams': return <Teams />;
      default: return <Home />;
    }
  };

  const isLoginPage = currentPage === 'login';

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AnimatedBackground />
      {!isLoginPage && <Navbar />}
      {renderPage()}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
