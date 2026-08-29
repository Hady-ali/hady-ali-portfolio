import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../data/data';

const Certifications = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24 px-5 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Credentials</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Certifications &amp; <span className="gradient-text">Education</span></h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider flex items-center gap-2"><i className="fa-regular fa-certificate text-purple-400"></i> Certifications</h3>
            {DATA.certifications.map((cert, i) => (
              <div key={i} className="glass-card p-5 rounded-xl flex items-center justify-between">
                <span className="text-sm text-white/70">{cert.name}</span>
                <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full">{cert.year}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wider flex items-center gap-2"><i className="fa-regular fa-graduation-cap text-purple-400"></i> Education</h3>
            <div className="glass-card p-5 rounded-xl">
              <h4 className="text-white/90 font-bold">{DATA.education.degree}</h4>
              <p className="text-purple-400/70 text-sm mt-1">{DATA.education.institution}</p>
              <div className="flex gap-4 mt-3 text-xs text-white/40">
                <span>{DATA.education.year}</span>
                <span>•</span>
                <span>{DATA.education.grade}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;