const playerController = require("../controllers/player.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    app.post("/api/players/list", playerController.create);
    app.get("/api/players/list", playerController.getAll);
    app.get("/api/:id", playerController.getOne);
    app.delete("/api/players/:id", playerController.delete);
    app.put("/api/:id", playerController.update);
};