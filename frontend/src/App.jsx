
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HotelListPage from "./pages/HotelListPage";
import AddHotelPage from "./pages/AddHotelPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function AppContent() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [lastAddedHotelId, setLastAddedHotelId] = useState(null);
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        setUser(null);
        setShowAddForm(false);
    };

    return (
        <>
            <Navbar
                user={user}
                onLogout={handleLogout}
                onAddHotel={() => setShowAddForm(true)}
            />

            <main>
                {showAddForm ? (
                    <AddHotelPage
                        onBack={(newHotelId) => {
                            if (newHotelId) {
                                setLastAddedHotelId(newHotelId);
                            }
                            setShowAddForm(false);
                        }}
                    />
                ) : (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    lastAddedHotelId={lastAddedHotelId}
                                />
                            }
                        />

                        <Route
                            path="/login"
                            element={<LoginPage />}
                        />

                        <Route
                            path="/hotels"
                            element={<HotelListPage />}
                        />

                        <Route
                            path="/hotels/edit/:id"
                            element={<AddHotelPage />}
                        />

                        <Route
                            path="/hotels/:id"
                            element={<HotelDetailsPage />}
                        />
                        
                        <Route
                         path="/about"
                         element={<AboutUs />} 
                         />
                    </Routes>
                )}
            </main>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
