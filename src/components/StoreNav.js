import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LoginForm from "./Forms/LoginForm";
import Logo from "../images/logo.png";

export default function StoreNav() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
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
            <LoginForm />
      </Navbar>
    </>
  );
}
