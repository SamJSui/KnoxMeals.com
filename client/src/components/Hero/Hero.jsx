import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import knoxville from '../../images/knoxville-stephen-ellis.jpg'
import InputForm from './Form'

function CreateHero() {
    return (
        <Container
            fluid
            className='text-center bg-image' 
            style={{
                backgroundImage: `url(${knoxville})`,
                width: '100%', /* Make the container width 100% of its parent */
                height: '100vh', /* Set the container height as needed */
            }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='text-white'>
                <Row>
                    <Col><h1 className='mb-3'>KnoxMeals</h1></Col>
                </Row>
                <Row>
                    <Col><h4 className='mb-3'>Let Knoxville treat you!</h4></Col>
                </Row>
                <Row>
                    <Col>
                        <InputForm />
                    </Col>
                </Row>
            </div>
            </div>
            </div>
        </Container>
    );
}

export default CreateHero;