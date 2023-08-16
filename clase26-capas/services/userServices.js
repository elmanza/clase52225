let repository = require('../repository/repositoryManager');

class User{
    getById(id){
        return repository.getById(Number(id), 'users');
    }

    getAll(){
        return repository.getAll('users');
    }

    create(payload){
        return repository.create(payload, 'users');
    }
}

module.exports = new User();