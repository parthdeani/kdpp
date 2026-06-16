import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Shield, CheckCircle, Clock, MapPin, Settings, HelpCircle, ArrowRight } from 'lucide-react';
import ClientMarquee from '../components/ClientMarquee';
import { marineClients } from '../data/clientData';
import { blogData } from '../data/blogData';

export default function Marine() {


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
    { name: 'ISO Tank Depot & Parking', desc: 'Secure terminal parking, steam cleaning, pressure testing, and certified refurbishment of chemical and gas tank containers.' },
    { name: 'Container Repair & Maintenance', desc: 'IICL-certified steel repairs, floor restorations, structural welding, and dry van maintenance.' },
    { name: 'Only Reefer Service in Hazira', desc: 'The exclusive authorized provider of specialized refrigerated container pre-trip inspections (PTI), monitoring, and repair in the Hazira belt.' },
    { name: 'GOH & Open-Top Conversion', desc: 'Professional GOH (Garment on Hanger) prep and structural conversion of standard containers for shipping lines.' },
    { name: 'Steam Cleaning & Wash Bays', desc: 'Eco-certified high-pressure boiler steam washing and chemical residue neutralizing for ISO tanks.' },
    { name: 'MNR Inside DP World ICDs', desc: 'Authorized maintenance and repair providers operating directly inside DP World ICD terminals at KRIBHCO Hazira, Haldia, and Cuttack.' },
    { name: 'Reach Stacker Yard Handling', desc: 'High-capacity heavy lifters managing stack organization, inspection placement, and yard parking layout.' },
    { name: '24×7 Gate Terminal Support', desc: 'Round-the-clock gate control, security-cleared customs coordination, and vehicle dispatch.' }
  ];

  const clients = [
    'Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 
    'COSCO', 'Yang Ming', 'HMM', 'ZIM', 'OOCL', 'PIL'
  ];

  const ventures = [
    {
      id: 'hazira-depot-hub-alpha',
      name: 'Hazira Container & ISO Tank Terminal',
      desc: 'Our flagship 50-acre unified terminal at Hazira, Surat, located directly opposite Chhab Chhaba Chhab Water Park, providing 24/7 dry and liquid container services.',
      detailedDesc: 'Hazira Container Terminal spans 50 acres of prime logistics land adjacent to the Hazira Port. As a unified terminal, it houses dry box repair lanes, custom GOH conversions, steam boiler washing bays, and certified ISO Tank pressure testing. It is also the exclusive reefer container service depot in the Hazira area, operating 24/7 with a team of IICL-certified inspectors.',
      highlight: '50-Acre Flagship Yard, Only Reefer Service in Hazira, IICL Certified',
      image: 'https://www.kdppcontainer.com/img/banner/01.jpg',
      delayClass: 'delay-1'
    },
    {
      id: 'hazira-depot-hub-beta',
      name: 'Mundra Container Depot',
      desc: 'Our specialized 25-acre depot facility situated in Mundra (URJA, Near Adani Wilmar) dedicated to dry van storage, repairs, and empty fleet management.',
      detailedDesc: 'Mundra Container Depot is a key 25-acre logistics yard situated along Adani Port Road, Mundra. It offers empty container storage, heavy-duty reach stacker handling, dry van structural repairs, and dedicated inspection lines for major international carriers to optimize vessel turnaround times.',
      highlight: '25-Acre Depot Along Adani Port Road, Mundra',
      image: 'https://www.kdppcontainer.com/img/projects/iso_tank.jpg',
      delayClass: 'delay-2'
    },
    {
      id: 'dahej-port-terminal-link',
      name: 'Vizhinjam Terminal (Kerala)',
      desc: 'Extended container depot and allied services terminal at Vizhinjam Port (Trivandrum, Kerala) supporting southern maritime corridors.',
      detailedDesc: 'The Vizhinjam Depot (located in the Chappath Area, Mulloo, Trivandrum) facilitates transit storage, fleet dispatch, and certified container inspections. It extends KDPP\'s logistics network to India\'s southern deepwater port corridor.',
      highlight: 'Vizhinjam Port Transit Yard & Storage Corridor',
      image: 'https://www.kdppcontainer.com/img/banner/05.jpg',
      delayClass: 'delay-3'
    }
  ];

  return (
    <div className="business-page">
      {/* 2. Hero Section */}
      <section className="b-hero bg-linen">
        <div className="container b-hero-grid">
          <div className="b-hero-content scroll-reveal">
            <span className="section-label">MARINE DIVISION</span>
            <h1>Secure Container Terminal Parking & Storage Hubs.</h1>
            <p className="b-hero-subtitle">
              IICL certified, 24×7 operational container terminal storage and yard parking solutions at Hazira and Mundra ports.
            </p>
          </div>
          <div className="b-hero-visual scroll-reveal">
            <img src="https://www.kdppcontainer.com/img/banner/01.jpg" alt="Hazira Container Depot" />
          </div>
        </div>
      </section>

      {/* 3. About Division Section */}
      <section className="section-padding">
        <div className="container b-about-grid">
          <div className="b-about-content scroll-reveal">
            <span className="section-label">WHO WE ARE</span>
            <h2>Efficient Container Depot & Yard Operations</h2>
            <p>
              M/s KDPP Terminals (incorporated as KDPP Marine Container Allied Services LLP) has been active in container terminal services since 2018. We operate premier dry container depots, ISO tank maintenance hubs, and cleaning terminals in Hazira, Mundra, Kandla, Pipavav, and Kerala.
            </p>
            <p>
              We feature a highly experienced, motivated team of IICL-qualified personnel who monitor and supervise all repair and inspection activities to stringent quality standards. Sited near major port gates with fluid road access, our terminals are equipped to handle dry repairs, specialized GOH conversions, multi-boiler steam wash cycles, and certified ISO Tank pressure testing. In addition, we are proud to be the only authorized Reefer container service depot in Hazira.
            </p>
          </div>
          
          <div className="b-about-image scroll-reveal">
            <img src="https://www.kdppcontainer.com/img/projects/container_services.jpg" alt="Container inspection latch" />
          </div>
        </div>
      </section>

      {/* 4. Services Grid (2x4) */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">DEPOT SERVICES</span>
            <h2>Terminal Parking & Container Storage Solutions</h2>
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
            <span className="section-label">KEY VENTURES</span>
            <h2>Flagship Depot Locations & Terminals</h2>
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
            <span className="section-label">PERFORMANCE IN NUMBERS</span>
            <h2>Hazira Depot Scale</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card scroll-reveal delay-1">
              <div className="stat-number">50</div>
              <div className="stat-label">Owned Acres</div>
            </div>
            <div className="stat-card scroll-reveal delay-2">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Depot Operations</div>
            </div>
            <div className="stat-card scroll-reveal delay-3">
              <div className="stat-number">IICL</div>
              <div className="stat-label">Certified Inspectors</div>
            </div>
            <div className="stat-card scroll-reveal delay-4">
              <div className="stat-number">12+</div>
              <div className="stat-label">Shipping Lines Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Vendors / Clients */}
      <ClientMarquee 
        clients={marineClients} 
        title="Shipping Lines We Serve" 
        subtitle="LOGISTICS NETWORK" 
        className="bg-alternate"
      />

      {/* 7. Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">THE KDPP DIFFERENCE</span>
            <h2>Built on Independence and Expertise</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-card scroll-reveal delay-1">
              <div className="why-icon">
                <MapPin size={32} />
              </div>
              <h3>Owned Land at Hazira</h3>
              <p>
                Operating on 50 acres of family-owned land eliminates third-party tenancy disputes and secures long-term depot stability.
              </p>
            </div>
            
            <div className="why-card scroll-reveal delay-2">
              <div className="why-icon">
                <Clock size={32} />
              </div>
              <h3>24/7 Availability</h3>
              <p>
                Global freight doesn't stop. Our certified teams are on site day and night, ensuring fast terminal processing times.
              </p>
            </div>

            <div className="why-card scroll-reveal delay-3">
              <div className="why-icon">
                <Shield size={32} />
              </div>
              <h3>Shipping Line Trusted</h3>
              <p>
                Decades of direct operational relationships with the world's top maritime carriers guarantees logistical fluidness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Division Insights Section */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">DEPOT INSIGHTS</span>
            <h2>Terminal Guides & Operational Updates</h2>
          </div>
          
          <div className="ventures-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {blogData.filter(item => item.division === 'marine').map((article, index) => (
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
          <h2>Need depot or container services? Let's talk.</h2>
          <Link to="/#contact" className="btn btn-gold-outline">
            Contact Depot Team <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>


    </div>
  );
}
