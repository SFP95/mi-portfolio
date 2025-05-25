import { BrowserRouter  } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import ContainerContent from './components/ContainerContext/ContainerContent';
import './App.css';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="/">
        <HeroSection />
        <ContainerContent />
      </div>
    </BrowserRouter>
  );
}

export default App;