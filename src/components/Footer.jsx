import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png'
import { Facebook, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
    const data = [
        {
            id: 1, title: 'Products', element1: 'SuperLeadz', element2: 'Flash Accounts', element3: 'Infiniti', element4: 'Semper fi', element5: 'Sniper', element6: 'Terms of Use'
        },
        {
            id: 2, title: 'Company', element1: 'Why XIRCLS?', element2: 'Why Collaborative Marketing?', element3: 'Vision & Mission', element6: 'Privacy Policy'
        },
        {
            id: 3, title: 'Partners', element1: 'Login', element2: 'Sign up', element6: 'Employee Login'
        },
        {
            id: 4, title: 'Merchant', element1: 'Login', element2: 'Sign up'
        },
        {
            id: 5, title: 'Blog', title2: 'Careers'
        },
        {
            id: 6, title: 'Contact Us', element1: 'Leave us a message', element2: '+91 9969 333 666', element3: 'info@xircls.com'
        }
    ]
    return (
        <>
            <Container fluid className="">
                <div className='justify-content-center align-content-center'>
                    <Navbar className="footer p-0" expand="lg">
                        <Container className="my-5">
                            <Row className="d-flex justify-content-center w-100">
                                <Col xs={12} md={3} className="text-start p-5">
                                    <Navbar.Brand href="#home"><img
                                        alt=""
                                        src={logo}
                                        width="190"
                                        height="80"
                                        className="d-inline-block align-top"
                                    />{' '}</Navbar.Brand>
                                    <Nav className="flex-column">
                                        An end-to-end martech stack.
                                    </Nav>
                                </Col>
                                <Col xs={12} md={9} className="text-start p-5">
                                    <Row className="g-3">
                                        {data.map(item => (
                                            <Col xs={12} md={2} className='d-flex' style={{ height: '300px' }}>
                                                <Nav className="flex-column flex-grow-1">
                                                    <Nav.Link className='fw-bold mt-1' href="#">{item.title}</Nav.Link>


                                                    <Nav.Link className='fw-bold mt' href="#">{item.title2}</Nav.Link>
                                                    <Nav.Link className='p-1 text-muted' href="#">{item.element1}</Nav.Link>
                                                    <Nav.Link className='p-1 text-muted' href="#">{item.element2}</Nav.Link>
                                                    <Nav.Link className='p-1 text-muted' href="#">{item.element3}</Nav.Link>
                                                    <Nav.Link className='p-1 text-muted' href="#">{item.element4}</Nav.Link>
                                                    <Nav.Link className='p-1 text-muted' href="#">{item.element5}</Nav.Link>
                                                    <div className='mt-auto'>
                                                        <Nav.Link className='text-muted' href="#">{item.element6}</Nav.Link>
                                                    </div>
                                                </Nav>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar >

                </div>
            </Container>
            <Container>
                <Row className="align-items-start mb-5">
                    <hr className="" />
                    <Row className='d-flex'>
                        <Col className='text-start text-muted'><p>Copyright © 2022 All Rights Reserved. AltissAdvance Tech Private Limited</p></Col>
                        <Col className='text-end'>
                            <span className='p-2'><Facebook color="grey" size={24} /></span>
                            <span className='p-2'><Instagram color="grey" size={24} /></span>
                            <span className='p-2'><Linkedin color="grey" size={24} /></span>
                        </Col>
                    </Row>
                </Row>
            </Container>

        </>
    )
}

export default Footer;
