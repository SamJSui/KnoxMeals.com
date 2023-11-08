import { Container, Col, Carousel } from 'react-bootstrap';
import KnoxvilleBanner from '../../images/knoxville-stephen-ellis.jpg'
import './Carousel.style.css'

function ShowRestaurants() {

    return (
        <Container>
            <Col>
                <div>
                    <h2>Left Side Text</h2>
                    <p>This is some text on the left side of the grid.</p>
                </div>
            </Col>
            <Col>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={KnoxvilleBanner}
                        alt="..."
                        title="First Restaurant"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <iframe 
                        className="d-block w-100" 
                        src='https://www.tripadvisor.com/Restaurant_Review-g55138-d4877551-Reviews-Stock_Barrel-Knoxville_Tennessee.html'
                        alt="..."
                        title="First Restaurant"
                    />
                </Carousel.Item>
            </Carousel>
            </Col>
        </Container>
    );
}

export default ShowRestaurants;