import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComp.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import img from './image.png';






export default class NavbarComp extends Component {
  render() {
      <></>
  return (
    
    <Router>
      <div>
      
    <Navbar bg="info" variant={"primary"}expand="lg">
      <Container>
      <img  id='logo'src={img} alt='logo'/>
        <Navbar.Brand href="#home"><h1>AgePredictor</h1><h2>Navbar</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}href="#home"><h3> Home </h3></Nav.Link>
            <Nav.Link as={Link} to={"/about"}href="#about"><h3> About </h3></Nav.Link>
            <Nav.Link as={Link} to={"/contact"}href="#contact"><h3>Contact </h3></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    </div>
    </Router>
  );
}
    
  }

