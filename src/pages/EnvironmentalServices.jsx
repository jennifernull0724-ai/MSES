import { useSEO } from '../hooks/useSEO';

function EnvironmentalServices() {
  useSEO({
    title: 'Environmental Response & Remediation Services | MSES',
    description: 'Emergency spill response, contaminated soil removal, hazardous waste handling, and site remediation services. Fast mobilization and field-experienced crews.',
    canonical: 'https://mses.online/services/environmental-services'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-header">Service Header Image Placeholder — Environmental Services</div>
      </section>

      <section>
        <h1>Environmental Services</h1>
        <p>When something hits the ground, you need people who move fast and know what they're doing. Mid-South Environmental Services handles spill response, cleanup, and remediation across regulated environments—getting the situation under control while you focus on operations. We show up ready to work, not to create more problems.</p>
      </section>

      <section>
        <h2>What We Handle</h2>
        <ul className="services-list">
          <li>Emergency spill response and initial containment</li>
          <li>Product recovery and material removal</li>
          <li>Contaminated soil excavation and disposal</li>
          <li>Hazardous and non-hazardous waste handling</li>
          <li>Vacuum truck operations for liquids and sludge</li>
          <li>Site remediation and restoration</li>
          <li>Waste profiling and manifesting support</li>
        </ul>
      </section>

      <section>
        <div className="placeholder placeholder-mid">Operational Image Placeholder — Field Services</div>
      </section>

      <section>
        <h2>Where This Work Happens</h2>
        <ul className="environments-list">
          <li>Railroad yards, sidings, and right-of-way</li>
          <li>Industrial facilities and process areas</li>
          <li>Highway and roadway incident sites</li>
          <li>Terminals, storage yards, and transfer points</li>
          <li>Shorelines and inland waterways</li>
        </ul>
      </section>

      <section>
        <p className="closing-text">Environmental work is about execution. We coordinate directly with your team, get crews on site, and handle the situation—start to finish. Call us when you need the job done right.</p>
      </section>

      <section className="service-cta">
        <p>Need immediate assistance or want to discuss this service?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default EnvironmentalServices;
