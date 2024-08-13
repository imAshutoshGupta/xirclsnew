import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Hero1 from '../assets/hero1.jpg'
import Button from 'react-bootstrap/esm/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Hero.css';

import hammer from '../assets/hammer.png'
import leaf from '../assets/leaf.png'
import pvr from '../assets/pvr.png'
import rebelfoods from '../assets/rebelfoods.png'
import snitch from '../assets/snitch.png'
import trueelements from '../assets/trueelements.png'

const Hero = () => {
    return (
        <Container>
            <div className='hero-section justify-content-center align-content-center p-5'>
                <Row className="align-items-center p-5 m-2">
                    <Col md={6} className='text-left text-md-left'>
                        <Row><p className='display-4 fw-bold'>From First Visit<br />
                            to Forever Loyal.</p></Row>
                        <Row><p className='fs-5'>An end-to-end martech stack to optimize every
                            step of the buyer journey.</p></Row>
                        <Button className='p-2 px-3' style={{ backgroundColor: '#048578', color: 'white', border: '2px solid #048578' }} variant="success" size="lg">Get Started</Button>

                    </Col>
                    <Col md={6} className='d-flex justify-content-center mt-5'>

                        <Image className="img-fluid" width={550} height={400} src={Hero1} rounded />

                    </Col>
                </Row>
                <div className=''>
                    <div>
                        <p className='fs-5 fw-bold text-center p-2 mt-4'>TRUSTED BY THESE COMPANIES</p>
                    </div>
                    <div className='mx-5' >
                        <Swiper
                            modules={[Autoplay, A11y]}
                            loop={true}
                            autoplay={{
                                delay: 900,
                                disableOnInteraction: false
                            }}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 120,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 125,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 200,
                                },
                                768: {
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 30,
                                },
                            }}



                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><img src={hammer} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={leaf} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={pvr} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={rebelfoods} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={snitch} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={trueelements} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={hammer} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={leaf} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={pvr} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={rebelfoods} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={snitch} width={120} alt="brandlogo" /></SwiperSlide>
                            <SwiperSlide><img src={trueelements} width={120} alt="brandlogo" /></SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Hero