import React from 'react';
import CreateNavBar from '../components/Navbar/Navbar';
import CreateHero from '../components/Hero/Hero';
import ShowRestaurants from '../components/Carousel/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateFooter from '../components/Footer/Footer';

function HomePage() {
	return (
		<Container fluid className=''>
            <Row>
                <Col className='px-0'><CreateNavBar /></Col>
            </Row>
            <Row className="mb-3">
                <Col className='px-0'><CreateHero /></Col>
            </Row>
            <Row className="mb-4 h-100">
                <Col md={6} className='px-4'><ShowRestaurants /></Col>
                <Col md={6} className='px-4'><ShowRestaurants /></Col>
            </Row>
            <Row>
                <CreateFooter />
            </Row>
		</Container>
	);
}

export default HomePage;