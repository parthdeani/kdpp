import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Shield, Wrench, HardHat, Hammer, Layout, Zap, ArrowRight, MapPin, CheckCircle, Compass, Award, Map } from 'lucide-react';
import { blogData } from '../data/blogData';
import ClientMarquee from '../components/ClientMarquee';
import { warehouseClients } from '../data/clientData';

export default function Warehouse() {
  // Estimator States
  const [area, setArea] = useState(50000);
  const [height, setHeight] = useState(8);
  const [mezzanine, setMezzanine] = useState(false);
  const [insulation, setInsulation] = useState(false);
  const [gantry, setGantry] = useState(false);

  // Calculator Math Formulas
  const steelRatio = 5.2 + (height > 10 ? (height - 10) * 0.5 : 0) + (mezzanine ? 3.8 : 0) + (gantry ? 1.8 : 0) + (insulation ? 0.8 : 0);
  const steel = (area * steelRatio) / 1000;

  const concreteRatio = 0.08 + (gantry ? 0.04 : 0) + (mezzanine ? 0.02 : 0);
  const concrete = area * concreteRatio;

  const duration = Math.min(Math.max(4 + Math.ceil(area / 60000) + (gantry ? 2 : 0) + (mezzanine ? 1 : 0) + (insulation ? 1 : 0), 4), 16);

  const depth = parseFloat((3 + (height - 6) * 0.4 + (gantry ? 3 : 0)).toFixed(1));

  const handleInquire = () => {
    const specsText = `Hi KDPP team, I am interested in building a Warehouse facility. My estimated specs from your project calculator are:
- Built Area: ${area.toLocaleString()} sq.ft
- Eaves Height: ${height} meters
- Options: ${[mezzanine ? 'Mezzanine decks' : '', insulation ? 'Cold PUF insulation' : '', gantry ? 'Gantry crane bases' : ''].filter(Boolean).join(', ') || 'Standard PEB'}
- Estimated Tonnage: ${Math.round(steel)} tonnes of high-tensile steel
- Estimated Concrete: ${Math.round(concrete)} m³ volume
- Project Timeframe: ${duration} months
- Est. Pile Depth: ${depth}m`;

    sessionStorage.setItem('pendingEstimate', specsText);
    window.location.href = '/#contact';
  };
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  const services = [
    { name: 'Pre-engineered Buildings', desc: 'Custom designed PEB structures optimized for weight, wind loads, and rapid site erection.' },
    { name: 'Cold Storage Construction', desc: 'Insulated walk-in freezers, multi-temperature zones, and food-safe envelope structures.' },
    { name: 'Industrial Sheds', desc: 'Durable, long-span structural steel factory shells suited for machinery layouts.' },
    { name: 'Mezzanine Floors', desc: 'Industrial steel-deck intermediate floors that double active warehouse cubic volume.' },
    { name: 'Warehouse Layout Design', desc: 'CAD traffic routing, fire security zone planning, and column-free spacing.' },
    { name: 'Structural Steel Work', desc: 'Heavy structural frame fabrication, trusses, and crane gantry girder structures.' },
    { name: 'Site Development', desc: 'Site excavation, concrete slab flooring, land leveling, and exterior roadway paving.' },
    { name: 'Project Management', desc: 'End-to-end design-build support including government permits and safety hand-off.' }
  ];

  const ventures = [
    {
      id: 'surat-logistics-park',
      name: 'Safexpress NH-48 Warehouse',
      desc: 'Designed and built a 75,000 sq.ft state-of-the-art PEB logistics warehouse on NH-48 Kadodara Road, customized for express cargo distribution.',
      detailedDesc: 'The Safexpress NH-48 warehouse is a high-specification logistics hub built on the main highway corridor near Surat. The PEB structure has clear spans, a high load-bearing floor slab, docking bays with automatic rolling shutters, and integrated offices. It represents KDPP\'s capacity to deliver build-to-suit premises for major national cargo carriers.',
      highlight: '75,000 Sq.Ft Build-to-Suit PEB Warehouse on NH-48',
      image: 'https://kdppenterprise.com/images/slider/silder-01.jpg',
      delayClass: 'delay-1'
    },
    {
      id: 'gujarat-cold-chain-depot',
      name: 'New Bharat Transport Nagar',
      desc: 'Our premier industrial and transport warehousing park on Saroli-Kadodara Road, housing over 45 regional logistics clients.',
      detailedDesc: 'New Bharat Transport Nagar is KDPP\'s signature multi-client industrial warehouse park. Spanning multiple acres on the key logistical arterial road of Surat, this park provides secure, dry, and highly accessible storage units ranging from 10,000 to 400,000 sq.ft for logistics, retail, and wholesale merchants.',
      highlight: 'Multi-Tenant Logistics Park on Saroli-Kadodara Road',
      image: 'https://kdppenterprise.com/images/slider/silder-03.jpg',
      delayClass: 'delay-2'
    },
    {
      id: 'hazira-port-factory-shed',
      name: 'Sachin PEB Industrial Shed',
      desc: 'Constructed a 120,000 sq.ft heavy structural steel fabrication shed with custom wind-load reinforcements at Hojiwala Industrial Estate.',
      detailedDesc: 'The Sachin Industrial Shed is a massive factory and storage warehouse built for high-density textile and manufacturing assembly. Custom wind-load engineering ensures stability in coastal weather cycles, featuring double-skin metal roof insulation, crane gantry girder structures, and extensive column-free spacing.',
      highlight: '120,000 Sq.Ft Factory Shed at Hojiwala Sachin',
      image: 'https://kdppenterprise.com/images/home-about.jpg',
      delayClass: 'delay-3'
    }
  ];

  return (
    <div className="business-page">
      {/* 2. Hero Section */}
      <section className="b-hero bg-linen">
        <div className="container b-hero-grid">
          <div className="b-hero-content scroll-reveal">
            <span className="section-label">WAREHOUSE division</span>
            <h1>Industrial Space, Built for Leaders.</h1>
            <p className="b-hero-subtitle">
              From build-to-suit warehouses to multi-client logistics parks — KDPP Warehouse Developers delivers spaces from 10,000 sq.ft to 400,000 sq.ft.
            </p>
          </div>
          <div className="b-hero-visual scroll-reveal">
            <img src="https://kdppenterprise.com/images/slider/silder-01.jpg" alt="Industrial Warehouse interior" />
          </div>
        </div>
      </section>

      {/* 3. About Division Section */}
      <section className="section-padding">
        <div className="container b-about-grid">
          <div className="b-about-content scroll-reveal">
            <span className="section-label">WHO WE ARE</span>
            <h2>15+ Years of Industrial Land Development</h2>
            <p>
              KDPP Warehouse Developers, backed by over 40 years of family real estate heritage in Gujarat, specializes in acquiring, developing, and leasing premium industrial properties.
            </p>
            <p>
              We design and construct top-tier industrial sheds, logistics parks, and cold storage units. With projects situated on key transport corridors like NH-48 and Saroli-Kadodara Road, and upcoming developments in Vapi, Panoli, and Ankleshwar, we provide businesses with strategically positioned distribution hubs.
            </p>
          </div>
          
          <div className="b-about-image scroll-reveal">
            <img src="https://kdppenterprise.com/images/home-about.jpg" alt="Engineers checking blueprint" />
          </div>
        </div>
      </section>

      {/* 4. Services Grid (2x4) */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">STRUCTURAL SERVICES</span>
            <h2>Custom Warehousing & Factory Sheds</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card scroll-reveal delay-${(index % 4) + 1}`}>
                <div className="service-card-icon">
                  <Layers size={24} />
                </div>
                <div className="service-card-body">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ventures Section */}
      <section className="section-padding">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">REPRESENTATIVE VENTURES</span>
            <h2>Custom Designed Complexes & Facilities</h2>
          </div>
          <div className="ventures-grid">
            {ventures.map((venture, index) => {
              return (
                <Link 
                  key={index} 
                  to={`/venture/${venture.id}`}
                  className={`venture-card scroll-reveal ${venture.delayClass}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MapPin className="venture-icon" size={32} />
                  <h3>{venture.name}</h3>
                  <p>{venture.desc}</p>
                  <span className="card-link" style={{ marginTop: '16px', display: 'inline-flex' }}>
                    View Details & Photos <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Key Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">TRACK RECORD</span>
            <h2>Built Across Gujarat</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card scroll-reveal delay-1">
              <div className="stat-number">80+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-card scroll-reveal delay-2">
              <div className="stat-number">2.5M+</div>
              <div className="stat-label">Sq.Ft Built & Leased</div>
            </div>
            <div className="stat-card scroll-reveal delay-3">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card scroll-reveal delay-4">
              <div className="stat-number">Vapi/Ankleshwar</div>
              <div className="stat-label">Regional Hub Expansion</div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section */}
      <ClientMarquee 
        clients={warehouseClients} 
        title="Our Warehouse & Logistics Clients" 
        subtitle="TRUSTED BY LEADING LOGISTICS BRANDS" 
        className="bg-alternate"
      />

      {/* 6. Why Choose Us */}
      <section className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">THE KDPP DIFFERENCE</span>
            <h2>Why Industrial Leaders Partner With Us</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card scroll-reveal delay-1">
              <div className="why-icon">
                <Layout size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Design-Build Under One Roof</h3>
              <p>
                We handle structural design, steel fabrication, and site construction. This eliminates hand-off delays and secures single accountability.
              </p>
            </div>
            
            <div className="why-card scroll-reveal delay-2">
              <div className="why-icon">
                <HardHat size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>In-House Technical Staff</h3>
              <p>
                Our team includes structural designers, site supervisors, and safety managers who personally check every weld and concrete batch.
              </p>
            </div>

            <div className="why-card scroll-reveal delay-3">
              <div className="why-icon">
                <Zap size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Multi-Industry Expertise</h3>
              <p>
                We have built cold stores for pharma, high-load sheds for textiles, and logistics complexes for shipping giants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Estimator Section */}
      <section className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">PROJECT ESTIMATOR</span>
            <h2>Estimate Your Facility Scale in Real-Time</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '15px' }}>
              Adjust parameters below to dynamically calculate required materials and timeline bounds for your warehouse project.
            </p>
          </div>

          <div className="estimator-grid scroll-reveal">
            {/* Control Panel */}
            <div className="estimator-inputs">
              <div className="estimator-field">
                <div className="estimator-field-header">
                  <label className="estimator-label">Built Area Size</label>
                  <span className="estimator-value">{area.toLocaleString()} sq.ft</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="500000" 
                  step="5000" 
                  value={area} 
                  onChange={(e) => setArea(parseInt(e.target.value))} 
                  className="estimator-slider"
                />
                <div className="estimator-slider-labels">
                  <span>10,000 sq.ft</span>
                  <span>500,000 sq.ft</span>
                </div>
              </div>

              <div className="estimator-field">
                <div className="estimator-field-header">
                  <label className="estimator-label">Clear Eaves Height</label>
                  <span className="estimator-value">{height} meters</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="15" 
                  step="1" 
                  value={height} 
                  onChange={(e) => setHeight(parseInt(e.target.value))} 
                  className="estimator-slider"
                />
                <div className="estimator-slider-labels">
                  <span>6m (Standard)</span>
                  <span>15m (High bay)</span>
                </div>
              </div>

              <div className="estimator-options">
                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={mezzanine} 
                    onChange={(e) => setMezzanine(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Heavy Mezzanine Deck</h4>
                    <p>Adds multi-level structural steel floors.</p>
                  </div>
                </label>

                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={insulation} 
                    onChange={(e) => setInsulation(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Cold Storage PUF Walls</h4>
                    <p>Adds thermal isolation paneling structural hooks.</p>
                  </div>
                </label>

                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={gantry} 
                    onChange={(e) => setGantry(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Gantry Crane Support</h4>
                    <p>Adds heavy concrete piling and crane gantry girders.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Calculations Dashboard */}
            <div className="estimator-results">
              <span className="hub-meta" style={{ color: 'var(--color-gold)' }}>ENGINEERING RUNNING CALCULATIONS</span>
              
              <div className="estimator-stats-grid">
                <div className="estimator-stat-box">
                  <span className="estimator-stat-label">Estimated Steel</span>
                  <span className="estimator-stat-value">{Math.round(steel).toLocaleString()} <span className="unit">Tonnes</span></span>
                </div>

                <div className="estimator-stat-box">
                  <span className="estimator-stat-label">Concrete Volume</span>
                  <span className="estimator-stat-value">{Math.round(concrete).toLocaleString()} <span className="unit">m³</span></span>
                </div>

                <div className="estimator-stat-box">
                  <span className="estimator-stat-label">Est. Project Duration</span>
                  <span className="estimator-stat-value">{duration} <span className="unit">Months</span></span>
                </div>

                <div className="estimator-stat-box">
                  <span className="estimator-stat-label">Min. Foundation Pile Depth</span>
                  <span className="estimator-stat-value">{depth} <span className="unit">Meters</span></span>
                </div>
              </div>

              <div className="estimator-summary-note">
                <p>
                  *Calculations are structural estimates based on pre-engineered steel ratios in Surat soil conditions. Real-site variables will adjust design parameters.
                </p>
              </div>

              <button onClick={handleInquire} className="btn btn-navy" style={{ width: '100%', marginTop: '20px' }}>
                Submit Estimate to Engineers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Division Insights Section */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">WAREHOUSE INSIGHTS</span>
            <h2>Industrial Engineering & Storage Guides</h2>
          </div>
          
          <div className="ventures-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {blogData.filter(item => item.division === 'warehouse').map((article, index) => (
              <div key={article.id} className={`venture-card scroll-reveal delay-${index + 1}`} style={{ display: 'flex', flexDirection: 'column', padding: '32px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{article.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                  {article.summary}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '16px', fontSize: '12px', color: 'var(--color-muted)' }}>
                  <span>{article.date}</span>
                  <Link to={`/insights/${article.id}`} style={{ fontWeight: 700, color: 'var(--color-navy)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Guide <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Band */}
      <section className="cta-band scroll-reveal">
        <div className="container">
          <h2>Planning a warehouse or industrial shed?</h2>
          <Link to="/#contact" className="btn btn-gold-outline">
            Get a Free Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>


    </div>
  );
}
