import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'Ruby', level: 9.5, percentage: 95 },
  { name: 'GraphQL', level: 9.5, percentage: 95 },
  { name: 'Ruby on Rails', level: 9, percentage: 90 },
  { name: 'React', level: 8, percentage: 80 },
  { name: 'TypeScript', level: 7.5, percentage: 75 },
  { name: 'Google Cloud Platform', level: 7, percentage: 70 },
  { name: 'Node.js', level: 7, percentage: 70 },
  { name: 'Python', level: 7, percentage: 70 },
  { name: 'SQL', level: 7, percentage: 70 },
  { name: 'Amazon Web Services', level: 6, percentage: 60 },
  { name: 'Figma', level: 6, percentage: 60 },
  { name: 'Docker', level: 6, percentage: 60 },
];

function SkillItem({ skill, index, isVisible }) {
  return (
    <div className="skill-level-item">
      <div className="skill-level-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level-score">{skill.level}/10</span>
      </div>
      <div className="skill-level-bar">
        <div
          className="skill-level-fill"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
            transitionDelay: `${index * 0.1}s`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [skillsRef, skillsVisible] = useScrollAnimation();

  return (
    <section id="skills" className="section skills">
      <div className="geometric-shape shape-9"></div>
      <div className="geometric-shape shape-10"></div>
      
      <div className="container">
        <h2 className={`section-title ${skillsVisible ? 'animate-in' : ''}`}>
          Skills & Expertise
        </h2>
        
        <div ref={skillsRef} className={`skills-content ${skillsVisible ? 'animate-in' : ''}`}>
          <p className="skills-intro">
            My primary focus in previous work and projects has been backend development, though I've moved in and out of full stack work throughout my career. 
            Here's my skill level across different technologies and tools, rated on a scale of 1-10.
          </p>
          
          <div className="skills-levels">
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                index={index}
                isVisible={skillsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

