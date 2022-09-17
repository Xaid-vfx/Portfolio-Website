import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import './components/index.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects'
import { useEffect, useRef } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    
  };

  const handleClick2 = () => {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick3 = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  };
  


  const handle1 = () => {

  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)

      })

    }, { threshold: .5 })


    const boxElList = document.querySelectorAll('.projectx');
    boxElList.forEach((el) => {
      observer.observe(el);
    })
    const boxElList1 = document.querySelectorAll('#project1');
    boxElList1.forEach((el) => {
      observer.observe(el);
    })
    const boxElList2 = document.querySelectorAll('#project2');
    boxElList2.forEach((el) => {
      observer.observe(el);
    })

    const about = document.querySelectorAll('.indet p');
    about.forEach((el) => {
      observer.observe(el);
    })

    const aboutpic = document.querySelectorAll('#profileimg');
    aboutpic.forEach((el) => {
      observer.observe(el);
    })

    const home = document.querySelectorAll('.text-zone-anim');
    home.forEach((el) => {
      observer.observe(el);
    })
    const home1 = document.querySelectorAll('.omae');
    home1.forEach((el) => {
      observer.observe(el);
    })

    const prodesc = document.querySelectorAll('.prodesc');
    prodesc.forEach((el) => {
      observer.observe(el);
    })


  }, [])



  return (
    <div className='App'>
      <Navbar handle={handleClick} handle1={handleClick2} handle3={handleClick3} />

      <div className='page'>


        <div className='hhh' >
          <div className='homecomp' ref={ref}>
            <span className='tags top-tags'></span>
            <Home  />
            <span className='tags bottom-tags'></span>
          </div>
        </div>

        <br />
        <div>
          <About />


        </div>

        <div ref={ref1}>
          <Skills />
        </div>

        <div ref={ref2}>

          <Projects />
        </div>







        <div ><Contact /></div>
      </div>

    </div>
  );
}

export default App;
