import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro_section/intro/Intro';
import Skill from './components/skill_section/Skills/Skill';
import Project from './components/project_section/Projects/Project';
import QualificationMain from './components/qualification_section/QualificationMain/QualificationMain';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Project/>
      <QualificationMain/>
    </div>
  );
}

export default App;
