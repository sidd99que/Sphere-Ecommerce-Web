import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo1 from '../Components/Images/Logo1.png'; // Replace with your image paths
import Logo2 from '../Components/Images/Logo2.png'; // Replace with your image paths
import Logo3 from '../Components/Images/Logo3.png'; // Replace with your image paths
import Logo4 from '../Components/Images/Logo4.png'; // Replace with your image paths
import Logo5 from '../Components/Images/Logo5.png'; // Replace with your image paths
import Logo6 from '../Components/Images/Logo6.png'; // Replace with your image paths
import Logo7 from '../Components/Images/Logo7.png'; // Replace with your image paths
import Logo8 from '../Components/Images/Logo8.png'; // Replace with your image paths


const BrandSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
     breakpoint: 768,
     settings: {
     slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [Logo1, Logo2, Logo3, Logo4,Logo5,Logo6,Logo7,Logo8]; // Add more logos as needed

  return (
    <div className="container py-5">

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
          </div>
        ))}
      </Slider>
    
    </div>
  );
};

export default BrandSlider;
