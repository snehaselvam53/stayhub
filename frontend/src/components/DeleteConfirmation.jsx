
import React from "react";

function DeleteConfirmation(props) {

    return (
        <div className="delete-confirmation">

            <h3>Delete Hotel?</h3>

            <p>
                Are you sure you want to delete this hotel?
            </p>

            <div className="delete-actions">

                <button
                    className="cancel-button"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>

                <button
                    className="confirm-delete-button"
                    onClick={props.onConfirm}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default DeleteConfirmation;
