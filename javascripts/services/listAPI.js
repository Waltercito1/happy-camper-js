class ListApi {

    static baseUrl = `${baseUrl}/lists`

    static fetchLists() {
        fetch(this.baseUrl)
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
        })
        .catch(this.handleError)
    }

    static createNewListFromTemplate(user ,e) {
        e.preventDefault()
        const listData = {
            user_id: user.id,
            title: document.querySelector("#list-name").value
        }
        fetch(ListApi.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(listData)
        })
        .then(resp => resp.json())
        .then(json => { 
            let newList = new List(json)
            this.fetchListForCategoriesForNewList(newList)
        })
        .catch(this.handleError)
        handleCloseModal()
    }

    static fetchListForCategoriesForNewList(list) {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json[0].categories.forEach(cat => {
                //debugger
                let category = new Category({...cat, list})
                cat.items.forEach(item => {
                    new Item({...item, category})
                })
            })
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