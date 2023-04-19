import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages?Resume';


function App() {
  return (
    <div className="App">
      <h1>James Russell's Portfolio</h1>
      <div className="container">
        <About />
      </div>
      <div className="container">
        <Projects />
      </div>
      <div className="container">
        <Resume />
      </div>
      <div className="container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
