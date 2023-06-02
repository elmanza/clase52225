
let database = [
  "Federico",
  "Andres",
  "Emma"
]

class User {
  get(req, res){
    
    res.json(database);
  }

  create(req, res){
    let { name } = req.body;
    database.push(name);
    res.json(database);
  }
}

module.exports = new User();