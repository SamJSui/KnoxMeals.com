import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantSummary from '../RestaurantSummary/RestaurantSummary';
import RestaurantPreview from '../RestaurantPreview/RestaurantPreview';

function Results() {
    return (
        <Container fluid 
            className="px-4 py-3" 
        >
            <Row className='py-2'>
                <Col md={{ span: 6, order: 1 }} lg={{ span: 5, order: 1 }} className='mt-md-6 mt-lg-0 py-2'><RestaurantSummary /></Col>
                <Col md={{ span: 6, order: 2 }} lg={{ span: 4, order: 1 }} className='mt-md-6 mt-lg-0 py-2'><RestaurantPreview /></Col>
                <Col md={{ span: 6, order: 3 }} lg={{ span: 4, order: 1 }} className='mt-md-6 mt-lg-0 py-2'></Col>
            </Row>
        </Container>
    );
};

export default Results;

