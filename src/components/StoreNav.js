import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function StoreNav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
