import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom CSS file for additional styling
import CustomNavbar from './Navbar';
import Pink from '../Components/Images/Pink.jpeg'; // Verify path to your background image
import Cards from './Card'; // Correct the import path if necessary
import Brand from './Brand';
import Products from './Product';
import About from './About';
import OffersComponent from './Offer'

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <div className="hero-section" style={{ 
        backgroundImage: `url(${Pink})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '50px 0',
        backgroundAttachment: 'fixed' // Consider performance implications
      }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h1 className="hero-title fw-bold mt-5 text-white">Raining Offers For Hot Summer!</h1>
              <p className="hero-description fs-5 mt-2 text-white">25% Off On All Products</p>
              <div className="hero-buttons d-flex mt-5">
                <button type="button" className="btn btn-outline-light me-3 hero-button">
                  Shop Now
                </button>
                <button type="button" className="btn btn-outline-info hero-button">
                  Find More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brand /> {/* Render Brand component */}
      <Cards /> {/* Render Cards component */}
      <Products /> {/* Render ProductList component */}
      <OffersComponent /> {/* Render OffersComponent component */}
      <About /> {/* Render About component */}
    </>
  );
}

export default Home;
