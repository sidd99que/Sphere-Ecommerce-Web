import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferImage from '../Components/Images/Offer.jpeg'; // Path to your background image

const OffersComponent = () => {
  const offerSectionStyle = {
    backgroundImage: `url(${OfferImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundAttachment: 'fixed' // Keep the background fixed while scrolling
  };

  const offerContentStyle = {
    background: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px'
  };

  const offerTitleStyle = {
    fontSize: '2.5em',
    marginBottom: '10px'
  };

  const offerSubtitleStyle = {
    fontSize: '1.5em',
    marginBottom: '20px'
  };

  const offerDescriptionStyle = {
    fontSize: '1em',
    marginBottom: '20px'
  };

  const offerCodeStyle = {
    fontSize: '1.2em',
    background: '#ffcc00',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '5px',
    display: 'inline-block'
  };

  return (
    <>
      <div className="offer-section" style={offerSectionStyle}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="offer-content rounded" style={offerContentStyle}>
                <h1 className="offer-title fw-bold" style={offerTitleStyle}>Limited Time Offer</h1>
                <h2 className="offer-subtitle" style={offerSubtitleStyle}>Special Edition</h2>
                <p className="offer-description" style={offerDescriptionStyle}>
                Discover the ultimate fashion destination with exclusive offers. Shop our latest collection, crafted with elegance, comfort, and style. Enjoy up to 50% off on selected items. Transform your wardrobe today.
                </p>
                <div className="offer-code bg-warning text-dark p-2 rounded" style={offerCodeStyle}>
                  Buy This T-shirt At 20% Discount, Use Code <strong>OFF20</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersComponent;
