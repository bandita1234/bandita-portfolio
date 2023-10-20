import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skill from './components/Skills/Skill';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
    </div>
  );
}

export default App;
