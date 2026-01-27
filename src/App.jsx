import './App.css';

function App() {

  return (
    <>
      <div>
        <h1>Kevin Versteeg</h1>
        <p className="self-introduction-text">24yo software developer from <span className="orange-text">Amsterdam</span> 🇳🇱</p>
      </div>
      <div>
        <p className="introduction-information">
          Junior Software Developer, frontend focused with a strong interest in full-stack.<br/>
          Recently graduated, with internship experience at <span className="orange-text"><a>bunq</a></span> and <span className="orange-text"><a>Kobalt</a></span><br/>
          I build SaaS-style projects and products that aim to solve real problems for real users. 
        </p>
      </div>
      <div>
        {/* TO-DO: Social media logos */}
      </div>
    </>
  );
}

export default App
