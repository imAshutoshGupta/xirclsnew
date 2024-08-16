import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import main1 from '../assets/main1.jpg'
import main2 from '../assets/main2.jpg'
import main3 from '../assets/main3.jpg'
import main4 from '../assets/main4.jpg'
import main5 from '../assets/main5.jpg'
import main6 from '../assets/main6.jpg'
import Image from 'react-bootstrap/esm/Image'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import { ChevronRight } from 'react-feather'

const Mainpage = () => {
    return (
        <Container className="hero-container">
            <div className='main-gradient'>
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
                            <Image className="img-fluid" width={650} height={500} src={main1} style={{ borderRadius: '20px' }} />
                        </Col>
                    </Row>
                </div>

                { /* Content 2 */}

                <div className='main-section justify-content-center align-content-center'>
                    <Row className="align-items-center p-5 m-2">
                        <Col md={6} className='d-flex justify-content-center mt-5'>
                            <Image className="img-fluid" width={650} height={500} src={main2} style={{ borderRadius: '20px' }} />
                        </Col>
                        <Col md={6} className='text-end text-md-end mx-auto mt-5'>
                            <Row className='text-end text-md-end m-auto mb-2 fs-4' style={{ color: '#00a895' }}>
                                <p>VERIFY</p>
                            </Row>
                            <Row><p className='display-4'>Visitor<br />
                                Authentication
                            </p></Row>
                            <Row className=''><p href='/' className='fs-5 fst-italic text-decoration-none me-3'>
                                SuperLeadz
                            </p></Row>
                            <Row className=''>
                                <div class="col-3">
                                </div>
                                <div class="col-9">
                                    <p className='fs-8 p-1'>Ground zero tools that detect & verify high-intent shoppers
                                        within the first few seconds of arrival.
                                    </p></div></Row>
                        </Col>
                    </Row>
                </div>
            </div>
            { /* Content 3 */}
            <div className='main-section justify-content-center align-content-center right-gradient'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left mx-auto pt-5'>
                        <Row className='m-auto mb-3 fs-4' style={{ color: '#00a895' }}>
                            INCENTIVIZE
                        </Row>
                        <Row>
                            <Row><p className='display-6 mb-0 pb-1'>Shopping Engagement
                            </p></Row>
                            <Row className=''><p className='fs-5 fst-italic m-0'>Reviews, Social Shop</p></Row>
                            <Row className='pt-3'><p className='fs-8' style={{ width: '70%' }}>Customer demographic data collection to curate
                                personalized buying experiences.</p>
                            </Row>
                        </Row>
                        <Row className=''>
                            <Row><p className='display-6 mb-0 pb-1'>Rewards & Incentives
                            </p></Row>
                            <div className='d-flex justify-content-start'>
                                <p href="https://example.com/infiniti" className='fs-5 fst-italic text-decoration-none me-3'>
                                    Infiniti
                                </p>
                                <p href="https://example.com/semper-fi" className='fs-5 fst-italic text-decoration-none'>
                                    Semper Fi
                                </p>
                            </div>
                            <Row className=''><p className='fs-8' style={{ width: '70%' }}>Timely offers, delivered discreetly, to delight shoppers and convert them into customers guaranteed to return.</p>
                            </Row>
                        </Row>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>

                        <Image className="img-fluid" width={650} height={500} src={main3} style={{ borderRadius: '20px' }} />

                    </Col>
                </Row>
            </div>

            { /* Content 4 */}
            <div className='left-gradient'>
                <div className='main-section justify-content-center align-content-center py-4 my-5'>
                    <Row className="align-items-center">
                        <Col md={6} className='d-flex justify-content-center'>
                            <Image className="img-fluid" width={650} height={500} src={main4} style={{ borderRadius: '20px' }} />
                        </Col>
                        <Col md={6} className='text-end text-md-end mx-auto'>
                            <Row className='text-end text-md-end m-auto fs-4' style={{ color: '#00a895' }}>
                                <p>ENABLE</p>
                            </Row>
                            <Row className='p-3'>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Purchase Enablement</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Flash Accounts, UPI Payment Enabler
                                    </p></Row>
                                    <Row className=''><p className='fs-8 m-0'>Sales acceleration products that simplify
                                        and enhance the checkout experience.
                                    </p>
                                    </Row>
                                </Col>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Revenue Optimization</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Recommendations, Cross-sell & Upsell</p></Row>
                                    <Row className=''><p className='fs-8 m-0'>Personalized suggestions tailored to past
                                        customer behaviour and purchase history.</p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='p-3'>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Revenue Recovery</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Revive</p></Row>
                                    <Row className=''><p className='fs-8 m-0'>Smart tools that predict, protect and
                                        recover lost or at-risk revenue across the
                                        buying cycle.</p>
                                    </Row>
                                </Col>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Communication</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Talk by XIRCLS, Chatbot
                                    </p></Row>
                                    <Row className=''><p className='fs-8 m-0'>An integrated communications system to
                                        deliver a unified brand experience across
                                        channels.</p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='text-center p-3'>
                                <Col className='col-2'></Col>
                                <Col className='col-8'>
                                    <Row className=''><p className='fs-4 m-0'>Omnichannel Automation
                                    </p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>QR Forms, CRM
                                    </p></Row>
                                    <Row className=''><p className='fs-8 m-0'>Unified online/offline lead generation &
                                        conversion with a centralized customer
                                        database for streamlined operations.</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                { /* Content 5 */}

                <div className='main-section  py-4 my-5'>
                    <Row className="align-items-center p- m-2">
                        <Col md={6} className='text-left text-md-left mx-auto'>
                            <Row className='m-auto fs-4' style={{ color: '#00a895' }}>
                                ENHANCE
                            </Row>
                            <Row><p className='display-4'>Shopping<br />
                                Optimization
                            </p></Row>
                            <Row className=''><p className='fs-4 fst-italic m-0'>Flash Accounts, Oh My Customer!
                            </p></Row>
                            <Row className='mt-4'><p className='fs-8' style={{ width: '70%' }}>Enhancement modules to enable frictionless, user-friendly
                                shopping experiences.
                            </p></Row>
                        </Col>
                        <Col md={6} className='d-flex justify-content-center'>

                            <Image className="img-fluid" width={650} height={500} src={main5} style={{ borderRadius: '20px' }} />

                        </Col>
                    </Row>
                </div>

                { /* Content 6 */}

                <div className='main-section justify-content-center align-content-center py-4 my-5'>
                    <Row className="align-items-center">
                        <Col md={6} className='d-flex justify-content-center'>
                            <Image className="img-fluid" width={650} height={500} src={main6} style={{ borderRadius: '20px' }} />
                        </Col>
                        <Col md={6} className='text-end text-md-end mx-auto'>
                            <Row className='text-end text-md-end m-auto fs-4' style={{ color: '#00a895' }}>
                                <p>RETAIN</p>
                            </Row>
                            <Row className='p-2'>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Loyalty Management</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Semper Fi, TrueCash, Gift Cards

                                    </p></Row>
                                    <Row className='py-2'><p className='fs-8 m-0'>Loyalty solutions built to deliver meaningful
                                        interactions that add true value to your
                                        customers’ lives.

                                    </p>
                                    </Row>
                                </Col>
                                <Col md={6} className='text-start'>
                                    <Row className=''><p className='fs-4 m-0'>Repurchase Enablement</p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Subscriptions & Memberships
                                    </p></Row>
                                    <Row className='py-2'><p className='fs-8 m-0'>Recurring purchase activation to instantly
                                        turn one-time buyers into loyal patrons.
                                    </p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='text-center p-3 my-3'>
                                <Col className='col-2'></Col>
                                <Col className='col-8'>
                                    <Row className=''><p className='fs-4 m-0'>Goodwill & Partnerships
                                    </p></Row>
                                    <Row className=''><p className='fs-6 fst-italic m-0'>Referrals, Customer Affiliates
                                    </p></Row>
                                    <Row className='py-2'><p className='fs-8 m-0'>Referral management tools to track, reward and
                                        leverage the in uence of satisfied customers
                                        and strategic partners.
                                    </p>
                                    </Row>
                                </Col>
                                <Col className='col-4'></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='d-flex justify-content-center align-content-center m-5 p-5'>
                <Button className='p-2 px-3' style={{ backgroundColor: '#048578', color: 'white', border: '2px solid #048578' }} size="lg">
                    <span>
                        <p className='fs-4 m-0'>Get Started<ChevronRight className='' color='#FFFFFF' size={30} /></p>
                    </span>
                </Button>
            </div>
        </Container>
    )
}

export default Mainpage