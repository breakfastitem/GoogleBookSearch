const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on("saved", (title) => {
        console.log(`A user just saved ${title}`);
        io.emit("notify", `A user just saved ${title}`)
    });

    socket.on("removed", (title) => {
        console.log(`A user just removed ${title}`);
        io.emit("notify", `A user just removed ${title}`)
    });
});

const PORT = process.env.PORT || 8080;

//MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//Database
const db = require("./models");
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@cluster0.d6omu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });


//routes
require('./routes/api-routes')(app, db);
require('./routes/google-books-routes')(app);


server.listen(PORT, () => {
    console.log(`express server listening on ${PORT}...`);
});