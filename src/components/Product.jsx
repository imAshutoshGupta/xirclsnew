import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import { ChevronRight } from 'react-feather'

const Product = () => {
    return (
        <Container>
            <div className='justify-content-center align-content-center'>
                <Row className="align-items-center m-5 p-2 py-5">
                    <Col md={6} className='text-left text-md-left'>
                        <Row><p className='display-2'>Built to Convert</p></Row>
                        <Row><p className='fs-5'>Verified, high-intent lead generation.
                            <br></br>
                            Minimize marketing wastage. Boost revenue.</p></Row>
                        <Button className='p-2 px-3' style={{ backgroundColor: '#048578', color: 'white', border: '2px solid #048578' }} variant="success" size="lg">Learn more<ChevronRight className='p-1' color='#FFFFFF' size={35} /></Button>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center'>
                        <Image className="img-fluid" width={650} height={500} src={product1} rounded />
                    </Col>
                </Row>

                <Row className="align-items-center m-5 p-2 py-5">
                    <Col md={6} className='d-flex justify-content-center'>
                        <Image className="img-fluid" width={650} height={600} src={product2} rounded />
                    </Col>
                    <Col md={6} className='text-end text-md-right'>
                        <Row><p className='display-5'>Refer Us And Earn <br></br> 20% Lifetime Commission.</p></Row>
                        <Row><p className='fs-5'>Recommend our solutions to your customers or simply help us spread the word as an affiliate.Earn additional revenue with zero investment or hidden costs!</p></Row>
                        <Button className='p-2 px-3' style={{ backgroundColor: '#048578', color: 'white', border: '2px solid #048578' }} variant="success" size="lg">Learn more<ChevronRight className='p-1' color='#FFFFFF' size={35} /></Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Product