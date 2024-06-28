import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems } = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      return acc + (price * quantity);
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  return (
    <Container className="mt-5" style={{ marginTop: '10px' }}>
      <h1 className="mb-4 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.imgSrc} alt={item.title} width="50" />
                  </td>
                  <td>{item.title}</td>
                  <td>${parseFloat(item.price).toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="mt-4">Total Price of All Products: ${cartTotal.toFixed(2)}</h3>
          <Button as={Link} to="/" className="mt-3" variant="info">
            Continue Shopping
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
