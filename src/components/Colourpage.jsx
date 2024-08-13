import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import target from '../assets/target.svg'
import box from '../assets/box.svg'
import flag from '../assets/flag.svg'
import sliders from '../assets/sliders.svg'
import coffee from '../assets/coffee.svg'
import smile from '../assets/smile.svg'
import Image from 'react-bootstrap/esm/Image'

const Colourpage = () => {

    const data = [
        {
            id: 1, image: target, title: 'Intuition', description: 'User-friendly interfaces that predict customer needs and deliver seamless experiences.' },
        { id: 2, image: flag, title: 'Attraction', description: 'Powerful strategies that propel your sales pipeline forward for greater revenue generation.' },
        { id: 3, image: sliders, title: 'Personalization', description: 'Tailored to individual preferences and fully customizable.' },
        { id: 4, image: box, title: 'Value Addition', description: 'Advanced offer creation & collaborative distribution tools that add value.' },
        { id: 5, image: coffee, title: 'Loyalty', description: 'From traditional points-based systems to partner rewards and cashback - we have it all.' },
        { id: 6, image: smile, title: 'Goodwill', description: 'Customers become brand ambassadors and are incentivized to spread the love.' },
    ];


    return (
        <Container>
            <div className='custom-bg text-white  justify-content-center align-content-center p-5'>
                <div className='text-center mt-5 p-3'>
                    <div className="d-flex align-items-center">
                        <hr className="flex-grow-1 custom-hr" />
                        <span className="mx-3 fs-4">WHY CHOOSE XIRCLS?</span>
                        <hr className="flex-grow-1 custom-hr" />
                    </div>
                    <div className='display-3 mt-3'>
                        <p>Technology That Sells. <br /> The Way You Would.</p>
                    </div>
                    <div className='fs-5 mx-auto text-center' style={{ width: '50%' }}><p>A human-first approach to martech that prioritizes a personal
                        experience for each customer.
                    </p></div>
                </div>


                <div>
                    <Row className='d-flex'>
                    {data.map(item => (<Col md={4} className='p-5'>
                            <div className='d-flex'>
                                <Col className='m-auto'><Image className="img-fluid" width={65} height={70} src={item.image} rounded /></Col>
                                <Col xs={9}>
                                    <Row className='m-1 fs-4'>{item.title}</Row>
                                    <Row className='m-1'>{item.description}
                                    </Row>
                                </Col>
                            </div>
                        </Col>))}
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Colourpage