import { useSEO } from '../hooks/useSEO';

function AboutUs() {
  useSEO({
    title: 'About Mid-South Environmental Services | Company Overview',
    description: 'Privately owned environmental services company supporting railroad, industrial, transportation, and marine operations across Mississippi and Arkansas.',
    canonical: 'https://mses.online/about-us'
  });

  return (
    <div className="page">
      <section>
        <div className="placeholder placeholder-company">Company Operations Image Placeholder</div>
      </section>

      <section>
        <h1>About Mid-South Environmental Services</h1>
        <p>Mid-South Environmental Services is a privately owned environmental services company supporting regulated operating environments across the Mid-South. The company provides environmental response, remediation, and support services for railroad, industrial, transportation, and marine operations.</p>
        <p>Services are performed with a focus on safety, containment, and coordination with client requirements. As an owner-led operation, Mid-South Environmental Services provides direct access to experienced personnel and clear communication during both emergency response and planned work.</p>
        <p>The company supports clients from initial response through resolution, delivering practical, field-driven solutions without unnecessary delays or layers of approval.</p>
      </section>
    </div>
  );
}

export default AboutUs;
