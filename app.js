//strict mode 
'use strict';

// Variables
const navLinks = document.querySelector('.nav__item');
const hamburger = document.querySelector('.lines');
const textBox = document.querySelector ('.text-box');
const date = document.getElementById('date');

//eventListeners 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav__open');
});

date.innerHTML = new Date().getFullYear();