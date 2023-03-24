import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import navIcon1 from '../assets/img/li.svg'
import navIcon2 from '../assets/img/git.svg'
import navIcon3 from '../assets/img/twi.svg'
import logo from './logo.jpg'
import SocialIcons from './SocialIcons';

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
              <Nav.Link className={link == '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
                updatelink('/')
                ; props.handle();
              }}>Home</Nav.Link>


              <Nav.Link className={link == 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
                props.handle1();
                updatelink('home')
              }}>Skills</Nav.Link>


              <Nav.Link className={link == 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
                props.handle3();
                updatelink('home')
              }}>Projects</Nav.Link>


            </Nav>
            <SocialIcons/>
            <span className='navbar-text'>
              
              <button className='connect' onClick={() => {
                props.handle4();
                updatelink('contact')
              }}>Let's Connect</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;