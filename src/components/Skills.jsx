import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'React', level: 9.5, percentage: 95 },
  { name: 'JavaScript', level: 9, percentage: 90 },
  { name: 'Node.js', level: 8.5, percentage: 85 },
  { name: 'Python', level: 8, percentage: 80 },
  { name: 'TypeScript', level: 7.5, percentage: 75 },
  { name: 'AWS', level: 7, percentage: 70 },
  { name: 'Docker', level: 6.5, percentage: 65 },
  { name: 'MongoDB', level: 6, percentage: 60 },
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

