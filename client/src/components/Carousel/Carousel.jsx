import { Container, Col, Carousel } from 'react-bootstrap';

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
                    <iframe 
                        className="d-block w-100" 
                        src="https://www.yelp.com/biz/stock-and-barrel-knoxville" 
                        alt="..."
                        style={{
                            height: '40em',
                        }}
                        title="First Restaurant"
                    />
                    <Carousel.Caption>
                        <h3>Image 1</h3>
                        <p>Description for the first image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe 
                        className="d-block w-100" 
                        src="https://www.yelp.com/biz/the-brass-pearl-knoxville?osq=Brass+Pearl" 
                        alt="..."
                        style={{
                            height: '40em',
                        }}
                        title="First Restaurant"
                    />
                    <Carousel.Caption>
                        <h3>Image 2</h3>
                        <p>Description for the second image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>
        </Container>
    );
}

export default ShowRestaurants;