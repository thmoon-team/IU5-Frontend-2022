//Задание 1-------------------------------------------------------------------------------------------

//const { response } = require("express");

const square = document.getElementById('square')

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    square.innerHTM = color;
    return color;
}

const handleButtonClick = (e) => {
    const color = getRandomColor()
    square.style.backgroundColor = color
    document.getElementById('random').innerHTML = color
}

square.addEventListener('click', handleButtonClick)

//-------------------------------------------------------------------------------------------

//Задание 2-------------------------------------------------------------------------------------------

const counter = document.querySelector('#counter')
let num = 0;
let addTimeout = null;


function count() {
    clearTimeout(null);
    counter.innerHTML = num;
    ++num
    addTimeout = setTimeout(count, 1000);
}

function stop() {
    clearTimeout(addTimeout);
    --num;
    return
}

counter.addEventListener('mouseover', count);
counter.addEventListener('mouseout', stop);

//-------------------------------------------------------------------------------------------

//Задание 3-------------------------------------------------------------------------------------------

function myFunction() {
    const myDropdown = document.getElementById("myDropdown")
    myDropdown.classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
        if (myDropdown_2.classList.contains('show')) {
            myDropdown_2.classList.remove('show');
        }
    }
}

//-------------------------------------------------------------------------------------------

//Задание 4-------------------------------------------------------------------------------------------

let isClick = false;
let isEsc = true

const square_4 = document.getElementById('square_4')
const circle = document.getElementById('circle')

circle.addEventListener('click', (e) => {
    circle.style.position = 'absolute';
    isClick = true
    isEsc = true
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        isEsc = false
    }
})

const edgeLeft = square_4.offsetLeft + circle.offsetWidth / 2
const edgeTop = square_4.offsetTop + circle.offsetWidth / 2
const edgeWidth = square_4.offsetWidth - circle.offsetWidth + edgeLeft
const edgeHeight = square_4.offsetHeight - circle.offsetHeight + edgeTop

square_4.addEventListener('mousemove', (e) => {
    if (isClick && isEsc) {
        let X = e.pageX
        let Y = e.pageY
        if (X > edgeLeft && X < edgeWidth && Y > edgeTop && Y < edgeHeight) {
            console.log("TRUE")
            circle.style.left = X - circle.offsetWidth / 2 + 'px';
            circle.style.top = Y - circle.offsetHeight / 2 + 'px';
        } else {
            console.log("FALSE")
        }
    }
});

//-------------------------------------------------------------------------------------------

//Задание 5-------------------------------------------------------------------------------------------

fetch('https://www.breakingbadapi.com/api/episodes')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const myDropdown_2 = document.getElementById("myDropdown_2")
        data.map((x) => {
            let a = document.createElement('a');
            a.innerText = x.title
            myDropdown_2.append(a)
        })
    })

function myFunction_2() {
    myDropdown_2.classList.toggle("show");
}