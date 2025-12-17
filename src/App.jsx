import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Locations from './pages/Locations';
import ContactUs from './pages/ContactUs';

// GA4 Analytics Hook
function useGA4PageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

// Layout wrapper that includes GA4 tracking
function AppLayout({ children }) {
  useGA4PageTracking();
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
