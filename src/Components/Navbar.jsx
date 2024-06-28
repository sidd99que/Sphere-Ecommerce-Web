import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdAccountBalance } from "react-icons/md";
import { useCart } from './CartContext'; // Import useCart

import './Navbar.css';

const CustomNavbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems?.length || 0;

  return (
    <Navbar expand="lg" className="navbar-custom navbar-bg-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <span className="navbar-brand-text text-blue">Sphere</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/everything" className="nav-link-custom nav-link-hover fw-bold text-info fs-7 disabled">
              Everything
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="nav-link-custom fw-bold fs-5">
              <NavDropdown.Item as={Link} to="/men" className="text-black">Men</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/women" className="text-black">Women</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kids" className="text-black">Kids</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories" className="text-black">Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex me-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 form-control-custom"
              aria-label="Search"
            />
            <Button variant="outline-success" className="button-custom">
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/Aboutus" className="nav-link-custom nav-link-hover fw-bold text-white fs-5">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="nav-link-custom nav-link-hover fw-bold text-white fs-5">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="icon-text-custom nav-link-hover text-white fs-5">
              <MdAccountBalance className="me-1" />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="icon-text-custom nav-link-hover text-white fs-5 position-relative">
              <FaShoppingCart className="me-1" />
              <span className="badge bg-light text-dark position-absolute top-0 start-100 translate-middle p-2 rounded-circle">{cartCount}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
