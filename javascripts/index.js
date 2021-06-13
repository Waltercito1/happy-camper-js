
document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
    buttonShowTempl().addEventListener("click", handleLoadTemplate)
    // modalBtn.addEventListener('click', function(){
    //     modalBg.classList.add('bg-active')
    // })
    // modalClose.addEventListener('click', function(){
    //     modalBg.classList.remove('bg-active')
    // })
    // CategoryApi.fetchCategories()
    // ItemApi.fetchItems()
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
        handleModal()
    }
}

const handleModal = (categories) => {
    modalBg().classList.add('bg-active')
    modalClose().addEventListener('click', handleCloseModal)
}

const handleCloseModal = () => {
    modalBg().classList.remove('bg-active')
}

// const handleLoadTemplate = () => {
//     Category.all.forEach(catObj => {
//         const categTab = document.createElement('div')
//         categTab.classList.add( 'card', '[', 'is-collapsed', ']')
//         categTab.innerHTML = `
//             <div class="card__inner [ js-expander ]">
//                 <span>${catObj.name}</span>
//             <i class="fa fa-folder-o"></i>
//             </div>
//             <div class="card__expander">
//             <i class="fa fa-close [ js-collapser ]"></i>
//                 <ul id="packingItem">
//                     <li id="item">Tent</li>
//                 </ul>
//             </div>
//         `
//         mainCardsDiv().appendChild(categTab)
//     })
//     addItems()
// }


