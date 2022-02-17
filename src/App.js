import { About } from './About';
import './App.css';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { Education } from './Education';
import { Introduction } from './Introduction.js';
import { Projects } from './Projects';
import { Skills } from './Skills';

function App() {
  return (
    <div className="body">
      <Introduction />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
      </div>

  );
}

export default App;
