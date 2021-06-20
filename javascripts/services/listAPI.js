class ListApi {

    static baseUrl = `${baseUrl}/lists`

    static fetchLists() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
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
        fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(listData)
        })
        .then(resp => resp.json())
        .then(json => { 
            let newList = new List(json)
            this.fetchListForCategoriesForNewList(newList, user)
        })
        .catch(this.handleError)
        handleCloseModal()
    }

    static fetchListForCategoriesForNewList(list, user) {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json[0].categories.forEach(cat => {
                let category = new Category({...cat, list})
                cat.items.forEach(item => {
                    new Item({...item, category})
                })
            })
        })
        .catch(this.handleError)
        User.displayUserAndList(list, user)
    }

    static handleSaveList(e) {
        const listId = e.target.parentElement.parentElement.parentElement.id
        const currentList = List.findById(parseInt(listId))
        const currentCats = currentList.findCategories()
        // const currentItems = currentCats.forEach(cat => {
        //     cat.findItems()
        // })
        debugger
        const data = {
            id: e.target.parentElement.parentElement.parentElement.id,
            title: currentList.title,
            categories: currentCats,
        }

        fetch(`http://localhost:3000/lists/${data.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            debugger
        })
        .catch(err => alert(err))

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