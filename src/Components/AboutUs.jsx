import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picup from '../Components/Images/Picup.jpg'; // Path to your background image
import CustomNavbar from './Navbar';
import Weare from '../Components/Images/Weare.jpg'; // Path to the additional image

const Aboutus = () => {
  const containerStyle = {
    backgroundImage: `url(${Picup})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh', // Adjusted to cover a substantial part of the viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '50px 0', // Added padding to center content vertically
    backgroundAttachment: 'fixed' 
  };

  const whoWeAreSectionStyle = {
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle = {
    maxWidth: '600px',
    margin: '20px auto', // Center text horizontally with some top margin
    color: '#333'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px', // Limit image width for responsiveness
    height: 'auto',
    margin: '0 auto' // Center image horizontally
  };

  return (
    <>
      <CustomNavbar />
      <div style={containerStyle}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>About Us</h1>
      </div>
      <div className="container" style={whoWeAreSectionStyle}>
        <div className="row mb-4 p-2">
          <div className="col-md-6">
            <h2 className='text-center'>Who We Are</h2>
            <p style={textStyle}>
            "We are a passionate team dedicated to delivering excellence in every project. With a strong focus on innovation and customer satisfaction, we strive not only to meet but to exceed expectations. Our goal is to build lasting relationships through collaboration and continuous improvement, ensuring that every client receives exceptional service and results."            </p>
          </div>
          <div className="col-md-6">
            <img src={Weare} alt="Who We Are" style={imageStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
