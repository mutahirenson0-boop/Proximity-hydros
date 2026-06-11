import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const serviceList = [
  'CCTV Surveillance','Access Control','Solar and Backup',
  'Structured Cabling','Automated Gates','Alarm Systems',
  'Fire Systems','ICT Services',
];

export default function Footer() {
  return (
    <footer style={{background:'#0A0F1E'}} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 flex items-center justify-center font-bold text-white text-xl" style={{background:'#0057B8'}}>P</div>
            <div>
              <div className="text-xl uppercase leading-none" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800}}>Proximity</div>
              <div className="text-sm uppercase tracking-widest leading-none" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#00AEEF'}}>Hydros Ltd</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Your trusted partner in security systems, ICT infrastructure, solar energy and telecommunications in Mombasa, Kenya.
          </p>
          <p className="text-sm uppercase tracking-wider" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:600,color:'#00AEEF'}}>
            Authorized Dahua and Hikvision Distributor
          </p>
        </div>

        <div>
          <h4 className="text-lg uppercase tracking-wider mb-5 pb-2" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800,borderBottom:'1px solid #0057B8'}}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 text-sm flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <span style={{color:'#0057B8'}}>-</span>{link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg uppercase tracking-wider mb-5 pb-2" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800,borderBottom:'1px solid #0057B8'}}>
            Our Services
          </h4>
          <ul className="space-y-2">
            {serviceList.map(service => (
              <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                <span style={{color:'#0057B8'}}>-</span>{service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg uppercase tracking-wider mb-5 pb-2" style={{fontFamily:'Barlow Condensed,sans-serif',fontWeight:800,borderBottom:'1px solid #0057B8'}}>
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span style={{color:'#00AEEF'}}>Loc:</span>Faza Road, Mombasa, Kenya
            </li>
            <li className="flex items-start gap-3">
              <span style={{color:'#00AEEF'}}>Tel:</span>
              <div>
                <a href="tel:+254710441076" className="hover:text-blue-300 transition-colors block">+254 710 441 076</a>
                <a href="tel:+254733904236" className="hover:text-blue-300 transition-colors block">+254 733 904 236</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">WA:</span>
              <a href="https://wa.me/254710441076" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                +254 710 441 076
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span style={{color:'#00AEEF'}}>Em:</span>
              <a href="mailto:info@proximitytech.co.ke" className="hover:text-blue-300 transition-colors break-all">
                info@proximitytech.co.ke
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span style={{color:'#00AEEF'}}>Hrs:</span>Mon - Sat: 7AM - 6PM | Sun: Closed
            </li>
          </ul>
        </div>
      </div>

      <div style={{borderTop:'1px solid #1f2937'}}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">{new Date().getFullYear()} Proximity Hydros Ltd. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Faza Road, Mombasa, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
