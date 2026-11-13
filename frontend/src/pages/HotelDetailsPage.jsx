
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import MapView from "../components/MapView";

function HotelDetailsPage() {

    const { id } = useParams();

    const hotelList = useSelector(function (state) {
        return state.hotels.hotelList;
    });

    const selectedHotel = hotelList.find(function (hotel) {
        return hotel.id.toString() === id;
    });

    return (
        <div className="hotel-details-page">

            {selectedHotel ? (

                <div className="hotel-details">

                    <img
                        src={selectedHotel.image}
                        alt={selectedHotel.title}
                        className="details-image"
                    />

                  <div className="hotel-title-row">
    <h1>{selectedHotel.title}</h1>

    <div className="hotel-rating-badge">
        ⭐ {selectedHotel.rating} / 5
    </div>
</div>

                    <p>{selectedHotel.description}</p>

                    <div className="location-map-row">
                    <h3>📍 {selectedHotel.location}</h3>

                     <a
        href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(selectedHotel.location)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="view-map-link"
    >
        View on Map
    </a>
</div>

                    <div className="hotel-price">
    <span className="price-amount">₹{selectedHotel.price}</span>
    <span className="price-duration">/ night</span>
</div>
                    <Link to="/hotels" className="back-hotels-link">
                       ← Back to Hotels
                     </Link>

                </div>

            ) : (

                <h2>Hotel not found!</h2>

            )}

        </div>
    );
}

export default HotelDetailsPage;
