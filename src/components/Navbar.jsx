import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Toggle theme and update class list on body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const location = useLocation();
  const isHome = location.pathname === '/';

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle navbar sticky and show/hide logic on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Shadow shows after scrolling down 20px
      setScrolled(currentScrollPos > 20);
      
      // Determine if navbar is visible (scrolls up = visible, scrolls down = hidden)
      if (currentScrollPos < 80) {
        setVisible(true);
      } else {
        setVisible(prevScrollPos > currentScrollPos);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Handle anchor link smooth scroll on homepage
  const handleScrollToSection = (e, id) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${visible ? '' : 'navbar-hidden'} ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isHome && (
            <Link to="/" className="navbar-back-link">
              ← KDPP Group
            </Link>
          )}
          
          <Link to="/" className="navbar-logo">
            {isHome ? (
              <>
                KDPP <span className="logo-underline">Group</span>
              </>
            ) : (
              <>
                KDPP Group
              </>
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <Link to="/portfolio" className="navbar-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/compliance" className="navbar-link">
              Compliance
            </Link>
          </li>
          <li>
            <Link to="/insights" className="navbar-link">
              Insights
            </Link>
          </li>
          <li>
            <Link to="/careers" className="navbar-link">
              Careers
            </Link>
          </li>
          <li>
            <a 
              href="#businesses" 
              onClick={(e) => handleScrollToSection(e, 'businesses')}
              className="navbar-link"
            >
              Our Businesses
            </a>
          </li>
          <li>
            <a 
              href="#story" 
              onClick={(e) => handleScrollToSection(e, 'story')}
              className="navbar-link"
            >
              Our Story
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, 'contact')}
              className="navbar-link"
            >
              Contact
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="navbar-menu active">
            <li>
              <Link to="/portfolio" className="navbar-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/compliance" className="navbar-link">
                Compliance
              </Link>
            </li>
            <li>
              <Link to="/insights" className="navbar-link">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/careers" className="navbar-link">
                Careers
              </Link>
            </li>
            <li>
              <a 
                href="#businesses" 
                onClick={(e) => handleScrollToSection(e, 'businesses')}
                className="navbar-link"
              >
                Our Businesses
              </a>
            </li>
            <li>
              <a 
                href="#story" 
                onClick={(e) => handleScrollToSection(e, 'story')}
                className="navbar-link"
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="navbar-link"
              >
                Contact
              </a>
            </li>
            <li style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
              <button onClick={toggleTheme} className="btn btn-gold-outline" style={{ width: '100%', gap: '8px', display: 'inline-flex' }}>
                {theme === 'light' ? <><Moon size={16} /> Dark Mode</> : <><Sun size={16} /> Light Mode</>}
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
