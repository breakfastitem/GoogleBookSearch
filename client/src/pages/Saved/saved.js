import React, { useEffect, useState } from "react";
import BookResult from "../../components/BookResult/bookResult";
import "./styles.css";
import API from '../../util/API';

function Saved({socket}) {

    const [bookList, setBookList] = useState([]);


    useEffect(function () {
        API.getBooks()
            .then(data => {
                setBookList(data.data);
            });
    }, []);

    let booksJSX = bookList.map(book => (<BookResult socket={socket} setBookList={setBookList} key={book._id} isSearch={false} bookInfo={book} />));



    return (
        <div className="row">
            <div className="col-12">
                <h3>Saved Books</h3>

                {booksJSX}

            </div>
        </div>);
}


export default Saved;