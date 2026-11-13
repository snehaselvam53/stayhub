
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import HotelForm from "../components/HotelForm";

import {
    addHotel,
    updateHotel
} from "../redux/hotelSlice";

function AddHotelPage({ onBack }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const hotelList = useSelector(
    (state) => state.hotels.hotelList
);

    const isEditMode = Boolean(id);

    const selectedHotel = isEditMode
        ? hotelList.find(
            (hotel) => String(hotel.id) === String(id)
        )
        : null;

    const handleSubmit = (hotelDetails) => {

    const hotelData = {
        ...hotelDetails
    };

    delete hotelData.imageFile;

    if (isEditMode) {

        dispatch(
            updateHotel({
                ...hotelData,
                id: selectedHotel.id,
                image: hotelDetails.image || selectedHotel.image
            })
        );

        alert("Hotel updated successfully!");
        navigate("/hotels");

    } else {

        const newHotel = {
            ...hotelData,
            id: Date.now()
        };

        dispatch(addHotel(newHotel));

        alert("Hotel added successfully!");

        if (onBack) {
            onBack(newHotel.id);
        } else {
            navigate("/hotels");
        }
    }
};

    if (isEditMode && !selectedHotel) {

        return (
            <div className="hotel-form-container">
                <h2>Hotel Not Found</h2>

                <button onClick={() => navigate("/hotels")}>
                    Back to Hotels
                </button>
            </div>
        );
    }

    return (
        <div className="hotel-form-container">

            <h1>
                {isEditMode ? "Edit Hotel" : "Add New Hotel"}
            </h1>

            <HotelForm
                initialData={selectedHotel}
                buttonText={
                    isEditMode ? "Update Hotel" : "Add Hotel"
                }
                onSubmit={handleSubmit}
            />

        </div>
    );
}

export default AddHotelPage;
