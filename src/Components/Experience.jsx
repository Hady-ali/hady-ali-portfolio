import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../Data/data';

const Experience = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Career</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Professional <span className="gradient-text">Experience</span></h2>
        <div className="mt-12 space-y-8 relative">
          <div className="absolute left-[19px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/20 to-transparent hidden sm:block"></div>
          {DATA.experience.map((exp, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 relative">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="timeline-dot mt-1.5"></div>
                <div className="glass-card p-6 rounded-2xl flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white/90">{exp.role}</h3>
                      <p className="text-purple-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-white/60 flex gap-2"><span className="text-purple-400 mt-0.5">▸</span> {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;