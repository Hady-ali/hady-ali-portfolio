import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../data/data';

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-5 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">About Me</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Turning <span className="gradient-text">ideas</span> into <br /> impactful <span className="gradient-text">digital experiences</span></h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-5">
            <p className="text-white/70 leading-relaxed">{DATA.summary}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="glass px-5 py-3 rounded-xl flex items-center gap-3">
                <i className="fa-regular fa-phone text-purple-400"></i>
                <span className="text-sm text-white/60">{DATA.phone}</span>
              </div>
              <div className="glass px-5 py-3 rounded-xl flex items-center gap-3">
                <i className="fa-regular fa-envelope text-purple-400"></i>
                <span className="text-sm text-white/60">{DATA.email}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="glass px-4 py-2 rounded-full text-xs text-white/50 border border-white/5"><i className="fa-regular fa-graduation-cap mr-2"></i> {DATA.education.degree}</span>
              <span className="glass px-4 py-2 rounded-full text-xs text-white/50 border border-white/5"><i className="fa-regular fa-calendar mr-2"></i> {DATA.education.year}</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-white/80 font-semibold text-sm uppercase tracking-wider">Languages</h3>
            {DATA.languages.map((lang, i) => (
              <div key={i} className="glass-card p-4 rounded-xl flex items-center justify-between">
                <span className="text-white/80 font-medium">{lang.name}</span>
                <span className="text-white/40 text-sm">{lang.level}</span>
              </div>
            ))}
            <div className="glass-card p-4 rounded-xl mt-4 flex items-center justify-between">
              <span className="text-white/80 font-medium">Military Status</span>
              <span className="text-white/40 text-sm">Exempted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;