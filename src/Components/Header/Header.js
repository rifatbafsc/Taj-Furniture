import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand to="/home">Taj furniture</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/home">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;