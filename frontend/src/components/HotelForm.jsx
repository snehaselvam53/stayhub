
import React, { useState, useEffect } from "react";

function HotelForm(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("4");
    const [available, setAvailable] = useState("true");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    // Load existing hotel details for editing
    useEffect(function () {
        if (props.initialData) {
            setTitle(props.initialData.title || "");
            setDescription(props.initialData.description || "");
            setLocation(props.initialData.location || "");
            setLatitude(props.initialData.latitude ?? "");
            setLongitude(props.initialData.longitude ?? "");
            setPrice(props.initialData.price || "");
            setRating(String(props.initialData.rating || "4"));
            setAvailable(String(props.initialData.available));
            setImagePreview(props.initialData.image || "");
        }
    }, [props.initialData]);

    // Select image
    function handleImageChange(event) {
        const selectedImage = event.target.files[0];

        if (selectedImage) {
            setImage(selectedImage);
            setImagePreview(URL.createObjectURL(selectedImage));
        }
    }

    // Submit hotel details
    function handleSubmit(event) {
        event.preventDefault();

        if (!props.initialData && !image) {
            alert("Please select a hotel image");
            return;
        }

        const hotelDetails = {
            id: props.initialData
                ? props.initialData.id
                : Date.now(),

            title: title,
            description: description,
            location: location,
            latitude: latitude === "" ? null : Number(latitude),
            longitude: longitude === "" ? null : Number(longitude),
            price: Number(price),
            rating: Number(rating),
            available: available === "true",

            image: image
                ? URL.createObjectURL(image)
                : imagePreview,

            imageFile: image
        };

        props.onSubmit(hotelDetails);
    }

    return (
        <div className="hotel-form">

            <form onSubmit={handleSubmit}>

                <label>Hotel Name</label>
                <input
                    type="text"
                    placeholder="Enter hotel name"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <label>Description</label>
                <textarea
                    placeholder="Enter hotel description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />

                <label>Location</label>
                <input
                    type="text"
                    placeholder="Enter hotel location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    required
                />

                <label>Latitude</label>
                <input
                    type="number"
                    step="any"
                    placeholder="Enter latitude"
                    value={latitude}
                    onChange={(event) => setLatitude(event.target.value)}
                    min="-90"
                    max="90"
                />

                <label>Longitude</label>
                <input
                    type="number"
                    step="any"
                    placeholder="Enter longitude"
                    value={longitude}
                    onChange={(event) => setLongitude(event.target.value)}
                    min="-180"
                    max="180"
                />

                <label>Price Per Night (₹)</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    min="1"
                    required
                />

                <label>Hotel Rating</label>
                <select
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    required
                >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>

                <label>Availability</label>
                <select
                    value={available}
                    onChange={(event) => setAvailable(event.target.value)}
                >
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>

                <label>Upload Hotel Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!props.initialData}
                />

                {imagePreview && (
                    <div className="image-preview">
                        <h3>Image Preview</h3>
                        <img
                            src={imagePreview}
                            alt="Hotel preview"
                            width="200"
                        />
                    </div>
                )}

                <button type="submit">
                    {props.buttonText || "Add Hotel"}
                </button>

            </form>

        </div>
    );
}

export default HotelForm;
