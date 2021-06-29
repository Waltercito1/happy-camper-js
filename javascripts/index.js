
document.addEventListener('DOMContentLoaded', () => {
    ListApi.fetchLists()
    UserApi.fetchUsers()
    buttonShowTempl().addEventListener('click', handleLoadTemplate)
    buttonShowHowToSection().addEventListener('click', handleShowHowTo)

    //(cardTab().classList.contains('is-expanded')) ? (document.querySelector(".sortingBttn").classList.remove('hide')) : (document.querySelector(".sortingBttn").classList.add('hide'))
    
    // buttonNewTempl().addEventListener("click", displayEmptyCatTab)
})

const handleLoadTemplate = () => {
    let i = 1
    if (!document.querySelector("#tab-1 .card__inner span")) {
        Category.all.forEach(catObj => {
            const span = document.createElement('span')
            span.className = "category-name"
            span.innerHTML = `${catObj.name}
            <i class="fa fa-folder-o"></i>
            <button class="sortingBttn">Sort items by name</button>
            `
            document.querySelector(`#tab-${i} .card__inner`).appendChild(span)
            catObj.addItems()
            i++
        })
        handleOpenModal()
    }
}

const handleOpenModal = () => {
    modalBg().classList.add('bg-active')
    modalClose().addEventListener('click', handleCloseModal)
    buttonCreateList().addEventListener('click', UserApi.handleUserSubmit)
}

const handleCloseModal = () => {
    modalBg().classList.remove('bg-active')
}

const handleShowHowTo = () => {
    (howToSection().classList.contains('hide')) ? howToSection().classList.remove('hide') : howToSection().classList.add('hide')
    buttonCloseHowToSection().addEventListener('click', handleCloseHowTo)
}

const handleCloseHowTo = () => {
    howToSection().classList.add('hide')
}

const sortList = (e) => {
    e.stopPropagation()
    const currentList = List.findById(parseInt(document.querySelector('.current-list').id))
    const tabId = e.target.parentElement.parentElement.parentElement.id
    const categId = parseInt(tabId.split('-',2)[1])
    const currentCategory = currentList.findCategories().find(Category => Category.id === categId)
    const items = currentCategory.findItems()
    items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    
    const listItemsInUl = () => document.querySelector(`#tab-${categId} > div.card__expander > ul.packing-item`)

    currentCategory.removeLisFromUl(listItemsInUl)

    reAppendSortedLis(items, listItemsInUl, categId)
}

const reAppendSortedLis = (items, ul, categId) => {
    items.forEach(item => {
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
        ul().appendChild(li)

        document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-edit`).addEventListener('click', Item.handleUpdate)
        document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-trash-alt`).addEventListener('click', Item.handleDelete)
        document.querySelector(`#tab-${item.category_id} .card__expander #item-${item.id} .fa-check-square`).addEventListener('click', Item.handleCheckMark)
    })
    document.querySelector(`#tab-${categId} > div.card__inner.\\[.js-expander.\\] > span > button`).addEventListener('click', sortList)
}