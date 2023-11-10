import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useEffect, useState } from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import logo from "../assets/logo.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" id="logo-nav-bar"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onclick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'habilidades' ? 'active navbar-link': 'navbar-link'} onclick={()=>onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projetos' ? 'active navbar-link': 'navbar-link'}onclick={()=>onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucas-assis-4602a01aa/"><FaLinkedinIn size={25} color="white" /></a>
                <a href="https://github.com/lucasassis49/"><FaGithub size={25} color="white"/></a>
                
            </div>
           
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
