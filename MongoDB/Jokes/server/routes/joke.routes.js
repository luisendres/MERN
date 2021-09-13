const jokeController = require("../controllers/joke.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    /* 
    @route("/api/destinations")
    def create: 

    when this URL is visited, execute the controller function.
    */
    app.post("/api/jokes", jokeController.create);
    app.get("/api/jokes", jokeController.getAll);
    app.get("/api/jokes/:id", jokeController.getOne);
    app.delete("/api/jokes/:id", jokeController.delete);
    app.put("/api/jokes/:id", jokeController.update);
};