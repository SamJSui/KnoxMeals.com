import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import knoxville from '../../images/knoxville-stephen-ellis.jpg'

function CreateHero() {
    return (
        <>
        <div
            className='p-5 text-center bg-image'
            style={{ 
                backgroundImage: `url(${knoxville})`, 
                height: "35em"
            }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 className='mb-3'>KnoxMeals</h1>
                    <h4 className='mb-3'>Let Knoxville treat you!</h4>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label 
                                style={{ 
                                    width: '30rem',
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
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default CreateHero;