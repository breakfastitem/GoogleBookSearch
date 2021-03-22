const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

//MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`express server listening on ${PORT}...`);
});