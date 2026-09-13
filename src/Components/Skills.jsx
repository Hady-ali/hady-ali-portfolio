import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../Data/data';

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-5 sm:px-8 lg:px-12">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">My <span className="gradient-text">Skills</span> &amp; Technologies</h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-3 text-sm">A comprehensive toolkit I use to build modern, performant web applications</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Object.entries(DATA.skills).map(([category, items], idx) => (
            <div key={category} className="glass-card p-6 rounded-2xl" style={{ transitionDelay: `${idx * 100}ms` }}>
              <h3 className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;