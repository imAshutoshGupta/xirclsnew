import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Hero1 from '../assets/hero1.jpg'
import Button from 'react-bootstrap/esm/Button';
import './Hero.css';

const Hero = () => {
    return (
        <Container>
            <div className='hero-section justify-content-center align-content-center vh-100 p-4'>
                <Row>
                    <Col className='align-content-center'>
                        <Row><p className='display-4 fw-bold'>From First Visit<br/>
                        to Forever Loyal.</p></Row>
                        <Row><p className='fs-5'>An end-to-end martech stack to optimize every
                        step of the buyer journey.</p></Row>
                        <Button className='p-2 px-3 m-3' style={{backgroundColor: '#048578', color: 'white', border: '2px solid #048578'}} variant="success" size="lg">Get Started</Button>
                        
                    </Col>
                    <Col className='' md={6}>
                        <div className='p-5'>
                        <Image width={500} height={350} src={Hero1} rounded/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Hero