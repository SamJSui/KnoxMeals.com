import React from "react";
import { StoreContext } from '../../utils/store';

function RestaurantInfo() {
    const { storeRestaurantName } = React.useContext(StoreContext);
    const { storeRestaurantDesc } = React.useContext(StoreContext);
    const { storeRestaurantTag } = React.useContext(StoreContext);
    const [restaurantName, ] = storeRestaurantName; 
    const [restaurantDesc, ] = storeRestaurantDesc; 
    const [restaurantTag, ] = storeRestaurantTag; 

    return (
        <>
        <h3>{restaurantName}</h3>
        <p><b>Description: </b>{restaurantDesc}</p>
        <i><b>Tags: </b>{restaurantTag}</i>
        </>
    );
};

export default RestaurantInfo;