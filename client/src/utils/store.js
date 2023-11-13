import React, { useState } from 'react'

export const StoreContext = React.createContext(null)


export default ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [center, setCenter] = useState({ lat: 35.964668, lng: -83.926453 });
  
    const store = {
        carousel: [activeIndex, setActiveIndex],
        map: [center, setCenter],
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}