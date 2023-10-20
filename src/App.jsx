import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Portfolio /> 
      <About />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
