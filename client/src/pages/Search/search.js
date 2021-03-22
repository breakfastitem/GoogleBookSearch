import React from "react";
import BookResult from "../../components/BookResult/bookResult";
import "./styles.css";

function Search() {

    return (
        <div className="row">
            <div className="col-12">
                <form>
                    <h3>Book Search</h3>
                    <input placeholder="Book"></input>
                    <button>Search</button>
                </form>

                <BookResult />
            </div>
        </div>
    );
}


export default Search;