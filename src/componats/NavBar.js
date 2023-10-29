import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assites/logo.png'
import './Nav.css'
function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Explore Foods</Nav.Link>
              <Nav.Link href="#pricing">Reviews</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="NavNumber" href="#deets">01012345678</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
