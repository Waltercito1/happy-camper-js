class userApi {

    static baseUrl = `${baseUrl}/users`

    static fetchUsers() {
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

    // static handleDelete(e) {
    //     debugger
    // }

    // static handleUpdate(e) {
    //     debugger
    // }

}