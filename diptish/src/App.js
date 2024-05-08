import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Resume from './components/resume';
import Project from './components/project';
import Contact from './components/contact';
import Certificate from './components/certificate';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  

  <Router>
  <Navbar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificate" element={<Certificate />} />

          
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
