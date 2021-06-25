class Item {
    static all = []

    constructor({name, packed, category, id}) {
        this.name = name
        this.packed = packed
        this.category_id = category.id
        this.list_id = category.list_id
        this.id = id
        Item.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(item) {item.name === name})
    }

    static findById(id) {
        return this.all.find(item => (item.id === id) && (item.list_id === List.all[1].id))  //fix hard coded List
    }

    static findOrCreateBy(itemObj) {
        return this.findByName(itemObj.name) || new Item(itemObj)
    }

    static handleUpdate(e) {
        const tabId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        const item = Item.findById(parseInt(itemId))
        e.target.parentElement.parentElement.parentElement.innerHTML = `
            <div class="icon-hover"><input type="text" name="name" id="item-name" value="${item.name}"></div>
            <div class="icon-flex-box">
                <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-save"></i></div>
            </div>
            `
        document.querySelector(`#${tabId} .card__expander #item-${item.id} .fa-save`).addEventListener("click", Item.handleUpdatedItem)
    }

    static handleUpdatedItem(e) {
        e.preventDefault()
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        const item = Item.findById(parseInt(itemId))
        item.name = e.target.parentElement.parentElement.parentElement.querySelector("#item-name").value
        item.replaceElement(e.target.parentElement)
    }

    static handleDelete(e) {
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        document.getElementById(e.target.parentElement.id).remove()
        const item = Item.findById(parseInt(itemId))
        item.delete(item)
    }

    static handleCheckMark(e) {
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        const checkedItem = Item.findById(parseInt(itemId))
        if (checkedItem.packed === false) {
            e.target.parentElement.classList.add('checked')
            checkedItem.packed = true
            checkedItem.update(checkedItem)
        } else {
            e.target.parentElement.classList.remove('checked')
            checkedItem.packed = false
            checkedItem.update(checkedItem)
        }
    }

    update({name, packed}) {
        let currentItem = Item.findById(this.id)
        currentItem.name = name
        currentItem.packed = packed
        return currentItem
    }

    replaceElement(div) {
        const tabId = div.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id
        debugger
        if (this.packed === true) {
            div.parentElement.parentElement.innerHTML = `
            <div class="icon-hover">${this.name}</div>
            <div class="icon-flex-box">
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-edit icon-hover"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-check-square checked icon-hover"></i></div>
            </div>
            `
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-edit`).addEventListener('click', Item.handleUpdate)
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-trash-alt`).addEventListener('click', Item.handleDelete)
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-check-square`).addEventListener('click', Item.handleCheckMark)
        } else {
            div.parentElement.parentElement.innerHTML = `
            <div class="icon-hover">${this.name}</div>
            <div class="icon-flex-box">
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-edit icon-hover"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
            <div class="icon-spacing" id="item-${this.id}"><i class="fas fa-check-square icon-hover"></i></div>
            </div>
            `
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-edit`).addEventListener('click', Item.handleUpdate)
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-trash-alt`).addEventListener('click', Item.handleDelete)
            document.querySelector(`#${tabId} .card__expander #item-${this.id} .fa-check-square`).addEventListener('click', Item.handleCheckMark)
        }
    }
    
    delete(item) {
        let index = Item.all.indexOf(item)
        if (index > -1) {
            Item.all.splice(index, 1)
        }
    }
}