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
        //debugger
        // return Item.all.filter(item => this.id === item.category_id)
        return Item.all.filter(item => (this.id === item.category_id) && (this.list_id === item.list_id))
    }

    addItems() {
        const items = this.findItems()
        const ul = document.createElement('ul')
        ul.class = 'packing-item'
        
        items.forEach(item => {
            const li = document.createElement('li')
            li.class = 'item'
            li.id = `item-${item.id}`
            if (item.packed === true) {    
                li.innerHTML = `
                <div class="list-flex-box" >
                <div class="icon-hover">${item.name}</div>
                <div class="icon-flex-box">
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-edit icon-hover"></i></div>
                <div class="icon-spacing" id="item-${item.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-check-square checked icon-hover"></i></div>
                </div>
                </div>
                `            
            } else {
                li.innerHTML = `
                <div class="list-flex-box" >
                <div class="icon-hover">${item.name}</div>
                <div class="icon-flex-box">
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-edit icon-hover"></i></div>
                <div class="icon-spacing" id="item-${item.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-check-square icon-hover"></i></div>
                </div>
                </div>
                `
            }
            const categoryDiv = document.querySelector(`#tab-${item.category_id} .card__expander`)
            ul.appendChild(li)
            categoryDiv.appendChild(ul)

            document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-edit`).addEventListener('click', Item.handleUpdate)
            document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-trash-alt`).addEventListener('click', Item.handleDelete)
            document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-check-square`).addEventListener('click', Item.handleCheckMark)
        })}
    }