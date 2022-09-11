import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import logo from './logo.jpg'

function BasicExample(props) {

  

  const [link, setlink] = useState('home');
  const [scroll, setscroll] = useState(false);

  useEffect(() => {

    const onscroll = () => {
      if (window.scrollY > 50) {
        setscroll(true);
      }
      else {
        setscroll(false);
      }
    }

    window.addEventListener('scroll', onscroll);

    return () => window.removeEventListener('scroll', onscroll)
  }, [])


  const updatelink = (value) => {
    setlink(value);
  }




  return (
    <div className='adjustnav'>
      <Navbar expand="lg" className={scroll ? 'scrolled' : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className='logoimg' alt='1' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={link == '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatelink('/')}>Home</Nav.Link>
              <Nav.Link href="Skills" className={link == 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatelink('home')}>Skills</Nav.Link>
              <Nav.Link className={link == 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
                props.handle();
                updatelink('home')}}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className="social-icon">
                <a href='#'><img src={navIcon1} alt='1' />
                </a>
                <a href='#'><img src={navIcon2} alt='1' />
                </a>
                <a href='#'><img src={navIcon3} alt='1' />
                </a>
              </div>
              <button className='connect' onClick={() => console.log('conn')}>Let's Connect</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;