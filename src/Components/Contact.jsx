import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../data/data';

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);
      formData.append('_subject', 'New Portfolio Message from Hady Ali Website!');

      const response = await fetch('https://formsubmit.co/ajax/enghadyali0@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('حصل خطأ، حاول تاني بعد شوية.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('تعذر إرسال الرسالة. تأكد من اتصالك بالإنترنت.');
    }
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 lg:px-12">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Let's Build Something <span className="gradient-text">Amazing</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-3 text-sm">Have a project in mind? Reach out and let's create something extraordinary together.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg"><i className="fa-regular fa-envelope"></i></div>
              <div><p className="text-white/40 text-xs uppercase tracking-wider">Email</p><a href={`mailto:${DATA.email}`} className="text-white/80 hover:text-purple-400 transition-colors">{DATA.email}</a></div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg"><i className="fa-regular fa-phone"></i></div>
              <div><p className="text-white/40 text-xs uppercase tracking-wider">Phone</p><a href={`tel:${DATA.phone}`} className="text-white/80 hover:text-purple-400 transition-colors">{DATA.phone}</a></div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg"><i className="fa-regular fa-compass"></i></div>
              <div><p className="text-white/40 text-xs uppercase tracking-wider">Location</p><span className="text-white/80">Egypt</span></div>
            </div>
            <div className="flex gap-4 pt-2">
              <a href={DATA.linkedin} target="_blank" rel="noopener" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href={DATA.github} target="_blank" rel="noopener" className="social-icon"><i className="fa-brands fa-github"></i></a>
              <a href={DATA.youtube} target="_blank" rel="noopener" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-5">
              
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="text-white/40 text-xs uppercase tracking-wider block mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  id="contact-name"
                  name="name" 
                  autoComplete="name" 
                  value={formState.name} 
                  onChange={handleChange} 
                  placeholder="John Doe" 
                  className="contact-input" 
                  required 
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="text-white/40 text-xs uppercase tracking-wider block mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email"
                  name="email" 
                  autoComplete="email" 
                  value={formState.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com" 
                  className="contact-input" 
                  required 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="text-white/40 text-xs uppercase tracking-wider block mb-1.5">Message</label>
                <textarea 
                  id="contact-message"
                  name="message" 
                  autoComplete="off" 
                  value={formState.message} 
                  onChange={handleChange} 
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="contact-input resize-none" 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                {submitted ? <><i className="fa-regular fa-circle-check"></i> Sent!</> : <><i className="fa-regular fa-paper-plane"></i> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;