import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Register from "./pages/Register";

function App() {
  return (
    <Container className="wrapper">
<Header />
<main>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </main>
      </Container>

  );
}

export default App;
