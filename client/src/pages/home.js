import React from 'react';
import CreateNavBar from '../components/Navbar';
import CreateHero from '../components/Hero';
import ShowRestaurants from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
	return (
		<Container fluid className="p-0">
            <Row>
                <Col><CreateNavBar /></Col>
            </Row>
            <Row>
                <Col><CreateHero /></Col>
            </Row>
            <Row>
                <Col></Col>
                {/* <Col><ShowRestaurants /></Col> */}
            </Row>
		</Container>
	);
}

export default HomePage;