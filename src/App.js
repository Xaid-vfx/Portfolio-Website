import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import './components/index.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects'
import { useRef } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div className='App'>
      <Navbar  handle={handleClick}/>
      
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <div  className='homecomp'>
        <Home/>
        </div>
        <span className='tags bottom-tags'>&lt;/body&gt;</span>
        <br/>
        
        <div ref={ref}>
          
          <Projects />
        </div>
        
        <div>
          <Skills/>
        </div>
<div><Contact/></div>
      </div>
      
    </div>
  );
}

export default App;
