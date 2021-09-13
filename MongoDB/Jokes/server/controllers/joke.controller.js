const Joke = require("../models/joke.model");

//Export an object that is full of methods.
module.exports = {
    //long-form syntax - key: value
    create: function (req, res) {
        console.log("create method executed");  

        // req.body is the form data or data sent in from postman / js requests.
        Joke.create(req.body)
        .then((joke) => {
            //newly created dest from DB with auto generate id and createdAt.
            res.json(destination);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    // Shorthand method in object syntax.
    getAll(req, res) {
        console.log("getAllJokes method executed");

        Joke.find()
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    getOne(res, req) {
        console.log("getOne method executed", "url params:", req.params);

        Joke.findById(req.params.id)
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params:", req.params);

        Joke.findByIdAndDelete(req.params.id)
        .then((joke) => {
            res.json(joke)
        })
        .catch((err) => {
            res.json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, //return newly updated document.
        })
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}