import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Components/Images/Card.jpg'; // Adjust the path based on your folder structure
import Card2 from '../Components/Images/Card2.jpg'; // Adjust the path based on your folder structure
import Card3 from '../Components/Images/Card3.jpg'; // Adjust the path based on your folder structure

const Cards = () => {
  const cardsData = [
    {
      bgImage: Card,
      title: '20% Off On Tank Tops',
      description: 'Adorable and comfortable baby dresses for every occasion, made with love and care.'
    },
    {
      bgImage: Card2,
      title: 'Latest Eyewear For You',
      description: 'Elegant and fashionable outfits for women, perfect for any event or casual outing'
    },
    {
      bgImage: Card3,
      title: 'Let s Lorem Suit Up!',
      description: 'Stylish and trendy men\'s wear for modern gentlemen to look sharp and feel confident.'
    }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div 
              className="card text-white"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px' // Increased height
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>

                <button
                  type="button"
                  className="btn btn-outline-light align-self-start"
                  style={{ borderColor: 'white', fontSize: '1rem', padding: '10px 20px', borderRadius: '25px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
