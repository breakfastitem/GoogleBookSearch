const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO: Place image not found placeholder
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    authors: {
        type: [String],
        required: false,
        default: []
    },
    description: {
        type: String,
        required: true,
        default: "Google Books does not have a description"
    },
    image: {
        type: String,
        required: true,
        default: ""
    },
    link: {
        type: String,
        required: true,
        default: ""
    }

});


const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;