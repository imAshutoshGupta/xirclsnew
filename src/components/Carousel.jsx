import React from 'react';
import Slider from 'react-slick';
import beyours from '../assets/beyours.jpeg'
import leaf from '../assets/leaf.png'
import snitch from '../assets/snitch.png'
import './CarouselComponent.css';
import { Container } from 'react-bootstrap';

const testimonials = [
  { id: 1, image: beyours, text: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
  { id: 2, image: snitch, text: 'A very good app in terms of collaborative marketing. Something new and unique and helps us reduce spend. The team is very good in terms of support and follow-up', name: 'Nikhil Jain, Co-founder & CEO of BADMAASH' },
  { id: 3, image: beyours, text: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
  { id: 4, image: snitch, text: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
  { id: 5, image: leaf, text: 'A very good app in terms of collaborative marketing. Something new and unique and helps us reduce spend. The team is very good in terms of support and follow-up', name: 'Nikhil Jain, Co-founder & CEO of BADMAASH' },
  { id: 6, image: beyours, text: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className='justify-content-center align-content-center p-5'>
        <div className="d-flex align-items-center mt-5">
          <hr className="flex-grow-1 custom-hr" />
          <span className="mx-3 fs-4">WHAT OUR CLIENTS THINK ABOUT XIRCLS</span>
          <hr className="flex-grow-1 custom-hr" />
        </div>

        <div className="carousel-container p-5">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card my-5">
                <div className="card-image-container p-3">
                  <img src={testimonial.image} alt="Review" className="card-image" />
                </div>
                <p className="card-text p-2 mt-5">{testimonial.text}</p>
                <hr></hr>
                <p className="card-name" style={{ color: '#00a895' }}>{testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default CarouselComponent;
