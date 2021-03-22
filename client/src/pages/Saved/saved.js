import React from "react";
import BookResult from "../../components/BookResult/bookResult";
import "./styles.css";

function Saved() {
    return (
        <div className="row">
            <div className="col-12">
                <h3>Saved Books</h3>

                <BookResult />
            </div>
        </div>);
}


export default Saved;