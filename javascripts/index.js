
document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
    buttonShowTempl().addEventListener("click", handleLoadTemplate)

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
    }

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


/* <div class=" card [ is-collapsed ] ">
    <div class="card__inner [ js-expander ]">
    <!-- <span>Sleeping</span> -->
    <i class="fa fa-folder-o"></i>
    </div>
    <div class="card__expander">
        <i class="fa fa-close [ js-collapser ]"></i>
            <ul class="packingItem">
                <li class="item">
                    <div class="list-flex-box" >
                        <div class="icon-hover">Tent</div>
                        <div class="icon-flex-box">
                            <div class="icon-spacing"><i class="fas fa-edit icon-hover"></i></div>
                            <div class="icon-spacing"><i class="far fa-trash-alt icon-hover-delete"></i></div>
                            <div class="icon-spacing"><i class="fas fa-check-square icon-hover"></i></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div> */

