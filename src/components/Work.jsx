import { useScrollAnimation } from '../hooks/useScrollAnimation';

const workExperience = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'November 2024 - Present',
    description: 'Brief overview of your role and responsibilities.',
    bullets: [
      'Key achievement or responsibility point',
      'Another important contribution or project',
      'Highlight of technologies and methodologies used'
    ],
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'June 2021 - November 2024',
    description: 'Brief overview of your role and responsibilities.',
    bullets: [
      'Key achievement or responsibility point',
      'Another important contribution or project'
    ],
    tags: ['Technology 1', 'Technology 2'],
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'January 2020 - December 2020',
    description: 'Brief overview of your role and responsibilities.',
    bullets: [
      'Key achievement or responsibility point',
      'Another important contribution or project'
    ],
    tags: ['Technology 1', 'Technology 2'],
  },
  {
    id: 4,
    title: 'Software Developer Intern',
    company: 'Emagin',
    companyUrl: 'https://www.linkedin.com/company/emagin/',
    period: 'September 2018 - April 2019',
    description: 'Brief overview of your role and responsibilities.',
    bullets: [
      'Key achievement or responsibility point',
      'Another important contribution or project'
    ],
    tags: ['Technology 1', 'Technology 2'],
  },
  {
    id: 5,
    title: 'Software Developer Intern',
    company: 'Shop Bonsai',
    companyUrl: 'https://www.linkedin.com/company/shopbonsai/',
    period: 'January 2018 - April 2018',
    description: 'Brief overview of your role and responsibilities.',
    bullets: [
      'Key achievement or responsibility point',
      'Another important contribution or project'
    ],
    tags: ['Technology 1', 'Technology 2'],
  },
  {
    id: 6,
    title: 'Software Developer Intern',
    company: '360 Insights',
    companyUrl: 'https://www.linkedin.com/company/360insights/',
    period: 'May 2017 - August 2017',
    description: 'After graduating from Lighthouse Labs Web Development Bootcamp, I started pursued my Computer Engineering degree at the University of Waterloo. This program consisted of a minimum of five 4-month internships, and I was fortunate enough to land my first internship at 360 Insights.',
    bullets: [
      '',
      'Another important contribution or project'
    ],
    tags: ['Technology 1', 'Technology 2'],
  },
  {
    id: 7,
    title: 'Software Developer',
    company: 'Mindset Labs',
    companyUrl: '',
    period: 'May 2016 - December 2016',
    description: 'This was my first job as a software developer. I was hired by my instructors from Lightouse Labs Web Development Bootcamp as a full stack developer to help them build a boutique consultancy specializing in helping early stage startups. This was a great experience as I was able to learn a lot about the software development process and how to work with a team.',
    bullets: [
      'Created a landing page for the company.',
      'Managed Trello board for a seperate project .',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'CSS'],
  },
];

const projects = [
  { 
    id: 1, 
    title: 'Code Meeting', 
    description: 'Brief overview of the project and its purpose.',
    bullets: [
      'Key feature or achievement',
      'Technical challenge solved',
      'Impact or outcome'
    ],
    tags: ['React', 'Node.js', 'MongoDB']
  },
  { 
    id: 2, 
    title: 'ROOT Education', 
    description: 'Brief overview of the project and its purpose.',
    bullets: [
      'Key feature or achievement',
      'Technical challenge solved'
    ],
    tags: ['Python', 'Django', 'PostgreSQL']
  },
  { 
    id: 3, 
    title: 'Garbage Sorting App', 
    description: 'Brief overview of the project and its purpose.',
    bullets: [
      'Key feature or achievement',
      'Technical challenge solved'
    ],
    tags: ['TypeScript', 'GraphQL', 'AWS']
  },
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
                  <p className="work-company">
                    <a 
                      href={job.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      {job.company}
                    </a>
                  </p>
                  <p className="work-description">{job.description}</p>
                  {job.bullets && (
                    <ul className="work-bullets">
                      {job.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
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
            <div className={`projects-grid ${workVisible ? 'animate-in' : ''}`}>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project {project.id}</div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.bullets && (
                      <ul className="project-bullets">
                        {project.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    <div className="work-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="work-tag">{tag}</span>
                      ))}
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

