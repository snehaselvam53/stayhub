
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import HotelCard from "../components/HotelCard";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import DeleteConfirmation from "../components/DeleteConfirmation";

import { deleteHotel } from "../redux/hotelSlice";

function HotelListPage({ lastAddedHotelId }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hotelList = useSelector(
        (state) => state.hotels.hotelList
    );

    // Filter input states
    const [location, setLocation] = useState("");
    const [minimumPrice, setMinimumPrice] = useState("");
    const [roomType, setRoomType] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [showFilter, setShowFilter] = useState(false);

    // Applied filters
    const [appliedFilters, setAppliedFilters] = useState({
        location: "",
        minimumPrice: "",
        roomType: "",
        hotelName: "",
        latitude: "",
        longitude: ""
    });

    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 6;

    const [selectedHotelId, setSelectedHotelId] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const locations = [
        ...new Set(
            hotelList.map((hotel) => hotel.location)
        )
    ];

    // Filter hotels
    const filteredHotels = hotelList.filter((hotel) => {

        const matchesLocation =
            appliedFilters.location === "" ||
            hotel.location === appliedFilters.location;

        const matchesMinimumPrice =
            appliedFilters.minimumPrice === "" ||
            Number(hotel.price) >= Number(appliedFilters.minimumPrice);

        const matchesRoomType =
            appliedFilters.roomType === "" ||
            hotel.roomType === appliedFilters.roomType;

        const matchesHotelName =
            appliedFilters.hotelName === "" ||
            hotel.title.toLowerCase().includes(
                appliedFilters.hotelName.toLowerCase().trim()
            );

        const matchesLatitude =
            appliedFilters.latitude === "" ||
            Number(hotel.latitude) === Number(appliedFilters.latitude);

        const matchesLongitude =
            appliedFilters.longitude === "" ||
            Number(hotel.longitude) === Number(appliedFilters.longitude);

        return (
            matchesLocation &&
            matchesMinimumPrice &&
            matchesRoomType &&
            matchesHotelName &&
            matchesLatitude &&
            matchesLongitude
        );
    });

    // Pagination
    const totalPages = Math.ceil(
        filteredHotels.length / hotelsPerPage
    );

    // After adding a hotel, go to its page
    useEffect(() => {

        if (!lastAddedHotelId) {
            return;
        }

        const addedIndex = hotelList.findIndex(
            (hotel) => String(hotel.id) === String(lastAddedHotelId)
        );

        if (addedIndex !== -1) {

            setLocation("");
            setMinimumPrice("");
            setRoomType("");
            setHotelName("");
            setLatitude("");
            setLongitude("");

            setAppliedFilters({
                location: "",
                minimumPrice: "",
                roomType: "",
                hotelName: "",
                latitude: "",
                longitude: ""
            });

            setCurrentPage(
                Math.ceil((addedIndex + 1) / hotelsPerPage)
            );
        }

    }, [lastAddedHotelId, hotelList]);

    // Keep current page valid
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const startIndex = (currentPage - 1) * hotelsPerPage;

    const currentHotels = filteredHotels.slice(
        startIndex,
        startIndex + hotelsPerPage
    );

    // Apply filters
    function handleApplyFilter() {

        setAppliedFilters({
            location,
            minimumPrice,
            roomType,
            hotelName,
            latitude,
            longitude
        });

        setCurrentPage(1);
        setShowFilter(false);
    }

    // Clear filters
    function handleClearFilter() {

        setLocation("");
        setMinimumPrice("");
        setRoomType("");
        setHotelName("");
        setLatitude("");
        setLongitude("");

        setAppliedFilters({
            location: "",
            minimumPrice: "",
            roomType: "",
            hotelName: "",
            latitude: "",
            longitude: ""
        });

        setCurrentPage(1);
    }

    function handleEdit(id) {
        navigate("/hotels/edit/" + id);
    }

    function handleDelete(id) {
        setSelectedHotelId(id);
        setShowDelete(true);
    }

    // Confirm delete
    function confirmDelete() {

        dispatch(deleteHotel(selectedHotelId));

        setShowDelete(false);
        setSelectedHotelId(null);

        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    }

    return (
        <div className="hotel-list-page">

            <div className="explore-header">

                <h2>Choose Your Stay</h2>

                <div className="filter-container">

                    <button
                        type="button"
                        className="filter-toggle-button"
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        Filter
                    </button>
                    <button
                       type="button"
                       className="clear-filter-button"
                       onClick={handleClearFilter}
                    >
                       Clear Filter
                    </button>

                    {showFilter && (
                        <div className="filter-panel">

                            <SearchFilter
                                location={location}
                                minimumPrice={minimumPrice}
                                roomType={roomType}
                                hotelName={hotelName}
                                latitude={latitude}
                                longitude={longitude}
                                locations={locations}
                                onLocationChange={setLocation}
                                onMinimumPriceChange={setMinimumPrice}
                                onRoomTypeChange={setRoomType}
                                onHotelNameChange={setHotelName}
                                onLatitudeChange={setLatitude}
                                onLongitudeChange={setLongitude}
                            />

                            <div className="filter-actions">

                                <button onClick={handleApplyFilter}>
                                    Apply Filter
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="hotel-list">

                {currentHotels.length > 0 ? (

                    currentHotels.map((hotel) => (

                        <HotelCard
                            key={hotel.id}
                            id={hotel.id}
                            title={hotel.title}
                            description={hotel.description}
                            location={hotel.location}
                            price={hotel.price}
                            rating={hotel.rating}
                            available={hotel.available}
                            image={hotel.image}
                            onEdit={handleEdit}
                            isAdmin={true}
                            onDelete={handleDelete}
                        />

                    ))

                ) : (
                    <p>No hotels found.</p>
                )}

            </div>

            {/* Pagination */}

            {filteredHotels.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.max(totalPages, 1)}
                    onPageChange={setCurrentPage}
                />
            )}

            {/* Delete Confirmation */}

            {showDelete && (
                <DeleteConfirmation
                    onCancel={() => setShowDelete(false)}
                    onConfirm={confirmDelete}
                />
            )}

            {/* Delete Success Message */}

            {showSuccess && (
                <div className="success-message">
                    <span>✓</span>
                    Hotel deleted successfully!
                </div>
            )}

        </div>
    );
}

export default HotelListPage;
