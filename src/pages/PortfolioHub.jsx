import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, ArrowUpDown, ExternalLink, Calendar, Layers } from 'lucide-react';
import { venturesData } from '../data/venturesData';

export default function PortfolioHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'scale-desc', 'scale-asc', 'location'
  const [filteredVentures, setFilteredVentures] = useState(venturesData);

  // Setup scroll-reveal observer
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
  }, [filteredVentures]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...venturesData];

    // Search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(v => 
        v.name.toLowerCase().includes(term) || 
        v.desc.toLowerCase().includes(term) ||
        v.highlight.toLowerCase().includes(term)
      );
    }

    // Division filter
    if (selectedDivision !== 'all') {
      result = result.filter(v => v.division === selectedDivision);
    }

    // Location filter
    if (selectedLocation !== 'all') {
      result = result.filter(v => v.locationName.toLowerCase() === selectedLocation.toLowerCase());
    }

    // Sorting logic
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'scale-desc') {
        return b.scale - a.scale;
      } else if (sortBy === 'scale-asc') {
        return a.scale - b.scale;
      } else if (sortBy === 'location') {
        return a.locationName.localeCompare(b.locationName);
      }
      return 0;
    });

    setFilteredVentures(result);
  }, [searchTerm, selectedDivision, selectedLocation, sortBy]);

  // Helper labels
  const getDivisionLabel = (div) => {
    switch (div) {
      case 'marine': return 'Marine Container Terminal';
      case 'warehouse': return 'Warehouse Builder';
      case 'packaging': return 'Packaging Industry';
      case 'construction': return 'Civil Construction';
      default: return div;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Operation': return { bg: 'rgba(184, 150, 46, 0.1)', text: 'var(--color-gold)' };
      case 'Completed': return { bg: 'rgba(13, 27, 62, 0.08)', text: 'var(--color-navy)' };
      case 'Under Development': return { bg: 'rgba(136, 136, 136, 0.1)', text: '#888888' };
      default: return { bg: 'rgba(0,0,0,0.05)', text: 'inherit' };
    }
  };

  return (
    <div className="portfolio-hub-page page-fade-in">
      {/* Hero Header */}
      <section className="b-hero bg-linen" style={{ padding: '140px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">KDPP GROUP PORTFOLIO</span>
          <h1 style={{ fontSize: '46px', marginBottom: '16px' }}>Representative Ventures & Case Studies</h1>
          <p className="b-hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Explore our engineering and operations footprint across Gujarat — including container terminals, heavy industrial sheds, packaging plants, and commercial infrastructure.
          </p>
        </div>
      </section>

      {/* Interactive Filtering Dashboard */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', padding: '50px 0' }}>
        <div className="container">
          <div className="filter-dashboard-card" style={{ 
            backgroundColor: 'var(--bg-alternate)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '40px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr', gap: '20px', alignItems: 'end', flexWrap: 'wrap' }}>
              {/* Search input */}
              <div className="filter-field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px' }}>
                  Search Project Name
                </label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }} />
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by keywords..." 
                    style={{ 
                      width: '100%', 
                      padding: '11px 16px 11px 36px', 
                      borderRadius: '6px', 
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-primary)',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-body)',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              {/* Division filter */}
              <div className="filter-field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px' }}>
                  Division
                </label>
                <select 
                  value={selectedDivision}
                  onChange={(e) => setSelectedDivision(e.target.value)}
                  style={{ 
                    padding: '11px 16px', 
                    borderRadius: '6px', 
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-body)',
                    fontSize: '14px'
                  }}
                >
                  <option value="all">All Divisions</option>
                  <option value="marine">Marine Depot</option>
                  <option value="warehouse">Warehouse Builder</option>
                  <option value="packaging">Packaging Industry</option>
                  <option value="construction">Civil Construction</option>
                </select>
              </div>

              {/* Location filter */}
              <div className="filter-field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px' }}>
                  Location
                </label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  style={{ 
                    padding: '11px 16px', 
                    borderRadius: '6px', 
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-body)',
                    fontSize: '14px'
                  }}
                >
                  <option value="all">All Locations</option>
                  <option value="hazira">Hazira</option>
                  <option value="surat">Surat</option>
                  <option value="dahej">Dahej</option>
                  <option value="navsari">Navsari</option>
                </select>
              </div>

              {/* Sorting filter */}
              <div className="filter-field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.5px' }}>
                  Sort By
                </label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ 
                    padding: '11px 16px', 
                    borderRadius: '6px', 
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-body)',
                    fontSize: '14px'
                  }}
                >
                  <option value="name">Project Title (A-Z)</option>
                  <option value="scale-desc">Scale (Largest first)</option>
                  <option value="scale-asc">Scale (Smallest first)</option>
                  <option value="location">Location Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 500 }}>
              Showing {filteredVentures.length} projects matching parameters
            </span>
            {(searchTerm || selectedDivision !== 'all' || selectedLocation !== 'all') && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDivision('all');
                  setSelectedLocation('all');
                  setSortBy('name');
                }}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--color-gold)', 
                  fontWeight: 600, 
                  fontSize: '13px', 
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Ventures Grid */}
          {filteredVentures.length > 0 ? (
            <div className="ventures-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {filteredVentures.map((venture, index) => {
                const colors = getStatusColor(venture.status);
                return (
                  <div 
                    key={venture.id} 
                    className="venture-card scroll-reveal" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      padding: 0, 
                      overflow: 'hidden',
                      height: '100%',
                      animationDelay: `${(index % 3) * 0.1}s`
                    }}
                  >
                    {/* Image Header wrapper */}
                    <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={venture.image} 
                        alt={venture.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                        className="venture-card-image"
                      />
                      {/* Floating status tag */}
                      <span style={{ 
                        position: 'absolute', 
                        top: '16px', 
                        right: '16px', 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px',
                        backgroundColor: colors.bg,
                        color: colors.text,
                        padding: '6px 12px',
                        borderRadius: '4px',
                        backdropFilter: 'blur(4px)',
                        border: `1px solid ${colors.text}`
                      }}>
                        {venture.status}
                      </span>
                    </div>

                    {/* Card Content body */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                        {getDivisionLabel(venture.division)}
                      </span>
                      <h3 style={{ fontSize: '18px', marginBottom: '10px', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
                        {venture.name}
                      </h3>
                      <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--color-body)', flexGrow: 1, marginBottom: '20px' }}>
                        {venture.desc}
                      </p>

                      <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-muted)' }}>
                          <MapPin size={14} style={{ color: 'var(--color-gold)' }} />
                          <span>{venture.locationName}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-muted)' }}>
                          <Layers size={14} style={{ color: 'var(--color-gold)' }} />
                          <span>Scale: {venture.scaleLabel}</span>
                        </div>
                      </div>

                      <Link 
                        to={`/venture/${venture.id}`} 
                        className="card-link"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto', fontWeight: 700, fontSize: '13px' }}
                      >
                        View Project Scope & Media <ExternalLink size={13} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed var(--border-light)', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '12px' }}>No Projects Found</h3>
              <p style={{ color: 'var(--color-muted)', marginBottom: '24px' }}>
                No ventures matched your current search and filter criteria. Try adjusting your parameters.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDivision('all');
                  setSelectedLocation('all');
                  setSortBy('name');
                }}
                className="btn btn-navy"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
