import { useSEO } from '../hooks/useSEO';

function MarineServices() {
  useSEO({
    title: 'Marine Spill Response & Environmental Services | MSES',
    description: 'Marine environmental response including spill containment, shoreline cleanup, boom deployment, and waterway remediation. Experienced crews for water-based operations.',
    canonical: 'https://mses.online/services/marine-services'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-header">Service Header Image Placeholder — Marine Services</div>
      </section>

      <section>
        <h1>Marine Environmental Services</h1>
        <p>Water doesn't wait. When a release hits an inland waterway or shoreline, you need a response that's fast, controlled, and coordinated with everyone involved. Mid-South Environmental Services provides marine spill response, containment, and recovery services for operations along rivers, ports, and transfer facilities. We know the stakes, and we come prepared.</p>
      </section>

      <section>
        <h2>What We Handle</h2>
        <ul className="services-list">
          <li>Spill containment and boom deployment</li>
          <li>On-water product recovery</li>
          <li>Shoreline cleanup and restoration</li>
          <li>Absorbent and contaminated material removal</li>
          <li>Vessel and barge spill support</li>
          <li>Coordination with facility response plans</li>
          <li>Waste handling and disposal from marine incidents</li>
        </ul>
      </section>

      <section>
        <div className="placeholder placeholder-mid">Operational Image Placeholder — Field Services</div>
      </section>

      <section>
        <h2>Where This Work Happens</h2>
        <ul className="environments-list">
          <li>Rivers and inland waterways</li>
          <li>Barge and vessel loading facilities</li>
          <li>Port terminals and docks</li>
          <li>Shoreline and bank areas</li>
          <li>Marine fueling and transfer points</li>
        </ul>
      </section>

      <section>
        <p className="closing-text">Marine response requires the right equipment and people who've worked on the water before. We bring both—along with the coordination to work alongside your team and keep operations moving where possible. Call when you need it handled.</p>
      </section>

      <section className="service-cta">
        <p>Need immediate assistance or want to discuss this service?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default MarineServices;
