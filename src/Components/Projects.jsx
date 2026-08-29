import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../Data/data';

const Projects = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-5 sm:px-8 lg:px-12">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-3 text-sm">Each project reflects my commitment to clean code, performance, and user-centered design</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {DATA.projects.map((project, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col" style={{ transitionDelay: `${idx * 120}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl mb-4">
                <i className={project.icon}></i>
              </div>
              <h3 className="text-lg font-bold text-white/90">{project.title}</h3>
              <p className="text-xs text-purple-400/70 font-medium mt-0.5">{project.role}</p>
              <p className="text-sm text-white/50 mt-3 leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(t => (
                  <span key={t} className="skill-tag text-[10px]">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 w-full justify-center text-sm py-3">
                <i className="fa-regular fa-arrow-up-right-from-square"></i> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;