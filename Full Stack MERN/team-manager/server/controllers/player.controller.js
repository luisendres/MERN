const Player = require("../models/player.model");

//Export an object that is full of methods.
module.exports = {
    //long-form syntax - key: value
    create: function (req, res) {
        console.log("create method executed");  

        // req.body is the form data or data sent in from postman / js requests.
        Player.create(req.body)
        .then((player) => {
            //newly created dest from DB with auto generate id and createdAt.
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Shorthand method in object syntax.
    getAll(req, res) {
        console.log("getAll method executed");

        Player.find()
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params:", req.params);

        Player.findById(req.params.id)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params:", req.params);

        Player.findByIdAndDelete(req.params.id)
        .then((player) => {
            res.json(player)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Player.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, //return newly updated document.
        })
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
    // update(req, res) {
    //     console.log("update method executed", "url params:", req.params);

    //     Player.findByIdAndUpdate(req.params.id, {
    //         new: true, //return newly updated document.
    //     })
    //     .then((player) => {
    //         res.json(player);
    //     })
    //     .catch((err) => {
    //         res.status(400).json(err);
    //     });
    // }
}