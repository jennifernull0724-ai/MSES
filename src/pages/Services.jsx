import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

function Services() {
  useSEO({
    title: 'Environmental & Industrial Services | MSES',
    description: 'Environmental response, remediation, and cleanup services for railroad, industrial, transportation, and marine operations. Serving the Mid-South region.',
    canonical: 'https://mses.online/services'
  });

  return (
    <div className="page">
      <section>
        <h1>Services</h1>
        <p>Mid-South Environmental Services provides environmental response and support services for regulated operating environments across the Mid-South. Services are delivered by experienced personnel focused on execution, coordination, and safe outcomes.</p>
      </section>

      <section>
        <h2>Service Areas</h2>
        <p>The company supports a range of operating environments with specialized environmental services, including:</p>
        
        <div className="service-areas">
          <div className="service-area-card">
            <h3>Environmental Services</h3>
            <p>Spill response, cleanup, remediation, and material handling support.</p>
            <Link to="/services/environmental-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Railroad Services</h3>
            <p>Environmental response and cleanup for rail operations, yards, and right-of-way.</p>
            <Link to="/services/railroad-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Industrial Services</h3>
            <p>Environmental and cleaning services supporting industrial facilities and plants.</p>
            <Link to="/services/industrial-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Transportation Services</h3>
            <p>Environmental response and material recovery for transportation-related incidents.</p>
            <Link to="/services/transportation-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Marine Services</h3>
            <p>Spill response and environmental support for marine and shoreline environments.</p>
            <Link to="/services/marine-services" className="service-link">Learn More →</Link>
          </div>
        </div>
      </section>

      <section>
        <p className="closing-text">Each service area is supported by experienced field personnel and coordinated to meet site-specific requirements.</p>
      </section>
    </div>
  );
}

export default Services;
