import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const values = [
  { num: '01', title: 'Integrity', desc: 'Honest assessments, fair pricing and genuine solutions — no upselling, no shortcuts.' },
  { num: '02', title: 'Excellence', desc: 'Every installation done to the highest standard using quality equipment from leading brands.' },
  { num: '03', title: 'Reliability', desc: 'We show up on time, complete jobs as promised and stand behind our work with full support.' },
  { num: '04', title: 'Innovation', desc: 'We stay current with the latest technology to offer clients the most effective modern solutions.' },
];

const team = [
  { emoji: '🔧', name: 'Technical Team', role: 'Installation & Commissioning', desc: 'Certified technicians handling CCTV, cabling, access control and solar installations across the Coast Region.' },
  { emoji: '🤝', name: 'Sales & Support', role: 'Customer Relations', desc: 'Dedicated team for product consultation, quotations and ongoing after-sales support and maintenance.' },
  { emoji: '🌐', name: 'ICT Division', role: 'Network & Infrastructure', desc: 'Specialists in structured cabling, fibre optics, wireless networks and full ICT infrastructure projects.' },
];

export default function About() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = el => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0057B8]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
            className="text-[#00AEEF] text-sm uppercase tracking-widest mb-3">Who We Are</p>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-5xl md:text-7xl uppercase text-white leading-none">
            About<br />
            <span className="text-[#0057B8]">Proximity Hydros</span>
          </h1>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div ref={addRef} className="fade-up">
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
              className="text-[#0057B8] text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
              className="text-4xl md:text-5xl uppercase text-[#0A0F1E] mb-5">
              Mombasa's Trusted Technology Partner
            </h2>
            <div className="w-16 h-1 bg-[#0057B8] mb-6" />
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Proximity Hydros Ltd is a Mombasa-based technology company specializing in security systems, ICT infrastructure, solar energy and telecommunications. We serve homes, businesses, schools, hotels and government institutions across the Coast Region of Kenya.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              As an authorized distributor for Dahua Technology and Hikvision — two of the world's leading security brands — we supply and install genuine, high-quality equipment backed by full manufacturer warranties.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Our team of certified technicians brings hands-on expertise to every project, from small home installations to large-scale commercial ICT infrastructure deployments across the Coast Region.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#0057B8] text-white px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-[#0A0F1E] transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              Get a Free Quote →
            </Link>
          </div>

          {/* Photo grid */}
          <div ref={addRef} className="fade-up grid grid-cols-2 gap-4">
            {[
              { image: '/images/solar-rooftop.jpg', label: 'Solar Installation' },
              { image: '/images/cabling-rack.jpg', label: 'ICT Infrastructure' },
              { image: '/images/cctv-hikvision.jpg', label: 'Security Systems' },
              { image: '/images/access-control.jpg', label: 'Access Control' },
            ].map(({ image, label }) => (
              <div key={label} className="relative overflow-hidden group bg-[#0A0F1E]" style={{aspectRatio:'1/1'}}>
                <img src={image} alt={label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  onError={e => { e.target.style.display='none'; }} />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0F1E]/80 py-2 text-white text-center text-xs uppercase tracking-wider"
                  style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#F4F6F9] grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="fade-up text-center mb-14">
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
              className="text-[#0057B8] text-sm uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
              className="text-4xl md:text-5xl uppercase text-[#0A0F1E]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ num, title, desc }, i) => (
              <div key={title} ref={addRef}
                className="fade-up bg-white p-8 border-t-4 border-[#0057B8] hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
                  className="text-5xl text-[#0057B8]/10 mb-2">{num}</div>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800}}
                  className="text-xl uppercase text-[#0A0F1E] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="fade-up text-center mb-14">
            <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
              className="text-[#0057B8] text-sm uppercase tracking-widest mb-2">The People</p>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
              className="text-4xl md:text-5xl uppercase text-[#0A0F1E]">Our Departments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ emoji, name, role, desc }, i) => (
              <div key={name} ref={addRef}
                className="fade-up text-center p-8 border border-gray-100 hover:border-[#0057B8] hover:shadow-lg transition-all"
                style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="text-5xl mb-5">{emoji}</div>
                <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800}}
                  className="text-xl uppercase text-[#0A0F1E] mb-1">{name}</h3>
                <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
                  className="text-[#0057B8] text-sm uppercase tracking-wider mb-3">{role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR BANNER */}
      <section className="bg-[#0057B8] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="text-5xl mb-4">✅</div>
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-3xl md:text-4xl uppercase mb-3">
            Authorized Dahua & Hikvision Distributor
          </h2>
          <p className="text-blue-100 text-base mb-6">
            We supply and install genuine products with full manufacturer warranty and technical support.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0057B8] px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-[#0A0F1E] hover:text-white transition-colors"
            style={{fontFamily:'Barlow Condensed,sans-serif'}}>
            Contact Us Today →
          </Link>
        </div>
      </section>
    </div>
  );
}