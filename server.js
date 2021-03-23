const express = require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.EXPRESS_PORT || 8080;

//MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Database
const db = require("./models");
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@cluster0.d6omu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });


//routes
require('./routes/api-routes')(app,db);
require('./routes/google-books-routes')(app);


app.listen(PORT, () => {
    console.log(`express server listening on ${PORT}...`);
});