import './AboutMe.css';

export function AboutMe() {
  return (
    <section className="about-me-container"> 
      <h2 className="about-title">Sobre Mí</h2>
      <div className="about-content">
        <p className="about-description">
          Soy profesional con 2 años de experiencia como Risk Advisor en Deloitte, 
          especializada en gestión de riesgos y optimización de procesos IT. 
          Domino herramientas como VBA, PL/SQL, CyberArk, y Filezilla, respaldada por certificaciones
           en Python, Power Platform, y SQL. Con formación en Desarrollo de Aplicaciones 
           Multiplataforma y seguridad informática, me destaco por mi proactividad, aprendizaje 
           continuo y capacidad para ofrecer soluciones eficientes en entornos dinámicos.
        </p>
      </div>
      
      <div className='skills-section'>
        <h3 className="section-subtitle">Habilidades técnicas</h3>
        <div className="skills-grid">
          {/* Columna 1 */}
          <div className="skill-column">
            <div className="skill-category">
              <strong>Lenguajes:</strong>
              <span>Python, SQL, VBA, JavaScript, Java, Dart, ABAP</span>
            </div>
            <div className="skill-category">
              <strong>Bases de Datos:</strong>
              <span>Oracle SQL, PL/SQL, SAP HANA</span>
            </div>
          </div>
          
          {/* Columna 2 */}
          <div className="skill-column">
            <div className="skill-category">
              <strong>Herramientas:</strong>
              <span>SAPUI5, CyberArk, FileZilla, PuTTY, Power Platform</span>
            </div>
            <div className="skill-category">
              <strong>Testing/CI:</strong>
              <span>Automatización (Talos BDD), Jenkins</span>
            </div>
          </div>
          
          {/* Columna 3 */}
          <div className="skill-column">
            <div className="skill-category">
              <strong>Desarrollo:</strong>
              <span>Flutter, HTML5/CSS3, APIs</span>
            </div>
            <div className="skill-category">
              <strong>Sistemas:</strong>
              <span>Linux, Gestión de Riesgos IT, Detección de Fraudes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;