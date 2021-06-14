class User {
    static all = []

    constructor({name, id}) {
        this.name = name
        this.id = id
        User.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(name) {
        return this.all.find(function(user) { user.name === name})
    }
 
    static findById(id) {
         return this.all.find(user => user.id === id)
    }
 
     static findOrCreateBy(userObj) {
         return this.findByName(userObj.name) || new User(userObj)
    }

}