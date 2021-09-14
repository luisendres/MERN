const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{PATH} is required."]
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required."],
            min: [1, "You must be at least $1 or more."]
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."]
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;