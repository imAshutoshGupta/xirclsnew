import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import main1 from '../assets/main1.jpg'
import Image from 'react-bootstrap/esm/Image'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

const Mainpage = () => {
    return (
        <Container className="hero-container">
            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left mx-auto'>
                        <Row className='m-auto mb-3 fs-4' style={{ color: '#00a895' }}>
                            IDENTIFY
                        </Row>
                        <Row><p className='display-4'>Zero-Party Data<br />
                            Collection
                        </p></Row>
                        <Row className='mt-4'><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                            personalized buying experiences.</p></Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>
                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />
                    </Col>
                </Row>
            </div>

            { /* Content 2 */}

            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='d-flex justify-content-center mt-5'>
                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />
                    </Col>
                    <Col md={6} className='text-end text-md-end mx-auto mt-5'>
                        <Row className='text-end text-md-end m-auto mb-2 fs-4' style={{ color: '#00a895' }}>
                            <p>VERIFY</p>
                        </Row>
                        <Row><p className='display-4'>Visitor<br />
                            Authentication
                        </p></Row>
                        <Row className=''><p className='fs-5'>SuperLeadz</p></Row>
                        <Row className=''><p className='fs-8'>Customer demographic data collection to curate
                            personalized buying experiences.</p></Row>
                    </Col>
                </Row>
            </div>

            { /* Content 3 */}

            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left mx-auto pt-5'>
                        <Row className='m-auto mb-3 fs-4' style={{ color: '#00a895' }}>
                            INCENTIVIZE
                        </Row>
                        <Row>
                            <Row><p className='display-6'>Shopping Engagement
                            </p></Row>
                            <Row className=''><p className='fs-5'>Reviews, Social Shop</p></Row>
                            <Row className=''><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                                personalized buying experiences.</p>
                            </Row>
                        </Row>
                        <Row>
                            <Row><p className='display-6'>Rewards & Incentives
                            </p></Row>
                            <Row className='text-start'><Col className='fs-5'>Infiniti</Col><Col className='fs-5'>Semper Fi</Col></Row>
                            <Row className=''><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                                personalized buying experiences.</p>
                            </Row>
                        </Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>

                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />

                    </Col>
                </Row>
            </div>

            { /* Content 4 */}

            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='d-flex justify-content-center mt-5'>
                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />
                    </Col>
                    <Col md={6} className='text-end text-md-end mx-auto mt-5'>
                        <Row className='text-end text-md-end m-auto mb-2 fs-4' style={{ color: '#00a895' }}>
                            <p>ENABLE</p>
                        </Row>
                        <Row className=''>
                            <Col className='text-start bg-warning'>
                                <Row><p className='fs-4 bg-info'>Purchase Enablement
                                </p></Row>
                                <Row className='bg-danger'><p className='fs-6'>Reviews, Social Shop</p></Row>
                                <Row className='bg-warning'><p className='fs-8'>Customer demographic data collection to curate
                                    personalized buying experiences.</p>
                                </Row>
                            </Col>
                            <Col className='text-start'>
                                <Row><p className='fs-4'>Revenue Optimization
                                </p></Row>
                                <Row className=''><p className='fs-6'>Reviews, Social Shop</p></Row>
                                <Row className=''><p className='fs-8'>Customer demographic data collection to curate
                                    personalized buying experiences.</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                        <Col className='text-start'>
                                <Row><p className='fs-4 bg-info'>Purchase Enablement
                                </p></Row>
                                <Row className=''><p className='fs-6'>Reviews, Social Shop</p></Row>
                                <Row className=''><p className='fs-8'>Customer demographic data collection to curate
                                    personalized buying experiences.</p>
                                </Row>
                            </Col>
                            <Col className='text-start'>
                                <Row><p className='fs-4'>Revenue Optimization
                                </p></Row>
                                <Row className=''><p className='fs-6'>Reviews, Social Shop</p></Row>
                                <Row className=''><p className='fs-8'>Customer demographic data collection to curate
                                    personalized buying experiences.</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                        <Row className='text-center'><p className='fs-4'>Revenue Optimization
                                </p></Row>
                                <Row className='text-center'><p className='fs-6'>Reviews, Social Shop</p></Row>
                                <Row className='text-center'><p className='fs-8'>Customer demographic data collection to curate
                                    personalized buying experiences.</p>
                                </Row>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left mx-auto'>
                        <Row className='m-auto mb-3 fs-4' style={{ color: '#00a895' }}>
                            IDENTIFY
                        </Row>
                        <Row><p className='display-4'>Zero-Party Data<br />
                            Collection
                        </p></Row>
                        <Row className='mt-4'><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                            personalized buying experiences.</p></Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>

                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />

                    </Col>
                </Row>
            </div>

            <div className='main-section justify-content-center align-content-center'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left mx-auto'>
                        <Row className='m-auto mb-3 fs-4' style={{ color: '#00a895' }}>
                            IDENTIFY
                        </Row>
                        <Row><p className='display-4'>Zero-Party Data<br />
                            Collection
                        </p></Row>
                        <Row className='mt-4'><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                            personalized buying experiences.</p></Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>

                        <Image className="img-fluid" width={650} height={500} src={main1} rounded />

                    </Col>
                </Row>
            </div>
            <div className='d-flex justify-content-center align-content-center m-5 p-5'>
                <Button className='p-2 px-3' style={{ backgroundColor: '#048578', color: 'white', border: '2px solid #048578' }} size="lg">Get Started</Button>
            </div>
        </Container>
    )
}

export default Mainpage