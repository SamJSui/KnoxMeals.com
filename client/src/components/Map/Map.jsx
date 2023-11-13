import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { StoreContext } from "../../utils/store";
import './Map.css'


function RenderMap() {
    const google_api_key = process.env.REACT_APP_GOOGLE_API;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: google_api_key,
    });

    /**
     * map[0] = Map Center
     * map[1] = Set Map Center
     */
    const { map } = React.useContext(StoreContext);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            ;
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