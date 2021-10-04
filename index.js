
const navbarMenu = document.querySelector('.navbar__menu')
const navbarList = document.querySelector('.navbar__list')
const hamburger = document.querySelector('.navbar__menu-hamburger')
const mockUp = document.querySelector('.hero__img')
const overlay = document.querySelector('.overlay')
const hero = document.querySelector('.hero')
const close = document.querySelector('.navbar__menu-close')

navbarMenu.addEventListener('click', () => {
    navbarList.classList.toggle("toggle");
    hamburger.classList.toggle("hide");
    navbarList.classList.toggle("hide");
    close.classList.toggle("change")
    mockUp.classList.toggle("hide");
    hero.classList.toggle('overlay');

    toggleScroll();

});

//  *stop-scroll/
const toggleScroll = () => {
    document.body.classList.toggle('hide-scroll')

}
