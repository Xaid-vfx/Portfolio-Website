import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import './components/index.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects'
import { useEffect, useRef, useState } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ParticleBack from './components/Particle';
import Experience from './components/Experience/Experience';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import OpenSource from './Pages/OpenSource';

function App() {

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [scroll, setscroll] = useState()
  window.onscroll = function (e) {
    console.log(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100); // Value of scroll Y in px
    console.log();
  };


  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });

  };

  const handleClick2 = () => {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick3 = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick4 = () => {
    ref3.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)

      })

    }, { threshold: .8 })

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

    let about = document.querySelectorAll('.indet p');
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

      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className='page text-white'>
              <ParticleBack />
              <div className='wrapper'>

                <div className='wrappersub'>
                  <Home />
                </div>

                <div className='wrappersub2'>
                  <About />
                </div>

                {/* <div className='wrappersub3 h-[110vh]'>
              <Skills />
            </div> */}

                <div className='wrappersub3'>
                  <Projects />
                </div>

                <div className='wrappersub3'>
                  <Experience />
                </div>
                <div ref={ref3} className=''><Contact /></div>
              </div>
            </div>
          } />
          <Route path='/open-source' element={<div>
            <OpenSource/>
          </div>}/>
        </Routes></BrowserRouter>

    </div>
  );
}

export default App;
