import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Shield, Settings, Sliders, CheckCircle, Award, Compass, ArrowRight, MapPin } from 'lucide-react';
import { blogData } from '../data/blogData';
import ClientMarquee from '../components/ClientMarquee';
import { packagingClients } from '../data/clientData';

export default function Packaging() {


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
    { name: 'Export Packaging', desc: 'Heavy-duty cardboard sheets and crates engineered to withstand humidity and marine shipping cargo pressures.' },
    { name: 'Industrial Packaging', desc: 'Custom wood-braced corrugated shells built to protect auto parts, heavy machinery, and tooling components.' },
    { name: 'Custom Box Design', desc: 'AutoCAD-designed dimensions that minimize dead volume and maximize ocean container loading densities.' },
    { name: 'Corrugated Solutions', desc: 'High-strength double-wall and triple-wall boxes for handling bulk heavy weights.' },
    { name: 'Strapping & Wrapping', desc: 'Industrial grade polypropylene strapping, stretch films, and vacuum seal options.' },
    { name: 'Pallet Packaging', desc: 'Standard ISPM-15 certified heat-treated wooden pallets and high-density pressboard alternatives.' },
    { name: 'Bulk Bag Solutions', desc: 'FIBC bulk bags for chemical, agricultural, and mineral powder storage.' },
    { name: 'Eco-Friendly Packaging', desc: '100% recyclable, biodegradable cardboard packaging that meets strict EU environmental standards.' }
  ];

  const ventures = [
    {
      id: 'surat-central-packaging-plant',
      name: 'Sachin Automatic 5-Ply Plant',
      desc: 'Our primary high-volume 70,000 sq.ft manufacturing unit at Hojiwala Industrial Estate, Sachin, producing over 100,000 boxes per shift.',
      detailedDesc: 'The Sachin Packaging Plant is equipped with a state-of-the-art fully automatic 5-ply corrugation and board making line. Sited at Road No. 12, Hojiwala Industrial Estate, Sachin, the plant handles high-volume industrial carton runs. It includes an in-house quality assurance laboratory where paper rolls undergo Edge Crush Tests (ECT), Ring Crush, Burst Factor, and cobb value evaluations.',
      highlight: '70,000 Sq.Ft Plant, 100,000 Boxes per Shift, Fully Automatic 5-Ply Line',
      image: 'https://www.kdppenterprise.com/images/bg/packaging-industries.jpg',
      delayClass: 'delay-1'
    },
    {
      id: 'south-gujarat-eco-pallet-unit',
      name: 'ISPM-15 Kiln Pallet Unit',
      desc: 'Specialized facility in Surat producing stamped, heat-treated wood pallets to meet strict international phytosanitary rules.',
      detailedDesc: 'The Pallet Unit features certified kiln heat-treatment capabilities. Raw timber pallets are treated at core temperatures exceeding 56°C for 30 minutes, receiving the IPPC compliance seal. We ensure that chemical, textile, and manufacturing exporters receive pallets cleared for entry into European and US port terminals.',
      highlight: 'Kiln Heat-Treated Wooden Pallets, Certified ISPM-15 Stamped',
      image: 'https://www.kdppenterprise.com/images/packaging-industries/packaging-industries-05.jpg',
      delayClass: 'delay-2'
    },
    {
      id: 'hazira-industrial-bag-plant',
      name: 'Custom Structural Box Division',
      desc: 'Specialized packaging design unit producing regular slotted, telescope, lock-bottom, and appliance boxes for major local brands.',
      detailedDesc: 'This division designs and fabricates custom boxes tailored for specific product shapes and weights. From double-wall cartons for heavy textile yarns to massive packaging envelopes for white goods and consumer appliances, the division works with over 200 active corporate clients in South Gujarat.',
      highlight: 'Tailored Appliance, Slotted, & Lock-Bottom Box Formats',
      image: 'https://www.kdppenterprise.com/images/packaging-industries/packaging-industries-03.jpg',
      delayClass: 'delay-3'
    }
  ];

  return (
    <div className="business-page">
      {/* 2. Hero Section */}
      <section className="b-hero bg-linen">
        <div className="container b-hero-grid">
          <div className="b-hero-content scroll-reveal">
            <span className="section-label">PACKAGING division</span>
            <h1>Volume Manufacturing. Absolute Protection.</h1>
            <p className="b-hero-subtitle">
              Fully automatic 5-ply corrugated box plant serving over 200 clients from our 70,000 sq.ft facility in Sachin, Surat.
            </p>
          </div>
          <div className="b-hero-visual scroll-reveal">
            <img src="https://www.kdppenterprise.com/images/bg/packaging-industries.jpg" alt="Stacked corrugated export boxes" />
          </div>
        </div>
      </section>

      {/* 3. About Division Section */}
      <section className="section-padding">
        <div className="container b-about-grid">
          <div className="b-about-content scroll-reveal">
            <span className="section-label">WHO WE ARE</span>
            <h2>Established Packaging Experts Since 1994</h2>
            <p>
              KDPP Packaging Industries has been a pioneer in industrial packaging since 1994. From our modern 70,000 sq.ft facility in Hojiwala Industrial Estate, Sachin, we supply high-strength corrugated boxes, wood pallets, and export packaging systems.
            </p>
            <p>
              By investing in a fully automatic 5-ply manufacturing plant, we sustain massive production runs of up to 100,000 boxes per shift. Our in-house testing laboratory ensures compliance with GSM, Bursting Strength, Edge Crush, and Moisture standards, safeguarding cargos for global logistics networks.
            </p>
          </div>
          
          <div className="b-about-image scroll-reveal">
            <img src="https://www.kdppenterprise.com/images/packaging-industries/packaging-industries-01.jpg" alt="Sealing brown corrugated boxes" />
          </div>
        </div>
      </section>

      {/* 4. Services Grid (2x4) */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">PRODUCTS & SERVICES</span>
            <h2>Export & Heavy Industrial Packaging</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card scroll-reveal delay-${(index % 4) + 1}`}>
                <div className="service-card-icon">
                  <CheckCircle size={24} />
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
            <span className="section-label">PRODUCTION VENTURES</span>
            <h2>Active Manufacturing Plants & Facilities</h2>
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
            <span className="section-label">MANUFACTURING CAPACITY</span>
            <h2>High Volume Consistency</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card scroll-reveal delay-1">
              <div className="stat-number">200+</div>
              <div className="stat-label">Corporate Clients</div>
            </div>
            <div className="stat-card scroll-reveal delay-2">
              <div className="stat-number">100k</div>
              <div className="stat-label">Boxes per Shift</div>
            </div>
            <div className="stat-card scroll-reveal delay-3">
              <div className="stat-number">5-Ply</div>
              <div className="stat-label">Fully Automatic Line</div>
            </div>
            <div className="stat-card scroll-reveal delay-4">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientMarquee 
        clients={packagingClients} 
        title="Companies We Supply" 
        subtitle="TRUSTED BY 200+ CORPORATE CLIENTS" 
        className="bg-alternate"
      />

      {/* 6. Why Choose Us */}
      <section className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">THE KDPP DIFFERENCE</span>
            <h2>Engineered For Global Cargo Demands</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card scroll-reveal delay-1">
              <div className="why-icon">
                <Sliders size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Custom Dimension Tooling</h3>
              <p>
                We can manufacture custom boxes matching your exact product footprint, optimizing container packaging densities and lowering freight costs.
              </p>
            </div>
            
            <div className="why-card scroll-reveal delay-2">
              <div className="why-icon">
                <Award size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Rigid Quality Control</h3>
              <p>
                Our testing lab verifies structural board burst index and moisture tolerances in-house, maintaining consistent high-volume quality.
              </p>
            </div>

            <div className="why-card scroll-reveal delay-3">
              <div className="why-icon">
                <Compass size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3>Export Compliance</h3>
              <p>
                We construct eco-safe wood pallets and 100% paper alternatives that comply with international phytosanitary and environmental laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Division Insights Section */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">PACKAGING INSIGHTS</span>
            <h2>Product Quality & Export Packaging Guides</h2>
          </div>
          
          <div className="ventures-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {blogData.filter(item => item.division === 'packaging').map((article, index) => (
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
          <h2>Ready to discuss packaging for your business?</h2>
          <Link to="/#contact" className="btn btn-gold-outline">
            Request Samples <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>


    </div>
  );
}
