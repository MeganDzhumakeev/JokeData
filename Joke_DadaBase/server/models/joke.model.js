const mongoose = require ("mongoose");

const JokeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "A Joke title is required"],
        minlength: [2, "Joke title must have at least 2 characters"]
    },

    punchline: {
        type: String,
        required: [true, "A Punchline is required"],
        minlength: [2, "Punchline must have a least 2 characters"]
    },


}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;