// Variables
const navLinks = document.querySelector('.nav__item');
const hamburger = document.querySelector('.lines')
const textBox = document.querySelector ('.text-box')

//eventListeners 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav__open');

});
