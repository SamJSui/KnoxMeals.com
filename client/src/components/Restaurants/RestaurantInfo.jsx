import React from "react";
import { StoreContext } from '../../utils/store';

function RestaurantInfo() {
    const { storeRestaurantRef } = React.useContext(StoreContext);
    const { storeRestaurantName } = React.useContext(StoreContext);
    const { storeRestaurantDesc } = React.useContext(StoreContext);
    const { storeRestaurantTag } = React.useContext(StoreContext);

    const restaurantRef = storeRestaurantRef;
    const [restaurantName, ] = storeRestaurantName; 
    const [restaurantDesc, ] = storeRestaurantDesc; 
    const [restaurantTag, ] = storeRestaurantTag; 

    return (
        <>
        <h3 ref={restaurantRef}>{restaurantName}</h3>
        <p><b>Description: </b>{restaurantDesc}</p>
        <i><b>Tags: </b>{restaurantTag}</i>
        </>
    );
};

export default RestaurantInfo;