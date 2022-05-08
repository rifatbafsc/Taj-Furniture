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
        <Link className='m-2 text-decoration-none' to="/home">Home</Link>
        <Link className='m-2 text-decoration-none' to="/inventory">Inventory</Link>
        <Link className='m-2 text-decoration-none' to="/blogs">Blogs</Link>
        <Link className='m-2 text-decoration-none' to="/myitems">My items</Link>
        <Link className='m-2 text-decoration-none' to="/login">Login</Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;