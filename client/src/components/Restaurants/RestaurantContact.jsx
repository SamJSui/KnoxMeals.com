import React from "react";
import { StoreContext } from '../../utils/store';
import Rating from '@mui/material/Rating';

function RestaurantContact() {

    const { storeRestaurantReviewCount } = React.useContext(StoreContext);
    const { storeRestaurantRating } = React.useContext(StoreContext);
    const { storeRestaurantPhone } = React.useContext(StoreContext);
    const { storeRestaurantAddress } = React.useContext(StoreContext);

    const [restaurantReviewCount, ] = storeRestaurantReviewCount; 
    const [restaurantRating, ] = storeRestaurantRating; 
    const [restaurantPhone, ] = storeRestaurantPhone; 
    const [restaurantAddress, ] = storeRestaurantAddress;

    return (
        <>
        <h4>Number of Reviews: {restaurantReviewCount}</h4>
        <h4>
            Rating:&nbsp;
            <Rating value={restaurantRating} precision={0.1} size="small" readOnly />
        </h4>
        <h4>Phone Number: {restaurantPhone}</h4>
        <h4>Address:</h4>
        <h6>{restaurantAddress}</h6>
        </>
    );  
};

export default RestaurantContact;