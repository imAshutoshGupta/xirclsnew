import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/esm/Button';

const Navbarx = () => {
    return (
        <>
            <Container className=''>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container className=''>
                        <Navbar.Brand href="#home"><img
                            alt=""
                            src={logo}
                            width="190"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto fs-5 px-5">
                                <NavDropdown title={<span className="dropdown-title">Products</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Product 2
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Product 4
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={<span className="dropdown-title">Company</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Company 1</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Company 2
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Company 3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Company 4
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#features" style={{ color: '#00a895' }}>Blog</Nav.Link>
                                <Nav.Link href="#pricing" style={{ color: '#00a895' }}>Partners</Nav.Link>
                            </Nav>
                            <Nav>
                                <Button className="mx-3 px-3 mb-2" size="sm" variant="outline-success">Log in</Button>
                                <Button className="mx-3 px-3 mb-2" size="sm" variant="outline-success" style={{ backgroundColor: '#00c7b0', color: 'white', border: '2px solid #00c7b0' }} >Sign Up</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}

export default Navbarx