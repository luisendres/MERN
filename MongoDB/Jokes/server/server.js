const express = require("express");
const cors = require("cors");

// Environment vars
const port = 8000;
const db_name = "jokes";

// Import the function from mongoose.config then execute it.
require("./config/mongoose.config")(db_name);

const app = express();

// req.body is undefined without this!
app.use(express.json());
require("./routes/joke.routes")(app);

// After all the routes have been added, server is ready to handle requests.
app.listen(port, () => 
console.log(`Listening on port ${port} for REQest to RESpond to.`)
);