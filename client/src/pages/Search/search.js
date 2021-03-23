import React, { useState } from "react";
import BookResult from "../../components/BookResult/bookResult";
import "./styles.css";
import API from '../../util/API'

function Search() {


    const [value, setValue] = useState("");
    const [bookList, setBookList] = useState([]);

    let onSubmit = function (event) {
        event.preventDefault();

        API.searchBooks(value)
            .then((data) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="row">
            <div className="col-12">
                <form onSubmit={onSubmit}>
                    <h3>Book Search</h3>
                    <input type="text" value={value} onChange={(e) => {
                        setValue(e.target.value);
                    }} placeholder="Search By title"></input>
                    <button type="submit">Search</button>
                </form>

                <BookResult />
            </div>
        </div>
    );
}


export default Search;