import { useSEO } from '../hooks/useSEO';

function TransportationServices() {
  useSEO({
    title: 'Transportation Spill Response & Environmental Services | MSES',
    description: 'Environmental response for transportation incidents including highway spills, cargo recovery, fuel cleanup, and site remediation. Fast mobilization to incident sites.',
    canonical: 'https://mses.online/services/transportation-services'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-header">Service Header Image Placeholder — Transportation Services</div>
      </section>

      <section>
        <h1>Transportation Environmental Services</h1>
        <p>Roadway incidents don't wait, and the clock starts the moment something goes wrong. Mid-South Environmental Services responds to transportation-related spills and releases with speed and control—containing the situation, recovering product, and clearing the scene so traffic and operations can resume. We handle the environmental side so you can focus on everything else.</p>
      </section>

      <section>
        <h2>What We Handle</h2>
        <ul className="services-list">
          <li>Highway and roadway spill response</li>
          <li>Fuel and cargo release containment</li>
          <li>Product recovery and transfer</li>
          <li>Contaminated soil removal from incident sites</li>
          <li>Vacuum truck services for liquid recovery</li>
          <li>Waste transport coordination and manifesting</li>
          <li>Site restoration and closeout</li>
        </ul>
      </section>

      <section>
        <div className="placeholder placeholder-mid">Operational Image Placeholder — Field Services</div>
      </section>

      <section>
        <h2>Where This Work Happens</h2>
        <ul className="environments-list">
          <li>Interstate and highway incident scenes</li>
          <li>Truck stops and fueling stations</li>
          <li>Freight terminals and distribution centers</li>
          <li>Transfer facilities and staging areas</li>
          <li>Loading docks and cargo handling zones</li>
        </ul>
      </section>

      <section>
        <p className="closing-text">Time matters in transportation incidents. We mobilize fast, coordinate with responders and carriers on scene, and get the situation handled. When you need the road cleared and the job done right, call us.</p>
      </section>

      <section className="service-cta">
        <p>Need immediate assistance or want to discuss this service?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default TransportationServices;
