import Map from '../Map/Map'
import RestaurantsCarousel from './Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurants() {
    return (
        <Container fluid className="px-5 py-3">
            <Row className='py-4'>
                <Col md={7}><RestaurantsCarousel /></Col>
                <Col md={5} className='mt-sm-4 mt-lg-0'><Map /></Col>
            </Row>
        </Container>
    );
};

export default Restaurants;