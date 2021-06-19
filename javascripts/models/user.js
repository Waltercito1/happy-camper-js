class User {
    static all = []

    constructor({name, id}) {
        this.name = name
        this.id = id
        User.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(name) {
        return this.all.find(function(user) { user.name === name})
    }
 
    static findById(id) {
        return this.all.find(user => user.id === id)
    }
 
    static findOrCreateBy(userObj) {
        return this.findByName(userObj.name) || new User(userObj)
    }

    static displayUserAndList(list, user) {
        //debugger
        const userName = user.name
        const h2 = document.createElement('h2')
        h2.class = 'welcome-user-name'
        h2.innerText = `Welcome ${userName}!`
        userAndListsDiv().appendChild(h2)
        sideBarSection().classList.remove('hide')
        const ul = document.createElement('ul')
        ul.class = 'user-lists'
        const li = document.createElement('li')
        li.class = 'current-list'
        li.id = `list-${list.id}`
        li.innerHTML = `
                <div class="user-list-flex-box" >
                <div class="icon-hover"><a href="#" id="list-name">${list.title}</a></div>
                </div>
               `
        ul.appendChild(li)
        ulListsDiv().appendChild(ul)
    }

}