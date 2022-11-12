let input = document.querySelector('#taskInput')
let addButton = document.querySelector('#addOn')
let buttons = document.getElementsByClassName('buttonLi')
let deleteButton = document.querySelectorAll('.buttonDelete')


function completed() {
    buttons.classList.toggle('completedClass')
}
