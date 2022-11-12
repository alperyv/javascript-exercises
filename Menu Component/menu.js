let buttonOne = document.querySelector('#task1')
let buttonTwo = document.querySelector('#task2')
let buttonThree = document.querySelector('#task3')

let buttonOneHead = document.querySelector('#buttonOneHead')
let buttonTwoHead = document.querySelector('#buttonTwoHead')
let buttonThreeHead = document.querySelector('#buttonThreeHead')



function DoneOne() {
    buttonOneHead.classList.toggle('textOnLine')
}

function DeleteOne() {
    buttonOneHead.value = " "
}


function DoneTwo() {
    buttonTwoHead.classList.toggle('textOnLine')
}

function DeleteTwo() {
    buttonTwoHead.value = " "
}

function DoneThree() {
    buttonThreeHead.classList.toggle('textOnLine')
}

function DeleteThree() {
    buttonThreeHead.value = " "
}