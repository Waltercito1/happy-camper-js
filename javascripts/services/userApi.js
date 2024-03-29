class UserApi {

    static baseUrl = `${baseUrl}/users`

    static fetchUsers() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(userObj => {
            User.findOrCreateBy(userObj)
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

    static handleUserSubmit(e) {
        e.preventDefault()
        const useData = {
            name: document.querySelector("#user-name").value
        }
        fetch(UserApi.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(useData)
        })
        .then(resp => resp.json())
        .then(json => {
            let user = User.findOrCreateBy(json)
            ListApi.createNewListFromTemplate(user, e)
        })
    }

    static loadAllUserList(user) {
        fetch(`http://localhost:3000/users/${user.id}`)
        .then(resp => resp.json())
        .then(json => List.addListsToSidebar(json.lists))

        .catch(this.handleError)
    }

}