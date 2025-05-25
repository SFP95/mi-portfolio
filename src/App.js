import { useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ContainerContent from './components/ContainerContext/ContainerContent';
import './App.css';

function App() {
  useEffect(() => {
    // Forzar estabilización del DOM
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.opacity = '1';
    }
  }, []);

  return (
    <div className="main-container">
      <HeroSection />
      <ContainerContent />
    </div>
  );
}

export default App;