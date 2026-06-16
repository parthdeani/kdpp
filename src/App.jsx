import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marine from './pages/Marine';
import Warehouse from './pages/Warehouse';
import Packaging from './pages/Packaging';
import Construction from './pages/Construction';
import VentureDetail from './pages/VentureDetail';
import PortfolioHub from './pages/PortfolioHub';
import Compliance from './pages/Compliance';
import ArticleDetail from './pages/ArticleDetail';
import Careers from './pages/Careers';
import InsightsHub from './pages/InsightsHub';

// Helper component to scroll window to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll prevents visible jumping during route change
    });
  }, [pathname]);

  return null;
}

// Wrapper to trigger page entrance transitions on route change
function RouteContainer({ children }) {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="page-fade-in">
      {children}
    </div>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Route views render inside a main container to ensure they clear the sticky navbar */}
      <main style={{ minHeight: 'calc(100vh - 350px)' }}>
        <Routes>
          <Route path="/" element={<RouteContainer><Home /></RouteContainer>} />
          <Route path="/marine" element={<RouteContainer><Marine /></RouteContainer>} />
          <Route path="/warehouse" element={<RouteContainer><Warehouse /></RouteContainer>} />
          <Route path="/packaging" element={<RouteContainer><Packaging /></RouteContainer>} />
          <Route path="/construction" element={<RouteContainer><Construction /></RouteContainer>} />
          <Route path="/venture/:ventureId" element={<RouteContainer><VentureDetail /></RouteContainer>} />
          <Route path="/portfolio" element={<RouteContainer><PortfolioHub /></RouteContainer>} />
          <Route path="/compliance" element={<RouteContainer><Compliance /></RouteContainer>} />
          <Route path="/insights" element={<RouteContainer><InsightsHub /></RouteContainer>} />
          <Route path="/insights/:articleId" element={<RouteContainer><ArticleDetail /></RouteContainer>} />
          <Route path="/careers" element={<RouteContainer><Careers /></RouteContainer>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
