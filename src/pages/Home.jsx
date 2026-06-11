import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  { emoji: '✅', title: 'Authorized Distributor', desc: 'Official Dahua and Hikvision partner for Coast Region' },
  { emoji: '�', title: 'Expert Technicians', desc: 'Certified team with years of field experience' },
  { emoji: '�', title: 'After-Sales Support', desc: 'Full warranty, maintenance and ongoing support' },
  { emoji: '⏱️', title: 'Fast Installation', desc: 'On-time delivery and professional setup guaranteed' },
];

const featuredServices = [
  { title: 'CCTV Surveillance', desc: 'Hikvision ColorVu, EZVIZ and Dahua cameras.', image: '/images/cctv-hikvision.jpg' },
  { title: 'Solar and Backup', desc: 'Solar panels, battery banks and inverter systems.', image: '/images/solar-rooftop.jpg' },
  { title: 'Structured Cabling', desc: 'Network infrastructure and rack management.', image: '/images/cabling-rack.jpg' },
  { title: 'Access Control', desc: 'Biometric and PIN access systems for offices.', image: '/images/access-control.jpg' },
];

export default function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = el => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div>
      <section className='relative min-h-screen flex items-center overflow-hidden'>
        <img src='/images/hero-banner.jpg' alt='Proximity Hydros Ltd' className='absolute inset-0 w-full h-full object-cover object-center' />
        <div className='absolute inset-0' style={{background:'rgba(5,8,16,0.82)'}} />
        <div className='absolute left-0 top-0 bottom-0 w-1' style={{background:'#0057B8'}} />
        <div className='absolute inset-0 grid-bg opacity-30' />
        <div className='relative max-w-7xl mx-auto px-6 py-24 w-full'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-widest mb-8 border' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#00AEEF',borderColor:'rgba(0,87,184,0.5)',background:'rgba(0,87,184,0.1)'}}>
              <span className='w-2 h-2 rounded-full animate-pulse' style={{background:'#00AEEF'}} />
              Mombasas Security and ICT Experts
            </div>
            <h1 className='uppercase text-white leading-none mb-6' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900,fontSize:'clamp(3rem,8vw,6rem)'}}>
              Securing<br />
              <span style={{color:'#0057B8'}}>Your World.</span><br />
              <span style={{color:'#9ca3af'}}>Powering</span><br />
              Your Future.
            </h1>
            <p className='text-gray-300 text-lg leading-relaxed mb-10 max-w-xl'>Professional installation of CCTV, access control, solar systems, structured cabling and full ICT infrastructure across Mombasa and the Coast Region.</p>
            <div className='flex flex-wrap gap-4 mb-14'>
              <Link to='/services' className='text-white text-base uppercase tracking-wider px-8 py-4' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,background:'#0057B8'}}>Our Services</Link>
              <a href='tel:+254710441076' className='text-base uppercase tracking-wider px-8 py-4 border-2 border-white text-white' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}>Call Now</a>
              <a href='https://wa.me/254710441076' target='_blank' rel='noopener noreferrer' className='bg-green-500 text-white text-base uppercase tracking-wider px-8 py-4 hover:bg-green-600' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}>WhatsApp</a>
            </div>
            <div className='flex flex-wrap gap-3'>
              {['CCTV Surveillance','Solar and Backup','Structured Cabling','Access Control','Electric Fence','ICT Infrastructure'].map(s => (
                <span key={s} className='text-gray-400 text-sm px-3 py-1' style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-24' style={{background:'linear-gradient(to top,white,transparent)'}} />
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div ref={addRef} className='fade-up text-center mb-14'>
            <p className='text-sm uppercase tracking-widest mb-2' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#0057B8'}}>Why Proximity Hydros</p>
            <h2 className='text-4xl md:text-5xl uppercase' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900,color:'#0A0F1E'}}>Built on Trust and Expertise</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {highlights.map(({ emoji, title, desc }, i) => (
              <div key={title} ref={addRef} className='fade-up p-8 hover:shadow-lg' style={{background:'#F4F6F9',borderBottom:'4px solid #e5e7eb',transitionDelay: `${i * 100}ms`}}>
                <div className='text-4xl mb-4'>{emoji}</div>
                <h3 className='text-lg uppercase mb-2' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800,color:'#0A0F1E'}}>{title}</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 grid-bg' style={{background:'#F4F6F9'}}>
        <div className='max-w-7xl mx-auto px-6'>
          <div ref={addRef} className='fade-up text-center mb-14'>
            <p className='text-sm uppercase tracking-widest mb-2' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#0057B8'}}>What We Do</p>
            <h2 className='text-4xl md:text-5xl uppercase' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900,color:'#0A0F1E'}}>Our Core Services</h2>
            <p className='text-gray-500 mt-3 max-w-xl mx-auto'>From surveillance to solar, we design, supply and install complete technology solutions.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {featuredServices.map(({ title, desc, image }, i) => (
              <Link key={title} to='/services' ref={addRef} className='fade-up group relative overflow-hidden block' style={{aspectRatio:'16/9',background:'#0A0F1E',transitionDelay: `${i * 120}ms`}}>
                <img src={image} alt={title} className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105' />
                <div className='absolute inset-0' style={{background:'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))'}} />
                <div className='absolute inset-0 flex flex-col justify-end p-6 text-white'>
                  <div>
                    <h3 className='text-2xl uppercase tracking-wide mb-2' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}>{title}</h3>
                    <p className='text-gray-200 text-sm leading-relaxed'>{desc}</p>
                  </div>
                  <span className='mt-6 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition-all group-hover:bg-white group-hover:text-[#0A0F1E]'>
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className='text-center mt-10'>
            <Link to='/services' className='text-white px-10 py-4 text-base uppercase tracking-wider' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,background:'#0057B8'}}>View All 15 Services</Link>
          </div>
        </div>
      </section>

      <section className='py-16' style={{background:'#0057B8'}}>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white'>
          {[{num:'500+',label:'Projects Completed'},{num:'10+',label:'Years Experience'},{num:'15+',label:'Services Offered'},{num:'100%',label:'Client Satisfaction'}].map(({num,label}) => (
            <div key={label}>
              <div style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900,fontSize:'3.5rem'}}>{num}</div>
              <div className='text-blue-200 text-sm mt-1 uppercase tracking-widest'>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <div ref={addRef} className='fade-up'>
            <h2 className='text-4xl md:text-5xl uppercase mb-4' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900,color:'#0A0F1E'}}>Ready to Secure Your Property?</h2>
            <p className='text-gray-500 text-lg mb-10'>Call us, WhatsApp, or visit our office on Faza Road, Mombasa. Available Mon-Sat, 7AM-6PM.</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a href='tel:+254710441076' className='text-white px-8 py-4 text-base uppercase tracking-wider' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,background:'#0057B8'}}>Call: +254 710 441 076</a>
              <a href='https://wa.me/254710441076' target='_blank' rel='noopener noreferrer' className='bg-green-500 text-white px-8 py-4 text-base uppercase tracking-wider hover:bg-green-600' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}>WhatsApp Us</a>
              <Link to='/contact' className='text-base uppercase tracking-wider px-8 py-4 border-2' style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700,color:'#0057B8',borderColor:'#0057B8'}}>Send a Message</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}