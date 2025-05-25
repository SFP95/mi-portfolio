
import { useState } from 'react';
import './ContainerContent.css';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

// Configuración centralizada
const tabs = [
  { id: 'about', label: 'About', component: <AboutMe /> },
  { id: 'resume', label: 'Resume', component: <Resume /> },
  { id: 'projects', label: 'Projects', component: <Projects /> }
];

const ContainerContent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  
  return (
    <div className="content-panel">
      <div className="tab-selector">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}
export default ContainerContent;