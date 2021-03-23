module.exports = function (app, db) {

    //gets saved books from api
    app.get("/api/books", (req, res) => {
        db.Book.find({}, (err, data) => {
            if (err) throw err;

            res.json(data);
        });
    });

    //Add book to api
    app.post("/api/books", ({ body }, res) => {
        let bookObj = new db.Book(body);

        db.Book.create(bookObj, (err, book) => {
            if (err) throw err;

            res.json(book);
        });
    });

    //Remove book by id
    app.delete("/api/books/:id", (req, res) => {
        db.Book.findOneAndRemove({ _id: req.params.id }, (err, data) => {
            if (err) throw err;

            res.json(data);
        });
    });

}