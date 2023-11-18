import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { StoreContext } from "../../utils/store";
import './Map.css'


function RenderMap() {

    // Google API Key
    const google_api_key = process.env.REACT_APP_GOOGLE_API;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: google_api_key,
    });

    const { storeMap } = React.useContext(StoreContext);
    const [mapCenter, ] = storeMap;

    navigator.geolocation.getCurrentPosition(
        (position) => {
            // console.log(position);
        }
    );

    return (
        <div className="map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={mapCenter}
                    zoom={13}
                >
                    <Marker id='map-marker' position={mapCenter} />
                </GoogleMap>
            )}
        </div>
    );
};

export default RenderMap;