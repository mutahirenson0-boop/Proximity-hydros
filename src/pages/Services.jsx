import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services, categories } from '../data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const fadeRefs = useRef([]);

  const allCategories = ['All', ...categories];
  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  const groupedServices = activeCategory === 'All'
    ? categories.reduce((acc, category) => ({
        ...acc,
        [category]: services.filter(s => s.category === category),
      }), {})
    : {[activeCategory]: filtered};

  useEffect(() => { fadeRefs.current = []; }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  });

  const addRef = el => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0057B8]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
            className="text-[#00AEEF] text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-5xl md:text-7xl uppercase text-white leading-none">
            Our<br /><span className="text-[#0057B8]">Services</span>
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-xl">
            Complete security, ICT, solar and telecommunications solutions — design, supply, installation and support.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {allCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="shrink-0 px-5 py-2 font-bold text-sm uppercase tracking-wider transition-all duration-200"
                style={{
                  fontFamily:'Barlow Condensed,sans-serif',
                  background: activeCategory === cat ? '#0057B8' : '#F4F6F9',
                  color: activeCategory === cat ? '#ffffff' : '#0A0F1E',
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm mb-8">
            Showing <span className="font-bold text-[#0057B8]">{filtered.length}</span> services
            {activeCategory !== 'All' && <span> in <span className="font-bold">{activeCategory}</span></span>}
          </p>

          <div className="space-y-12">
            {Object.entries(groupedServices).map(([category, items]) => (
              <div key={category}>
                <div className="mb-8">
                  <div className="relative overflow-hidden rounded-[2rem] mb-8">
                    <img src={items[0]?.image} alt={`${category} overview`} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}>{category}</p>
                      <h2 className="text-3xl md:text-4xl font-black uppercase" style={{fontFamily:'Barlow Condensed,sans-serif'}}>{category}</h2>
                      <p className="text-sm max-w-xl mt-3 text-white/80">Browse our {category.toLowerCase()} services with full visuals and descriptions for every offering.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(({ id, title, description, icon: Icon, image }, i) => (
                    <div key={id} ref={addRef}
                      className="fade-up bg-white overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                      style={{ transitionDelay: `${(i % 6) * 80}ms` }}>

                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        <img src={image} alt={title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          onError={e => { e.target.style.display='none'; }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                        <div className="absolute top-3 left-3 bg-[#0057B8] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1"
                          style={{fontFamily:'Barlow Condensed,sans-serif'}}>
                          {category}
                        </div>
                        <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 flex items-center justify-center">
                          <Icon size={22} className="text-[#0057B8]" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl uppercase text-[#0A0F1E] mb-3" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800}}>{title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>
                        <Link to="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-[#0057B8] px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#004a91]"
                          style={{fontFamily:'Barlow Condensed,sans-serif'}}>
                          Learn More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0F1E] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-3xl md:text-5xl uppercase mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 text-base mb-8">
            Contact us for a free site survey and personalized quotation. We serve Mombasa and the entire Coast Region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+254710441076"
              className="bg-[#0057B8] text-white px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-[#00AEEF] transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              📞 Call Us
            </a>
            <a href="https://wa.me/254710441076" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-green-600 transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              💬 WhatsApp
            </a>
            <Link to="/contact"
              className="border-2 border-white text-white px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-white hover:text-[#0A0F1E] transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              ✉ Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}