const express = require("express");
const faker = require("faker");
const app = express();
const PORT = 3001;

faker.locale = "es";

const generateUsers = cant => {
  const user = [];
  for (let i = 0; i < cant; i++) {
    let _user = {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
      role: faker.random.arrayElement(['cliente', 'vendedor']),
      isPremium: faker.datatype.boolean(),
      occupation: faker.name.jobTitle()
    }
    user.push(_user);
  }
  return user;
}

const generateProducts = cant => {
  const product = [];
  for (let i = 0; i < cant; i++) {
    let _product = {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      code: faker.datatype.uuid().substring(0,8),
      description: faker.commerce.productDescription()
    }
    product.push(_product);
  }
  return product;
}

app.get("/api/users", (req, res, next) => {
  let count = req.query?.count || 10;
  let response = generateUsers(Number(count));
  res.json(response);
})


app.get("/api/products", (req, res, next)=>{
  let count = req.query?.count || 10;
  let response = generateProducts(Number(count));
  res.json(response);
})



app.listen(PORT, console.log(`http://localhost:${PORT}`));