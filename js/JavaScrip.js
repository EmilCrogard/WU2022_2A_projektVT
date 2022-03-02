const nav = document.getElementById('header_links')
const burger = document.getElementById('burger')

function toggleMenu() {
    nav.classList.toggle('header_active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)