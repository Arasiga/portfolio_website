import { useScrollAnimation } from '../hooks/useScrollAnimation';

const workExperience = [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    period: 'Jan 2023 - Present',
    description: 'Description of your role, responsibilities, and achievements. Highlight key projects and technologies used.',
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
  },
  {
    id: 2,
    title: 'Previous Job Title',
    company: 'Previous Company',
    period: 'Jun 2021 - Dec 2022',
    description: 'Description of your role, responsibilities, and achievements. Highlight key projects and technologies used.',
    tags: ['Technology 1', 'Technology 2'],
  },
];

const projects = [
  { id: 1, title: 'Project Title', description: 'A brief description of your project and what technologies you used.' },
  { id: 2, title: 'Project Title', description: 'A brief description of your project and what technologies you used.' },
  { id: 3, title: 'Project Title', description: 'A brief description of your project and what technologies you used.' },
  { id: 4, title: 'Project Title', description: 'A brief description of your project and what technologies you used.' },
];

export default function Work() {
  const [workRef, workVisible] = useScrollAnimation();

  return (
    <section id="work" className="section work">
      <div className="geometric-shape shape-8"></div>
      
      <div className="container">
        <h2 className={`section-title ${workVisible ? 'animate-in' : ''}`}>
          Work Experience
        </h2>
        
        <div ref={workRef} className={`work-content ${workVisible ? 'animate-in' : ''}`}>
          {/* Work Experience Section */}
          <div className="work-section">
            <h3 className="work-subtitle">Professional Experience</h3>
            <div className="work-timeline">
              {workExperience.map((job) => (
                <div key={job.id} className="work-item">
                  <div className="work-header">
                    <h4>{job.title}</h4>
                    <span className="work-period">{job.period}</span>
                  </div>
                  <p className="work-company">{job.company}</p>
                  <p className="work-description">{job.description}</p>
                  <div className="work-tags">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="work-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="work-section">
            <h3 className="work-subtitle">Projects</h3>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project {project.id}</div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href="#" className="project-link">Live Demo</a>
                      <a href="#" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

