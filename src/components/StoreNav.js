import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LoginForm from "./Forms/LoginForm";
import Logo from "../images/fruit.jpg";
import { useState, useEffect } from "react";

// Navbar uses React router to handle links
export default function StoreNav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
        <Navbar.Collapse id="basic-navbar-nav" className={windowWidth < 992 ? "mx-2" : null}>
          <Nav>
            <Nav.Link as={Link} to="/" className="text-light">
              {windowWidth < 992 ? (
                "Home"
              ) : (
                <img alt="Logo" src={Logo} className="App-logo" />
              )}
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
