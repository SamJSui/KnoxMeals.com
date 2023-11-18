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
    const [restaurants, setRestaurants] = storeRestaurants;
    
    const { storeRestaurantName } = React.useContext(StoreContext);
    const { storeRestaurantDesc } = React.useContext(StoreContext);
    const { storeRestaurantTag } = React.useContext(StoreContext);
    const [, setRestaurantName] = storeRestaurantName; 
    const [, setRestaurantDesc] = storeRestaurantDesc; 
    const [, setRestaurantTag] = storeRestaurantTag; 

    const { storeMap } = React.useContext(StoreContext);
    const [, setMapCenter] = storeMap;

    React.useEffect(() => {
        setCarouselIndex(0);
        const selectedRestaurant = restaurants[0];

        setRestaurantName(selectedRestaurant['name']);
        setRestaurantDesc(selectedRestaurant['description']);
        setRestaurantTag(selectedRestaurant['tag']);

        setMapCenter({
            lat: selectedRestaurant['lat'], 
            lng: selectedRestaurant['long']
        });
    }, [
        setCarouselIndex, 
        restaurants, 
        setRestaurantName, 
        setRestaurantDesc, 
        setRestaurantTag,
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