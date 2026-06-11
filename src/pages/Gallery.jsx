import { useState, useEffect, useRef } from 'react';

const galleryItems = [
  // CCTV
  { src: '/images/cctv-hikvision.jpg', title: 'Hikvision ColorVu CCTV', category: 'CCTV', description: 'High-resolution ColorVu cameras for clear day and night monitoring.' },
  { src: '/images/ezviz-c1c.jpg', title: 'EZVIZ C1C Indoor Camera', category: 'CCTV', description: 'Discrete indoor Wi-Fi cameras for home and office surveillance.' },
  { src: '/images/ezviz-outdoor.jpg', title: 'EZVIZ Outdoor Camera', category: 'CCTV', description: 'Weatherproof outdoor cameras for perimeter and entrance coverage.' },
  { src: '/images/ezviz-battery.jpg', title: 'EZVIZ CB3 Battery Camera', category: 'CCTV', description: 'Wireless battery-backed CCTV for flexible, cable-free installation.' },
  { src: '/images/ezviz-c2c.jpg', title: 'EZVIZ C2C Smart Camera', category: 'CCTV', description: 'Smart home camera with two-way audio and motion alerts.' },
  { src: '/images/panoramic-cam.jpg', title: 'Panoramic Bulb Camera', category: 'CCTV', description: 'Wide-angle panoramic camera ideal for large room coverage.' },

  // Access Control
  { src: '/images/access-control.jpg', title: 'Hikvision Access Panel', category: 'Access Control', description: 'Central access control panel for doors and entry logging.' },
  { src: '/images/access-install.jpg', title: 'Access Control Installation', category: 'Access Control', description: 'Professional installation of biometric and card access systems.' },
  { src: '/images/door-release.jpg', title: 'Emergency Door Release', category: 'Access Control', description: 'Emergency door release system for safe building evacuation.' },
  { src: '/images/hikvision-control.jpg', title: 'Hikvision Biometric Reader', category: 'Access Control', description: 'Biometric readers for secure staff and visitor access.' },

  // Solar
  { src: '/images/solar-rooftop.jpg', title: 'Rooftop Solar Installation', category: 'Solar', description: 'Complete rooftop solar system for renewable power generation.' },
  { src: '/images/solar-install.jpg', title: 'Solar Panel Mounting', category: 'Solar', description: 'Solar panel mounting and fixing for strong, weatherproof roofs.' },
  { src: '/images/solar-batteries.jpg', title: 'Battery Backup Bank', category: 'Solar', description: 'Battery backup for uninterrupted power during outages.' },
  { src: '/images/solar-inverter.jpg', title: 'Solar Inverter Setup', category: 'Solar', description: 'Inverter installation to convert solar DC to usable AC power.' },
  { src: '/images/solar-panel2.jpg', title: 'Solar Panel Array', category: 'Solar', description: 'Large solar panel array delivering maximum energy output.' },

  // ICT
  { src: '/images/cabling-rack.jpg', title: 'Server Rack Cabling', category: 'ICT', description: 'Structured cabling and rack management for IT rooms.' },
  { src: '/images/ict-rack.jpg', title: 'ICT Infrastructure Room', category: 'ICT', description: 'Full ICT infrastructure setup for data centres and offices.' },
  { src: '/images/rack-tech.jpg', title: 'Network Rack Installation', category: 'ICT', description: 'Professional rack installation with neatly labelled cabling.' },
  { src: '/images/rack-install.jpg', title: 'Rack Mounting & Setup', category: 'ICT', description: 'Rack mounting, patching and switch configuration for offices.' },

  // Alarm
  { src: '/images/alarm-system.jpg', title: 'Alarm System Kit', category: 'Alarm', description: 'Complete alarm system for commercial and residential protection.' },

  // Fire
  { src: '/images/fire-alarm.jpg', title: 'Fire Alarm Components', category: 'Fire', description: 'Fire detection devices and alarms for safety compliance.' },

  // Gates
  { src: '/images/automated-gate.jpg', title: 'Automated Gate Motor', category: 'Gates', description: 'Centurion gate motor installation for secure automated access.' },
  { src: '/images/gate-motor.jpg', title: 'Gate Motor & Controls', category: 'Gates', description: 'Gate motor, remote control and safety beam setup.' },
];

const cats = ['All', ...new Set(galleryItems.map(g => g.category))];
const galleryCategories = cats.filter(cat => cat !== 'All');

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const fadeRefs = useRef([]);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  const groupedGallery = activeCategory === 'All'
    ? galleryCategories.reduce((acc, category) => ({
        ...acc,
        [category]: galleryItems.filter(item => item.category === category),
      }), {})
    : {[activeCategory]: filtered};

  useEffect(() => { fadeRefs.current = []; }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  });

  useEffect(() => {
    const handleKey = e => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox(i => (i - 1 + filtered.length) % filtered.length);
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % filtered.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, filtered.length]);

  const addRef = el => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0057B8]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
            className="text-[#00AEEF] text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-5xl md:text-7xl uppercase text-white leading-none">
            Project<br /><span className="text-[#0057B8]">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-xl">
            A showcase of our installations, equipment and completed projects across Mombasa and the Coast Region.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="shrink-0 px-5 py-2 font-bold text-sm uppercase tracking-wider transition-all"
                style={{
                  fontFamily:'Barlow Condensed,sans-serif',
                  background: activeCategory === cat ? '#0057B8' : '#F4F6F9',
                  color: activeCategory === cat ? '#fff' : '#0A0F1E',
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          {Object.entries(groupedGallery).map(([category, items]) => (
            <div key={category}>
              <div className="mb-8">
                <p className="text-sm uppercase tracking-widest mb-2" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#0057B8'}}>{category}</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0A0F1E]" style={{fontFamily:'Barlow Condensed,sans-serif'}}>{category} Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((item, idx) => {
                  const lightboxIndex = filtered.findIndex(filteredItem => filteredItem.src === item.src && filteredItem.title === item.title);
                  return (
                    <div key={`${category}-${idx}`} ref={addRef}
                      className="fade-up group relative overflow-hidden cursor-pointer bg-[#0A0F1E] rounded-3xl"
                      style={{ aspectRatio:'1/1', transitionDelay:`${(idx % 8) * 60}ms` }}
                      onClick={() => setLightbox(lightboxIndex)}>
                      <img src={item.src} alt={item.title}
                        className="w-full h-full object-cover"
                        onError={e => {
                          e.target.parentElement.style.background = '#0057B8';
                          e.target.style.display = 'none';
                        }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm uppercase" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}>{item.title}</p>
                        <p className="text-white text-xs mt-1 leading-tight">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-[#0057B8] text-white w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-[#0A0F1E] transition-colors z-10">
            ×
          </button>
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => (i-1+filtered.length)%filtered.length); }}
            className="absolute left-4 bg-[#0057B8]/80 text-white w-10 h-10 flex items-center justify-center text-xl hover:bg-[#0057B8] transition-colors z-10">
            ‹
          </button>
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => (i+1)%filtered.length); }}
            className="absolute right-4 bg-[#0057B8]/80 text-white w-10 h-10 flex items-center justify-center text-xl hover:bg-[#0057B8] transition-colors z-10">
            ›
          </button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.title}
              className="w-full max-h-[75vh] object-contain" />
            <div className="text-center mt-4">
              <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800}}
                className="text-white text-xl uppercase">{filtered[lightbox]?.title}</p>
              <p className="text-[#00AEEF] text-sm">{filtered[lightbox]?.category}</p>
              <p className="text-gray-500 text-xs mt-1">{lightbox+1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}