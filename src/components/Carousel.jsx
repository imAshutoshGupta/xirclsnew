import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Create this CSS file for custom styles

const carouselItems = [
  { id: 1, src: 'https://via.placeholder.com/800x400', alt: 'Slide 1', caption: 'Slide 1 Caption' },
  { id: 2, src: 'https://via.placeholder.com/800x400', alt: 'Slide 2', caption: 'Slide 2 Caption' },
  { id: 3, src: 'https://via.placeholder.com/800x400', alt: 'Slide 3', caption: 'Slide 3 Caption' },
];

const ResponsiveCarousel = () => (
  <Container>
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
  </Container>
);

export default ResponsiveCarousel;
