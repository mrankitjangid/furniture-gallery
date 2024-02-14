"use strict";

let menu = document.querySelector('#menu-icon');
let list = document.querySelector('ul');

menu.onclick = () => {
    list.classList.toggle('active');
}

window.onscroll = () => {
    list.classList.remove('active');
}