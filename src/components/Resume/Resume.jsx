import './Resume.css';

const Resume = () => {

  return (
     <section className="resume-container">   
      

      <div className="resume-section">
        <h2 className="section-title">Experiencia</h2>
        <div className="experience-item">
          <div className="job-header">
            <h3 className="position">Desarrolladora CRM | Microsoft - Dynamics 365</h3>
            <h4 className="company">Algoritmia</h4>
            <span className="date">03/2023 — 06/2023</span>
            <span className="location">Madrid, España</span>
          </div>
           <div className="tech-tags">
              <span className="tech-tag">Microsoft Dynamics 365 (CRM)</span>
              <span className="tech-tag">XrmToolBox</span>
              <span className="tech-tag">Plugin Registration Tool</span>
              <span className="tech-tag">Visual Studio</span>
              <span className="tech-tag">C#</span>
            </div>
          <ul className="responsibilities">
            <li>Manejo y personalización de Microsoft Dynamics 365 (CRM): configuración, modificación y actualización de componentes existentes.</li>
          </ul>
          <ul className="responsibilities">  
            <li>Uso de herramientas como XrmToolBox, Plugin Registration Tool y Visual Studio para apoyar en la depuración, mantenimiento y mejoras de soluciones.</li>
          </ul>
          <ul className="responsibilities">
            <li>Implementación de flujos de trabajo y automatizaciones en Power Automate, integrando y optimizando procesos ya establecidos en Dynamics 365 Apps y Field Service.</li>
          </ul>
          <ul className="responsibilities">  
            <li>Desarrollo de algoritmos aplicados a CRM para mejorar la eficiencia de procesos y análisis de negocio.</li>
          </ul>
          <ul className="responsibilities">
            <li>Participación en proyectos de soporte, mantenimiento y mejora continua, contribuyendo a la evolución de las soluciones ya implementadas.</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="job-header">
            <h3 className="position">Risk Advisor | Risk Advisor IT Core</h3>
            <h4 className="company">Deloitte</h4>
            <span className="date">03/2023 — 05/2025</span>
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
            </ul>
            <ul className="responsibilities">
              <li>Desarrollo de scripts en Python para automatizar procesos de monitoreo</li>
            </ul>
            <ul className="responsibilities">
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
            </ul>
            <ul className="responsibilities">
              <li>Desarrollo y depuración de macros en VBA para automatizar procesos contables</li>
            </ul>
            <ul className="responsibilities">
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
            </ul>
            <ul className="responsibilities">
              <li>Colaboración en programación básica con ABAP para integrar funcionalidades específicas</li>
            </ul>
          </div>
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