import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

function googleMap(zoom, latLng) {
    return(
        <GoogleMap
            defaultZoom={zoom}
            defaultCenter={latLng}
        />
    )
}

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={ googleMap(13, {lat: props.lat, lng: props.lon}) }
        />
    );
}