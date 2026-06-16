import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function InsightsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

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
  }, [selectedDivision, searchQuery]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  // Filter articles based on search query & selected division
  const filteredArticles = blogData.filter((article) => {
    const matchesDivision = selectedDivision === 'all' || article.division === selectedDivision;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  const getDivisionColor = (div) => {
    switch (div) {
      case 'marine': return 'var(--color-marine)';
      case 'warehouse': return 'var(--color-warehouse)';
      case 'packaging': return 'var(--color-packaging)';
      case 'construction': return 'var(--color-construction)';
      default: return 'var(--color-gold)';
    }
  };

  return (
    <div className="insights-hub-page page-fade-in">
      {/* Hero Header Banner */}
      <section className="b-hero bg-linen" style={{ padding: '140px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">KDPP KNOWLEDGE HUB</span>
          <h1 style={{ fontSize: '46px', marginBottom: '16px' }}>Corporate Insights & Industry Briefings</h1>
          <p className="b-hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Technical analyses, engineering standards, and logistics guides compiled by the operations leads of KDPP Group.
          </p>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '600px' }}>
        <div className="container">
          
          {/* Controls Bar: Search & Category Filters */}
          <div className="scroll-reveal" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '24px', 
            marginBottom: '40px',
            flexWrap: 'wrap',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-light)'
          }}>
            
            {/* Left: Division Filter Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setSelectedDivision('all')} 
                className={`btn ${selectedDivision === 'all' ? 'btn-navy' : 'btn-gold-outline'}`}
                style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '20px' }}
              >
                All Articles
              </button>
              <button 
                onClick={() => setSelectedDivision('marine')} 
                className={`btn ${selectedDivision === 'marine' ? 'btn-navy' : 'btn-gold-outline'}`}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: '13px', 
                  borderRadius: '20px',
                  borderColor: selectedDivision === 'marine' ? 'var(--color-marine)' : 'var(--border-light)',
                  color: selectedDivision === 'marine' ? '#ffffff' : 'var(--color-navy)',
                  backgroundColor: selectedDivision === 'marine' ? 'var(--color-marine)' : 'transparent'
                }}
              >
                Marine Depot
              </button>
              <button 
                onClick={() => setSelectedDivision('warehouse')} 
                className={`btn ${selectedDivision === 'warehouse' ? 'btn-navy' : 'btn-gold-outline'}`}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: '13px', 
                  borderRadius: '20px',
                  borderColor: selectedDivision === 'warehouse' ? 'var(--color-warehouse)' : 'var(--border-light)',
                  color: selectedDivision === 'warehouse' ? '#ffffff' : 'var(--color-navy)',
                  backgroundColor: selectedDivision === 'warehouse' ? 'var(--color-warehouse)' : 'transparent'
                }}
              >
                Warehouse Builder
              </button>
              <button 
                onClick={() => setSelectedDivision('packaging')} 
                className={`btn ${selectedDivision === 'packaging' ? 'btn-navy' : 'btn-gold-outline'}`}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: '13px', 
                  borderRadius: '20px',
                  borderColor: selectedDivision === 'packaging' ? 'var(--color-packaging)' : 'var(--border-light)',
                  color: selectedDivision === 'packaging' ? '#ffffff' : 'var(--color-navy)',
                  backgroundColor: selectedDivision === 'packaging' ? 'var(--color-packaging)' : 'transparent'
                }}
              >
                Packaging Industry
              </button>
              <button 
                onClick={() => setSelectedDivision('construction')} 
                className={`btn ${selectedDivision === 'construction' ? 'btn-navy' : 'btn-gold-outline'}`}
                style={{ 
                  padding: '8px 16px', 
                  fontSize: '13px', 
                  borderRadius: '20px',
                  borderColor: selectedDivision === 'construction' ? 'var(--color-construction)' : 'var(--border-light)',
                  color: selectedDivision === 'construction' ? '#ffffff' : 'var(--color-navy)',
                  backgroundColor: selectedDivision === 'construction' ? 'var(--color-construction)' : 'transparent'
                }}
              >
                Civil Contracting
              </button>
            </div>

            {/* Right: Search Box */}
            <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
              <Search 
                size={16} 
                style={{ 
                  position: 'absolute', 
                  left: '14px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'var(--color-muted)' 
                }} 
              />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research papers & guides..." 
                style={{ 
                  width: '100%', 
                  padding: '10px 14px 10px 40px', 
                  borderRadius: '20px', 
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-alternate)',
                  color: 'var(--color-body)',
                  fontSize: '13.5px'
                }}
              />
            </div>

          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="scroll-reveal" style={{ textAlign: 'center', padding: '80px 0' }}>
              <BookOpen size={48} style={{ color: 'var(--color-muted)', marginBottom: '16px', opacity: 0.5 }} />
              <h3>No Articles Found</h3>
              <p>No guides or insights match your query. Try resetting filters or search terms.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
              {filteredArticles.map((article, idx) => (
                <div 
                  key={article.id} 
                  className="venture-card scroll-reveal" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: '0', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '16px', 
                      left: '16px',
                      backgroundColor: getDivisionColor(article.division),
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {article.category}
                    </div>
                  </div>

                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '12px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {article.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', marginBottom: '12px', lineHeight: 1.4, color: 'var(--color-navy)' }}>
                      {article.title}
                    </h3>
                    
                    <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--color-body)', marginBottom: '24px', flexGrow: 1 }}>
                      {article.summary}
                    </p>

                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      marginTop: 'auto',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--border-light)'
                    }}>
                      <span style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--color-muted)' }}>
                        By {article.author.split(',')[0]}
                      </span>
                      <Link 
                        to={`/insights/${article.id}`} 
                        className="card-link"
                        style={{ color: getDivisionColor(article.division), marginTop: '0', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                      >
                        Read Briefing <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Newsletter signup band */}
      <section className="section-padding bg-alternate" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className="scroll-reveal">
            <Mail size={32} style={{ color: 'var(--color-gold)', marginBottom: '16px' }} />
            <h2>Subscribe to Technical Briefings</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', marginBottom: '24px' }}>
              Stay informed on regional logistics updates, ISO compliance changes, and structural engineering best practices across Gujarat.
            </p>
            
            {isSubscribed ? (
              <div className="form-success" style={{ padding: '20px' }}>
                <h3>Successfully Subscribed</h3>
                <p style={{ marginTop: '8px', fontSize: '13.5px' }}>
                  Thank you for subscribing. We will send you monthly technical digests.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  className="form-control"
                  style={{ width: '280px', marginBottom: '0' }}
                />
                <button type="submit" className="btn btn-navy">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
