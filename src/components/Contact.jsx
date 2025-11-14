import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactLinks = [
  { id: 'email', icon: '📧', label: 'Email', href: 'mailto:alex.rasiga@gmail.com' },
  { id: 'linkedin', icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-rasiga-b3b599119/' },
  { id: 'github', icon: '💻', label: 'GitHub', href: 'https://github.com/Arasiga' },
];

export default function Contact() {
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <section id="contact" className="section contact">
      <div className="geometric-shape shape-11"></div>
      
      <div className="container">
        <h2 className={`section-title ${contactVisible ? 'animate-in' : ''}`}>
          Get In Touch
        </h2>
        
        <p className={`contact-description ${contactVisible ? 'animate-in' : ''}`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via email or LinkedIn.
        </p>
        
        <div ref={contactRef} className={`contact-links ${contactVisible ? 'animate-in' : ''}`}>
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="contact-link"
              target={link.id !== 'email' ? '_blank' : undefined}
              rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
            >
              <span>{link.icon}</span> {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

