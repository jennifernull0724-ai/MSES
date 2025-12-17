import { useSEO } from '../hooks/useSEO';

function IndustrialServices() {
  useSEO({
    title: 'Industrial Environmental Response & Cleanup | MSES',
    description: 'Environmental and cleaning services for industrial facilities including spill response, tank cleaning, waste removal, and scheduled maintenance support.',
    canonical: 'https://mses.online/services/industrial-services'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-header">Service Header Image Placeholder — Industrial Services</div>
      </section>

      <section>
        <h1>Industrial Environmental Services</h1>
        <p>Your facility doesn't shut down for cleanup—and we get that. Mid-South Environmental Services provides environmental and industrial cleaning services that work around your operations. Whether it's a spill that needs immediate attention or scheduled maintenance that can't slip, we bring the crews and equipment to handle it without disrupting production.</p>
      </section>

      <section>
        <h2>What We Handle</h2>
        <ul className="services-list">
          <li>Spill response inside operating facilities</li>
          <li>Tank cleaning and decontamination</li>
          <li>Containment area and sump cleaning</li>
          <li>Process area remediation support</li>
          <li>Vacuum truck services for pits, tanks, and sumps</li>
          <li>Waste consolidation, profiling, and removal</li>
          <li>Scheduled turnaround and outage support</li>
        </ul>
      </section>

      <section>
        <div className="placeholder placeholder-mid">Operational Image Placeholder — Field Services</div>
      </section>

      <section>
        <h2>Where This Work Happens</h2>
        <ul className="environments-list">
          <li>Manufacturing plants and production floors</li>
          <li>Refineries and processing facilities</li>
          <li>Chemical storage and handling areas</li>
          <li>Tank farms and bulk terminals</li>
          <li>Maintenance shops and wash bays</li>
        </ul>
      </section>

      <section>
        <p className="closing-text">Plant managers and ops leads call us because we understand that your schedule matters. We coordinate with your team, follow your protocols, and get the work done on time. No surprises.</p>
      </section>

      <section className="service-cta">
        <p>Need immediate assistance or want to discuss this service?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default IndustrialServices;
