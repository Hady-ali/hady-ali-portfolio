import React, { useState, useEffect } from 'react';
import { DATA } from '../Data/data';
import myPhoto from '../assets/photo.jpg'; // ⚠️ تأكد إن الصورة اسمها photo.jpg في مجلد assets

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Front-End Developer', 'Technical Instructor', 'React Specialist', 'UI/UX Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => setTextIndex(prev => (prev + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 lg:px-12" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(79,70,229,0.06) 0%, transparent 50%), #0a0a0f' }}>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* النص */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 text-sm text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open to opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="gradient-text">Hady Ali</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60">
            <span className="typing-cursor inline-block font-medium text-white/80">
              {roles[textIndex]}
            </span>
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="btn-primary"><i className="fa-regular fa-paper-plane"></i> Let's Talk</a>
            <a href={DATA.driveCV} target="_blank" rel="noopener noreferrer" className="btn-outline"><i className="fa-regular fa-file-pdf"></i> View CV</a>
          </div>
          <div className="flex gap-8 pt-2">
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-github"></i></a>
            <a href={DATA.youtube} target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
            <a href={`mailto:${DATA.email}`} className="social-icon"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>

        {/* الصورة الشخصية بدل HA */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/10 blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-white/10 flex items-center justify-center mx-auto overflow-hidden">
                  <img src={myPhoto} alt="Hady Ali" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {DATA.stats.map((stat, i) => (
                    <div key={i} className="glass px-4 py-2 rounded-xl text-center min-w-[70px]">
                      <div className="stat-number text-xl pb-2">{stat.value}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;