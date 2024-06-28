import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactImage from '../Components/Images/Contact.jpg'; // Path to your background image
import CustomNavbar from './Navbar';

const Contact = () => {
  const containerStyle = {
    backgroundImage: `url(${ContactImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '50px 0',
    backgroundAttachment: 'fixed'
  };

  const sectionStyle = {
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const underlineTextStyle = {
    display: 'inline-block',
    position: 'relative',
    marginBottom: '3rem',
  };

  const underlineAfterStyle = {
    position: 'absolute',
    left: 0,
    bottom: '-5px',
    width: '100%',
    height: '3px',
    backgroundColor: 'Pink',
  };

  const cardStyle = {
    marginBottom: '20px'
  };

  return (
    <>
      <CustomNavbar />
      <div style={containerStyle}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Contact Us</h1>
      </div>
      <div className="container" style={sectionStyle}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>Have any queries?</h5>
            <h1 style={underlineTextStyle}>
              We're here to help.
              <span style={underlineAfterStyle}></span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3" style={cardStyle}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Sales</h5>
                <p className="card-text">Contact us for sales inquiries.</p>
                <p className="card-text"><strong>Phone:</strong> +123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={cardStyle}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Complaints</h5>
                <p className="card-text">Report any issues or complaints.</p>
                <p className="card-text"><strong>Phone:</strong> +123 456 7891</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={cardStyle}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Returns</h5>
                <p className="card-text">Inquire about returns and refunds.</p>
                <p className="card-text"><strong>Phone:</strong> +123 456 7892</p>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={cardStyle}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Marketing</h5>
                <p className="card-text">Contact our marketing team.</p>
                <p className="card-text"><strong>Phone:</strong> +123 456 7893</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
