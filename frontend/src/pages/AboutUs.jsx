
import React from "react";

function AboutUs() {
    return (
        <div className="about-page">

            {/* About Hero */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>Discover the Story Behind StayHub</h1>
                    <p>
                        Your comfort is our priority. We help you find
                        the perfect place to stay, wherever your journey takes you.
                    </p>
                </div>
            </section>

            {/* About StayHub */}
            <section className="about-intro">
                <div className="about-intro-image">
                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                        alt="Beautiful luxury hotel"
                    />
                </div>

                <div className="about-intro-text">
                    <span className="about-label">WHO WE ARE</span>
                    <h2>Welcome to StayHub</h2>
                    <p>
                        StayHub is a hotel discovery and booking platform
                        designed to make finding your perfect stay simple
                        and convenient.
                    </p>
                    <p>
                        Whether you are planning a family vacation, a
                        business trip or a relaxing getaway, we help you
                        explore different hotels and choose the right stay
                        for your needs.
                    </p>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="about-purpose">
                <div className="purpose-card">
                    <div className="purpose-icon">🎯</div>
                    <h2>Our Mission</h2>
                    <p>
                        To make hotel discovery and booking easy,
                        convenient and accessible for everyone.
                    </p>
                </div>

                <div className="purpose-card">
                    <div className="purpose-icon">🌍</div>
                    <h2>Our Vision</h2>
                    <p>
                        To become a trusted platform where every
                        traveller can find a comfortable place to stay.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-stayhub">
                <div className="why-heading">
                    <span className="about-label">YOUR COMFORT MATTERS</span>
                    <h2>Why Choose StayHub?</h2>
                    <p>Making every stay easier and more comfortable.</p>
                </div>

                <div className="why-cards">
                    <div className="why-card">
                        <span>🔍</span>
                        <h3>Easy Hotel Search</h3>
                        <p>Find hotels easily with simple search and filters.</p>
                    </div>

                    <div className="why-card">
                        <span>🏨</span>
                        <h3>Multiple Choices</h3>
                        <p>Explore different hotels and choose your perfect stay.</p>
                    </div>

                    <div className="why-card">
                        <span>📅</span>
                        <h3>Simple Booking</h3>
                        <p>Enjoy a convenient and straightforward booking experience.</p>
                    </div>

                    <div className="why-card">
                        <span>💙</span>
                        <h3>User Friendly</h3>
                        <p>Navigate easily and find the information you need.</p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="about-contact">
                <h2>Let's Make Your Stay Special!</h2>
                <p>
                    Have questions or need assistance? We would love to hear from you.
                </p>
                <a href="mailto:support@stayhub.com">
                    Contact Us
                </a>
            </section>

        </div>
    );
}

export default AboutUs;
