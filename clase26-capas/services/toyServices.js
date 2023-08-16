let repository = require('../repository/repositoryManager');
class Toy{
    
    getById(id){
        return repository.getById(Number(id), 'toys');
    }

    getAll(){
        return repository.getAll('toys');
    }

    create(payload){
        return repository.create(payload, 'toys');
    }
}

module.exports = new Toy();