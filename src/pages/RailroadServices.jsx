import { useSEO } from '../hooks/useSEO';

function RailroadServices() {
  useSEO({
    title: 'Railroad Environmental Services & Spill Response | MSES',
    description: 'Environmental response for railroad operations including derailment support, ballast removal, tank car cleaning, and right-of-way remediation. Coordination with railroad personnel.',
    canonical: 'https://mses.online/services/railroad-services'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-header">Service Header Image Placeholder — Railroad Services</div>
      </section>

      <section>
        <h1>Railroad Environmental Services</h1>
        <p>Rail doesn't stop, and neither do we. Mid-South Environmental Services provides environmental response for railroad operations—yards, mainlines, sidings, and derailments. We understand how railroads work, how to coordinate with dispatchers and roadmasters, and how to get the job done without creating operational headaches. When you call, you get people who've done this before.</p>
      </section>

      <section>
        <h2>What We Handle</h2>
        <ul className="services-list">
          <li>Fuel, oil, and product spill response</li>
          <li>Derailment environmental support</li>
          <li>Contaminated ballast removal and replacement</li>
          <li>Trackside soil excavation and disposal</li>
          <li>Vacuum truck services along right-of-way</li>
          <li>Tank car residue and heel removal</li>
          <li>Coordination with railroad personnel throughout</li>
        </ul>
      </section>

      <section>
        <div className="placeholder placeholder-mid">Operational Image Placeholder — Field Services</div>
      </section>

      <section>
        <h2>Where This Work Happens</h2>
        <ul className="environments-list">
          <li>Classification yards and switching operations</li>
          <li>Mainline and branch line right-of-way</li>
          <li>Fueling facilities and maintenance shops</li>
          <li>Industrial spurs and customer sidings</li>
          <li>Intermodal terminals</li>
        </ul>
      </section>

      <section>
        <p className="closing-text">Railroad work requires understanding the environment, not just the cleanup. We work with your people, stay out of the way of operations, and get the track back in service. That's the job.</p>
      </section>

      <section className="service-cta">
        <p>Need immediate assistance or want to discuss this service?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default RailroadServices;
