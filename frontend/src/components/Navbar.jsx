
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onAddHotel, user, onLogout }) {

    return (
        <nav className="navbar">

            <Link
                to="/"
                className="navbar-logo"
            >
                <h2>StayHub</h2>
                <span>Find Your Stay, Feel at Home.</span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">
                    About Us
                </Link>

                {!user && (
                    <Link to="/login" className="login-nav-button">
                        Login
                    </Link>
                )}

                {user?.role === "user" && (
                    <>
                        <Link to="/my-bookings">
                            My Bookings
                        </Link>

                        <button onClick={onLogout}>
                            Logout
                        </button>
                    </>
                )}

                {user?.role === "admin" && (
                    <>
                        <button
                            type="button"
                            onClick={onAddHotel}
                            className="add-hotel-nav-button"
                        >
                            Add Hotel
                        </button>

                        <button onClick={onLogout}>
                            Logout
                        </button>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;
