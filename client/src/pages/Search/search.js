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
                console.log(data.data.items);
                setBookList(data.data.items.map(item => item.volumeInfo));
            })
            .catch(err => {
                console.log(err);
            });
    };

    let booksJSX = bookList.map(book => (<BookResult key={book.infoLink} isSearch={true} bookInfo={book} />));

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

                {booksJSX}
            </div>
        </div>
    );
}


export default Search;