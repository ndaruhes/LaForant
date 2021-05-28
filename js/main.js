// NAVBAR
let navbar = document.querySelector('.navbar')
window.onscroll = function(){
    const yScroll = window.scrollY
    if(yScroll > 100){
        navbar.classList.add('fly-navbar')
    }else{
        navbar.classList.remove('fly-navbar')
    }
}
// console.log(window.scrollY)