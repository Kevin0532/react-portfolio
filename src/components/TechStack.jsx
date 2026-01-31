import '../styles/TechStack.css';
import { techStackData } from '../data/techStackData';

function TechStack() {
  return (
    <div>
      <div className="tech-stack-section">
        <h1 className="tech-stack-title">Tech Stack</h1>
      </div>

      <div className="tech-stack-badge-section">
        {techStackData.map((tech, index) => (
          <div key={index} className="tech-stack-badge-wrapper">
            <div className="tech-stack-badge" style={{ backgroundColor: tech.color }}>
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
            </div>
            <p className="tech-stack-badge-text">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;