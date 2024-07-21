import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerBackgroundImage from '../Assets/FRESH.jpg';
import '../header.css';

const Header = () => (
  <header className="header-custom" style={{ backgroundImage: `url(${headerBackgroundImage})` }}>
    <div className="overlay"></div>
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-custom">Urbano Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/inquiry" className="nav-link-custom">Inquire Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
