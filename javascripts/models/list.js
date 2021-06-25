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

    static renderUpdatedList(updatedList) {
        this.resetItemsInUl()
        let i = 1
        // const categoryUl = document.querySelector(".packing-item")
        const categoryUl = document.querySelector(`#tab-${i} .card__inner`).parentElement.lastElementChild.lastElementChild
        updatedList.categories.forEach(category => {
            category.items.forEach(item => {
                //debugger
                const li = document.createElement('li')
                li.className = 'item'
                li.id = `item-${item.id}`
                if (item.packed === true) {    
                    li.innerHTML = `
                    <div class="list-flex-box" >
                    <div class="icon-hover">${item.name}</div>
                    <div class="icon-flex-box">
                    <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-edit icon-hover"></i></div>
                    <div class="icon-spacing" id="item-${item.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
                    <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-check-square checked icon-hover"></i></div>
                    </div>
                    </div>
                    `            
                } else {
                    li.innerHTML = `
                    <div class="list-flex-box" >
                    <div class="icon-hover">${item.name}</div>
                    <div class="icon-flex-box">
                    <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-edit icon-hover"></i></div>
                    <div class="icon-spacing" id="item-${item.id}"><i class="far fa-trash-alt icon-hover-delete"></i></div>
                    <div class="icon-spacing" id="item-${item.id}"><i class="fas fa-check-square icon-hover"></i></div>
                    </div>
                    </div>
                    `
                }
                const categoryDiv = document.querySelector(`#tab-${i} .card__expander`)
                categoryUl.appendChild(li)
                categoryDiv.appendChild(categoryUl)
    
                document.querySelector(`#tab-${i} .card__expander #item-${item.id} .fa-edit`).addEventListener('click', Item.handleUpdate)
                document.querySelector(`#tab-${i} .card__expander #item-${item.id} .fa-trash-alt`).addEventListener('click', Item.handleDelete)
                document.querySelector(`#tab-${i} .card__expander #item-${item.id} .fa-check-square`).addEventListener('click', Item.handleCheckMark)
            })
            i++
        })

        
    }

    static resetItemsInUl() {
        allThePackingLists().forEach(list => {
            while (list.firstChild) 
            list.removeChild(list.lastChild)    
        })
    }
}