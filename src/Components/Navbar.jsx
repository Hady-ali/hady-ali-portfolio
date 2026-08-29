import React, { useState, useEffect } from 'react';
import { DATA } from '../data/data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          <span className="gradient-text">Hady</span>
          <span className="text-white/70">Ali</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all hover:after:w-full">
              {link}
            </a>
          ))}
          <a href={DATA.driveCV} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-6">
            <i className="fa-regular fa-file-pdf"></i> Download CV
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/70 hover:text-white text-2xl">
          <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 px-5 py-6 flex flex-col gap-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white text-sm font-medium" onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
          <a href={DATA.driveCV} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-6 text-center" onClick={() => setMobileOpen(false)}>
            <i className="fa-regular fa-file-pdf"></i> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;