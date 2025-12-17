import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { useSEO } from '../hooks/useSEO';

function Home() {
  useSEO({
    title: 'Mid-South Environmental Services | Environmental & Emergency Response',
    description: 'Environmental response and remediation services supporting rail, industrial, transportation, and marine operations across the Mid-South. 24/7 emergency response available.',
    canonical: 'https://mses.online/'
  });

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/mseshero.png" alt="MSES emergency response operations" className="hero-image" />
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
      <section>
        <h2>Why Clients Call Mid-South Environmental Services</h2>
        <ul className="benefits-list">
          <li>Direct access to decision-makers</li>
          <li>Rapid response without layers of approval</li>
          <li>Experience in regulated, high-risk environments</li>
          <li>Clear communication during time-sensitive situations</li>
          <li>Support from initial response through resolution</li>
        </ul>
      </section>

      {/* Services Overview Section */}
      <section>
        <h2>Our Services</h2>
        <p>Mid-South Environmental Services provides environmental response, remediation, cleaning, and support services for regulated operating environments. Services are performed with a focus on safety, containment, and coordination with client requirements.</p>
        <div className="services-grid">
          <div className="placeholder placeholder-service">Service Category Image Placeholder — Environmental Services</div>
          <div className="placeholder placeholder-service">Service Category Image Placeholder — Railroad Services</div>
          <div className="placeholder placeholder-service">Service Category Image Placeholder — Industrial Services</div>
          <div className="placeholder placeholder-service">Service Category Image Placeholder — Transportation Services</div>
          <div className="placeholder placeholder-service">Service Category Image Placeholder — Marine Services</div>
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn btn-secondary">View All Services</Link>
        </div>
      </section>

      {/* What to Expect Section */}
      <section>
        <h2>What to Expect When You Call</h2>
        <ol className="steps-list">
          <li>Immediate intake and situation assessment</li>
          <li>Coordination with site, facility, or railroad personnel</li>
          <li>Mobilization of appropriate response resources</li>
          <li>On-site support and containment activities</li>
          <li>Ongoing coordination as required</li>
        </ol>
      </section>

      {/* Locations Section */}
      <section>
        <h2>Serving the Mid-South Region</h2>
        <p>Mid-South Environmental Services provides regional coverage across Mississippi and Arkansas, supporting emergency response and planned operations for railroads, industrial facilities, transportation operations, and marine environments.</p>
        <Map />
        <ul className="locations-list">
          <li><strong>Corporate Office</strong> — 8465 Hamilton Rd, Southaven, MS 38671</li>
          <li><strong>Little Rock / Jacksonville, AR</strong> — 2600 W Main St, Jacksonville, AR 72076</li>
          <li><strong>Texarkana, AR</strong> — 3939 E Ninth St, Texarkana, AR 71854</li>
          <li><strong>Fulton, MS</strong> — 100 Access Rd, Fulton, MS 38843</li>
        </ul>
        <p className="coverage-note">Additional response coverage available throughout the Mid-South region.</p>
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
