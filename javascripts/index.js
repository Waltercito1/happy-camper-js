
document.addEventListener('DOMContentLoaded', () => {
    ListApi.fetchLists()
    UserApi.fetchUsers()
    buttonShowTempl().addEventListener('click', handleLoadTemplate)
    buttonShowHowToSection().addEventListener('click', handleShowHowTo)

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

