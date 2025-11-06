import { useState, useEffect, useRef } from 'react'
import './App.css'

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after animation triggers to improve performance
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [aboutRef, aboutVisible] = useScrollAnimation()
  const [workRef, workVisible] = useScrollAnimation()
  const [passionsRef, passionsVisible] = useScrollAnimation()
  const [contactRef, contactVisible] = useScrollAnimation()
  const [skillsRef, skillsVisible] = useScrollAnimation()

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Your Name</div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => { setActiveSection('about'); setMobileMenuOpen(false); }} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#work" onClick={() => { setActiveSection('work'); setMobileMenuOpen(false); }} className={activeSection === 'work' ? 'active' : ''}>Work</a></li>
            <li><a href="#passions" onClick={() => { setActiveSection('passions'); setMobileMenuOpen(false); }} className={activeSection === 'passions' ? 'active' : ''}>Passions</a></li>
            <li><a href="#skills" onClick={() => { setActiveSection('skills'); setMobileMenuOpen(false); }} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#contact" onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Geometric shapes */}
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
            <div className="headshot-placeholder" style={{display: 'none'}}>
              <span>👤</span>
            </div>
          </div>
          <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
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

      {/* About Section */}
      <section id="about" className="section about">
        <div className="geometric-shape shape-6"></div>
        <div className="geometric-shape shape-7"></div>
        <div className="container">
          <h2 className={`section-title ${aboutVisible ? 'animate-in' : ''}`}>About Me</h2>
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

      {/* Work Section */}
      <section id="work" className="section work">
        <div className="geometric-shape shape-8"></div>
        <div className="container">
          <h2 className={`section-title ${workVisible ? 'animate-in' : ''}`}>Work Experience</h2>
          <div ref={workRef} className={`work-content ${workVisible ? 'animate-in' : ''}`}>
            
            {/* Work Experience */}
            <div className="work-section">
              <h3 className="work-subtitle">Professional Experience</h3>
              <div className="work-timeline">
                <div className="work-item">
                  <div className="work-header">
                    <h4>Job Title</h4>
                    <span className="work-period">Jan 2023 - Present</span>
                  </div>
                  <p className="work-company">Company Name</p>
                  <p className="work-description">
                    Description of your role, responsibilities, and achievements. Highlight key projects and technologies used.
                  </p>
                  <div className="work-tags">
                    <span className="work-tag">Technology 1</span>
                    <span className="work-tag">Technology 2</span>
                    <span className="work-tag">Technology 3</span>
                  </div>
                </div>
                
                <div className="work-item">
                  <div className="work-header">
                    <h4>Previous Job Title</h4>
                    <span className="work-period">Jun 2021 - Dec 2022</span>
                  </div>
                  <p className="work-company">Previous Company</p>
                  <p className="work-description">
                    Description of your role, responsibilities, and achievements. Highlight key projects and technologies used.
                  </p>
                  <div className="work-tags">
                    <span className="work-tag">Technology 1</span>
                    <span className="work-tag">Technology 2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="work-section">
              <h3 className="work-subtitle">Projects</h3>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project 1</div>
                  </div>
                  <div className="project-info">
                    <h3>Project Title</h3>
                    <p>A brief description of your project and what technologies you used.</p>
                    <div className="project-links">
                      <a href="#" className="project-link">Live Demo</a>
                      <a href="#" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project 2</div>
                  </div>
                  <div className="project-info">
                    <h3>Project Title</h3>
                    <p>A brief description of your project and what technologies you used.</p>
                    <div className="project-links">
                      <a href="#" className="project-link">Live Demo</a>
                      <a href="#" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project 3</div>
                  </div>
                  <div className="project-info">
                    <h3>Project Title</h3>
                    <p>A brief description of your project and what technologies you used.</p>
                    <div className="project-links">
                      <a href="#" className="project-link">Live Demo</a>
                      <a href="#" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Project 4</div>
                  </div>
                  <div className="project-info">
                    <h3>Project Title</h3>
                    <p>A brief description of your project and what technologies you used.</p>
                    <div className="project-links">
                      <a href="#" className="project-link">Live Demo</a>
                      <a href="#" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section id="passions" className="section passions">
        <div className="geometric-shape shape-12"></div>
        <div className="geometric-shape shape-13"></div>
        <div className="container">
          <h2 className={`section-title ${passionsVisible ? 'animate-in' : ''}`}>My Passions</h2>
          <div ref={passionsRef} className={`passions-content ${passionsVisible ? 'animate-in' : ''}`}>
            <p className="passions-intro">
              Outside of coding, I'm passionate about exploring the world, staying active through sports,
              and connecting with nature. Here's a glimpse into what I love doing in my free time.
            </p>
            
            {/* Exploring Subsection */}
            <div className="passion-subsection">
              <h3 className="passion-subtitle">🌍 Exploring</h3>
              <p className="passion-description">
                I love traveling and discovering new places, cultures, and experiences around the world.
              </p>
              <div className="photo-gallery">
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/exploring/photo1.jpg')}>
                  <img src="/gallery/exploring/photo1.jpg" alt="Exploring" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 1</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/exploring/photo2.jpg')}>
                  <img src="/gallery/exploring/photo2.jpg" alt="Exploring" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 2</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/exploring/photo3.jpg')}>
                  <img src="/gallery/exploring/photo3.jpg" alt="Exploring" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 3</div>
                </div>
              </div>
            </div>

            {/* Sports Subsection */}
            <div className="passion-subsection">
              <h3 className="passion-subtitle">⚽ Sports</h3>
              <p className="passion-description">
                Staying active through various sports and physical activities keeps me energized and focused.
              </p>
              <div className="photo-gallery">
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/sports/photo1.jpg')}>
                  <img src="/gallery/sports/photo1.jpg" alt="Sports" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 1</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/sports/photo2.jpg')}>
                  <img src="/gallery/sports/photo2.jpg" alt="Sports" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 2</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/sports/photo3.jpg')}>
                  <img src="/gallery/sports/photo3.jpg" alt="Sports" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 3</div>
                </div>
              </div>
            </div>

            {/* Nature Subsection */}
            <div className="passion-subsection">
              <h3 className="passion-subtitle">🌲 Nature</h3>
              <p className="passion-description">
                Connecting with nature through hiking, camping, and outdoor adventures brings me peace and inspiration.
              </p>
              <div className="photo-gallery">
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/nature/photo1.jpg')}>
                  <img src="/gallery/nature/photo1.jpg" alt="Nature" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 1</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/nature/photo2.jpg')}>
                  <img src="/gallery/nature/photo2.jpg" alt="Nature" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 2</div>
                </div>
                <div className="gallery-item" onClick={() => setSelectedImage('/gallery/nature/photo3.jpg')}>
                  <img src="/gallery/nature/photo3.jpg" alt="Nature" onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }} />
                  <div className="gallery-placeholder" style={{display: 'none'}}>Photo 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="geometric-shape shape-9"></div>
        <div className="geometric-shape shape-10"></div>
        <div className="container">
          <h2 className={`section-title ${skillsVisible ? 'animate-in' : ''}`}>Skills & Expertise</h2>
          <div ref={skillsRef} className={`skills-content ${skillsVisible ? 'animate-in' : ''}`}>
            <p className="skills-intro">
              Here's my skill level across different technologies and tools, rated on a scale of 1-10.
            </p>
            
            <div className="skills-levels">
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">React</span>
                  <span className="skill-level-score">9.5/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-level-score">9/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">Node.js</span>
                  <span className="skill-level-score">8.5/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">Python</span>
                  <span className="skill-level-score">8/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">TypeScript</span>
                  <span className="skill-level-score">7.5/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">AWS</span>
                  <span className="skill-level-score">7/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">Docker</span>
                  <span className="skill-level-score">6.5/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
              
              <div className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-name">MongoDB</span>
                  <span className="skill-level-score">6/10</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="geometric-shape shape-11"></div>
        <div className="container">
          <h2 className={`section-title ${contactVisible ? 'animate-in' : ''}`}>Get In Touch</h2>
          <p className={`contact-description ${contactVisible ? 'animate-in' : ''}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div ref={contactRef} className={`contact-links ${contactVisible ? 'animate-in' : ''}`}>
            <a href="mailto:your.email@example.com" className="contact-link">
              <span>📧</span> Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>💼</span> LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>💻</span> GitHub
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>🐦</span> Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Name. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

