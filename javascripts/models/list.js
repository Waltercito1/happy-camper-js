class List {
    static all = []

    constructor({title, id}) {
        this.title = title
        this.id = id
        List.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(title) {
        return this.all.find(function(list) { list.title === title})
    }
 
     static findById(id) {
         return this.all.find(list => list.id === id)
    }
 
     static findOrCreateBy(listObj) {
         return this.findByName(listObj.title) || new List(listObj)
    }

}