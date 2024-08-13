import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

const Contact = () => {
    return (
        <Container>
            <div className='custom-bg text-white justify-content-center align-content-center p-5'>
                <div className='text-center'>
                    <p className='display-4 fw-bold'>Grow Your Business with XIRCLS.</p>
                    <p className='fs-4'>Reach out for customized solutions.</p>
                </div>
                <div className='d-flex justify-content-center align-content-center p-3'>
                <Button className='p-2 px-3 text-center' style={{ backgroundColor: '#FFFFFF', color: '#048578', border: '2px solid #FFFFFF' }} size="lg">Contact Us</Button>
                </div>
            </div>
        </Container>
    )
}

export default Contact