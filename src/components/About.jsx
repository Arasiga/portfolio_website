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
              I'm a passionate developer with a love for creating elegant solutions to complex problems.
              With expertise in modern web technologies, I bring ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

