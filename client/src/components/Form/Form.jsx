import React from 'react';
import { StoreContext } from '../../utils/store';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function InputForm() {

    const { storeCarousel } = React.useContext(StoreContext);
    const [, setCarouselIndex] = storeCarousel;

    const { storeQuery } = React.useContext(StoreContext);
    const [query, setQuery] = storeQuery;

    const { storeRestaurants } = React.useContext(StoreContext);
    const { storeRestaurantRef } = React.useContext(StoreContext);
    
    const [restaurants, setRestaurants] = storeRestaurants;
    const restaurantRef = storeRestaurantRef;
    const { storeRestaurantName } = React.useContext(StoreContext);
    const { storeRestaurantDesc } = React.useContext(StoreContext);
    const { storeRestaurantTag } = React.useContext(StoreContext);
    const { storeRestaurantImg } = React.useContext(StoreContext);
    const { storeRestaurantReviewCount } = React.useContext(StoreContext);
    const { storeRestaurantRating } = React.useContext(StoreContext);
    const { storeRestaurantPhone } = React.useContext(StoreContext);
    const { storeRestaurantAddress } = React.useContext(StoreContext);
    const { storeMap } = React.useContext(StoreContext);

    const [, setRestaurantName] = storeRestaurantName; 
    const [, setRestaurantDesc] = storeRestaurantDesc; 
    const [, setRestaurantTag] = storeRestaurantTag;
    const [, setRestaurantImg] = storeRestaurantImg; 
    const [, setRestaurantReviewCount] = storeRestaurantReviewCount; 
    const [, setRestaurantRating] = storeRestaurantRating;
    const [, setRestaurantPhone] = storeRestaurantPhone; 
    const [, setRestaurantAddress] = storeRestaurantAddress; 
    const [, setMapCenter] = storeMap;


    React.useEffect((e) => {
        setCarouselIndex(0);
        const selectedRestaurant = restaurants[0];
        
        setRestaurantName(selectedRestaurant['name']);
        setRestaurantDesc(selectedRestaurant['description']);
        setRestaurantTag(selectedRestaurant['tag']);
        setRestaurantImg(selectedRestaurant['img']);
        setRestaurantReviewCount(selectedRestaurant['review_count']);
        setRestaurantRating(selectedRestaurant['rating']);
        setRestaurantPhone(selectedRestaurant['phone']);
        setRestaurantAddress(selectedRestaurant['address']);
        setMapCenter({
            lat: selectedRestaurant['lat'], 
            lng: selectedRestaurant['long'],
        });
    }, [
        setCarouselIndex, 
        restaurants, 
        setRestaurantName, 
        setRestaurantDesc, 
        setRestaurantTag,
        setRestaurantImg,
        setRestaurantReviewCount,
        setRestaurantRating,
        setRestaurantPhone,
        setRestaurantAddress,
        setMapCenter,
    ]);

    const handleQuery = (e) => { 
        setQuery(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            axios.get(`/api/recommend`, {
                params: {
                    query: query,
                }
            })
                .then(res => setRestaurants(res.data.restaurants));
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
        restaurantRef.current.scrollIntoView();
    };

    return (
        <Card>
            <Card.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label 
                    style={{ 
                        textAlign: 'left'
                    }}
                >
                    What would you like to eat?
                </Form.Label>
                <Form.Control type="input" placeholder="I want a burger..." value={query} onChange={handleQuery}/>
            </Form.Group>
            </Form>
            </Card.Body>
        </Card>
    );
}

export default InputForm;