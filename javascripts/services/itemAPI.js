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
        const itemId = e.target.parentElement.id
        document.getElementById(e.target.parentElement.id).remove()
        
        // debugger

    }

    static handleUpdate(e) {

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

}