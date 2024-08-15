import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Hero2 = () => {
    return (
        <Container>
            <div className='hero2-section justify-content-center align-content-center p-5'>
                <div className='text-center mt-5 mb-5 p-5'>
                    <div><p className='display-3' style={{ color: '#00a895' }}>Trust is Everything.</p></div>
                    <div className='fs-5 mx-auto text-center' style={{ width: '50%' }}><p>We prioritize digital interactions built on trust, transparency, and
                        100% consent of your valued customers.</p></div>
                </div>
                <div className='text-center mt-5'>
                    <div className="d-flex align-items-center">
                        <hr className="flex-grow-1 custom-hr" />
                        <span className="mx-3 fs-4">HOW IT WORKS?</span>
                        <hr className="flex-grow-1 custom-hr" />
                    </div>
                    <div className='display-3' style={{ color: '#00a895' }}>
                        <p>All You Need. <br /> All In One Place.</p>
                    </div>
                    <div className='fs-5 mx-auto text-center' style={{ width: '50%' }}><p>Precision martech that activates crucial touch points across the buyer journey.
                    </p></div>

                </div>

            </div>
        </Container>
    )
}

export default Hero2