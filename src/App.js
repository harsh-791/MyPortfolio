import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home 
        text={[
          "SOFTWARE DEVELOPER",
          "MERN STACK DEVELOPER"
        ]}
        typingSpeed ={100}
        deletingSpeed = {50}
      />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
