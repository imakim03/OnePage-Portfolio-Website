import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import MovingBackground from './components/MovingBackground.jsx';

function App() {
  
  return (
    <div className='container'>
      <MovingBackground>
        <header>
          <NavBar/>
        </header>
          <HeroSection/>
          <ProjectsSection/>
          <ContactSection/>
          <Footer/>
      </MovingBackground>
    </div>
  );
}

export default App;
