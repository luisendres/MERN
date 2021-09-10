const express = require("express");
const app = express();
const port = 8000;

const faker = require('faker');

    let randomName = faker.name.findName(); // Rowan Nikolaus
    let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    let randomCard = faker.helpers.createCard(); // random contact card containing many properties

class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `$${faker.commerce.price()}`;
        this.department = faker.commerce.department();
    }
}

app.get("/", (req, res) => {
    res.send("Hello from express server.")
});

app.listen(port, () => {
    console.log(`Listening on port ${port} for REQuest to RESpond to.`);
});