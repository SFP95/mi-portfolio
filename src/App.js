import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import ContainerContent from './components/ContainerContext/ContainerContent';
import './App.css';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-container">
        <HeroSection />
        <ContainerContent />
      </div>
    </Router>
  );
}

export default App;