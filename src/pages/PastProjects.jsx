import { useSEO } from '../hooks/useSEO';

const PROJECTS = [
  {
    id: 1,
    title: 'Railroad Derailment Response',
    location: 'Northeast Mississippi',
    scope: 'Emergency response, hazmat containment, soil remediation, and debris removal following rail incident.',
    images: [
      '/photos/projects/rail1.jpg',
      '/photos/projects/rail2.jpg',
      '/photos/projects/rail3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Remediation Services',
    location: 'Central Arkansas',
    scope: 'Environmental site remediation including soil excavation, groundwater treatment, and regulatory compliance coordination.',
    images: [
      '/photos/projects/remediation1.jpg',
      '/photos/projects/remediation2.jpg',
      '/photos/projects/remediation3.jpg'
    ]
  },
  {
    id: 3,
    title: 'Highway Incident Response',
    location: 'Northern Mississippi',
    scope: 'Fuel spill containment and cleanup following transportation incident. Coordinated with state DOT and environmental agencies.',
    images: [
      '/photos/projects/highway1.jpg',
      '/photos/projects/highway2.jpg',
      '/photos/projects/highway3.jpg'
    ]
  },
  {
    id: 4,
    title: 'Industrial Services',
    location: 'Eastern Arkansas',
    scope: 'Industrial tank cleaning, confined space entry, and proper disposal of residual materials and hazardous waste.',
    images: [
      '/photos/projects/facility1.jpg',
      '/photos/projects/facility2.jpg',
      '/photos/projects/facility3.jpg'
    ]
  },
  {
    id: 5,
    title: 'Marine Spill Response & Containment',
    location: 'Mid-South Region',
    scope: 'Multi-day marine response operation. Boom deployment, on-water product recovery, shoreline cleanup, and site remediation.',
    images: [
      '/photos/projects/project-6a.jpg',
      '/photos/projects/project-6b.jpg',
      '/photos/projects/project-6c.jpg'
    ]
  }
];

function PastProjects() {
  useSEO({
    title: 'Past Projects | MSES',
    description: 'View completed environmental response, railroad services, and industrial projects by Mid-South Environmental Services across the Mid-South region.',
    canonical: 'https://www.trexaios.com/past-projects'
  });

  return (
    <div className="page page-projects">
      <section className="page-header">
        <h1>Past Projects</h1>
        <p className="page-intro">A selection of completed work across environmental response, railroad services, and industrial operations throughout the Mid-South region.</p>
      </section>

      <section className="projects-list">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-entry">
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="project-location">{project.location}</p>
              <p className="project-scope">{project.scope}</p>
            </div>
            <div className="project-images">
              {project.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="project-image"
                  loading="lazy"
                />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="projects-cta">
        <p>Need environmental response or industrial services?</p>
        <a href="tel:844-637-4855" className="btn btn-primary">Call 844-637-4855</a>
      </section>
    </div>
  );
}

export default PastProjects;
