const baseUrl = "http://localhost:3000"
const buttonShowTempl = () => document.querySelector('#template')
const buttonStartNewList = () => document.querySelector('#new-list')
const ul = () => document.getElementById("packingItem")

const mainCardsDiv = () => document.querySelector(".cards")
const cardInner = () => document.querySelector(".card__inner")
const cardExpander = () => document.querySelector(".card__expander")
const flash = () => document.querySelector("#flash")
const modalBg = () => document.querySelector('.modal-bg')
const modalClose = () => document.querySelector('.modal-close')
const buttonCreateList = () => document.querySelector('.create-btn')
const ulListsDiv = () => document.querySelector('.user-and-lists')
const userAndListsDiv = () => document.querySelector('.list-flex-box-sidebar')
const buttonShowHowToSection = () => document.getElementById("nav-how-to")
const howToSection = () => document.querySelector('.how-to-section')
const buttonCloseHowToSection = () => document.querySelector('.ok-btn')
const sideBarSection = () => document.querySelector('.sidebar')
const ulAllListsDiv = () => document.querySelector('.all-user-lists')

const allThePackingLists = () => document.querySelectorAll('.packing-item')

const buttonSort = () => document.querySelector("#tab-1 > div.card__inner.\\[.js-expander.\\] > span > button")
