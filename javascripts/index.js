
document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
    buttonShowTempl().addEventListener("click", handleLoadTemplate)

    // CategoryApi.fetchCategories()
    // ItemApi.fetchItems()
    // buttonNewTempl().addEventListener("click", displayForm)
})

const handleLoadTemplate = () => {
    const span = document.createElement('span')
    span.className = "category-name"
    span.innerHTML = "Bathroom"
    cardInner().appendChild(span)

    addItems()
}

const cardInner = () => document.querySelector(".card__inner")
const cardExpander = () => document.querySelector(".card__expander")

/* <div class="card__expander">
    <i class="fa fa-close [ js-collapser ]"></i>
        <ul class="packingItem">
            <li id="item">
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

const addItems = () => {
    const ul = document.createElement('ul')
    ul.class = 'packing-item'
    const li = document.createElement('li')
    li.class = 'item'
    li.innerHTML = "Wipes"
    cardExpander().appendChild(ul)
    ul.append(li)
}