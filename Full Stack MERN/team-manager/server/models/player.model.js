const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be more than {MINLENGTH} characters"]
        },
        position: {
            type: String
        },
        gameOne: {
            type: String,
            default: "undecided"
        },
        gameTwo: {
            type: String,
            default: "undecided"
        },
        gameThree: {
            type: String,
            default: "undecided"
        }
    }, { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;