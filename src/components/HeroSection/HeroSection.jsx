import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './HeroSection.css';
import meImage from '../assets/me.jpg'; 
import iconLink from '../assets/linkedin.png'
import iconGithub from '../assets/github.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
        <a href={meImage}  target="_blank" rel="noopener noreferrer">
          <figure className="avatar-box">
            <img src={meImage}  alt="Sonia Fernández Pascual - FullStack Developer" height="190" className="profile-image"/>
            <span className="active-status" status="Avaliable for work!"></span>
          </figure>
        </a>
        </div>
        <h1 className="hero-title">Sonia Fernández Pascual</h1>
        <h2 className="hero-subtitle">Desarrolladora de Software</h2>
        <h2 className="hero-subtitle">FullStack Developer</h2>
        <div className="hero-contact">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>soniaf.pas.95@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+34 666 526 939</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Madrid, España</span>
          </div>
        </div>
        <div className="social-list">
          <ul>
            <li className='social-item'>
              <a className='social-link' href='https://www.linkedin.com/in/sonia-fernandez-pascual-388902101/' >
                <img className='colorized-image' src={iconLink}  alt="My Linkeding" height="30" />
                {/* <ion-icon name="logo-linkedin" role="img" class="md hydrated" aria-label="logo linkedin"></ion-icon> */}
              </a>
            </li>
            <li className='social-item'>
              <a class='social-link' href='https://github.com/SFP95'>
              <img class='colorized-image' src={iconGithub}  alt="My Linkeding" height="30" />
                {/* <ion-icon name="logo-github" role="img" class="md hydrated" aria-label="logo github"></ion-icon> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
       <footer>
        <div class="footer">
            <p>© 2025 Sonia Fernández Pascual - Desarrolladora de Software</p>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;