
import React from "react";

function SearchFilter(props) {
    const locations = props.locations || [];

    return (
        <div className="search-filter">

            <div className="filter-field">
                <label>Hotel Name</label>
                <input
                    type="text"
                    placeholder="Search hotel name"
                    value={props.hotelName}
                    onChange={(event) =>
                        props.onHotelNameChange(event.target.value)
                    }
                />
            </div>

            <div className="filter-field">
                <label>Location</label>
                <select
                    value={props.location}
                    onChange={(event) =>
                        props.onLocationChange(event.target.value)
                    }
                >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-field">
                <label>Latitude</label>
                <input
                    type="number"
                    step="any"
                    placeholder="Enter latitude"
                    value={props.latitude}
                    onChange={(event) =>
                        props.onLatitudeChange(event.target.value)
                    }
                />
            </div>

            <div className="filter-field">
                <label>Longitude</label>
                <input
                    type="number"
                    step="any"
                    placeholder="Enter longitude"
                    value={props.longitude}
                    onChange={(event) =>
                        props.onLongitudeChange(event.target.value)
                    }
                />
            </div>

            <div className="filter-field">
                <label>Minimum Price</label>
                <input
                    type="number"
                    placeholder="Enter minimum price"
                    value={props.minimumPrice}
                    onChange={(event) =>
                        props.onMinimumPriceChange(event.target.value)
                    }
                />
            </div>

            <div className="filter-field">
                <label>Room Type</label>
                <select
                    value={props.roomType}
                    onChange={(event) =>
                        props.onRoomTypeChange(event.target.value)
                    }
                >
                    <option value="">All Room Types</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Normal">Normal</option>
                </select>
            </div>

        </div>
    );
}

export default SearchFilter;
