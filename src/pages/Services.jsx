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
        <h1>Environmental & Operational Services</h1>
        <p>Mid-South Environmental Services provides field-executed environmental response and support services for regulated operating environments where timing, coordination, and execution matter. Services are delivered by experienced personnel supporting emergency response and planned operations across rail, industrial, transportation, and marine environments.</p>
      </section>

      <section>
        <div className="service-areas">
          <div className="service-area-card">
            <h3>Environmental Services</h3>
            <p>Spill response, containment, cleanup, remediation, vacuum services, and material handling support for environmental incidents and maintenance activities.</p>
            <Link to="/services/environmental-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Railroad Services</h3>
            <p>Environmental response and cleanup for rail operations, including yards, right-of-way, derailments, ballast work, and coordination within active rail environments.</p>
            <Link to="/services/railroad-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Industrial Services</h3>
            <p>Environmental response, tank and containment support, and cleanup services for industrial facilities that cannot afford downtime or disruption.</p>
            <Link to="/services/industrial-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Transportation Services</h3>
            <p>Roadway incident response, material recovery, and environmental support for transportation-related spills and releases.</p>
            <Link to="/services/transportation-services" className="service-link">Learn More →</Link>
          </div>

          <div className="service-area-card">
            <h3>Marine Services</h3>
            <p>Spill response and environmental support for inland waterways, shorelines, and marine-adjacent operations.</p>
            <Link to="/services/marine-services" className="service-link">Learn More →</Link>
          </div>
        </div>
      </section>

      <section>
        <p className="closing-text">Each service area is supported by experienced field personnel and coordinated directly with client operations.</p>
        <p className="cta-line">For immediate response or service coordination, call <a href="tel:844-637-4855">844-637-4855</a>.</p>
      </section>
    </div>
  );
}

export default Services;
