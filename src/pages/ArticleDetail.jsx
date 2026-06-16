import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, Mail, BookOpen } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function ArticleDetail() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  // Find target article
  const article = blogData.find(a => a.id === articleId);

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
  }, [articleId]);

  if (!article) {
    return (
      <div className="container" style={{ padding: '120px 20px', textAlignment: 'center' }}>
        <span className="section-label">404 ERROR</span>
        <h2>Article Not Found</h2>
        <p style={{ marginTop: '16px', marginBottom: '24px' }}>
          The article you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-navy">
          Return to Homepage
        </Link>
      </div>
    );
  }

  // Get other articles from same division (related posts)
  const relatedArticles = blogData.filter(a => a.division === article.division && a.id !== article.id);

  // Helper labels
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <div className="article-detail-page page-fade-in">
      {/* Article Hero Banner */}
      <section 
        className="venture-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.8), rgba(13, 27, 62, 0.92)), url(${article.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 60px 0',
          color: '#ffffff'
        }}
      >
        <div className="container">
          <Link to={getDivisionLink(article.division)} className="venture-back-link">
            <ArrowLeft size={16} /> Back to {getDivisionLabel(article.division)}
          </Link>
          
          <div className="venture-hero-meta" style={{ marginTop: '30px', maxWidth: '900px' }}>
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              {article.category.toUpperCase()}
            </span>
            <h1 style={{ color: '#ffffff', fontSize: '38px', fontWeight: 700, marginTop: '8px', lineHeight: 1.3 }}>
              {article.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap', fontSize: '13px', color: '#A5ADC0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} style={{ color: 'var(--color-gold)' }} />
                <span>{article.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} style={{ color: 'var(--color-gold)' }} />
                <span>{article.readTime}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} style={{ color: 'var(--color-gold)' }} />
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '60px' }}>
          
          {/* Left: Article Body */}
          <article className="scroll-reveal" style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-body)' }}>
            
            {/* Lead Summary paragraph */}
            <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--color-navy)', lineHeight: 1.7, marginBottom: '30px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', borderLeft: '3px solid var(--color-gold)', paddingLeft: '20px' }}>
              {article.summary}
            </p>

            {/* Render paragraphs dynamically */}
            {article.content.map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '24px' }}>
                {paragraph}
              </p>
            ))}

            {/* Industry Safety & Standard Callout Box */}
            <div style={{ 
              backgroundColor: 'var(--bg-alternate)', 
              border: '1px solid var(--border-light)', 
              borderRadius: '8px', 
              padding: '30px', 
              marginTop: '40px',
              borderLeft: '4px solid var(--color-gold)'
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <ShieldCheck size={28} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--color-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    KDPP Corporate Oversight
                  </h4>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                    This educational guide is authored by KDPP engineering leads to assist partners in maintaining global safety standards. Our group directly enforces these guidelines at all site locations.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right: Sidebar */}
          <aside className="scroll-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Newsletter Signup Card */}
            <div style={{ 
              backgroundColor: 'var(--bg-alternate)', 
              border: '1px solid var(--border-light)', 
              borderRadius: '8px', 
              padding: '30px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Mail size={20} style={{ color: 'var(--color-gold)' }} />
                <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-navy)', fontWeight: 700 }}>
                  Subscribe to Insights
                </h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                Get our latest industry briefings, Gujarat regulatory updates, and depot logistics guides sent straight to your inbox.
              </p>
              
              {isSubscribed ? (
                <div style={{ 
                  backgroundColor: 'rgba(184, 150, 46, 0.1)', 
                  border: '1px solid var(--color-gold)', 
                  borderRadius: '4px', 
                  padding: '12px', 
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-navy)'
                }}>
                  Subscribed Successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address" 
                    style={{ 
                      width: '100%', 
                      padding: '10px 14px', 
                      borderRadius: '4px', 
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--color-body)',
                      fontSize: '13.5px'
                    }}
                  />
                  <button type="submit" className="btn btn-navy" style={{ width: '100%', padding: '10px 0', fontSize: '13px' }}>
                    Join Newsletter
                  </button>
                </form>
              )}
            </div>

            {/* Related Posts Card */}
            {relatedArticles.length > 0 && (
              <div style={{ 
                backgroundColor: 'var(--bg-alternate)', 
                border: '1px solid var(--border-light)', 
                borderRadius: '8px', 
                padding: '30px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <BookOpen size={20} style={{ color: 'var(--color-gold)' }} />
                  <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-navy)', fontWeight: 700 }}>
                    Related Guides
                  </h4>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {relatedArticles.map((rel) => (
                    <Link 
                      key={rel.id} 
                      to={`/insights/${rel.id}`}
                      style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}
                    >
                      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.5px' }}>
                        {rel.category}
                      </span>
                      <h5 style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.4, transition: 'color 0.2s ease' }} className="rel-title-hover">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
