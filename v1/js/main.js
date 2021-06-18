// NAVBAR
let navbar = document.querySelector('.navbar')
let toggleMenu = document.querySelector('.toggle-menu')
let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.cross')

window.onscroll = function(){
    const yScroll = window.scrollY
    if(yScroll > 100){
        navbar.classList.add('fly-navbar')
    }else{
        navbar.classList.remove('fly-navbar')
    }
}

toggleMenu.onclick = function(){
    menu.classList.toggle('display-block')
    navbar.classList.toggle('navbar-active')
    hamburger.classList.toggle('display-none')
    cross.classList.toggle('display-block')
}