import React from "react";
import HotelListPage from "./HotelListPage";

function HomePage({ lastAddedHotelId }) {
    return (
        <div className="home-page">

            <section className="hero-section">
                <div className="hero-content">

                    <h1>Find Your Perfect Stay</h1>

                    <p>
                        Find comfortable hotels, explore beautiful
                        destinations and enjoy a memorable stay
                        with StayHub.
                    </p>

                    <a href="#explore-hotels" className="explore-button">
                        Explore Hotels
                    </a>

                </div>
            </section>

            <section id="explore-hotels">
                <HotelListPage
                    lastAddedHotelId={lastAddedHotelId}
                />
            </section>

        </div>
    );
}

export default HomePage;