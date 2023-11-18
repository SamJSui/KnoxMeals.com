import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RestaurantInfo from '../../components/Restaurants/RestaurantInfo';
import RestaurantsCarousel from '../../components/Carousel/Carousel';
import styles from './RestaurantSummary.module.css'

function RestaurantSummary() {
    return (
        <Container>
            <Row style={{ height: '25vh' }}>
                <RestaurantInfo />
            </Row>
            <Row>
                <RestaurantsCarousel />
            </Row>
        </Container>
    );
};

export default RestaurantSummary;