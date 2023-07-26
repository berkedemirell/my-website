
import './App.css';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Works from './components/Works';
import {Workmore} from "./components/Workmore.jsx";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Pokemon from './components/Pokemon';
import Education from './components/Education';


function App() {
  return (
    <div className="App font-mono">
        <div>
          <Navbar/>
          <Home/>
          <Skills/>
          <About/>
          <Works/>
          <Workmore/>
          <Pokemon/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
