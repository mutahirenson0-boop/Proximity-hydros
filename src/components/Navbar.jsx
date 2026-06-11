import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../data/services';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const megaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setShowServices(false);
  }, [location]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* TOP BAR */}
      <div style={{ background: '#0057B8' }} className="text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Mon - Sat: 7:00 AM - 6:00 PM | Sun: Closed</span>
          <div className="flex items-center gap-6">
            <a href="tel:+254710441076" className="hover:text-blue-200 transition-colors">+254 710 441 076</a>
            <a href="tel:+254733904236" className="hover:text-blue-200 transition-colors">+254 733 904 236</a>
            <a href="mailto:info@proximitytech.co.ke" className="hover:text-blue-200 transition-colors">info@proximitytech.co.ke</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        ref={megaRef}
        className="sticky top-0 z-50 bg-white"
        style={{ borderBottom: '1px solid #e5e7eb', boxShadow: scrolled ? '0 4px 6px rgba(0,0,0,0.07)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#0057B8' }}>P</div>
            <div>
              <div className="text-xl md:text-2xl uppercase leading-none" style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 800, color: '#0A0F1E' }}>Proximity</div>
              <div className="text-sm uppercase tracking-widest leading-none" style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600, color: '#0057B8' }}>Hydros Ltd</div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              if (link.path === '/services') {
                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => setShowServices(prev => !prev)}
                    className="animated-underline text-sm uppercase tracking-wider transition-colors flex items-center gap-1"
                    style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, color: location.pathname === link.path ? '#0057B8' : '#0A0F1E' }}
                  >
                    {link.name}
                    <span style={{ fontSize: '10px', marginTop: '1px' }}>{showServices ? '▲' : '▼'}</span>
                  </button>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="animated-underline text-sm uppercase tracking-wider transition-colors"
                  style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, color: location.pathname === link.path ? '#0057B8' : '#0A0F1E' }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CALL NOW + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <a href="tel:+254710441076"
              className="hidden md:flex items-center gap-2 text-white text-sm uppercase tracking-wider px-5 py-2.5 hover:opacity-90 transition-colors"
              style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, background: '#0057B8' }}>
              Call Now
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl font-bold" style={{ color: '#0A0F1E' }}>
              {menuOpen ? 'X' : '='}
            </button>
          </div>
        </div>

        {/* MEGA MENU — full width, pinned below navbar */}
        {showServices && (
          <div className="hidden md:block w-full bg-white border-t-2 border-[#0057B8] shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8">

              {/* Header row */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#0057B8] mb-1"
                    style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600 }}>
                    What We Offer
                  </p>
                  <h3 className="text-2xl uppercase text-[#0A0F1E]"
                    style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 900 }}>
                    Our 15 Services
                  </h3>
                </div>
                <Link
                  to="/services"
                  onClick={() => setShowServices(false)}
                  className="text-white text-sm uppercase tracking-wider px-6 py-3 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, background: '#0057B8' }}
                >
                  View All Services →
                </Link>
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map(service => (
                  <Link
                    key={service.id}
                    to="/services"
                    onClick={() => setShowServices(false)}
                    className="group block overflow-hidden bg-[#F4F6F9] hover:bg-white border border-transparent hover:border-[#0057B8] hover:shadow-lg transition-all duration-200"
                  >
                    <div className="h-32 overflow-hidden bg-slate-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-[10px] uppercase tracking-widest text-[#0057B8] mb-1"
                        style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 600 }}>
                        {service.category}
                      </p>
                      <h4 className="text-sm uppercase text-[#0A0F1E]"
                        style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 800 }}>
                        {service.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path}
                  className="text-lg uppercase tracking-wider py-3 border-b border-gray-100 transition-colors"
                  style={{ fontFamily: 'Barlow Condensed,sans-serif', fontWeight: 700, color: location.pathname === link.path ? '#0057B8' : '#0A0F1E' }}>
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+254710441076" className="text-white text-center py-3 font-bold uppercase" style={{ background: '#0057B8' }}>
                  Call: +254 710 441 076
                </a>
                <a href="tel:+254733904236" className="text-center py-3 font-bold uppercase border-2" style={{ color: '#0057B8', borderColor: '#0057B8' }}>
                  Call: +254 733 904 236
                </a>
                <a href="https://wa.me/254710441076" target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 text-white text-center py-3 font-bold uppercase hover:bg-green-600 transition-colors">
                  WhatsApp Us
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 py-3">Mon - Sat: 7AM - 6PM | Sun: Closed</p>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}