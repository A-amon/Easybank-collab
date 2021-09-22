const menuOpen = document.querySelector(".navbar__open")
const menuClose = document.querySelector(".navbar__close")
const mainMenu = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")
const navigator = document.querySelector(".navbar")
const overlay = document.querySelector(".overlay")
/*
* Show/ hide nav dropdown

* Handle hamburger button click event  
*/
navbarMenu.addEventListener("click", function () {
    navbarMenu.classList.toggle("navbar__show")
    navbarMenu.classList.toggle("navbar__menu-close")
    mainMenu.classList.toggle("navbar__list-drop")

    // document.querySelector(".overlay").remove(".active")
    // document.body.classList.toggle('overlay')


    toggleScroll()
})
const toggleScroll = () => {

    document.body.classList.toggle('hide-scroll')


}
