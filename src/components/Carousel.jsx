import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import beyours from '../assets/beyours.jpeg'
import leaf from '../assets/leaf.png'
import snitch from '../assets/snitch.png'

const carouselItems = [
  { id: 1, src: beyours, alt: 'beyours', caption: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
  { id: 2, src: leaf, alt: 'leaf 2', caption: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
  { id: 3, src: snitch, alt: 'snitch', caption: 'XIRCLS is disrupting the marketing industry through collaborative marketing,while helping all brands to increase their reach & sales.', name: 'Nilesh Karnani & Ashish Baheti, Co-founders of BeYours' },
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
            <Row>
              <Col className='col-4'>
                <Card className="review-card">
                  <div className="image-container">
                    <img src={item.src} alt={beyours} width={100} height={100} className="profile-image" />
                  </div>
                  <Card.Body>
                    <Card.Text>{item.caption}</Card.Text>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='col-4'>
                <h1>hello</h1>
              </Col>
              <Col className='col-4'>
                <h1>hello</h1>
              </Col>
            </Row>

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </Container>
);

export default ResponsiveCarousel;
