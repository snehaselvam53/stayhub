
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <h2>StayHub 🏨</h2>
                    <p>Find Your Stay, Feel at Home.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <a href="#explore-hotels">Book Now</a>
                </div>

                <div className="footer-contact">
                    <h3>About StayHub</h3>
                    <p>
                        Discover comfortable stays and
                        explore hotels that suit your needs.
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 StayHub. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
