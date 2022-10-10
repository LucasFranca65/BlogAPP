const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = new Schema({
    title_post: {
        type: String,
        required: true 
    },
    text_post: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('posts',Post)