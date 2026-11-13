
import React, { useState } from "react";
import { Link } from "react-router-dom";

function HotelCard(props) {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="hotel-card">

            <div className="hotel-card-content">

                {/* HOTEL IMAGE */}
                <div className="hotel-image-container">

                    <img
                        src={props.image}
                        alt={props.title}
                        className="hotel-image"
                    />

                    {/* THREE DOT MENU */}
                    {props.isAdmin && (
                        <div className="hotel-actions">

                            <button
                                className="menu-dots"
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                ⋮
                            </button>

                            {showMenu && (
                                <div className="hotel-dropdown">

                                    <Link
                                        to={`/hotels/edit/${props.id}`}
                                        className="edit-button"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="delete-button"
                                        onClick={() => {
                                            setShowMenu(false);
                                            props.onDelete(props.id);
                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>
                            )}

                        </div>
                    )}

                    {/* AVAILABILITY BADGE */}
                    <span className={
                        props.available
                            ? "availability available"
                            : "availability unavailable"
                    }>
                        {props.available ? "Available" : "Unavailable"}
                    </span>

                </div>

                {/* HOTEL DETAILS */}
                <div className="hotel-info">

                    <h2>{props.title}</h2>

                    <p>{props.description}</p>

                    <p>📍 {props.location}</p>

                    <div className="hotel-rating">
                        ⭐ {props.rating} / 5
                    </div>

                    <h3>₹{props.price} / night</h3>

                    <Link
                        to={`/hotels/${props.id}`}
                        className="view-details-button"
                    >
                        View Details
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default HotelCard;
