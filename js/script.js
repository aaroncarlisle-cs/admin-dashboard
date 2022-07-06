function openMenu() {
    let menu = document.querySelector('.nav-container');
    menu.style.display = 'block';
}
function closeMenu() { 
    let menu = document.querySelector('.nav-container');
    menu.style.display = 'none';
}
function menuEvents() {
    let menuBtn = document.getElementById('menu-open-button')
    let menuCloseBtn = document.getElementById('menu-close-button')
    menuBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);
}

window.addEventListener('DOMContentLoaded', menuEvents);