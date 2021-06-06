const buttonContainer = () => document.getElementById("button-container")
const buttonShowTempl = () => document.getElementById("button-load-template")
const buttonNewTempl = () => document.getElementById("button-create-new")
const ul = () => document.getElementById("categories-list")

document.addEventListener("DOMContentLoaded", () => {
    buttonShowTempl().addEventListener("click", handleClick)
    buttonNewTempl().addEventListener("click", displayForm)
})

