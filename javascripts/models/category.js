class Category {
    static all = []

    constructor({name, id, list}) {
        this.name = name
        this.list_id = list.id
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

    findItems() {
        // return Item.all.filter(function(item) { item.category_id === this.id })
        return Item.all.filter(item => this.id === item.category_id)
    }

    addItems() {
        const items = this.findItems()
        const ul = document.createElement('ul')
        ul.class = 'packing-item'
        
        items.forEach(item => {
            const li = document.createElement('li')
            li.class = 'item'
            li.innerHTML = `${item.name}`
            
            const categoryDiv = document.querySelector(`#tab-${item.category_id} .card__expander`)
            ul.appendChild(li)
            categoryDiv.appendChild(ul)
        })}
    }