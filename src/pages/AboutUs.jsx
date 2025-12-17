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
        <h1>About Mid-South Environmental Services</h1>
        <p>Mid-South Environmental Services is a privately owned environmental response and support company serving regulated operating environments across the Mid-South. The company provides field-executed environmental services for railroad, industrial, transportation, and marine operations where timing, coordination, and control matter.</p>
        <p>Operations are led by experienced personnel with direct involvement in both emergency response and planned work. Services are delivered with a practical focus on containment, site coordination, and safe execution, supporting client requirements without unnecessary delays or layers of approval.</p>
        <p>Mid-South Environmental Services supports clients from initial response through resolution, working alongside operations, compliance, and site personnel to manage environmental incidents and maintenance activities efficiently. The company's approach is grounded in real-world field experience, clear communication, and accountability at every stage of the work.</p>
      </section>
    </div>
  );
}

export default AboutUs;
