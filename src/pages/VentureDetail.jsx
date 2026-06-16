import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Play, Info, Calendar, Shield, Activity } from 'lucide-react';
import { venturesData } from '../data/venturesData';

export default function VentureDetail() {
  const { ventureId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Synchronous lookup to avoid blank frame before useEffect runs
  const venture = venturesData.find(
    v => String(v.id).trim().toLowerCase() === String(ventureId).trim().toLowerCase()
  );
  const activeImage = selectedImage || (venture ? venture.image : '');

  useEffect(() => {
    setSelectedImage(null);
    setIsVideoPlaying(false);

    const timer = setTimeout(() => {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          revealObserver.observe(el);
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [ventureId]);

  if (!venture) {
    return (
      <div className="container" style={{ padding: '120px 20px', textAlignment: 'center' }}>
        <span className="section-label">404 ERROR</span>
        <h2>Venture Not Found</h2>
        <p style={{ marginTop: '16px', marginBottom: '24px' }}>
          The project profile you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-navy">
          Return to Homepage
        </Link>
      </div>
    );
  }

  // Helper to format division text
  const getDivisionLabel = (div) => {
    switch (div) {
      case 'marine': return 'Marine Container Allied Services';
      case 'warehouse': return 'Warehouse Builder Division';
      case 'packaging': return 'Packaging Industry';
      case 'construction': return 'Civil Construction Division';
      default: return 'KDPP Group';
    }
  };

  const getDivisionLink = (div) => {
    switch (div) {
      case 'marine': return '/marine';
      case 'warehouse': return '/warehouse';
      case 'packaging': return '/packaging';
      case 'construction': return '/construction';
      default: return '/';
    }
  };

  return (
    <div className="venture-detail-page page-fade-in">
      {/* 1. Hero Header Banner */}
      <section 
        className="venture-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.75), rgba(13, 27, 62, 0.9)), url(${venture.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 60px 0',
          color: '#ffffff'
        }}
      >
        <div className="container">
          <Link to={getDivisionLink(venture.division)} className="venture-back-link">
            <ArrowLeft size={16} /> Back to {getDivisionLabel(venture.division)}
          </Link>
          
          <div className="venture-hero-meta" style={{ marginTop: '30px' }}>
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              {venture.division.toUpperCase()} PORTFOLIO
            </span>
            <h1 style={{ color: '#ffffff', fontSize: '42px', fontWeight: 700, marginTop: '8px' }}>
              {venture.name}
            </h1>
            <p className="venture-highlight-text" style={{ fontSize: '18px', color: '#A5ADC0', marginTop: '12px', maxWidth: '800px', lineHeight: 1.6 }}>
              {venture.highlight}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Profiles & Map Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container venture-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px' }}>
          
          {/* Left: Detailed Overview & Specifications */}
          <div className="venture-info-col scroll-reveal">
            <span className="section-label">PROJECT PROFILE</span>
            <h2 style={{ marginBottom: '20px' }}>Engineering & Operational Scope</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-body)', marginBottom: '30px' }}>
              {venture.detailedDesc}
            </p>

            {/* Specifications Dashboard grid */}
            <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 700 }} className="divider-left">
              Technical Specifications
            </h3>
            <div className="venture-specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {venture.specs.map((spec, index) => (
                <div key={index} className="spec-item-card" style={{ backgroundColor: 'var(--bg-alternate)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--color-gold)' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px', display: 'block' }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-navy)', marginTop: '4px', display: 'block', fontFamily: 'var(--font-serif)' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Location & Address Callout */}
            <div className="venture-address-card" style={{ display: 'flex', gap: '20px', backgroundColor: 'rgba(184, 150, 46, 0.05)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(184, 150, 46, 0.15)' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '4px' }}>
                <MapPin size={28} />
              </div>
              <div>
                <h4 style={{ margin: 0, textTransform: 'uppercase', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', color: 'var(--color-navy)' }}>
                  Physical Location
                </h4>
                <p style={{ margin: '8px 0 0 0', fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.5 }}>
                  {venture.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Maps */}
          <div className="venture-map-col scroll-reveal">
            <span className="section-label">LOCATION MAP</span>
            <h2 style={{ marginBottom: '20px' }}>Geographical Link</h2>
            
            <div className="map-frame-wrapper" style={{ height: '380px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-medium)' }}>
              <iframe
                title={`Map for ${venture.name}`}
                src={venture.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="map-meta-note" style={{ display: 'flex', gap: '12px', marginTop: '16px', padding: '12px', backgroundColor: 'var(--bg-alternate)', borderRadius: '6px' }}>
              <Info size={16} style={{ color: 'var(--color-navy)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-muted)', lineHeight: 1.4 }}>
                This is the verified operations site for KDPP {venture.division.toUpperCase()} Group. Site entry is strictly regulated under security codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Media Showcase Section (Generous Image Gallery + Video Player) */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">MEDIA SHOWCASE</span>
            <h2>Project Imagery & On-Site Video</h2>
          </div>

          <div className="media-showcase-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
            
            {/* Gallery Block */}
            <div className="gallery-block scroll-reveal">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 700 }} className="divider-left">
                Venture Photo Gallery
              </h3>
              
              <div className="gallery-main-image" style={{ width: '100%', height: '320px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-subtle)', marginBottom: '16px' }}>
                <img 
                  src={activeImage} 
                  alt={`${venture.name} Active`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }} 
                />
              </div>
              
              <div className="gallery-thumbnails" style={{ display: 'flex', gap: '12px' }}>
                {venture.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`gallery-thumb-btn ${activeImage === img ? 'active' : ''}`}
                    style={{ 
                      width: '80px', 
                      height: '60px', 
                      padding: 0, 
                      border: activeImage === img ? '2px solid var(--color-gold)' : '1px solid var(--border-light)', 
                      borderRadius: '4px', 
                      overflow: 'hidden', 
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: activeImage === img ? '0 0 8px rgba(184, 150, 46, 0.4)' : 'none'
                    }}
                  >
                    <img src={img} alt={`${venture.name} Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Video Player Block */}
            <div className="video-block scroll-reveal">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 700 }} className="divider-left">
                On-Site Video Capture
              </h3>
              
              <div 
                className="video-player-container" 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '320px', 
                  backgroundColor: '#000000', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--border-light)', 
                  boxShadow: 'var(--shadow-subtle)' 
                }}
              >
                {!isVideoPlaying ? (
                  // Custom Video Thumbnail Overlay
                  <div 
                    className="video-overlay-cover" 
                    style={{ 
                      position: 'absolute', 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${venture.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 5,
                      color: '#ffffff'
                    }}
                  >
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="video-play-btn"
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--color-gold)', 
                        border: 'none', 
                        color: '#080F21', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(184, 150, 46, 0.6)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <Play size={28} style={{ marginLeft: '4px' }} fill="#080F21" />
                    </button>
                    <span style={{ fontSize: '13px', fontWeight: 600, marginTop: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Play Site Progress Video
                    </span>
                  </div>
                ) : (
                  // Active HTML5 video element
                  <video 
                    src={venture.videoUrl} 
                    className="video-element"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    controls 
                    autoPlay
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action CTA Band */}
      <section className="cta-band scroll-reveal">
        <div className="container">
          <h2>Interested in partnering on projects like {venture.name}?</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
            <Link to="/#contact" className="btn btn-navy">
              Submit Business Inquiry
            </Link>
            <button onClick={() => navigate(-1)} className="btn btn-gold-outline">
              Go Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
