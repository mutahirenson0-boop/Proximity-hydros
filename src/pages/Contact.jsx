import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    from_name: '', from_email: '', phone: '', service: '', message: ''
  });

  const handleChange = e =>
    setFormData(d => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
  'service_89hilw6',
  'template_hevtg8c',
  formRef.current,
  's8Lq4SM7zb3xYhmZJ'
);
      setStatus('success');
      setFormData({ from_name:'', from_email:'', phone:'', service:'', message:'' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0057B8]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600}}
            className="text-[#00AEEF] text-sm uppercase tracking-widest mb-3">Reach Us</p>
          <h1 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-5xl md:text-7xl uppercase text-white leading-none">
            Contact<br /><span className="text-[#0057B8]">Us</span>
          </h1>
        </div>
      </section>

      {/* QUICK CONTACT BUTTONS */}
      <section className="bg-[#0057B8] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          <a href="tel:+254710441076"
            className="flex items-center gap-2 bg-white text-[#0057B8] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#0A0F1E] hover:text-white transition-colors"
            style={{fontFamily:'Barlow Condensed,sans-serif'}}>
            📞 +254 710 441 076
          </a>
          <a href="tel:+254733904236"
            className="flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0057B8] transition-colors"
            style={{fontFamily:'Barlow Condensed,sans-serif'}}>
            📞 +254 733 904 236
          </a>
          <a href="https://wa.me/254710441076?text=Hello%20Proximity%20Hydros%2C%20I%27d%20like%20to%20inquire%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-colors"
            style={{fontFamily:'Barlow Condensed,sans-serif'}}>
            💬 WhatsApp Us
          </a>
          <a href="mailto:info@proximitytech.co.ke"
            className="flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0057B8] transition-colors"
            style={{fontFamily:'Barlow Condensed,sans-serif'}}>
            ✉ Email Us
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* Contact info */}
          <div className="space-y-4">
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
              className="text-3xl uppercase text-[#0A0F1E] mb-6">Get In Touch</h2>

            {[
              { emoji:'📞', title:'Call or Text', lines:[
                { label:'+254 710 441 076', href:'tel:+254710441076' },
                { label:'+254 733 904 236', href:'tel:+254733904236' },
              ]},
              { emoji:'💬', title:'WhatsApp', green:true, lines:[
                { label:'+254 710 441 076', href:'https://wa.me/254710441076' },
                { label:'+254 733 904 236', href:'https://wa.me/254733904236' },
              ]},
              { emoji:'✉', title:'Email', lines:[
                { label:'info@proximitytech.co.ke', href:'mailto:info@proximitytech.co.ke' },
              ]},
              { emoji:'📍', title:'Location', lines:[
                { label:'Faza Road, Mombasa, Kenya', href:null },
              ]},
              { emoji:'🕒', title:'Working Hours', lines:[
                { label:'Monday – Saturday', href:null },
                { label:'7:00 AM – 6:00 PM', href:null },
              ]},
            ].map(({ emoji, title, lines, green }) => (
              <div key={title} className="bg-white p-5 flex items-start gap-4 border-l-4 border-[#0057B8] hover:shadow-md transition-shadow">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-sm uppercase tracking-wider text-[#0A0F1E] mb-1">{title}</p>
                  {lines.map(({ label, href }) =>
                    href ? (
                      <a key={label} href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-sm block transition-colors ${green ? 'text-green-600 hover:text-green-800' : 'text-gray-500 hover:text-[#0057B8]'}`}>
                        {label}
                      </a>
                    ) : (
                      <p key={label} className="text-sm text-gray-500">{label}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            <a href="https://wa.me/254710441076?text=Hello%20Proximity%20Hydros%20Ltd%2C%20I%20need%20a%20quotation."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              💬 Send WhatsApp Message Now
            </a>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 shadow-sm">
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
              className="text-3xl uppercase text-[#0A0F1E] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the form and we'll get back to you as soon as possible.
            </p>

            {/* Success message */}
            {status === 'success' && (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 mb-6">
                <span className="text-xl">✅</span>
                <div>
                  <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-sm uppercase">Message Sent Successfully!</p>
                  <p className="text-xs mt-1">
                    Thank you! We'll reply to info@proximitytech.co.ke shortly.
                    For faster response, WhatsApp us on +254 710 441 076.
                  </p>
                </div>
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-6">
                <span className="text-xl">❌</span>
                <div>
                  <p style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-sm uppercase">Failed to Send</p>
                  <p className="text-xs mt-1">
                    Please call us on +254 710 441 076 or WhatsApp us directly.
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-xs uppercase tracking-wider text-[#0A0F1E] block mb-2">
                    Full Name *
                  </label>
                  <input type="text" name="from_name" value={formData.from_name}
                    onChange={handleChange} required placeholder="Your full name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0057B8] transition-colors" />
                </div>
                <div>
                  <label style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-xs uppercase tracking-wider text-[#0A0F1E] block mb-2">
                    Email Address *
                  </label>
                  <input type="email" name="from_email" value={formData.from_email}
                    onChange={handleChange} required placeholder="your@email.com"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0057B8] transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-xs uppercase tracking-wider text-[#0A0F1E] block mb-2">
                    Phone / WhatsApp
                  </label>
                  <input type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+254 7XX XXX XXX"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0057B8] transition-colors" />
                </div>
                <div>
                  <label style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                    className="text-xs uppercase tracking-wider text-[#0A0F1E] block mb-2">
                    Service Interested In
                  </label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0057B8] transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option>CCTV Surveillance</option>
                    <option>Access Control</option>
                    <option>Solar & Backup Systems</option>
                    <option>Structured Cabling</option>
                    <option>Fibre Optics</option>
                    <option>Wireless Installation</option>
                    <option>Automated Gates</option>
                    <option>Electric Fence</option>
                    <option>Video Intercom</option>
                    <option>Alarm Systems</option>
                    <option>Fire Systems</option>
                    <option>IP Phones</option>
                    <option>ICT Services</option>
                    <option>Telecommunication</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:700}}
                  className="text-xs uppercase tracking-wider text-[#0A0F1E] block mb-2">
                  Message *
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  required rows={5}
                  placeholder="Tell us about your project, location and requirements..."
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#0057B8] transition-colors resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-3 bg-[#0057B8] text-white py-4 font-bold text-base uppercase tracking-wider hover:bg-[#0A0F1E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{fontFamily:'Barlow Condensed,sans-serif'}}>
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : '✉ Send Message'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Faster response via{' '}
                <a href="https://wa.me/254710441076" target="_blank" rel="noopener noreferrer"
                  className="text-green-600 font-bold hover:underline">WhatsApp</a>
                {' '}or call{' '}
                <a href="tel:+254710441076" className="text-[#0057B8] font-bold hover:underline">
                  +254 710 441 076
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:900}}
            className="text-3xl uppercase text-[#0A0F1E] mb-6 pt-8">
            Find Us — Faza Road, Mombasa
          </h2>
          <div className="w-full h-80 md:h-96 border-2 border-gray-200 overflow-hidden">
            <iframe
              title="Proximity Hydros Ltd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d39.6682!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012345%3A0x0!2sFaza%20Road%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1"
              width="100%" height="100%"
              style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="https://maps.google.com/?q=Faza+Road+Mombasa+Kenya"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0057B8] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#0A0F1E] transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              📍 Open in Google Maps
            </a>
            <a href="https://wa.me/254710441076?text=Hi%2C%20please%20send%20me%20your%20exact%20location%20on%20Faza%20Road."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-colors"
              style={{fontFamily:'Barlow Condensed,sans-serif'}}>
              💬 Ask for Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}