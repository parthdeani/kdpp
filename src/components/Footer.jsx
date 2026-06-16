import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer animate-on-scroll">
      <div className="container">
        <div className="footer-grid">
          {/* Brand + Corporate HQ */}
          <div className="footer-brand">
            <h2>KDPP Group</h2>
            <p>Three generations of earned trust, deep roots in Surat, and businesses that support Gujarat's real industries.</p>
            <div style={{ marginTop: '16px', fontSize: '13px', lineHeight: '1.7', opacity: 0.85 }}>
              <strong style={{ color: 'var(--color-gold)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate Head Office</strong><br />
              "Aavishkar" Beside Shreeji Vihar Apartment,<br />
              Near Sardar Bridge, Near Gujarat Gas Circle,<br />
              Adajan Road, Surat - 395009<br />
              <span style={{ marginTop: '6px', display: 'inline-block' }}>
                📞 +91 97143 58555 | info@kdppenterprise.com
              </span>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="footer-links-gold" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gold)' }}>Group Portfolio</Link>
              <Link to="/compliance" className="footer-links-gold" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gold)' }}>Compliance & Certifications</Link>
              <Link to="/insights" className="footer-links-gold" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gold)' }}>Insights & Briefings</Link>
              <Link to="/careers" className="footer-links-gold" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gold)' }}>Careers & Culture</Link>
            </div>
          </div>

          {/* Marine Depot */}
          <div className="footer-col">
            <h4>Marine & Container</h4>
            <ul className="footer-links">
              <li><Link to="/marine">Depot Services</Link></li>
              <li><Link to="/marine#services">Maintenance & Repair</Link></li>
              <li><Link to="/marine#about">Hazira Operations</Link></li>
            </ul>
            <p style={{ fontSize: '12px', color: '#A5ADC0', marginTop: '10px', lineHeight: '1.6' }}>
              KDPP Logistics Park,<br />
              Opp. Chhab Chhaba Chhab Water Park,<br />
              Rajgiri Village, Hazira Road, Surat - 394510<br />
              📞 +91 95586 46002
            </p>
          </div>

          {/* Warehouse Builder */}
          <div className="footer-col">
            <h4>Warehouse Builder</h4>
            <ul className="footer-links">
              <li><Link to="/warehouse">Industrial Building</Link></li>
              <li><Link to="/warehouse#services">PEB Structures</Link></li>
              <li><Link to="/warehouse#about">Cold Storage</Link></li>
            </ul>
            <p style={{ fontSize: '12px', color: '#A5ADC0', marginTop: '10px', lineHeight: '1.6' }}>
              Office: Block No. 19 Hari Pura,<br />
              Near McDonalds, Kadodara Road,<br />
              Surat - 394327<br />
              📞 +91 97143 58555
            </p>
          </div>

          {/* Packaging Industry */}
          <div className="footer-col">
            <h4>Packaging Industry</h4>
            <ul className="footer-links">
              <li><Link to="/packaging">Export Packaging</Link></li>
              <li><Link to="/packaging#services">Corrugated Boxes</Link></li>
              <li><Link to="/packaging#about">Volume Production</Link></li>
            </ul>
            <p style={{ fontSize: '12px', color: '#A5ADC0', marginTop: '10px', lineHeight: '1.6' }}>
              Plant: Plot No. B/9-17, Road No. 12,<br />
              Hojiwala Industrial Estate,<br />
              Sachin, Surat - 394230
            </p>
          </div>

          {/* Civil Contracting */}
          <div className="footer-col">
            <h4>Civil Contracting</h4>
            <ul className="footer-links">
              <li><Link to="/construction">Commercial Construction</Link></li>
              <li><Link to="/construction#services">Industrial Civil Works</Link></li>
              <li><Link to="/construction#about">South Gujarat Contractor</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} KDPP Group of Companies. All rights reserved.
          </div>
          <div className="footer-tagline">
            Three generations of trust — since 1975.
          </div>
        </div>
      </div>
    </footer>
  );
}
