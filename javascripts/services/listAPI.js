class ListApi {
    static fetchLists() {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(json => {
            //debugger
            let list = List.findOrCreateBy(json[0])
            json[0].categories.forEach(cat => {
                let category = Category.findOrCreateBy({...cat, list})
                cat.items.forEach(item => {
                    Item.findOrCreateBy({...item, category})
                })
            })
            // list.render()
        })

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