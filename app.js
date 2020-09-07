// Variables
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__item');
const hamburger = document.querySelector('.lines')

//eventListeners 
hamburger.addEventListener( 'click', () => {
    navLinks.classList.toggle('nav__open');
});