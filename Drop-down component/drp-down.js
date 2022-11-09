let subWrap = document.getElementById('subWrap')

function dropDown() {
    subWrap.classList.toggle('open-menu')
}

const body = document.getElementById('body')

let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')

let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')
let a4 = document.getElementById('a4')

let subMenu = document.querySelector('.sub-menu')

let aa1 = document.getElementById('aa1')
let aa2 = document.getElementById('aa2')
let aa3 = document.getElementById('aa3')
let aa4 = document.getElementById('aa4')
let aa5 = document.getElementById('aa5')


function changeTheme() {

    // body
    body.classList.toggle('bodyWhite')
    
    // navbar
    navbar.classList.toggle('navDark')
    logo.classList.toggle('logoWhite')
    
    //  navbar - menuLinks
    a1.classList.toggle('menuLinksWhite')
    a2.classList.toggle('menuLinksWhite')
    a3.classList.toggle('menuLinksWhite')
    a4.classList.toggle('menuLinksWhite')
    
    //subMenu
    subMenu.classList.toggle('subeMenuDark')
    
    // subMenu link
    aa1.classList.toggle('subMenuLinksWhite')
    aa2.classList.toggle('subMenuLinksWhite')
    aa3.classList.toggle('subMenuLinksWhite')
    aa4.classList.toggle('subMenuLinksWhite')
    aa5.classList.toggle('subMenuLinksWhite')

}