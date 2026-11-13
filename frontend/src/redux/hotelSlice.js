
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotelList: [
        {
            id: 1,
            title: "Grand Palace Hotel",
            description: "Enjoy a luxurious stay with spacious rooms and elegant interiors. Experience premium facilities and excellent hospitality.",
            location: "Chennai, Tamil Nadu",
            price: 3500,
            rating: 4.8,
            available: true,
            roomType: "Luxury",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
        },
        {
            id: 2,
            title: "Ocean View Resort",
            description: "Relax in comfortable rooms with modern facilities and friendly service. Perfect for families and budget travelers.",
            location: "Rameswaram, Tamil Nadu",
            price: 4500,
            rating: 4.5,
            available: true,
            roomType: "Normal",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
        },
        {
            id: 3,
            title: "Royal Garden Hotel",
            description: "Escape into nature with beautiful gardens and peaceful surroundings. Enjoy a refreshing stay with comfortable accommodation.",
            location: "Madurai, Tamil Nadu",
            price: 2500,
            rating: 3.8,
            available: false,
            roomType: "Normal",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"
        },
        {
            id: 4,
            title: "Mountain Paradise",
            description: "Discover traditional elegance with beautifully decorated interiors. Enjoy warm hospitality and a memorable stay.",
            location: "Kodaikanal, Tamil Nadu",
            price: 5000,
            rating: 4.9,
            available: true,
            roomType: "Luxury",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
        },
        {
            id: 5,
            title: "City Comfort Inn",
            description: "Experience spacious suites with cozy interiors and comfortable beds. Perfect for a peaceful and relaxing getaway.",
            location: "Trichy, Tamil Nadu",
            price: 1800,
            rating: 3.5,
            available: true,
            roomType: "Normal",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
        },
        {
            id: 6,
            title: "Sunrise Luxury Resort",
            description: "Enjoy an affordable stay with clean and well-maintained rooms. Experience quality service and convenient facilities.",
            location: "Coimbatore, Tamil Nadu",
            price: 6000,
            rating: 4.7,
            available: false,
            roomType: "Luxury",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
        }
    ]
};

const hotelSlice = createSlice({
    name: "hotels",
    initialState: initialState,

    reducers: {

        // Add new hotel
        addHotel: function (state, action) {
            state.hotelList.push(action.payload);
        },

        // Update hotel
        updateHotel: function (state, action) {
            const updatedHotel = action.payload;

            const index = state.hotelList.findIndex(
                function (hotel) {
                    return hotel.id === updatedHotel.id;
                }
            );

            if (index !== -1) {
                state.hotelList[index] = updatedHotel;
            }
        },

        // Delete hotel
        deleteHotel: function (state, action) {
            state.hotelList = state.hotelList.filter(
                function (hotel) {
                    return hotel.id !== action.payload;
                }
            );
        }
    }
});

export const {
    addHotel,
    updateHotel,
    deleteHotel
} = hotelSlice.actions;

export default hotelSlice.reducer;
