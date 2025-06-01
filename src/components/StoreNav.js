import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import LoginForm from "./Forms/LoginForm";
import Logo from '../images/logo.png';

export default function StoreNav() {
  return (
    <>
    <style type="text/css">
    {`
      .bg-purple {
        background: var(--darkpurple);
      }
    `}
    </style>
    <Navbar bg="purple" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <img alt="" src={Logo} className="App-logo" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" exact className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="text-light">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-light">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          <LoginForm />
        </Navbar.Text>
      </Container>
    </Navbar>
    </>
  );
}
