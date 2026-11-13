import React from "react";

function MapView(props) {

    const mapURL =
        "https://www.google.com/maps?q=" +
        encodeURIComponent(props.location) +
        "&output=embed";

    return (
        <div className="map-view">

            <h2>Hotel Location</h2>

            <iframe
                title="Hotel Location Map"
                src={mapURL}
                className="hotel-map"
                loading="lazy"
                allowFullScreen
            />

        </div>
    );
}

export default MapView;