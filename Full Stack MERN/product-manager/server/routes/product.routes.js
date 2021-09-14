const productController = require("../controllers/product.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    /* 
    @route("/api/products")
    def create: 

    when this URL is visited, execute the controller function.
    */
    app.post("/api/products", productController.create);
    app.get("/api/products", productController.getAll);
    app.get("/api/products/:id", productController.getOne);
    app.delete("/api/products/:id", productController.delete);
    app.put("/api/products/:id", productController.update);
};