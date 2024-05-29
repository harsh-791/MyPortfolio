import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default App;
