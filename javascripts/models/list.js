class List {
    static all = []

    constructor({title, id}) {
        this.title = title
        this.id = id
        List.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(title) {
        return this.all.find(function(list) { list.title === title})
    }
 
    static findById(id) {
        return this.all.find(list => list.id === id)
    }
 
    static findOrCreateBy(listObj) {
        return this.findByName(listObj.title) || new List(listObj)
    }

    findCategories() {
        return Category.all.filter(cat => this.id === cat.list_id)
    }

    static addListsToSidebar(lists) {
        const currentListId = parseInt(document.querySelector('.current-list').id)
        if (lists.length > 1) {
            const h2 = document.createElement('h2')
            h2.className = 'user-lists-h2'
            h2.innerText = "Other Lists You've Created"
            ulAllListsDiv().appendChild(h2)
            const ul = document.createElement('ul')
            ul.className = "all-user-lists"
            lists.forEach(list => {
                if (list.id !== currentListId) {      //test
                const li = document.createElement('li')
                li.id = `${list.id}`
                li.innerHTML = `
                <div class="user-list-flex-box" >
                <div class="icon-hover"><a href="#" id="${list.id}">${list.title}</a></div>
                </div>
                `
                ul.appendChild(li)
            }})
            ulAllListsDiv().appendChild(ul)
        }
    }


}