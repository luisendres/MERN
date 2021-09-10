const express = require("express");
const app = express();
const port = 8000;

const faker = require('faker');

app.use(express.json());

//used for examples when I neeeded to call something from the faker api
let randomName = faker.name.findName(); // Rowan Nikolaus
let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
let randomCard = faker.helpers.createCard(); // random contact card containing many properties

//used as a base to create the other classes and for testing
class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `$${faker.commerce.price()}`;
        this.department = faker.commerce.department();
    }
}

class User {
    constructor(id) {
        this.id = id;
        // this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor(id) {
        this.id = id;
        this.name = faker.company.companyName();
        // this.address = faker.address.streetAddress();
        this.address = [faker.address.streetAddress(),faker.address.city(),faker.address.state(),faker.address.zipCode(),faker.address.country()]
    }
}


app.get("/", (req, res) => {
    res.send("Hello from express server.")
});
//used only for testing
app.get("/api/test", (req, res) => {
    const tester = new Product();
    res.json(tester);
});
app.get("/api/users/new", (req, res) => {
    const users = [new User(1), new User(2),new User(3)]
    res.json(users);
});
app.get("/api/companies/new", (req, res) => {
    const companies = [new Company(1),new Company(2),new Company(3)]
    res.json(companies);
});
app.get("/api/user/company", (req, res) => {
    const userCO = [new User(1), new Company(1)]
    res.json(userCO);
});

//anything below was meant for testing to see what would and wouldn't work 

// const products = [
//     {name: faker.name.findName()}
// ];
// console.log(new Product());

// app.get("/api/products", (req, res) => {
//     const products = [
//         {
//             id: 1,
//             name: "Luis"
//         },
//         {
//             id: 1,
//             name: faker.name.findName()
//         }
//     ];
//     res.json(products);
// });

// app.get("/api/users", (req, res) => {
//     res.json( users );
// });

// app.get("/api/cities", (req, res) => {
//     const pretendWeGotThisDataFromADB = [
//       {
//         id: 1,
//         name: "Aogashima",
//         population: 170,
//       },
//       {
//         id: 2,
//         name: "Longyearbyen",
//         population: 2144,
//       },
//       {
//         id: 3,
//         name: "Kennedy Meadows",
//         population: 28,
//       },
//     ];
//     res.json(pretendWeGotThisDataFromADB);
//   });

app.listen(port, () => {
    console.log(`Listening on port ${port} for REQuest to RESpond to.`);
});