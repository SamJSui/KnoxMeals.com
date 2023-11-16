import React, { useState } from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [center, setCenter] = useState({ lat: 35.964668, lng: -83.926453 });
    const [query, setQuery] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const store = {
        storeCarousel: [activeIndex, setActiveIndex],
        storeMap: [center, setCenter],
        storeQuery: [query, setQuery],
        storeRestaurants: [restaurants, setRestaurants] 
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};