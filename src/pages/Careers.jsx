import React, { useState, useEffect, useRef } from 'react';
import { Shield, BookOpen, Star, Users, Briefcase, Mail, Phone, FileText, MapPin, Calendar, Upload, CheckCircle } from 'lucide-react';

export default function Careers() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'marine',
    jobRole: 'general',
    experience: '0-1 Years',
    noticePeriod: 'Immediate',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const activeJobs = [
    {
      id: 'iicl-inspector',
      title: 'IICL Container Inspector',
      division: 'marine',
      divisionLabel: 'Marine Terminal Parking',
      location: 'Hazira, Surat',
      type: 'Full-time',
      experience: '2-4 Years',
      desc: 'Perform container structure audits, weld testing, corner casting checks, and repair logs under strict IICL standards.'
    },
    {
      id: 'peb-engineer',
      title: 'PEB Structural Engineer',
      division: 'warehouse',
      divisionLabel: 'Warehouse Builders',
      location: 'Surat (Palsana Project)',
      type: 'Full-time',
      experience: '3-5 Years',
      desc: 'Oversee pre-engineered building (PEB) detailing verification, heavy rigging supervision, and foundation load audits.'
    },
    {
      id: 'qa-executive',
      title: 'Quality Control Executive',
      division: 'packaging',
      divisionLabel: 'Packaging Industry',
      location: 'Sachin GIDC, Surat',
      type: 'Full-time',
      experience: '1-3 Years',
      desc: 'Monitor Edge Crush Test (ECT) metrics, burst margins, and raw paper pulp moisture percentages on high-speed corrugators.'
    },
    {
      id: 'site-supervisor',
      title: 'Civil Construction Supervisor',
      division: 'construction',
      divisionLabel: 'Civil Construction',
      location: 'Navsari / Palsana',
      type: 'Full-time',
      experience: '3-6 Years',
      desc: 'Supervise on-site Class-A concrete paving projects, manage reinforcement layouts, and lead operator shifts.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const scrollToForm = (job) => {
    setFormData(prev => ({
      ...prev,
      division: job.division,
      jobRole: job.id
    }));
    
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !resumeFile) {
      alert("Please fill out all required fields and upload your resume.");
      return;
    }
    setIsSubmitted(true);
  };

  const coreValues = [
    {
      icon: <Shield size={32} />,
      title: 'Safety Without Compromise',
      desc: 'Our terminals and construction sites operate under strict security regulations. We audit each operation phase under direct family supervision to ensure our workforce returns home safely every single day.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Mentorship & Growth',
      desc: 'We invest in our people. Junior engineers and operations executives work directly alongside senior industry experts and family leadership, fostering real-site problem solving and hands-on skill development.'
    },
    {
      icon: <Star size={32} />,
      title: 'Absolute Integrity',
      desc: 'Our name has been trusted across Gujarat since 1965 because we keep our word. We teach and enforce ethical contracting, honest dealings, and high technical compliance matching ISO, IICL, and PWD standards.'
    },
    {
      icon: <Users size={32} />,
      title: 'Extended Family Culture',
      desc: 'We are a three-generation, family-run enterprise. We do not treat our workforce as numbers; we build personal relationships, support local communities, and operate on direct accountability.'
    }
  ];

  return (
    <div className="careers-page page-fade-in">
      {/* Hero Header Banner */}
      <section className="b-hero bg-linen" style={{ padding: '140px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">CAREERS & WORK CULTURE</span>
          <h1 style={{ fontSize: '46px', marginBottom: '16px' }}>Build Your Career With a Name Trusted for Generations</h1>
          <p className="b-hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Join a multi-generational, values-first industrial group in Gujarat. We prioritize safety, professional mentorship, and a culture built on trust.
          </p>
        </div>
      </section>

      {/* Work Culture Narrative */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container b-about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          <div className="scroll-reveal">
            <span className="section-label">LIFE AT KDPP</span>
            <h2>Three Generations of Shared Purpose</h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--color-body)', marginBottom: '20px' }}>
              At KDPP Group, we believe that structural integrity on-site starts with organizational integrity inside our offices and terminal yards. Sourcing our heritage back to 1965 as a local Surat trading firm, our growth has been powered by people who share our work ethic and commitment to Gujarat's real industries.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--color-body)', marginBottom: '20px' }}>
              We operate under a flat, accessible organizational structure. Direct family oversight means that senior leadership is present on the ground — collaborating with operators, auditing safety gear, and mentoring site engineers. We offer a stable, long-term environment where capability is recognized, and career progression is actively guided.
            </p>
          </div>
          <div className="b-about-image scroll-reveal" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-medium)' }}>
            <img src="https://kdppenterprise.com/images/slider/silder-02.jpg" alt="KDPP Team Worksite" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">WHAT DEFINES US</span>
            <h2>Our Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {coreValues.map((val, idx) => (
              <div key={idx} className="venture-card scroll-reveal" style={{ display: 'flex', gap: '24px', padding: '32px' }}>
                <div style={{ color: 'var(--color-gold)', flexShrink: 0 }}>
                  {val.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-navy)' }}>{val.title}</h3>
                  <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: 'var(--color-body)' }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Job Openings Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">OPPORTUNITIES</span>
            <h2>Active Job Openings</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0 auto', color: 'var(--color-muted)', fontSize: '14.5px' }}>
              Explore our current vacancies across our primary divisions in Surat, Hazira, Sachin, and Navsari.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {activeJobs.map((job) => (
              <div key={job.id} className="service-card scroll-reveal" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--color-navy)', margin: '0 0 6px 0' }}>{job.title}</h3>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
                      {job.divisionLabel}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 600, backgroundColor: 'rgba(184,150,46,0.1)', color: 'var(--color-gold)', padding: '4px 10px', borderRadius: '4px' }}>
                    {job.type}
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6, flexGrow: 1, margin: '0 0 20px 0' }}>
                  {job.desc}
                </p>

                <div style={{ display: 'flex', gap: '20px', fontSize: '12.5px', color: 'var(--color-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} style={{ color: 'var(--color-gold)' }} />
                    <span>{job.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Briefcase size={14} style={{ color: 'var(--color-gold)' }} />
                    <span>Exp: {job.experience}</span>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToForm(job)} 
                  className="btn btn-navy" 
                  style={{ width: '100%', padding: '10px' }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Form & Application Section */}
      <section ref={formRef} className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left: Careers Info */}
          <div className="scroll-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span className="section-label">GROW WITH US</span>
              <h2>Start Your Journey</h2>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--color-body)', marginTop: '16px' }}>
                We are always looking for driven, ethical, and qualified talent to join our teams in Surat, Hazira, Dahej, Navsari, and Mundra.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: 'var(--color-navy)', letterSpacing: '0.5px' }}>
                Audited Compliance
              </h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-muted)', margin: 0 }}>
                KDPP enforces standard safety, structural guidelines, and ISO policies. All site operations undergo continuous inspection by senior directors.
              </p>
            </div>
          </div>

          {/* Right: Interactive Apply Form */}
          <div className="scroll-reveal">
            {isSubmitted ? (
              <div className="form-success" style={{ padding: '40px', textAlign: 'center', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                <CheckCircle style={{ color: 'var(--color-gold)', marginBottom: '16px' }} size={48} />
                <h3>Application Received</h3>
                <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>
                  Thank you, <strong>{formData.name}</strong>, for applying for the position of <strong>{activeJobs.find(j => j.id === formData.jobRole)?.title || 'General Applicant'}</strong>.
                </p>
                <p style={{ marginTop: '8px', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>
                  Uploaded Resume: <em>{resumeFile?.name}</em>
                </p>
                <p style={{ marginTop: '16px', fontSize: '13.5px', color: 'var(--color-body)' }}>
                  Our human resources team will audit your structural experience and coordinate the next evaluation step.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ padding: '40px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px', color: 'var(--color-navy)' }}>
                  Application Form
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control" 
                      placeholder="Your email address" 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control" 
                      placeholder="Phone number" 
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Division of Interest</label>
                    <select 
                      name="division"
                      value={formData.division}
                      onChange={(e) => {
                        handleInputChange(e);
                        // Reset job role when division changes to keep dropdown aligned
                        setFormData(prev => ({ ...prev, jobRole: 'general' }));
                      }}
                      className="form-control"
                    >
                      <option value="marine">Marine Terminal Parking</option>
                      <option value="warehouse">Warehouse Builders</option>
                      <option value="packaging">Packaging Industry</option>
                      <option value="construction">Civil Construction</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Target Position</label>
                    <select 
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="general">General Application / Other</option>
                      {activeJobs.filter(j => j.division === formData.division).map(j => (
                        <option key={j.id} value={j.id}>{j.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Experience Level</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="0-1 Years">0-1 Years (Entry/Junior)</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years (Mid-level)</option>
                      <option value="5+ Years">5+ Years (Senior)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Notice Period</label>
                    <select 
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Immediate">Immediate / Serving Notice</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60+ Days">60+ Days</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Upload Resume (PDF, DOC) *</label>
                    <div style={{ position: 'relative' }}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '11px 16px',
                        border: '1px dashed var(--border-light)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        backgroundColor: 'var(--bg-alternate)',
                        color: 'var(--color-navy)',
                        fontWeight: 600
                      }}>
                        <Upload size={16} style={{ color: 'var(--color-gold)' }} />
                        {resumeFile ? resumeFile.name : "Select File"}
                        <input 
                          type="file" 
                          required 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Cover Note / Experience Summary</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Briefly describe your experience and qualification details..."
                    style={{ minHeight: '100px' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-navy" style={{ width: '100%' }}>
                  Submit Application
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
