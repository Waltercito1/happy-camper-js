class Category {
    static all = []

    constructor({name, id}) {
        this.name = name
        // this.list_id = list.id
        this.id = id
        Category.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(name) {
       return this.all.find(function(category) { category.name === name})
    }

    static findById(id) {
        return this.all.find(category => category.id === id)
    }

    static findOrCreateBy(categoryObj) {
        return this.findByName(categoryObj.name) || new Category(categoryObj)
    }

    // renderCategory() {
    //     const span = document.createElement("span")
    //     const a = document.createElement("a")
    //     a.id = `category-${this.id}`
    //     a.innerText = this.name
    //     a.href = "#"
    //     // a.addEventListener("click", this.renderItems)
    //     span.appendChild(a)
    //     categoryName().appendChild(span)
    // }

    
}