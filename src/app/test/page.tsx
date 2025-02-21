"use client"
import React, { useState, useEffect } from 'react';

const CyberpunkPortfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Neural Interface",
      date: "2024-11-05",
      tech: "React, TensorFlow, WebGL"
    },
    {
      id: 2,
      title: "Quantum Encryption",
      date: "2024-08-17",
      tech: "Python, Qiskit, AWS"
    },
    {
      id: 3,
      title: "AR Data Visualizer",
      date: "2024-05-22",
      tech: "Three.js, WebXR, D3"
    }
  ]);

  const [skills] = useState([
    "Frontend Development", "AI Integration", "Cybersecurity",
    "Data Visualization", "Blockchain", "Creative Coding"
  ]);

  const [activeSection, setActiveSection] = useState('projects');

  // Add the styles to the document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="cyberpunk-portfolio mt-28">
      <header className="header">
        <div className="logo">
          <div className="logo-frame">
            <div className="logo-text">SKILL ISSUE</div>
            <div className="logo-subtitle">// pROGRAMMER WITH SKILL ISSUE</div>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-img-container">
            <div className="corner-bracket top-left"></div>
            <div className="placeholder-img"></div>
            <div className="corner-bracket bottom-right"></div>
          </div>

          <div className="profile-data">
            <div className="data-row">[% @skill_issue %]</div>
            <div className="data-row">[% "full_stack_developer" %]</div>
            <div className="data-row">[% "ghana" %]</div>
          </div>
        </div>

        <nav className="main-nav">
          <button
            className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            [PROJECTS]
          </button>
          <button
            className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            [SKILLS]
          </button>
          <button
            className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            [CONTACT]
          </button>
        </nav>
      </header>

      <main className="main-content">
        <div className="section-title">
          <div className="title-line"></div>
          <h2>
            {activeSection === 'projects' && '// PROJECT DATABASE'}
            {activeSection === 'skills' && '// SKILL MATRIX'}
            {activeSection === 'contact' && '// COMM CHANNELS'}
          </h2>
          <div className="title-line"></div>
        </div>

        {activeSection === 'projects' && (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="qr-placeholder"></div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-tech">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-progress">
                  <div
                    className="skill-bar"
                    style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                  ></div>
                </div>
                <div className="skill-name">{skill}</div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-header">SECURE_CONNECTION</div>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon email"></div>
                  <div className="method-value">dev@netrunner.io</div>
                </div>
                <div className="contact-method">
                  <div className="method-icon github"></div>
                  <div className="method-value">github.com/skillissue</div>
                </div>
                <div className="contact-method">
                  <div className="method-icon discord"></div>
                  <div className="method-value">@skillissue</div>
                </div>
              </div>
              <div className="encryption-note">* All messages encrypted with quantum-resistant algorithms</div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-grid"></div>
        <div className="footer-text">© 2025 // Built with claude lol</div>
      </footer>
    </div>
  );
};

