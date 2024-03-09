import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro_section/intro/Intro';
import Skill from './components/skill_section/Skills/Skill';
import Project from './components/project_section/Projects/Project';
import QualificationMain from './components/qualification_section/QualificationMain/QualificationMain';
import Contact from './components/contact_section/Contact';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div className={`App ${checked ? "" : "darkMode"}`}>
    
      {/* <Navbar checked={checked} setChecked={setChecked}/> */}
      <Intro/>
      <Skill/>
      <Project/>
      <QualificationMain/>
      <Contact/>
    </div>
  );
}

export default App;
