import React from 'react';
import { StoreContext } from '../../utils/store';
import { Carousel } from 'react-bootstrap';
import './Carousel.module.css'

function RestaurantsCarousel() {

    const { storeCarousel } = React.useContext(StoreContext);
    const [carouselIndex, setCarouselIndex] = storeCarousel;

    const { storeRestaurants } = React.useContext(StoreContext);
    const [restaurants, ] = storeRestaurants;

    const { storeRestaurantName } = React.useContext(StoreContext);
    const { storeRestaurantDesc } = React.useContext(StoreContext);
    const { storeRestaurantTag } = React.useContext(StoreContext);
    const { storeRestaurantReviewCount } = React.useContext(StoreContext);
    const { storeRestaurantRating } = React.useContext(StoreContext);
    const { storeRestaurantPhone } = React.useContext(StoreContext);
    const { storeRestaurantAddress } = React.useContext(StoreContext);
    const { storeMap } = React.useContext(StoreContext);

    const [, setRestaurantName] = storeRestaurantName; 
    const [, setRestaurantDesc] = storeRestaurantDesc; 
    const [, setRestaurantTag] = storeRestaurantTag;
    const [, setRestaurantReviewCount] = storeRestaurantReviewCount; 
    const [, setRestaurantRating] = storeRestaurantRating; 
    const [, setRestaurantPhone] = storeRestaurantPhone; 
    const [, setRestaurantAddress] = storeRestaurantAddress;
    const [, setMapCenter] = storeMap;

    const handleSelect = (selectedIndex, e) => {
        setCarouselIndex(selectedIndex);

        const selectedRestaurant = restaurants[selectedIndex]

        setRestaurantName(selectedRestaurant['name']);
        setRestaurantDesc(selectedRestaurant['description']);
        setRestaurantTag(selectedRestaurant['tag']);
        setRestaurantReviewCount(selectedRestaurant['review_count']);
        setRestaurantRating(selectedRestaurant['rating']);
        setRestaurantPhone(selectedRestaurant['phone']);
        setRestaurantAddress(selectedRestaurant['address']);
        setMapCenter({
            lat: selectedRestaurant['lat'], 
            lng: selectedRestaurant['long']
        });
    };

    return (
        <>
            <Carousel 
                activeIndex={carouselIndex} 
                onSelect={handleSelect} 
                pause={'hover'}
            >
                {restaurants.map((item) => (
                    <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={`https://via.placeholder.com/800x400?text=${item.content}`}
                        alt={`Slide ${item.id}`}
                    />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default RestaurantsCarousel;