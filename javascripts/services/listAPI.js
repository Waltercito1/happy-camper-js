class ListApi {
    static fetchLists() {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(json => {debugger})

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