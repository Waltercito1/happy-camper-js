class Item {
    static all = []

    constructor({name, packed, category, id}) {
        this.name = name
        this.packed = packed
        this.category_id = category.id
        this.id = id
        Item.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(item) {item.name === name})
    }

    static findById(id) {
        return this.all.find(item => item.id === id)
    }

    static findOrCreateBy(itemObj) {
        return this.findByName(itemObj.name) || new Item(itemObj)
    }

    update({name, packed}) {
        let currentItem = Item.findById(this.id)
        currentItem.name = name
        currentItem.packed = packed
        return currentItem
    }
}