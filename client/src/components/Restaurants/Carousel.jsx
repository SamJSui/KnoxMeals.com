import React from 'react';
import { StoreContext } from '../../utils/store';
import { Carousel } from 'react-bootstrap';
import './Carousel.module.css'
import KnoxvilleBanner from '../../images/knoxville-stephen-ellis.jpg'

function RestaurantsCarousel() {
    /**
     * carousel[0] = Carousel Index
     * carousel[1] = Set Carousel Index
     */
    const { storeCarousel } = React.useContext(StoreContext);
    const [carouselIndex, setCarouselIndex] = storeCarousel;

    /**
     * map[0] = Map Center
     * map[1] = Set Map Center
     */
    const { storeMap } = React.useContext(StoreContext);
    const [, setMapCenter] = storeMap;

    const handleSelect = (selectedIndex, e) => {
        setCarouselIndex(selectedIndex);
        updateExternalDivContent(selectedIndex);
        setMapCenter({lat: 40.730610, lng: -73.935242});
    };

    const updateExternalDivContent = (index) => {
        const restaurantName = document.getElementById('restaurant-name');
        const restaurantAddress = document.getElementById('restaurant-address');
        if (restaurantName) {
            restaurantName.innerHTML = `Content for slide ${index}`;
        }
        if (restaurantAddress) {
            restaurantAddress.innerHTML = `Content for slide ${index}`;
        }
    };

    return (
        <>
            <div>
                <h2 id="restaurant-name">Content for slide 1</h2>
                <p id="restaurant-desc">This is some text on the left side of the grid.</p>
                <p>This is some text on the left side of the grid.</p>
                <p>This is some text on the left side of the grid.</p>
            </div>
            <Carousel 
                activeIndex={carouselIndex} 
                onSelect={handleSelect} 
                pause={'hover'}
            >
                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={'https://d1ralsognjng37.cloudfront.net/5217652f-fdc4-4f40-a200-0e8f5a0921ad.webp'}
                        alt="..."
                        title="First Restaurant"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={KnoxvilleBanner}
                        alt="..."
                        title="First Restaurant"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default RestaurantsCarousel;