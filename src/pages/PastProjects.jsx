import { useSEO } from '../hooks/useSEO';

const PROJECTS = [
  {
    id: 1,
    title: 'Railroad Derailment Response',
    location: 'Northeast Mississippi',
    scope: 'Emergency response, hazmat containment, soil remediation, and debris removal following rail incident.',
    images: [
      '/photos/projects/project-1a.jpg',
      '/photos/projects/project-1b.jpg'
    ]
  },
  {
    id: 2,
    title: 'Industrial Spill Cleanup',
    location: 'Central Arkansas',
    scope: 'Containment and remediation of industrial discharge. Included excavation, disposal, and site restoration.',
    images: [
      '/photos/projects/project-2a.jpg',
      '/photos/projects/project-2b.jpg',
      '/photos/projects/project-2c.jpg'
    ]
  },
  {
    id: 3,
    title: 'Rail Yard Environmental Services',
    location: 'West Tennessee Region',
    scope: 'Scheduled yard cleaning, stormwater management support, and spill prevention maintenance.',
    images: [
      '/photos/projects/project-3a.jpg',
      '/photos/projects/project-3b.jpg',
      '/photos/projects/project-3c.jpg'
    ]
  },
  {
    id: 4,
    title: 'Highway Incident Response',
    location: 'Northern Mississippi',
    scope: 'Fuel spill containment and cleanup following transportation incident. Coordinated with state DOT and environmental agencies.',
    images: [
      '/photos/projects/highway2.jpg',
      '/photos/projects/highway3.jpg',
      '/photos/projects/highway1.jpg'
    ]
  },
  {
    id: 5,
    title: 'Facility Tank Cleaning',
    location: 'Eastern Arkansas',
    scope: 'Industrial tank cleaning and waste removal. Included confined space entry and proper disposal of residual materials.',
    images: [
      '/photos/projects/project-5a.jpg',
      '/photos/projects/project-5b.jpg',
      '/photos/projects/project-5c.jpg'
    ]
  },
  {
    id: 6,
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
