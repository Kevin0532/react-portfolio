import '../styles/TechStack.css';

function TechStack() {
  const TechStacks = [
    {
      name: "HTML",
      icon: "",
      experience: ""
    },
    {
      name: "CSS",
      icon: "",
      experience: ""
    },
    {
      name: "JavaScript",
      icon: "",
      experience: "",
    },
    {
      name: "React",
      icon: "",
      experience: ""
    },
    {
      name: "PHP",
      icon: "",
      experience: ""
    },
    {
      name: "Laravel",
      icon: "",
      experience: ""
    },
    {
      name: "Tailwind",
      icon: "",
      experience: ""
    },
    {
      name: "Python",
      icon: "",
      experience: ""
    },
  ];
  return (
    <div>
      <div className="tech-stack-section">
        <h1 className="tech-stack-title">Tech Stacks</h1>
      </div>

      <div className="tech-stack-badge-section">
        {TechStacks.map((tech, index) => (
          <div key={index} className="tech-stack-badge-wrapper">
            <div className="tech-stack-badge"></div>
            <p className="tech-stack-badge-text">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;