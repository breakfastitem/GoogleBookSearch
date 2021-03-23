const fetch = require("node-fetch");
require('dotenv').config();

module.exports = function (app) {
    app.get("/api/search/:title", (req, res) => {

        fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${req.params.title}&key=${process.env.BOOKS_KEY}`)
            .then(response => response.json())
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
            .then(data => res.json(data));

    });
}