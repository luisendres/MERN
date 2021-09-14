const Product = require("../models/product.model");

//Export an object that is full of methods.
module.exports = {
    //long-form syntax - key: value
    create: function (req, res) {
        console.log("create method executed");  

        // req.body is the form data or data sent in from postman / js requests.
        Product.create(req.body)
        .then((product) => {
            //newly created dest from DB with auto generate id and createdAt.
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Shorthand method in object syntax.
    getAll(req, res) {
        console.log("getAll method executed");

        Product.find()
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params:", req.params);

        Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params:", req.params);

        Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, //return newly updated document.
        })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
}