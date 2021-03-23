import React from "react";
import "./styles.css";
import API from "../../util/API"

function BookResult({ bookInfo, isSearch, setBookList, socket }) {

    let book = {};

    let authorString = "No Listed Author";

    let onClick;
    let selector;

    if (isSearch) {


        if (bookInfo["title"]) {
            book["title"] = bookInfo["title"];
        }

        if (bookInfo["description"]) {
            book["description"] = bookInfo["description"];
        }

        if (bookInfo["authors"]) {
            book["authors"] = bookInfo["authors"];

            authorString = book.authors[0];
            for (let i = 1; i < book.authors.length; i++) {
                authorString = authorString + ", " + book.authors[i];
            }
        }

        if (bookInfo.imageLinks) {
            book.image = bookInfo.imageLinks.smallThumbnail;
        }

        if (bookInfo["infoLink"]) {
            book["link"] = bookInfo["infoLink"];
        }




        selector = "Save";
        onClick = function (event) {
            event.preventDefault();
            API.saveBook(book)
                .then(() => {
                    socket.emit("saved", book.title);
                })
                .catch(err => {
                    console.log(err)
                });
        }

    } else {
        book = bookInfo;

        selector = "Delete";
        onClick = function (event) {
            event.preventDefault();
            API.deleteBook(bookInfo._id)
                .then((data) => {
                    socket.emit("removed", book.title);
                    API.getBooks()
                        .then(data => setBookList(data.data));
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-10">
                        <p>{book.title || "NO TITLE"}</p>
                        <p>Written By: {authorString}</p>
                    </div>
                    <div className="col-2">
                        <form action={book.link}>
                            <button type="submit">View</button>
                        </form>

                        <button onClick={onClick}>{selector}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img alt="book cover" src={book.image} />
                    </div>
                    <div className="col-9">
                        <p>{book.description || "NO DESCRIPTION"}</p>
                    </div>
                </div>
            </div>
        </div>);
}


export default BookResult;