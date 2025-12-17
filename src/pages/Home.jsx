import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { useSEO } from '../hooks/useSEO';

function Home() {
  useSEO({
    title: 'Mid-South Environmental Services | Environmental & Emergency Response',
    description: 'Environmental response and remediation services supporting rail, industrial, transportation, and marine operations across the Mid-South. 24/7 emergency response available.',
    canonical: 'https://www.trexaios.com/'
  });

  return (
    <div className="page page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src="/newhero.png" alt="MSES emergency response operations" className="hero-image" />
          <Link to="/services" className="hero-image-link" aria-label="View Services"></Link>
        </div>
        <div className="hero-content">
          <h1>Environmental Response & Industrial Services When It Matters Most</h1>
          <p className="subheadline">Privately owned environmental services supporting railroad, industrial, transportation, and marine operations across the Mid-South.</p>
          <p className="authority-line">Direct access. Rapid response. No corporate delays.</p>
          <div className="hero-ctas">
            <a href="tel:844-637-4855" className="btn btn-primary">Call 24/7 Emergency Response — 844-637-4855</a>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* Why Clients Call Us Section */}
      <section className="section-why">
        <div className="section-inner">
          <h2>Why Clients Call Mid-South Environmental Services</h2>
          <ul className="benefits-list">
            <li>Direct access to decision-makers</li>
            <li>Rapid response without layers of approval</li>
            <li>Experience in regulated, high-risk environments</li>
            <li>Clear communication during time-sensitive situations</li>
            <li>Support from initial response through resolution</li>
          </ul>
        </div>
      </section>

      {/* Credibility Band - Work Photos */}
      <section className="section-credibility">
        <div className="section-inner">
          <div className="credibility-grid">
            <div className="credibility-item">
              <img src="/photos/homepage/emergency.jpg" alt="Environmental response operations" loading="lazy" />
              <span>Emergency Response</span>
            </div>
            <div className="credibility-item">
              <img src="/photos/homepage/railroad.jpg" alt="Railroad environmental services" loading="lazy" />
              <span>Railroad Services</span>
            </div>
            <div className="credibility-item">
              <img src="/photos/homepage/capability-3.jpg" alt="Industrial cleaning operations" loading="lazy" />
              <span>Industrial Services</span>
            </div>
            <div className="credibility-item">
              <img src="/photos/homepage/capability-4.jpg" alt="Site remediation work" loading="lazy" />
              <span>Site Remediation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-services">
        <div className="section-inner">
          <h2>Our Services</h2>
          <p className="section-lead">Mid-South Environmental Services provides environmental response, remediation, cleaning, and support services for regulated operating environments.</p>
          <div className="service-cards-grid">
            <div className="service-type-card">
              <h3>Emergency Spill Response</h3>
              <p>24/7 rapid response for hazardous material releases, containment, and remediation.</p>
            </div>
            <div className="service-type-card">
              <h3>Railroad Services</h3>
              <p>Derailment response, yard cleaning, and environmental support for rail operations.</p>
            </div>
            <div className="service-type-card">
              <h3>Industrial & Plant Services</h3>
              <p>Facility cleaning, waste management, and environmental compliance support.</p>
            </div>
            <div className="service-type-card">
              <h3>Marine & Waterway Services</h3>
              <p>Spill response, barge cleaning, and environmental services for marine operations.</p>
            </div>
            <div className="service-type-card">
              <h3>Transportation & Highway</h3>
              <p>Highway spill response, cargo recovery, and transportation incident support.</p>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-expect">
        <div className="section-inner">
          <h2>What to Expect When You Call</h2>
          <ol className="steps-list">
            <li>Immediate intake and situation assessment</li>
            <li>Coordination with site, facility, or railroad personnel</li>
            <li>Mobilization of appropriate response resources</li>
            <li>On-site support and containment activities</li>
            <li>Ongoing coordination as required</li>
          </ol>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-locations">
        <div className="section-inner">
          <h2>Serving the Mid-South Region</h2>
          <p className="section-lead">Regional coverage across Mississippi and Arkansas, supporting emergency response and planned operations for railroads, industrial facilities, transportation, and marine environments.</p>
          <Map />
          <ul className="locations-list">
            <li><strong>Corporate Office</strong> — 8465 Hamilton Rd, Southaven, MS 38671</li>
            <li><strong>Little Rock / Jacksonville, AR</strong> — 2600 W Main St, Jacksonville, AR 72076</li>
            <li><strong>Texarkana, AR</strong> — 3939 E Ninth St, Texarkana, AR 71854</li>
            <li><strong>Fulton, MS</strong> — 100 Access Rd, Fulton, MS 38843</li>
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <h2>Environmental Emergency or Time-Sensitive Need?</h2>
        <p className="final-cta-text">24/7 Response Available</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default Home;
