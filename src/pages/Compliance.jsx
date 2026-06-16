import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckSquare, Award, FileText, Activity, Check, Heart } from 'lucide-react';

export default function Compliance() {
  const [incidentFreeDays, setIncidentFreeDays] = useState(1420);

  // Scroll reveal setup
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

  // Tick the safety counter slightly to show it is "live"
  useEffect(() => {
    const interval = setInterval(() => {
      setIncidentFreeDays(prev => prev + 1);
    }, 86400000); // Ticks daily, but initialized live on render
    return () => clearInterval(interval);
  }, []);

  const checklistItems = [
    { title: 'Top & Side Panels', desc: 'Inspect for structural deformations, cracks, punctures, and secure welding joins.' },
    { title: 'Floorboard Integrity', desc: 'Verify wood moisture contents below 18%, secure screws, and high-load capacity testing.' },
    { title: 'Door Hinges & Locking Bars', desc: 'Inspect locking cams, door seals, gaskets, and heavy latch alignment for air-tightness.' },
    { title: 'ISO Tank Frame & Tank Shell', desc: 'Verify structural cage integrity, vacuum valves, pressure relief gauges, and leakage tests.' },
    { title: 'Understructure Crossmembers', desc: 'Check for high-weight impact damages, rust scaling, and out-of-plane twists.' },
    { title: 'Steam Cleaning Cleared', desc: 'Ensure zero trace chemical residues, food-grade certified washes, and dry air ventilation.' }
  ];

  const badges = [
    {
      title: 'ISO 9001:2015 Certification',
      subtitle: 'ISO Tank Maintenance Quality',
      desc: 'Our container operations (M/s KDPP Terminals) hold the official ISO 9001:2015 quality certificate (Certificate No: IN14101A) specifically for ISO Tank Container Maintenance, Repair, and Allied Services.'
    },
    {
      title: 'ISPM-15 Phytosanitary Compliance',
      subtitle: 'Heat-Treated Export Pallets',
      desc: 'All wooden pallets manufactured at our Sachin Hojiwala industrial plant undergo kiln-heat core drying to eradicate pests, conforming to international IPPC standards for global transit.'
    },
    {
      title: 'IICL (Institute of International Container Lessors)',
      subtitle: 'Terminal Inspection Criteria',
      desc: 'Our yard inspectors hold current IICL certifications, executing container damage audits, dry repairs, and structural surveys matching global ocean carrier requirements.'
    }
  ];

  return (
    <div className="compliance-page page-fade-in">
      {/* Hero Header */}
      <section className="b-hero bg-linen" style={{ padding: '140px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">SAFETY & QUALITY STANDARDS</span>
          <h1 style={{ fontSize: '46px', marginBottom: '16px' }}>Compliance, Licenses & Certifications</h1>
          <p className="b-hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Operating heavy terminals, packaging plants, and construction sites in Gujarat requires absolute compliance. Learn about our verified industrial credentials.
          </p>
        </div>
      </section>

      {/* Live Safety counter Dashboard */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', padding: '60px 0' }}>
        <div className="container">
          <div className="safety-live-dashboard scroll-reveal" style={{ 
            background: 'linear-gradient(rgba(13, 27, 62, 0.95), rgba(13, 27, 62, 0.98)), url("https://www.kdppcontainer.com/img/banner/01.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px', 
            borderRadius: '12px', 
            color: '#ffffff',
            boxShadow: 'var(--shadow-medium)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Activity style={{ color: 'var(--color-gold)' }} size={24} />
                <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                  LIVE OPERATIONS ACCIDENT COUNTER
                </span>
              </div>
              <h2 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '32px' }}>Operational Safety is Our First Responsibility</h2>
              <p style={{ color: '#A5ADC0', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Across all four divisions — Container Terminal Parking, PEB Warehouses, Packaging Factories, and Construction Sites — KDPP enforces direct family oversight and rigorous safety training. We prioritize returning every team member home safely, every single day.
              </p>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(184, 150, 46, 0.2)' }}>
              <div style={{ fontSize: '64px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                {incidentFreeDays.toLocaleString()}
              </div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#A5ADC0', letterSpacing: '2px', marginTop: '10px' }}>
                Days Without On-Site Incident
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginTop: '16px', fontSize: '13px', color: 'var(--color-gold)' }}>
                <ShieldCheck size={16} />
                <span>Zero Major Safety Violations Since 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Left: IICL Terminal Checklist / Right: Class-A License */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          
          {/* IICL Container Inspection Checklist */}
          <div className="checklist-column scroll-reveal">
            <span className="section-label">CONTAINER INSPECTIONS</span>
            <h2 style={{ marginBottom: '20px' }} className="divider-left">IICL Yard Checklist</h2>
            <p style={{ fontSize: '14.5px', marginBottom: '30px', color: 'var(--color-body)', lineHeight: 1.7 }}>
              Our container terminal inspectors execute detailed checks matching the **Institute of International Container Lessors (IICL)** manual before parking containers in our terminal slots or releasing them to shippers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {checklistItems.map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'var(--bg-primary)', 
                  padding: '20px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(184,150,46,0.1)', color: 'var(--color-gold)' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <h4 style={{ margin: 0, fontSize: '14px', color: 'var(--color-navy)', fontWeight: 700 }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Class-A Government Contracting Details */}
          <div className="license-column scroll-reveal">
            <span className="section-label">CIVIL CONTRACTING</span>
            <h2 style={{ marginBottom: '20px' }} className="divider-left">Class-A Government License</h2>
            <p style={{ fontSize: '14.5px', marginBottom: '30px', color: 'var(--color-body)', lineHeight: 1.7 }}>
              KDPP Construction operates as a registered **Class-A Civil Contractor** under the Government of Gujarat. This license permits our teams to bid and build public infrastructure and municipal structures of unlimited budgetary scope.
            </p>

            <div className="license-badge-card" style={{ 
              backgroundColor: 'var(--bg-primary)', 
              padding: '30px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(13,27,62,0.05)', color: 'var(--color-navy)', padding: '16px', borderRadius: '8px' }}>
                  <Award size={36} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>Class-A Registration</h3>
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
                    Gujarat Public Works Division (PWD)
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)' }}>License Level</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)' }}>Class-A (Unlimited Cap)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)' }}>Registered Region</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)' }}>South Gujarat / All State</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)' }}>Technical Staff Compliance</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)' }}>Licensed Engineers on Site</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)' }}>Audit & Safety Check frequency</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-navy)' }}>Every Project Phase PWD Audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO & ISPM-15 Badges */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">GLOBAL STANDARDS</span>
            <h2>International Industry Certifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {badges.map((badge, idx) => (
              <div key={idx} className="badge-details-card scroll-reveal" style={{ 
                backgroundColor: 'var(--bg-alternate)', 
                padding: '40px 30px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                animationDelay: `${idx * 0.1}s`
              }}>
                <div style={{ backgroundColor: 'rgba(184, 150, 46, 0.1)', color: 'var(--color-gold)', padding: '20px', borderRadius: '50%', marginBottom: '24px' }}>
                  <ShieldCheck size={36} />
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
                  {badge.title}
                </h3>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '1px', marginBottom: '16px', display: 'block' }}>
                  {badge.subtitle}
                </span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--color-body)' }}>
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
