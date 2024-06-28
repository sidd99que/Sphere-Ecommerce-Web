import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from './CartContext';

const products = [
  { title: 'Blue Denim Jeans', description: 'Woman', price: 10.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg' },
  { title: 'Basic Gray Jeans', description: 'Women', price: 20.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg' },
  { title: 'Light Brown Purse', description: 'Accessories', price: 30.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1.jpg' },
  { title: 'Boho Bangle Bracelet', description: 'Accessories.', price: 40.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1.jpg' },
  { title: 'Blue Doimen Shorts', description: 'Women.', price: 35.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg' },
  { title: 'DNK Green Tshirt', description: 'Men', price: 60.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt4-300x300.jpg' },
  { title: 'DNK Gren Shoes', description: 'Men.', price: 22.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/sports-shoe4-300x300.jpg' },
  { title: 'Dark Blue Domin Jeans', description: 'Men.', price: 80.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans2-300x300.jpg' },
  { title: 'Dark Gray Jeans', description: 'Men', price: 90.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans4-300x300.jpg' },
  { title: 'Anchor Bracelet', description: 'Accessories', price: 100.00, imgSrc: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2.jpg' },
];

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{ textDecoration: 'underline', textDecorationColor: 'pink', textDecorationThickness: '4px', marginBottom: '10px' }}>Featured Products</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ title, description, price, imgSrc }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    height: '100%'
  };

  const imgWrapperStyle = {
    overflow: 'hidden',
    borderRadius: '5px 5px 0 0'
  };

  const imgStyle = {
    transition: 'transform 0.3s ease',
    width: '100%',
    height: 'auto'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="col mb-4">
        <div className="card h-100" style={cardStyle}>
          <div style={imgWrapperStyle}>
            <img
              src={imgSrc}
              className="card-img-top"
              alt={title}
              style={imgStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-price">${price.toFixed(2)}</p>
            <Button className="btn btn-primary mt-auto" onClick={handleShow}>Buy Now</Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgSrc} className="img-fluid mb-3" alt={title} />
          <p>{description}</p>
          <p><strong>Price:</strong> ${price.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            addToCart({ title, description, price, imgSrc });
            handleClose();
          }}>
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;
