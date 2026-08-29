import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 px-5 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold gradient-text">Hady Ali</span>
          <span className="text-white/20">•</span>
          <span className="text-xs text-white/30">Front-End Developer</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/30">
          <a href="#home" className="hover:text-white/60 transition-colors">Home</a>
          <a href="#about" className="hover:text-white/60 transition-colors">About</a>
          <a href="#projects" className="hover:text-white/60 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
        <p className="text-xs text-white/20">&copy; {year} Hady Ali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;