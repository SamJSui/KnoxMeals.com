import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from '../Map/Map'
import RestaurantsCarousel from './Carousel'

function Restaurants() {
    return (
        <Container fluid className="px-4 py-3">
            <Row className='py-2'>
                <Col md={8} lg={4} className='mt-md-6 mt-lg-0 py-2'><RestaurantsCarousel /></Col>
                <Col md={6} lg={4} className='mt-md-6 mt-lg-0 py-2'><RestaurantsCarousel /></Col>
                <Col md={6} lg={4} className='mt-md-6 mt-lg-0 py-2'><Map /></Col>
            </Row>
        </Container>
    );
};

export default Restaurants;