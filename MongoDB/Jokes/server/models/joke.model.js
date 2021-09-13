const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is required."]
        },
        punchline: {
            type: String,
            required: [true, "{PATH} is required."]
        }
    },
    { timestamps: true }
);

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;