const fetch = require("node-fetch");
require('dotenv').config();

module.exports = function (app) {
    app.get("/api/search/:title", (req, res) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${req.body.title}&printType=book&key=${process.env.BOOKS_KEY}`)
            .then(response => response.json())
            .then(data => res.json(data));
    });
}