
import React from "react";

function SearchFilter(props) {
    const locations = props.locations || [];

    return (
        <div className="search-filter">

            <label>Location</label>
            <select
                value={props.location}
                onChange={function (event) {
                    props.onLocationChange(event.target.value);
                }}
            >
                <option value="">All Locations</option>

                {locations.map(function (location) {
                    return (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    );
                })}
            </select>

            <label>Minimum Price</label>
            <input
                type="number"
                placeholder="Enter minimum price"
                value={props.minimumPrice}
                onChange={function (event) {
                    props.onMinimumPriceChange(event.target.value);
                }}
            />

            <label>Room Type</label>
            <select
                value={props.roomType}
                onChange={function (event) {
                    props.onRoomTypeChange(event.target.value);
                }}
            >
                <option value="">All Room Types</option>
                <option value="Luxury">Luxury</option>
                <option value="Normal">Normal</option>
            </select>

        </div>
    );
}

export default SearchFilter;
