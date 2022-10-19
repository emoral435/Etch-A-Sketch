function scorchedEarth() { // makes all buttons white when its not the button selected
    elements = document.querySelectorAll(".button")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'rgb(245 245 244)';
        elements[i].style.color = 'black';
    }
}

function makeGrid(dimensions, color = 'rgb(51 51 51)') { //this makes the grid depending on what number goes inside of the function, input 16, you get 16x16 grid
    grid.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`
    let e = document.querySelector("#grid");
    for (let i = 0; i < (dimensions * dimensions); i++) {
        let currentDiv = document.createElement("div");
        currentDiv.className = `pd-0 mg-0 bg-white divGrid`;
        e.appendChild(currentDiv)
    };
    divColor(color);
    clear();
    eraserMode();
    colorMode(color);
    rainbowMode();
}

function removeAllChildNodes(parent) {  // This is here, as it might be the method to remove all of the nodes in the div element when clearing the 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function divColor(color) { // this function gives to the hover functionality that lets the user draw
    let divGridStyle = document.querySelectorAll(".divGrid");
    divGridStyle.forEach( div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = color;
        });
    });
};

function clear() { // this is the function to clear the grid
    let divGridStyle = document.querySelectorAll(".divGrid");
    let clear = document.querySelector("#clear");
    clear.addEventListener('click', () => {
    divGridStyle.forEach( div => {
        div.style.backgroundColor = 'white';
    });
});
};

function eraserMode() { // adds the eraser button funtionality
    let divGridStyle = document.querySelectorAll(".divGrid");
    let eraser = document.querySelector("#eraser");
    eraser.addEventListener('click', () => {
        divGridStyle.forEach( div => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white';
            })
        })
    })
}

function colorMode(color) { // adds the color button functionality
    let divGridStyle = document.querySelectorAll(".divGrid");
    let colorButton = document.querySelector("#colorButton");
    colorButton.addEventListener('click', () => {
        divGridStyle.forEach( div => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = color;
            })
        })
    });
}

function rainbowMode() {
    let divGridStyle = document.querySelectorAll(".divGrid");
    let rainbowButton = document.querySelector("#rainbow");
    rainbowButton.addEventListener('click', () => {
        divGridStyle.forEach( div => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = getRandomColor();
            })
        })
    })
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split("");
    let hashtag = '#'
    for (let i = 0; i < 6; i++ ) {
        hashtag += letters[Math.round(Math.random() * 15)];
    }
    return hashtag;
}

// Sets up important variables used later
const grid = document.querySelector("#grid");
let gridNumberOutput = document.querySelector("#rangeOutput");
let slider = document.querySelector("#slider")
let colorId = document.querySelector("#color");

// outputs the sliders initial value and grid, as well as the intial color and sets up the clear button functionality
gridNumberOutput.innerHTML = `${slider.value} x ${slider.value}` 
makeGrid(32);
console.log(getRandomColor());

// changes the sliders value every input of the slider
slider.oninput = function() {
    gridNumberOutput.innerHTML = `${this.value} x ${this.value}`
}

// changes the grid every time the slider or user color changes 
slider.onchange = function() {
    removeAllChildNodes(grid);
    makeGrid(this.value, colorId.value);
}

colorId.onchange = function() {
    divColor(this.value);
    colorMode(this.value);
}

//stuff with the buttons
const button = document.querySelectorAll(".button")

button.forEach( btn => { // changes the button that is clicked so that it is black
    btn.addEventListener('click', () => {
        scorchedEarth();
        btn.style.backgroundColor = 'rgb(51 51 51)';
        btn.style.color = 'white';
    });
})