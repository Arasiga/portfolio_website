export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Geometric shapes for visual interest */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>
      <div className="geometric-shape shape-4"></div>
      <div className="geometric-shape shape-5"></div>
      
      <div className="hero-content">
        <div className="hero-headshot">
          <img
            src="/headshot.jpg"
            alt="Your Name"
            className="headshot-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="headshot-placeholder" style={{ display: 'none' }}>
            <span>👤</span>
          </div>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        
        <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
        
        <p className="hero-description">
          I build beautiful, functional web applications that solve real-world problems.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

