

class Repository{

    constructor(){
        this.data = {
            toys: [],
            users: []
        }
    }

    getById(id, model){
        return this.data[model].find(user => user.id === id);
    }

    getAll(model){
        return this.data[model]
    }

    create(payload, model){
        const id = this.data[model].length + 1;
        this.data[model].push({
            id,
            ...payload
        })
        return this.data[model];
    }
}

module.exports = new Repository();