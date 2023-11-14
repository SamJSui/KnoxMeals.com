import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function InputForm(props) {
    const [query, setQuery] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        if (restaurants) {
            console.log(restaurants);
        }
    }, [restaurants]);

    const handleQuery = (e) => { 
        setQuery(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = axios.post('http://localhost:5000/api/', { query })
                .then(res => setRestaurants(res.data));
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