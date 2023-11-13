import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import knoxville from '../../images/knoxville-stephen-ellis.jpg'

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
                <Row xs={12} md={12}>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Form>
                            <Form.Group className="mb-3">
                                <Form.Label 
                                    style={{ 
                                        textAlign: 'left'
                                    }}
                                >
                                    What would you like to eat?
                                </Form.Label>
                                <Form.Control type="input" placeholder="I want a burger..." />
                            </Form.Group>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            </div>
            </div>
        </Container>
    );
}

export default CreateHero;