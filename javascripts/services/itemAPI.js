class ItemApi {
    static fetchItems() {
        fetch('http://localhost:3000/items')
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

}