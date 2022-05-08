import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return;
  }
  
    const logout = () => {
      signOut(auth);
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Link className='text-decoration-none' to='/home'><Navbar.Brand to="/home">Taj furniture</Navbar.Brand></Link>
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
        {
            (user?.email)? <Nav.Link onClick={logout} href="/login">Logout</Nav.Link>:
            <Nav.Link href="/login">Login</Nav.Link>
          }
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;