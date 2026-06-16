import React from 'react';
import ClientLogo from './ClientLogo';

export default function ClientMarquee({ clients, title, subtitle, speed = 35, className = "", rawMarqueeOnly = false }) {
  // Duplicate the list 3x for seamless infinite loop
  const tripled = [...clients, ...clients, ...clients];

  const marqueeMarkup = (
    <div className="logo-marquee-wrapper">
      <div 
        className="logo-marquee-track"
        style={{ 
          animationDuration: `${speed}s`,
          width: `calc(200px * ${tripled.length})`
        }}
      >
        {tripled.map((client, index) => (
          <div key={index} className="logo-marquee-item">
            <ClientLogo 
              name={client.name} 
              className="logo-marquee-img" 
              height={40} 
              width={130} 
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (rawMarqueeOnly) {
    return marqueeMarkup;
  }

  return (
    <section className={`section-padding client-marquee-section ${className}`}>
      <div className="container">
        {title && (
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
            {subtitle && <span className="section-label">{subtitle}</span>}
            <h2>{title}</h2>
          </div>
        )}
      </div>
      {marqueeMarkup}
    </section>
  );
}

