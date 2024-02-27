import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../global.css';
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <>
      <Navbar className="topbarbg" data-bs-theme="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">LMS-KIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link className="active navitem" to="/">
                Home
              </Link>
              <Link className="navitem" to="/contact">
                Contact
              </Link>
              <Link className="navitem" to="/about">
                About
              </Link>
              <Link className="regnavitem navitem" to="/registration">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
