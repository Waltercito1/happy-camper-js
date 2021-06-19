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

    static handleUpdate(e) {
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        const item = Item.findById(parseInt(itemId))
        e.target.parentElement.parentElement.parentElement.innerHTML = `
            <div class="icon-hover"><input type="text" name="name" id="item-name" value="${item.name}"></div>
            <div class="icon-flex-box">
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-save"></i></div>
            </div>
            `
        document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-save`).addEventListener("click", Item.handleUpdatedItem)
    }

    static handleUpdatedItem(e) {
        e.preventDefault()
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        const item = Item.findById(parseInt(itemId))
        item.name = e.target.parentElement.parentElement.parentElement.querySelector("#item-name").value
        item.replaceElement(e.target.parentElement)
    }

    update({name, packed}) {
        let currentItem = Item.findById(this.id)
        currentItem.name = name
        currentItem.packed = packed
        return currentItem
    }

    delete(item) {
        let index = Item.all.indexOf(item)
        if (index > -1) {
            Item.all.splice(index, 1)
        }
    }

    replaceElement(div) {
        debugger
        div.parentElement.parentElement.innerHTML = `
            <div class="icon-hover">${this.name}</div>
            <div class="icon-flex-box">
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-edit icon-hover"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-check-square checked icon-hover"></i></div>
            </div>
        `
    }    

}