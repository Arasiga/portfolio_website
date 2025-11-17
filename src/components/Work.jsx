import { useScrollAnimation } from '../hooks/useScrollAnimation';

const workExperience = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'November 2024 - Present',
    description: 'Promoted to Senior Software Engineer after three years of high-impact work, I led the development of critical projects on the Checkout team.',
    bullets: [
      'Spearheaded the development of an AI-powered checkout migration toolkit that analyzed over 35,700 Shopify Plus merchants\' customization files, enabling billions of dollars in GMV to upgrade to Shopify\'s latest checkout extensibility platform.',
      'Saved a projected $100,000+ in LLM token costs by redesigning the AI analysis strategy for the checkout migration toolkit through advanced prompt engineering.',
      'Improved the third-party developer experience by leading the development of a new API to surface contextual extension and app information for thousands of apps daily.',
      'Designed and delivered new GraphQL APIs for markets in Checkout, enabling multi-level inheritance for checkout profiles to create more dynamic and personalized experiences.',
    ],
    tags: ['Ruby', 'GraphQL', 'LLM (GPT, Claude)', 'React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'June 2021 - November 2024',
    description: 'Upon graduating, I rejoined my former team at Shopify as a full-time software engineer. I focused on designing and building a new platform to deliver real-time notifications to merchants via Admin, email, and push.',
    bullets: [
      'Led the backend architecture for a new, scalable merchant notification system, building GraphQL APIs from the ground up to serve millions of merchants globally.',
      'Engineered the push notification functionality for a high-profile marketing campaign for Ryan Reynolds\' "Maximum Effort" agency, ensuring scalable and timely delivery to a massive user base.',
      'Played a key role in developing an internal notification builder for creating and managing templates across all merchant-facing channels (email, push, in-admin).',
    ],
    tags: ['Ruby', 'Ruby on Rails', 'GraphQL', 'Kafka', 'React', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Shopify',
    companyUrl: 'https://www.linkedin.com/company/shopify/',
    period: 'January 2020 - December 2020',
    description: 'Across two internships, I first worked on internal GCP tooling as a production engineering intern, then transitioned to a backend role focusing on Shopify Plus admin functionality.',
    bullets: [
      'Designed and built a prototype to automatically generate resource recommendations for internal Google Cloud Platform applications, demonstrating potential for significant cost savings and performance optimizations.',
      'Contributed to new Admin branding settings, shipping code that allowed merchants to customize their store\'s look and feel.',
    ],
    tags: ['Ruby', 'Google Cloud Platform', 'Kubernetes', 'GraphQL', 'React', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Software Developer Intern',
    company: 'Emagin',
    companyUrl: 'https://www.linkedin.com/company/emagin/',
    period: 'September 2018 - April 2019',
    description: 'During my third internship, I focused on delivering admin controls for water treatment plants globally. I started as a 4-month intern and continued part-time for another 4 months during my school semester.',
    bullets: [
      'Led end-to-end development of core operational features (e.g., real-time monitoring, compliance reporting) for a global water treatment platform serving plants across North America, Europe, and Asia.',
      'Automated the AWS deployment pipeline using CI/CD principles and custom scripts.',
      'Communicated project progress and technical strategy directly to key stakeholders, including the CTO and Head of Sales, ensuring alignment and securing buy-in for development phases.',
    ],
    tags: ['Node.js', 'React', 'GraphQL','HTML', 'AWS', 'Circle CI'],
  },
  {
    id: 5,
    title: 'Software Developer Intern',
    company: 'Shop Bonsai',
    companyUrl: 'https://www.linkedin.com/company/shopbonsai/',
    period: 'January 2018 - April 2018',
    description: 'In my second internship, I was a full-stack developer building an in-house Content Management System (CMS) for a boutique e-commerce platform. This was my first role where I took ownership of full-stack features from backend to frontend.',
    bullets: [
      'Architected and built a full-stack content management system from the ground up, empowering non-technical teams to manage application content.',
      'Developed a suite of backend microservices using GraphQL to consolidate multiple endpoints into a single data graph.',
      'Designed and implemented critical user-facing components in React (e.g., authentication, settings, product dashboards) for a global user base.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
  },
  {
    id: 6,
    title: 'Software Developer Intern',
    company: '360 Insights',
    companyUrl: 'https://www.linkedin.com/company/360insights/',
    period: 'May 2017 - August 2017',
    description: 'Following my web development bootcamp, I landed my first of five co-op internships at 360 Insights while pursuing my Computer Engineering degree at the University of Waterloo.',
    bullets: [
      'Developed cloud infrastructure to increase ETL productivity despite having no prior cloud experience.',
      'Managed AWS instances to ensure reliability and performance.',
      'Influenced deployment infrastructure by modeling deployment diagrams with ArchiMate 3.',
      'Hosted seminars to train coworkers on Docker and deploying containers to AWS.',
    ],
    tags: ['Python', 'Docker', 'AWS', 'ArchiMate 3'],
  },
  {
    id: 7,
    title: 'Software Developer',
    company: 'Mindset Labs',
    companyUrl: '',
    period: 'May 2016 - December 2016',
    description: 'My first software developer role after my bootcamp. I was hired by my instructors to help build their boutique consultancy for early-stage startups, where I gained foundational experience in the full software development lifecycle.',
    bullets: [
      'Created the company\'s landing page.',
      'Managed the Trello board for project management.',
      'Developed production backend services with Node.js to support the consumer-facing application.',
      'Designed interactive UI components to increase user retention.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'CSS'],
  },
];

const projects = [
  { 
    id: 1, 
    title: 'Code Meeting',
    image: 'codemeeting.jpg',
    description: 'My final project for Lighthouse Labs. CodeMeeting is a web app for real-time pair programming with a built-in code editor and video call functionality. I built the user interface and the live interactions using Web Sockets and WebRTC.',
    bullets: [
      'Built the user interface and live, real-time interactions.',
      'Enabled server-side code compilation for C++, JavaScript, and Ruby.',
      'Presented the project to over 500 people at my cohort\'s Demo Day in Toronto, receiving positive feedback.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io', 'WebSockets', 'HTML', 'CSS', 'JavaScript']
  },
  { 
    id: 2, 
    title: 'ROOT Education',
    image: 'root.jpg',
    description: 'I was invited by my Lighthouse Labs instructor to contribute to Root Education, an online learning platform similar to Udemy. I was responsible for the landing page and Admin UI components.',
    bullets: [
      'Developed various components for the landing page and Admin UI.',
      'Created an interactive learning experience with a code editor and live preview.',
    ],
    tags: ['React', 'Node', 'Sequelize', 'HTML', 'CSS']
  },
  { 
    id: 3, 
    title: 'Garbage Sorting App',
    image: 'fydp.jpg',
    description: 'My final year design project at the University of Waterloo, where I worked with a team of 5 to build an end-to-end garbage sorting machine. I was responsible for the image recognition component, using Python and TensorFlow to train a model to classify different types of garbage.',
    bullets: [
      'Trained a model to classify garbage, recycling, and compost items from an image.',
      'Helped develop the software pipeline to automate image collection and processing.',
    ],
    tags: ['Python', 'TensorFlow','OpenCV']
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="project-placeholder">Project ${project.id}</div>`;
                      }}
                    />
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

