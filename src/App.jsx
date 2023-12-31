import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Social />
      <Home />
      <Portfolio /> 
      <About />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
