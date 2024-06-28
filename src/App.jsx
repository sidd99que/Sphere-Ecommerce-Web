import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import CartPage from './Components/CartPage'; // Import the CartPage component
import { CartProvider } from './Components/CartContext';
import Aboutus from './Components/AboutUs';

function App() {
  return (
    <CartProvider>
    
        <CustomNavbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} /> {/* Use CartPage component here */}
          </Routes>
        </div>
      
    </CartProvider>
  );
}

export default App;
