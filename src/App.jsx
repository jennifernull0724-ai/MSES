import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import EnvironmentalServices from './pages/EnvironmentalServices';
import RailroadServices from './pages/RailroadServices';
import IndustrialServices from './pages/IndustrialServices';
import TransportationServices from './pages/TransportationServices';
import MarineServices from './pages/MarineServices';
import Staff from './pages/Staff';
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
          <Route path="/services/environmental-services" element={<EnvironmentalServices />} />
          <Route path="/services/railroad-services" element={<RailroadServices />} />
          <Route path="/services/industrial-services" element={<IndustrialServices />} />
          <Route path="/services/transportation-services" element={<TransportationServices />} />
          <Route path="/services/marine-services" element={<MarineServices />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
