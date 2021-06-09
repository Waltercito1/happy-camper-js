
document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
    buttonShowTempl().addEventListener("click", handleLoadTemplate)

    // CategoryApi.fetchCategories()
    // ItemApi.fetchItems()
    // buttonNewTempl().addEventListener("click", displayEmptyCatTab)
})

// const mainCardsDiv = document.getElementsByClassName("cards")
const mainCardsDiv = () => document.getElementsByClassName("cards")
const cardInner = () => document.querySelector(".card__inner")
const cardExpander = () => document.querySelector(".card__expander")

const handleLoadTemplate = () => {
    Category.all.forEach(catName => {
        const categTab = document.createElement('div')
        debugger
        categTab.innerHTML = `
        <div class=" card [ is-collapsed ] ">
            <div class="card__inner [ js-expander ]">
                <span>${catName.name}</span>
            <i class="fa fa-folder-o"></i>
            </div>
            <div class="card__expander">
            <i class="fa fa-close [ js-collapser ]"></i>
                <ul class="packingItem">
                    <li id="item">Wipes</li>
                </ul>
            </div>
        </div>
        `
        mainCardsDiv().appendChild(categTab)
    })
    
    addItems()
}

// const span = document.createElement('span')
// span.className = "category-name"
// span.innerHTML = `${catName.name}`
// cardInner().appendChild(span)

const addItems = () => {
    const ul = document.createElement('ul')
    ul.class = 'packing-item'
    const li = document.createElement('li')
    li.class = 'item'
    li.innerHTML = "Wipes"
    cardExpander().appendChild(ul)
    ul.append(li)
}

/* <div class="card__expander">
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
            <li id="item">Sleeping Bags</li>
            <li id="item">Hide a Mats</li>
            <li id="item">Bedding</li>
            <li id="item">Blankets</li>
            <li id="item">Pillows</li>
            <li id="item">Hammock</li>
            <li id="item">Cots</li>
        </ul>
    </div>
</div> */

