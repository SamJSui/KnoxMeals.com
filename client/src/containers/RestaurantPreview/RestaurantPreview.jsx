import React from "react";
import RestaurantContact from '../../components/Restaurants/RestaurantContact';
import RenderMap from "../../components/Map/Map";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function RestaurantPreview() {
    return (
        <Container>
            <Row style={{ height: '25vh' }}>
                <RestaurantContact />
            </Row>
            <Row>
                <RenderMap />
            </Row>
        </Container>
    );
};

export default RestaurantPreview;