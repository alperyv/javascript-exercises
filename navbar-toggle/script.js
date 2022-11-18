const toggleButton = document.querySelector('.toggle-button')
const links = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})