// CSS styles as a string constant
const styles = `
  :root {
    --primary-color: #ff9900;
    --background-dark: #111111;
    --panel-bg: rgba(20, 20, 20, 0.8);
    --text-color: #e0e0e0;
    --border-color: rgba(255, 153, 0, 0.7);
    --grid-color: rgba(255, 153, 0, 0.15);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', monospace;
    background-color: var(--background-dark);
    color: var(--text-color);
  }
  
  .cyberpunk-portfolio {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: 
      linear-gradient(var(--grid-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 20px 20px;
    position: relative;
  }
  
  .cyberpunk-portfolio::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 153, 0, 0.1), transparent 70%);
    pointer-events: none;
  }
  
  /* Header Styles */
  .header {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed var(--primary-color);
  }
  
  .logo {
    align-self: center;
    margin-bottom: 2rem;
  }
  
  .logo-frame {
    border: 1px dashed var(--primary-color);
    padding: 0.5rem 1.5rem;
    position: relative;
    text-align: center;
  }
  
  .logo-frame::before, .logo-frame::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
  }
  
  .logo-frame::before {
    top: -5px;
    left: -5px;
    border-top: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
  }
  
  .logo-frame::after {
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
  }
  
  .logo-text {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
    letter-spacing: 2px;
  }
  
  .logo-subtitle {
    font-size: 0.8rem;
    color: var(--primary-color);
    opacity: 0.8;
  }
  
  .profile-section {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    margin-bottom: 1.5rem;
  }
  
  .profile-img-container {
    width: 80px;
    height: 80px;
    position: relative;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }
  
  .placeholder-img {
    width: 100%;
    height: 100%;
    background-color: #333;
    background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444),
                      linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
    background-size: 16px 16px;
    background-position: 0 0, 8px 8px;
  }
  
  .corner-bracket {
    position: absolute;
    width: 15px;
    height: 15px;
  }
  
  .top-left {
    top: -2px;
    left: -2px;
    border-top: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
  }
  
  .bottom-right {
    bottom: -2px;
    right: -2px;
    border-bottom: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
  }
  
  .profile-data {
    flex: 1;
  }
  
  .data-row {
    padding: 0.3rem;
    margin-bottom: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-left: 3px solid var(--primary-color);
    font-family: monospace;
  }
  
  .main-nav {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
  }
  
  .nav-button {
    background: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.5rem 1.5rem;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .nav-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 153, 0, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  .nav-button:hover::before {
    left: 100%;
  }
  
  .nav-button.active {
    background-color: rgba(255, 153, 0, 0.2);
    box-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
  }
  
  /* Main Content Styles */
  .main-content {
    flex: 1;
    padding: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
  
  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .title-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--primary-color), transparent);
  }
  
  .section-title h2 {
    margin: 0 1rem;
    color: var(--primary-color);
    font-weight: normal;
    letter-spacing: 1px;
  }
  
  /* Projects Section */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .project-card {
    display: flex;
    background-color: var(--panel-bg);
    border: 1px dashed var(--border-color);
    padding: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 153, 0, 0.2);
  }
  
  .qr-placeholder {
    width: 60px;
    height: 60px;
    background-color: #222;
    margin-right: 1rem;
    position: relative;
    flex-shrink: 0;
  }
  
  .qr-placeholder::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px),
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 8px 8px;
    background-position: 0 0, 4px 4px;
    opacity: 0.7;
  }
  
  .project-info {
    flex: 1;
  }
  
  .project-title {
    margin: 0 0 0.5rem;
    color: var(--primary-color);
    font-size: 1.1rem;
  }
  
  .project-date {
    color: #999;
    font-size: 0.8rem;
    margin: 0.3rem 0;
  }
  
  .project-tech {
    color: #bbb;
    font-size: 0.9rem;
    margin: 0.3rem 0;
  }
  
  /* Skills Section */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .skill-item {
    background-color: var(--panel-bg);
    padding: 1rem;
    border: 1px solid var(--border-color);
  }
  
  .skill-progress {
    height: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 0.8rem;
    overflow: hidden;
  }
  
  .skill-bar {
    height: 100%;
    background-color: var(--primary-color);
    position: relative;
  }
  
  .skill-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shine 2s infinite linear;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .skill-name {
    font-size: 0.9rem;
  }
  
  /* Contact Section */
  .contact-container {
    display: flex;
    justify-content: center;
  }
  
  .contact-card {
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    max-width: 500px;
    width: 100%;
  }
  
  .contact-header {
    text-align: center;
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px dashed var(--border-color);
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-method {
    display: flex;
    align-items: center;
  }
  
  .method-icon {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    background-color: rgba(255, 153, 0, 0.2);
    border: 1px solid var(--primary-color);
    position: relative;
  }
  
  .method-icon::before, .method-icon::after {
    content: '';
    position: absolute;
  }
  
  .email::before {
    width: 16px;
    height: 12px;
    border: 1px solid var(--primary-color);
    top: 8px;
    left: 6px;
  }
  
  .github::before {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    top: 5px;
    left: 8px;
  }
  
  .github::after {
    width: 6px;
    height: 6px;
    background-color: var(--primary-color);
    top: 17px;
    left: 11px;
  }
  
  .discord::before {
    width: 18px;
    height: 14px;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    top: 7px;
    left: 5px;
  }
  
  .method-value {
    font-family: monospace;
  }
  
  .encryption-note {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: #999;
    font-style: italic;
  }
  
  /* Footer Styles */
  .footer {
    padding: 1rem;
    text-align: center;
    border-top: 1px dashed var(--primary-color);
    position: relative;
  }
  
  .footer-grid {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    height: 10px;
    background-image: 
      linear-gradient(90deg, transparent, var(--primary-color), transparent);
    opacity: 0.3;
  }
  
  .footer-text {
    font-size: 0.8rem;
    color: #999;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .header {
      padding: 1rem;
    }
    
    .logo-text {
      font-size: 1.5rem;
    }
    
    .profile-section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .profile-img-container {
      margin-right: 0;
      margin-bottom: 1rem;
    }
    
    .main-nav {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-button {
      width: 100%;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .skills-container {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 0.8rem;
    }
    
    .logo-text {
      font-size: 1.2rem;
    }
    
    .project-card {
      flex-direction: column;
    }
    
    .qr-placeholder {
      margin-right: 0;
      margin-bottom: 1rem;
    }
    
    .main-content {
      padding: 1rem;
    }
  }
`;

export default CyberpunkPortfolio;