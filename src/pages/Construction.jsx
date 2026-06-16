import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Compass, Users, CheckCircle, Map, ShieldAlert, FileText, ArrowRight, MapPin } from 'lucide-react';
import { blogData } from '../data/blogData';
import ClientMarquee from '../components/ClientMarquee';
import { constructionClients } from '../data/clientData';

export default function Construction() {


  // Estimator States
  const [area, setArea] = useState(40000);
  const [floors, setFloors] = useState(3);
  const [basement, setBasement] = useState(false);
  const [turnkey, setTurnkey] = useState(false);
  const [heavyFoundation, setHeavyFoundation] = useState(false);

  // Calculator Math Formulas
  const steelRatio = 4.8 + (floors > 1 ? (floors - 1) * 0.6 : 0) + (basement ? 1.5 : 0) + (heavyFoundation ? 2.5 : 0);
  const steel = (area * steelRatio) / 1000;

  const concreteRatio = 0.09 + (floors > 1 ? floors * 0.015 : 0) + (basement ? 0.03 : 0) + (heavyFoundation ? 0.05 : 0);
  const concrete = area * concreteRatio;

  const duration = Math.min(Math.max(6 + Math.ceil(area / 40000) + Math.round(floors * 0.8) + (basement ? 3 : 0) + (heavyFoundation ? 2 : 0), 6), 24);

  const depth = parseFloat((3.5 + (floors - 1) * 0.8 + (heavyFoundation ? 4.0 : 0)).toFixed(1));

  const handleInquire = () => {
    const specsText = `Hi KDPP team, I am interested in building a Civil Construction project. My estimated specs from your project calculator are:
- Built Area: ${area.toLocaleString()} sq.ft
- Number of Floors: ${floors} levels
- Options: ${[basement ? 'Basement excavation' : '', turnkey ? 'Turnkey fit-out' : '', heavyFoundation ? 'Heavy machinery foundation' : ''].filter(Boolean).join(', ') || 'Standard Core-and-Shell'}
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
    { name: 'Commercial Buildings', desc: 'Engineering and erection of modern commercial complexes, business hubs, and retail outlets.' },
    { name: 'Residential Projects', desc: 'Premium multi-family apartments and private residential bungalows built to strict structural codes.' },
    { name: 'Industrial Facilities', desc: 'Heavy machinery concrete foundations, furnace bases, and factory floor castings.' },
    { name: 'Road & Infrastructure', desc: 'Site grading, drainage pipe layouts, concrete paving, and internal asphalt roads.' },
    { name: 'Interior Fit-outs', desc: 'Turnkey architectural partitions, ceilings, acoustic damping, and commercial cabling.' },
    { name: 'Structural Renovation', desc: 'Concrete jacket retrofitting, foundation reinforcement, and structural repair works.' },
    { name: 'Civil Contracting', desc: 'Registered Class-A government contracting for public utilities and municipal structures.' },
    { name: 'Project Consultancy', desc: 'Detailed material takeoff estimates, engineering calculations, and code inspections.' }
  ];

  const ventures = [
    {
      id: 'navsari-commercial-plaza',
      name: 'Navsari Commercial Plaza',
      desc: 'Erected a modern 5-story commercial business plaza in Navsari with custom structural steel framing, composite decks, and complete interior fit-outs.',
      detailedDesc: 'Navsari Commercial Plaza is a premium 5-story commercial business hub. Constructed with custom structural steel framing and composite metal decks, the plaza features a modern glass curtain wall facade, column-free floor layouts, state-of-the-art HVAC systems, and high-quality turnkey interior fit-outs for financial and corporate offices in Navsari.',
      highlight: '5-Story Commercial Plaza with Modern Glass Facade',
      image: 'https://kdppenterprise.com/images/slider/silder-02.jpg',
      delayClass: 'delay-1'
    },
    {
      id: 'hazira-port-gantry-base',
      name: 'Hazira Port Gantry Base',
      desc: 'Engineered and poured heavy-duty concrete foundations and gantry crane rail support structures for a major maritime logistics operator.',
      detailedDesc: 'The Hazira Port Gantry Base project involved engineering and pouring heavy-duty reinforced concrete foundations to support massive crane systems. Utilizing self-compacting high-strength concrete and custom steel rebar matrices, our team constructed the deep-pile base slabs and rail alignments capable of bearing hundreds of tons of dynamic vertical load for a key logistics operator.',
      highlight: 'Heavy Concrete Foundation Slabs & Gantry Crane Rails',
      image: 'https://kdppenterprise.com/images/home-about.jpg',
      delayClass: 'delay-2'
    },
    {
      id: 'surat-textile-corridor-roadway',
      name: 'Surat Textile Corridor Roadway',
      desc: 'Constructed a 5.5 km internal reinforced concrete road network and integrated storm drainage piping for the regional textiles hub.',
      detailedDesc: 'The Surat Textile Corridor Roadway involved the planning and laying of a 5.5 km internal reinforced concrete roadway designed for heavy axle-load industrial transport. The construction included grading, laying base gravel, concrete paving, and installing high-capacity integrated storm drainage pipes to prevent waterlogging during monsoons in the textile industrial park.',
      highlight: '5.5 km Heavy Axle-Load Industrial Concrete Roadway',
      image: 'https://kdppenterprise.com/images/slider/silder-01.jpg',
      delayClass: 'delay-3'
    }
  ];

  return (
    <div className="business-page">
      {/* 2. Hero Section */}
      <section className="b-hero bg-linen">
        <div className="container b-hero-grid">
          <div className="b-hero-content scroll-reveal">
            <span className="section-label">CONSTRUCTION DIVISION</span>
            <h1>Structures Built to Last. By People Who Know Gujarat.</h1>
            <p className="b-hero-subtitle">
              Civil contracting and structural concrete engineering with three decades of execution experience in South Gujarat.
            </p>
          </div>
          <div className="b-hero-visual scroll-reveal">
            <img src="https://kdppenterprise.com/images/slider/silder-02.jpg" alt="Steel structural frame construction" />
          </div>
        </div>
      </section>

      {/* 3. About Division Section */}
      <section className="section-padding">
        <div className="container b-about-grid">
          <div className="b-about-content scroll-reveal">
            <span className="section-label">WHO WE ARE</span>
            <h2>Registered Class-A Civil Contractor</h2>
            <p>
              KDPP Civil Construction division represents over 30 years of industrial construction, commercial plazas, and road infrastructure projects. Registered as a Class-A contractor in Gujarat, we manage projects from earthwork and concrete foundations to turnkey structural frame erection and interior fit-outs.
            </p>
            <p>
              By owning our concrete mixing stations, steel shuttering grids, and transport dumpers, we bypass subcontractor delays. Every site is supervised directly by our partners, securing high dimensional accuracy and on-budget hand-off for private firms and public developers.
            </p>
          </div>
          
          <div className="b-about-image scroll-reveal">
            <img src="https://kdppenterprise.com/images/home-about.jpg" alt="Construction crane against skyline" />
          </div>
        </div>
      </section>

      {/* 4. Services Grid (2x4) */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">CIVIL SERVICES</span>
            <h2>Commercial, Residential, & Industrial Construction</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card scroll-reveal delay-${(index % 4) + 1}`}>
                <div className="service-card-icon">
                  <HardHat size={24} />
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
            <span className="section-label">COMPLETED VENTURES</span>
            <h2>Representative Infrastructure & Commercial Projects</h2>
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
            <span className="section-label">CIVIL EXPERIENCE</span>
            <h2>Three Decades of Delivery</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card scroll-reveal delay-1">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card scroll-reveal delay-2">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card scroll-reveal delay-3">
              <div className="stat-number">Class-A</div>
              <div className="stat-label">Gujarat Registered</div>
            </div>
            <div className="stat-card scroll-reveal delay-4">
              <div className="stat-number">Local</div>
              <div className="stat-label">South Gujarat Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">THE KDPP DIFFERENCE</span>
            <h2>Proven Expertise and Integrity</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card scroll-reveal delay-1">
              <div className="why-icon">
                <Map size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>30+ Years Local Site Knowledge</h3>
              <p>
                Three decades of navigating South Gujarat's geological profiles, municipal regulations, and supplier channels guarantees smooth project starts.
              </p>
            </div>
            
            <div className="why-card scroll-reveal delay-2">
              <div className="why-icon">
                <FileText size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>End-to-End Execution</h3>
              <p>
                We control design validation, material procurement, concrete casting, and hand-off, avoiding subcontractors and keeping prices honest.
              </p>
            </div>

            <div className="why-card scroll-reveal delay-3">
              <div className="why-icon">
                <Users size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Direct Family Oversight</h3>
              <p>
                Every project site is audited and supervised by the KDPP founding family. We build on personal accountability, not corporate layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientMarquee 
        clients={constructionClients} 
        title="Our Construction Clients" 
        subtitle="BUILT FOR GUJARAT'S LEADING COMPANIES" 
      />

      {/* Structural Estimator Section */}
      <section className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">PROJECT ESTIMATOR</span>
            <h2>Estimate Your Construction Scope in Real-Time</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '15px' }}>
              Adjust parameters below to dynamically calculate required materials and timeline bounds for your civil contracting project.
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
                  <label className="estimator-label">Number of Floors</label>
                  <span className="estimator-value">{floors} floors</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="1" 
                  value={floors} 
                  onChange={(e) => setFloors(parseInt(e.target.value))} 
                  className="estimator-slider"
                />
                <div className="estimator-slider-labels">
                  <span>1 Floor (Single story)</span>
                  <span>10 Floors (Mid-rise hub)</span>
                </div>
              </div>

              <div className="estimator-options">
                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={basement} 
                    onChange={(e) => setBasement(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Basement Excavation</h4>
                    <p>Adds heavy reinforced concrete retaining walls.</p>
                  </div>
                </label>

                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={turnkey} 
                    onChange={(e) => setTurnkey(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Turnkey Interior Fit-out</h4>
                    <p>Adds complete internal cabling, partitions, and ceilings.</p>
                  </div>
                </label>

                <label className="estimator-option-card">
                  <input 
                    type="checkbox" 
                    checked={heavyFoundation} 
                    onChange={(e) => setHeavyFoundation(e.target.checked)} 
                    className="estimator-checkbox"
                  />
                  <div className="estimator-option-body">
                    <h4>Heavy Machinery Foundations</h4>
                    <p>Adds deep-pile reinforced columns and furnace base slabs.</p>
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
            <span className="section-label">CONSTRUCTION INSIGHTS</span>
            <h2>Civil Engineering & Compliance Guides</h2>
          </div>
          
          <div className="ventures-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {blogData.filter(item => item.division === 'construction').map((article, index) => (
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
          <h2>Tell us about your project.</h2>
          <Link to="/#contact" className="btn btn-gold-outline">
            Discuss Your Project <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>


    </div>
  );
}
