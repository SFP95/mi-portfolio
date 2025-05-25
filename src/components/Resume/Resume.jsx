import './Resume.css';

const Resume = () => {

  return (
     <section className="resume-container">   
      

      <div className="resume-section">
        <h2 className="section-title">Experiencia</h2>
        
        <div className="experience-item">
          <div className="job-header">
            <h3 className="position">Risk Advisor | Risk Advisor IT Core</h3>
            <h4 className="company">Deloitte</h4>
            <span className="date">06/2023 — 05/2025</span>
            <span className="location">Madrid, España</span>
          </div>
          <div className="project">
            <h4 className="project-title">ILabs Blanqueo</h4>
            <span className="project-date">02/2024 — 02/2025</span>
            <div className="tech-tags">
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">SQL+</span>
              <span className="tech-tag">CyberArk</span>
              <span className="tech-tag">PuTTY</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Talos BDD</span>
              <span className="tech-tag">Microsoft Excell</span>

            </div>
            <ul className="responsibilities">
              <li>Análisis de datos para detección de actividades fraudulentas utilizando SQL</li>
              <li>Desarrollo de scripts en Python para automatizar procesos de monitoreo</li>
              <li>Gestión de accesos seguros con CyberArk</li>
            </ul>
          </div>
          
          <div className="project">
            <h4 className="project-title">Departamento Consumer</h4>
            <span className="project-date">09/2023 — 12/2023</span>
            <div className="tech-tags">
              <span className="tech-tag">VBA</span>
              <span className="tech-tag">Microsoft Excell</span>
              <span className="tech-tag">QlikView</span>
            </div>
            <ul className="responsibilities">
              <li>Gestión y análisis de datos contables mediante Microsoft Excel</li>
              <li>Desarrollo y depuración de macros en VBA para automatizar procesos contables</li>
              <li>Implementación de QIMView para visualización y análisis de datos financieros</li>
            </ul>
          </div>

          <div className="project">
            <h4 className="project-title">Proyecto SARA</h4>
            <span className="project-date">06/2023 — 08/2023</span>
            <div className="tech-tags">
              <span className="tech-tag">SAPUI5</span>
              <span className="tech-tag">XML</span>
              <span className="tech-tag">ABAP</span>
            </div>
            <ul className="responsibilities">
              <li>Desarrollo y mantenimiento de interfaces de usuario utilizando SAPUIS y XML</li>
              <li>Colaboración en programación básica con ABAP para integrar funcionalidades específicas</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="job-header">
            <h3 className="position">Becaria, Risk Advisory – IT Core</h3>
            <h4 className="company">Deloitte</h4>
            <span className="date">03/2023 — 06/2023</span>
            <span className="location">Madrid, España</span>
          </div>
          <ul className="responsibilities">
            <li>Apoyo en auditorías y análisis de riesgos tecnológicos</li>
            <li>Desarrollo de scripts en Python para automatizar procesos</li>
            <li>Consultas y gestión de bases de datos con PL/SQL</li>
          </ul>
        </div>
        <div className="resume-section">
        <h2 className="section-title">Educación</h2>
        
        <div className="education-item">
          <h3 className="institution">IES rey Fernando VI</h3>
          <p className="degree">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</p>
          <p className="date">2021 — 2023</p>
        </div>
        <div className="education-item">
          <h3 className="institution">Suma y Más</h3>
          <p className="degree">Certificado de profesionalidad en seguridad informática, Informática y comunicaciones.</p>
          <p className="date">2020-2021</p>
        </div>
        <div className="education-item">
          <h3 className="institution">IES Ana María Matute</h3>
          <p className="degree">Titulo de la ESO</p>
          <p className="date">2008-2013</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Resume;