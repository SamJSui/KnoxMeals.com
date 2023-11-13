import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { StoreContext } from "../../utils/store";
import './Map.css'


function RenderMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA20WbsW5nL4eH--PxwwtgmJFR6YK8kyZQ",
    });

    /**
     * map[0] = Map Center
     * map[1] = Set Map Center
     */
    const { map } = React.useContext(StoreContext);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position.coords.latitude, position.coords.longitude);
        }
    );

    return (
        <div className="map">
            <h2 id="restaurant-address">Right Side Text</h2>
            <p>This is some text on the Right side of the grid.</p>
            <p>This is some text on the Right side of the grid.</p>
            <p>This is some text on the Right side of the grid.</p>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={map[0]}
                    zoom={10}
                >
                    <Marker id='map-marker' position={map[0]} />
                </GoogleMap>
            )}
        </div>
    );
};

export default RenderMap;