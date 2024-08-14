import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const carouselItems = [
  { id: 1, src: 'https://via.placeholder.com/600x200', alt: 'Slide 1', caption: 'Slide 1 Caption' },
  { id: 2, src: 'https://via.placeholder.com/600x200', alt: 'Slide 2', caption: 'Slide 2 Caption' },
  { id: 3, src: 'https://via.placeholder.com/600x200', alt: 'Slide 3', caption: 'Slide 3 Caption' },
];

const ResponsiveCarousel = () => (
  <Container>
    <div className='justify-content-center align-content-center p-5 bg-info'>
      <div className="d-flex align-items-center m-5">
        <hr className="flex-grow-1 custom-hr" />
        <span className="mx-3 fs-4">WHAT OUR CLIENTS THINK ABOUT XIRCLS</span>
        <hr className="flex-grow-1 custom-hr" />
      </div>

      <Carousel className="my-carousel">
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </Container>
);

export default ResponsiveCarousel;
