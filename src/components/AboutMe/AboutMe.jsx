import './AboutMe.css';

export function AboutMe() {
  return (
    <section className="about-me-container"> 
      <h2 className="about-title">Sobre Mí</h2>
      <div className="about-content">
        <p className="about-description">
          Soy profesional con 3 años de experiencia como programadora especializada 
          en gestión de riesgos y optimización de procesos IT. Domino herramientas 
          como VBA, PL/SQL, CyberArk, y Filezilla, respaldada por certificaciones 
          en Python, Power Platform, SQL y Dynamics 365. Con formación en Desarrollo 
          de Aplicaciones  Multiplataforma y seguridad informática, me destaco por mi 
          proactividad, aprendizaje continuo y capacidad para ofrecer soluciones 
          eficientes en entornos dinámicos.
        </p>
      </div>
      
      <div className='skills-section'>
        <h3 className="section-subtitle">Habilidades técnicas</h3>
        <div className="skills-grid">
          {/* Columna 1 */}
          <div className="skill-column">
            <div className="skill-category">
              <strong>Lenguajes:</strong>
              <span>JavaScript, Java, Python ,Android, Dart, HTML5, CSS3, Linux, C#, VBA, React,Oracle SQL, PL/SQL, SAP</span>
            </div>
          </div>
          
          {/* Columna 2 */}
          <div className="skill-column">
            <div className="skill-category">
              <strong>Herramientas:</strong>
              <span>Flutter, React, Microcoftt Power Platform,  Dynamics 365, Jenkins, 
                ABAP, CyberArk, Filezilla, Putty, SQL Devenlopment,Talos BDD, MongoDB, XrmToolBox, 
                Plugin Registration Tool,  Visual Studio</span>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default AboutMe;