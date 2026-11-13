
import React from "react";

function Pagination(props) {

    return (
        <div className="pagination">

            <button
                onClick={function () {
                    props.onPageChange(props.currentPage - 1);
                }}
                disabled={props.currentPage === 1}
            >
                Previous
            </button>

            <span>
                Page {props.currentPage} of {props.totalPages}
            </span>

            <button
                onClick={function () {
                    props.onPageChange(props.currentPage + 1);
                }}
                disabled={props.currentPage === props.totalPages}
            >
                Next
            </button>

        </div>
    );
}

export default Pagination;
