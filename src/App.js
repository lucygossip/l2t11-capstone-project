import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Landing from './pages/Landing';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav />
      </header>
      <Routes>
<Route exact path="/" element={<Landing />} />
<Route path="/cart" element={<Cart />} />
<Route path="/product" element={<Product />} />
</Routes>
    </div>
  );
}

export default App;
