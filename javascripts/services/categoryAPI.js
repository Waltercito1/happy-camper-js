class CategoryApi {

    static baseUrl = `${baseUrl}/categories`

    static fetchCategories() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(catObj => {
            debugger
            let cat = Category.findOrCreateBy(catObj)
            cat.render()
        }))
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