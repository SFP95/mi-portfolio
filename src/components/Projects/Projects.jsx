import './Projects.css';
import iconGithub from '../assets/github.png';
import noctuaimg from '../assets/bruja-escoba.png'; 
import epicrolImg from '../assets/d20_2.png'; 
import dailypulseImg from '../assets/daily-pulse.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Noctua",
      type: "MultiPlatform APK",
      image: noctuaimg,
      githubUrl: "https://github.com/SFP95",
      description: "Aplicación multiplataforma para gestión de tareas y hechizos brujeriles"
    },
    {
      id: 2,
      title: "DailyPulse",
      type: "Mobile APK",
      image: dailypulseImg,
      githubUrl: "https://github.com/SFP95/daily-pulse.git",
      description: "Aplicación móvil de visualización de Metas y tareas para conseguir pequeños obgetivos personales"
    },
    {
      id: 3,
      title: "EpicRol",
      type: "MultiPlatform APK",
      image: epicrolImg,
      githubUrl: "https://github.com/SFP95/epicroll",
      description: "Plataforma para juegos de rol multiplataforma"
    }
  ];

  return (
    <section className="projects-container">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                loading="lazy"
              />
              <span className="project-badge">{project.type}</span>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-footer">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <img 
                    src={iconGithub} 
                    alt="GitHub" 
                    className="github-icon"
                  />
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;