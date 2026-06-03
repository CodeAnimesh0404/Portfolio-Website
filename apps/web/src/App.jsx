import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const AboutPage = React.lazy(() => import('./pages/AboutPage.jsx'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage.jsx'));
const CertificatesPage = React.lazy(() => import('./pages/CertificatesPage.jsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.jsx'));
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  );
}

export default App; 