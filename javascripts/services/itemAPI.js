class ItemApi {

    static baseUrl = `${baseUrl}/items`

    static fetchItems() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(resp => {debugger})

        .catch(this.handleError)
    }

    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.add("hide")
        }, 5000)
    }

    static handleDelete(e) {
        const liId = e.target.parentElement.id
        const itemId = liId.split('-',2)[1]
        document.getElementById(e.target.parentElement.id).remove()
        const item = Item.findById(parseInt(itemId))
        //debugger
        item.delete(item)
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
        document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-save`).addEventListener("click", ItemApi.handleUpdatedItem)
        debugger

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

    static handleUpdatedItem(e) {
        e.preventDefault()
        debugger
    }

}