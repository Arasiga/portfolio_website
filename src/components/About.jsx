import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation();

  return (
    <section id="about" className="section about">
      <div className="geometric-shape shape-6"></div>
      <div className="geometric-shape shape-7"></div>
      
      <div className="container">
        <h2 className={`section-title ${aboutVisible ? 'animate-in' : ''}`}>
          About Me
        </h2>
        
        <div ref={aboutRef} className={`about-content ${aboutVisible ? 'animate-in' : ''}`}>
          <div className="about-text">
            <p>
              Welcome to my portfolio! This website showcases my complete professional journey—from my detailed work experience at companies like Shopify, Emagin, and Shop Bonsai, to personal projects I've built, the technical skills I've developed, and the outdoor adventures and hobbies that fuel my creativity outside of work. Whether you're a recruiter looking to learn more about my background or a fellow developer curious about my experience, you'll find everything you need to know right here.
            </p>
            <p>
              I'm Alex Rasiga, a Senior Software Engineer at Shopify with a passion for building scalable, high-impact systems that serve millions of users worldwide. My journey into software engineering began in 2016 with the Lighthouse Labs Web Development Bootcamp, which led me to pursue a Computer Engineering degree at the University of Waterloo, graduating in 2021 after completing five diverse internships. Since joining Shopify in 2020, I've progressed from intern to Software Engineer to Senior Software Engineer, working on critical initiatives that have enabled billions of dollars in GMV and served millions of merchants globally.
            </p>
            <p>
              Throughout my career, I've worked across the full technology stack—from cloud infrastructure on GCP and AWS, to backend systems with Ruby on Rails and GraphQL, to frontend development with React and TypeScript. I'm passionate about solving complex technical challenges that deliver real business impact, whether it's building scalable APIs serving millions of users, optimizing systems for cost efficiency, or architecting new platforms from the ground up.
            </p>
            <p>
              Beyond coding, I'm an adventure enthusiast who believes that pushing physical limits translates to mental resilience and creative problem-solving. You'll find me skiing down mountains, mountain biking challenging trails, playing competitive soccer, or backpacking through wilderness. I also enjoy creating video content of my adventures, working on DIY projects, and exploring new places around the world. I approach every challenge—whether in code or in life—with curiosity, determination, and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

