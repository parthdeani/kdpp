import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Warehouse, Box, HardHat, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import ClientMarquee from '../components/ClientMarquee';
import ClientLogo from '../components/ClientLogo';
import { allClients } from '../data/clientData';

// CountUp component to animate stats
function CountUpNumber({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    // Remove commas or letters for parsing if needed
    const cleanEnd = String(end).replace(/[^0-9]/g, '');
    const target = parseInt(cleanEnd, 10);
    if (isNaN(target)) {
      setCount(end);
      return;
    }

    let start = 0;
    const duration = 1200; // ms
    const increment = target / (duration / 16);
    let timer;

    const update = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    };

    timer = setInterval(update, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  // Format count back into readable strings
  const displayValue = count.toLocaleString();

  return (
    <span ref={elementRef} className="count-number">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function Home() {
  const hubs = [
    {
      id: 'surat-hq',
      name: 'Corporate Head Office',
      coordinates: 'Adajan Road, Surat',
      founded: '2020',
      desc: 'Located at "Aavishkar", Near Sardar Bridge, Adajan, Surat. Oversees the group operations in real estate, logistics, and packaging.',
      metricLabel: 'Clients Served',
      metricVal: 150,
      metricSuffix: '+ Companies',
      position: { top: '63%', left: '56.5%' }
    },
    {
      id: 'hazira-depot',
      name: 'Hazira Marine Depot',
      coordinates: 'Hazira Road, Surat',
      founded: '2018',
      desc: 'Our flagship 50-acre unified terminal (Dry, ISO Tank, and Cleaning Depot) right opposite Chhab Chhaba Chhab Water Park.',
      metricLabel: 'Depot Area',
      metricVal: 50,
      metricSuffix: ' Acres',
      position: { top: '68%', left: '50.5%' }
    },
    {
      id: 'water-park',
      name: 'Chhab Chhaba Chhab Water Park',
      coordinates: 'Hazira, Surat',
      founded: '2006',
      desc: 'Gujarat\'s largest leisure park spanning 150 acres at Hazira, promoted and operated by the Dungrani family for over 20 years.',
      metricLabel: 'Park Scale',
      metricVal: 150,
      metricSuffix: ' Acres',
      position: { top: '60%', left: '46%' }
    },
    {
      id: 'sachin-packaging',
      name: 'Sachin Packaging Plant',
      coordinates: 'Hojiwala Ind. Estate, Surat',
      founded: '1994',
      desc: 'A massive 70,000 sq. ft. modern facility equipped with a fully automatic 5-ply manufacturing plant producing 100,000+ boxes per shift.',
      metricLabel: 'Daily Box Capacity',
      metricVal: 100000,
      metricSuffix: ' Units',
      position: { top: '78%', left: '60%' }
    }
  ];

  const [activeHub, setActiveHub] = useState(hubs[0]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    interest: 'marine',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill estimate if user redirected from Warehouse/Construction calculator
  useEffect(() => {
    const pending = sessionStorage.getItem('pendingEstimate');
    if (pending) {
      setFormData((prev) => ({
        ...prev,
        message: pending,
        interest: pending.includes('Civil Construction') ? 'construction' : 'warehouse'
      }));
      sessionStorage.removeItem('pendingEstimate');
    }
  }, []);
 
  // Hook to handle scroll entrance animations (Intersection Observer)
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

  const generations = [
    {
      generation: '1st Generation (Founders)',
      husband: {
        name: 'Grandfather Name',
        role: 'Founder & Patriarch',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        desc: 'Began the family trading legacy in Surat in 1965. Laid the foundation of trust, integrity, and hard work.'
      },
      wife: {
        name: 'Grandmother Name',
        role: 'Matriarch',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
        desc: 'Co-founded the family values and supported the expansion into regional agricultural trading.'
      },
      era: '1965 - 1990'
    },
    {
      generation: '2nd Generation (Expansion)',
      husband: {
        name: 'Father Name',
        role: 'Promoter & Industrialist',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
        desc: 'Established KDPP Packaging Industries in 1994 and promoted Gujarat\'s largest leisure destination, Chhab Chhaba Chhab Water Park, in 2006.'
      },
      wife: {
        name: 'Mother Name',
        role: 'Co-Director',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        desc: 'Guided corporate governance and community outreach programs across Surat and Navsari districts.'
      },
      era: '1990 - 2015'
    },
    {
      generation: '3rd Generation (Modernization)',
      husband: {
        name: 'Son Name',
        role: 'Managing Partner',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        desc: 'Expanded into Marine Logistics Terminals in 2018 and established KDPP Warehouse Developers, introducing automated PEB solutions.'
      },
      wife: {
        name: 'Wife Name',
        role: 'Chief Administrative Officer',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
        desc: 'Directs administrative systems, HR development, and digital integration across all group operations.'
      },
      era: '2015 - Present'
    }
  ];



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  // Scroll to section helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage-container">
      {/* 2. Hero Section */}
      <section className="hero hero-gradient-bg bg-linen">
        <div className="container hero-grid">
          <div className="hero-content scroll-reveal">
            <h1 style={{ fontWeight: 700 }}>
              Three Generations. <br />
              One Name. <br />
              Trusted Across Gujarat.
            </h1>
            <p className="hero-subtitle">
              Since 1965, the KDPP Group has built its name through honest work, lasting relationships, and businesses that serve real industries.
            </p>
            <div className="hero-ctas">
              <button onClick={() => scrollToSection('businesses')} className="btn btn-navy">
                Explore Our Businesses
              </button>
              <button onClick={() => scrollToSection('story')} className="btn btn-gold-outline" style={{ marginLeft: '12px' }}>
                Our Story
              </button>
            </div>
          </div>
          
          <div className="hero-visual scroll-reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="map-dashboard-container">
              <div className="map-wrapper">
                <img 
                  src="/images/clean_gujarat_map.png" 
                  alt="KDPP Gujarat Operations Map" 
                  className="map-image"
                />
                {hubs.map((hub) => (
                  <div 
                    key={hub.id}
                    className={`map-pin-hotspot ${activeHub.id === hub.id ? 'active' : ''}`}
                    style={{ top: hub.position.top, left: hub.position.left }}
                    onMouseEnter={() => setActiveHub(hub)}
                    onClick={() => setActiveHub(hub)}
                  >
                    <div className="map-pin-pulse"></div>
                    <div className="map-pin-core"></div>
                  </div>
                ))}
              </div>
              
              <div className="hub-dashboard-card">
                <span className="hub-meta">Active Hub Details</span>
                <div className="hub-dashboard-header">
                  <h3>{activeHub.name}</h3>
                  <span className="hub-coordinates">{activeHub.coordinates}</span>
                </div>
                <p className="hub-desc">{activeHub.desc}</p>
                <div className="divider-gold" style={{ margin: '12px 0', opacity: 0.15 }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px' }}>
                    {activeHub.metricLabel}
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)' }}>
                    <CountUpNumber key={activeHub.id} end={activeHub.metricVal} suffix={activeHub.metricSuffix} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Legacy Bar */}
      <section className="legacy-bar">
        <div className="container legacy-grid">
          <div className="legacy-item">
            <div className="legacy-number">
              <CountUpNumber end={1965} />
            </div>
            <div className="legacy-label">Year Founded</div>
          </div>
          
          <div className="legacy-item">
            <div className="legacy-number">
              <CountUpNumber end={3} suffix="rd" />
            </div>
            <div className="legacy-label">Generation Led</div>
          </div>
          
          <div className="legacy-item">
            <div className="legacy-number">
              <CountUpNumber end={4} />
            </div>
            <div className="legacy-label">Business Verticals</div>
          </div>
          
          <div className="legacy-item">
            <div className="legacy-number">Surat</div>
            <div className="legacy-label">Headquartered</div>
          </div>
        </div>
      </section>

      {/* 4. Our Story Section */}
      <section id="story" className="section-padding">
        <div className="container">
          <div className="story-grid" style={{ marginBottom: '60px' }}>
            <div className="scroll-reveal">
              <span className="section-label">OUR HERITAGE</span>
              <h2>Built on trust, grown through generations</h2>
              
              <p>
                KDPP Group began its journey in 1965 in the historic trading hub of Surat, Gujarat. Founded as a small trading firm built on hard work and personal relationships, the family business quickly earned a reputation for honesty and reliability. Over the decades, as Gujarat transitioned into an industrial powerhouse, KDPP evolved in tandem. Under the second generation, the group expanded into contracting and infrastructure, establishing a foundational role in the region's physical expansion.
              </p>
              <p>
                Today, led by the third generation, KDPP Group spans across four key industrial sectors: marine container services, custom warehouse building, industrial packaging, and civil construction. Each generation has added a new chapter of growth while staying fiercely loyal to the core principles established sixty years ago: quiet capability, honest dealing, and relationships built to outlast market cycles.
              </p>
            </div>
            
            <div className="scroll-reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div 
                className="story-sepia-block" 
                style={{ backgroundImage: `url('/images/heritage_ledger.png')`, width: '100%' }}
              ></div>
            </div>
          </div>

          {/* Vertical Branching Tree Heritage Timeline */}
          <div className="tree-timeline-container scroll-reveal">
            {generations.map((gen, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`tree-item ${isLeft ? 'left' : 'right'}`}>
                  {/* Decorative Diagonal SVG Branch connector */}
                  <svg className="tree-connector-svg">
                    {isLeft ? (
                      // Left branch curves from bottom-right (trunk) to top-left (card)
                      <path 
                        className="tree-branch-path" 
                        d="M 80,40 C 60,40 30,0 0,0" 
                      />
                    ) : (
                      // Right branch curves from bottom-left (trunk) to top-right (card)
                      <path 
                        className="tree-branch-path" 
                        d="M 0,40 C 20,40 50,0 80,0" 
                      />
                    )}
                  </svg>
                  
                  {/* Trunk circle dot/node leaf indicator */}
                  <div className="tree-trunk-node"></div>
                  
                  {/* Rectangular Story Card with Large aspect ratio photo */}
                  <div className="tree-card" style={{ padding: '24px', backgroundColor: 'var(--bg-alternate)', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
                      <span className="tree-card-year" style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '15px' }}>{gen.era}</span>
                      <span className="section-label" style={{ color: 'var(--color-navy)', margin: 0, fontSize: '11px', fontWeight: 800 }}>{gen.generation}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {/* Husband Column */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-navy)', marginBottom: '8px', boxShadow: 'var(--shadow-subtle)' }}>
                          <img src={gen.husband.photo} alt={gen.husband.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '2px 0', color: 'var(--color-navy)' }}>{gen.husband.name}</h4>
                        <span style={{ fontSize: '11px', color: 'var(--color-gold)', fontWeight: 600 }}>{gen.husband.role}</span>
                        <p style={{ fontSize: '11.5px', color: 'var(--color-body)', marginTop: '6px', lineHeight: '1.4' }}>{gen.husband.desc}</p>
                      </div>

                      {/* Wife Column */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-navy)', marginBottom: '8px', boxShadow: 'var(--shadow-subtle)' }}>
                          <img src={gen.wife.photo} alt={gen.wife.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '2px 0', color: 'var(--color-navy)' }}>{gen.wife.name}</h4>
                        <span style={{ fontSize: '11px', color: 'var(--color-gold)', fontWeight: 600 }}>{gen.wife.role}</span>
                        <p style={{ fontSize: '11.5px', color: 'var(--color-body)', marginTop: '6px', lineHeight: '1.4' }}>{gen.wife.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="divider-gold container" />

      {/* 5. Our Businesses */}
      <section id="businesses" className="section-padding bg-alternate">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">WHAT WE BUILD</span>
            <h2>Four businesses. One family commitment.</h2>
          </div>
          
          <div className="businesses-grid">
            {/* Card 1: Marine */}
            <div className="business-card card-marine scroll-reveal delay-1">
              <div className="card-icon">
                <Anchor size={40} strokeWidth={1.5} />
              </div>
              <h3>KDPP Marine Container Allied Services LLP</h3>
              <p>
                Gujarat's leading ISO tank and container depot, operating 24×7 across 50 acres at Hazira, Surat.
              </p>
              <div className="divider-gold" style={{ margin: '20px 0' }}></div>
              <Link to="/marine" className="card-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: Warehouse */}
            <div className="business-card card-warehouse scroll-reveal delay-2">
              <div className="card-icon">
                <Warehouse size={40} strokeWidth={1.5} />
              </div>
              <h3>KDPP Warehouse Builder</h3>
              <p>
                Custom industrial warehouse design and construction across Gujarat — from pre-engineered buildings to cold storage.
              </p>
              <div className="divider-gold" style={{ margin: '20px 0' }}></div>
              <Link to="/warehouse" className="card-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3: Packaging */}
            <div className="business-card card-packaging scroll-reveal delay-3">
              <div className="card-icon">
                <Box size={40} strokeWidth={1.5} />
              </div>
              <h3>KDPP Packaging Industry</h3>
              <p>
                Industrial and export packaging solutions serving 200+ clients, producing over 1 million units monthly.
              </p>
              <div className="divider-gold" style={{ margin: '20px 0' }}></div>
              <Link to="/packaging" className="card-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 4: Construction */}
            <div className="business-card card-construction scroll-reveal delay-4">
              <div className="card-icon">
                <HardHat size={40} strokeWidth={1.5} />
              </div>
              <h3>KDPP Construction</h3>
              <p>
                Civil and commercial construction across South Gujarat with over 30 years of registered contracting experience.
              </p>
              <div className="divider-gold" style={{ margin: '20px 0' }}></div>
              <Link to="/construction" className="card-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-gold container" />

      {/* 6. Vendors & Partners */}
      <section className="section-padding">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-label">WHO WE WORK WITH</span>
            <h2>Trusted by industry leaders</h2>
          </div>
          
          {/* Logo Marquee Strip */}
          <ClientMarquee clients={allClients} rawMarqueeOnly={true} />

          {/* Partner Testimonials */}
          <div className="testimonials-grid">
            <div className="testimonial-card scroll-reveal delay-1">
              <p className="testimonial-quote">
                "KDPP's 24/7 container depot at Hazira has transformed our logistics turnaround times in South Gujarat. Their operational speed and integrity are unmatched."
              </p>
              <div className="testimonial-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                  <div className="testimonial-author">Regional Director</div>
                  <div className="testimonial-company">Maersk India</div>
                </div>
                <ClientLogo name="Maersk" height={28} width={90} style={{ color: 'var(--color-navy)' }} />
              </div>
            </div>
            
            <div className="testimonial-card scroll-reveal delay-2">
              <p className="testimonial-quote">
                "We commissioned KDPP to design and build our 100,000 sq.ft cold storage facility. They completed it on budget, with structural standards that rival global quality."
              </p>
              <div className="testimonial-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                  <div className="testimonial-author">Head of Operations</div>
                  <div className="testimonial-company">Gujarat Cold Chain Ltd</div>
                </div>
                <ClientLogo name="GCC" height={28} width={90} style={{ color: 'var(--color-gold)' }} />
              </div>
            </div>

            <div className="testimonial-card scroll-reveal delay-3">
              <p className="testimonial-quote">
                "Supplying custom packaging at scale requires absolute consistency. KDPP Packaging has delivered over 5 million export-grade corrugated boxes to us without a single defect."
              </p>
              <div className="testimonial-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                  <div className="testimonial-author">Supply Chain Lead</div>
                  <div className="testimonial-company">Surat Textile Exporters</div>
                </div>
                <ClientLogo name="STE" height={28} width={90} style={{ color: 'var(--color-gold)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-gold container" />

      {/* 7. Contact Section */}
      <section id="contact" className="section-padding bg-alternate">
        <div className="container contact-grid">
          <div className="contact-info scroll-reveal">
            <span className="section-label">GET IN TOUCH</span>
            <h2>Establish a partnership built on trust.</h2>
            <p style={{ marginBottom: '30px' }}>
              Whether you require logistics support at Hazira Port, structural engineering for industrial facilities, or volume export packaging, our founding family oversees every project.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <div className="contact-text">
                  <h4>Headquarters Address</h4>
                  <p>"Aavishkar", Beside Shreeji Vihar Apartment, Near Sardar Bridge, Near Gujarat Gas Circle, Adajan Road, Surat - 395009</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <div className="contact-text">
                  <h4>Call Our Offices</h4>
                  <p>+91 97143 58555</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <div className="contact-text">
                  <h4>Electronic Mail</h4>
                  <p>info@kdppenterprise.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            {isSubmitted ? (
              <div className="form-success">
                <h3>Message Received</h3>
                <p style={{ marginTop: '16px' }}>
                  Thank you for reaching out. A representative of the KDPP Group will review your inquiry and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your company name" 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest" className="form-label">Business Interest</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="marine">KDPP Marine Container Services</option>
                    <option value="warehouse">KDPP Warehouse Builder</option>
                    <option value="packaging">KDPP Packaging Industry</option>
                    <option value="construction">KDPP Construction</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Write your message here" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-navy form-submit">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
