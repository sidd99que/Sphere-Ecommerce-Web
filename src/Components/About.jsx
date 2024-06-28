import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faThumbsUp, faTags, faLock } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const cardData = [
    {
      icon: faGlobe,
      title: 'Worldwide Shipping',
      description: 'We ship to over 200 countries globally.',
    },
    {
      icon: faThumbsUp,
      title: 'Best Quality',
      description: 'Our products are of top-notch quality.',
    },
    {
      icon: faTags,
      title: 'Best Offers',
      description: 'Exciting offers and discounts available.',
    },
    {
      icon: faLock,
      title: 'Secure Payments',
      description: 'Your payments are safe with our security.',
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={card.icon} size="3x" className="mb-3" />
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="text-center mt-4">
        <h4 className="mb-4">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS</h4>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default About;
