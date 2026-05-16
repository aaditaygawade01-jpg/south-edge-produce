import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SouthEdgeLogo from './SouthEdgeLogo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex items-center justify-between px-10 py-4 rounded-full transition-all duration-500 bg-warm-white border border-olive-mid/30 shadow-[0_10px_40px_rgba(107,122,62,0.12)] backdrop-blur-md">
            
            {/* Logo - Left */}
            <Link to="/" className="flex items-center shrink-0">
              <SouthEdgeLogo 
                colorMode="original" 
                className="w-[160px] md:w-[200px] h-auto drop-shadow-sm" 
              />
            </Link>

            {/* Nav Links - Center */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-sans text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:text-olive-deep relative group text-charcoal-deep`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-olive-mid shadow-[0_0_10px_rgba(107,122,62,0.8)] transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`} />
                </Link>
              ))}
            </div>

            {/* Button - Right */}
            <div className="hidden lg:block">
              <Link to="/wholesale" className="bg-olive-deep text-warm-white px-8 py-3 rounded-full text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-olive-mid transition-all shadow-[0_5px_15px_rgba(107,122,62,0.4)] hover:shadow-olive">
                ENQUIRE NOW
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal-deep"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 z-[90] bg-charcoal-deep transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-4xl tracking-tight text-warm-white hover:text-olive-pale transition-colors ${
                isActive(link.path) ? 'italic text-olive-pale' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/wholesale"
            onClick={() => setIsOpen(false)}
            className="btn-primary !px-12 !py-4 text-lg"
          >
            Enquire Now →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
