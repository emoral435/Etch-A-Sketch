function scorchedEarth() { // makes all buttons white when its not the button selected
    elements = document.querySelectorAll(".button")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'rgb(245 245 244)';
        elements[i].style.color = 'black';
    }
}

function makeGrid(dimensions) { //this makes the grid depending on what number goes inside of the function, input 16, you get 16x16 grid
    grid.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`
    let e = document.querySelector("#grid");
    for (let i = 0; i < (dimensions * dimensions); i++) {
        let currentDiv = document.createElement("div");
        currentDiv.className = `pd-0 mg-0 bg-white divGrid`;
        e.appendChild(currentDiv)
    }

}

function removeAllChildNodes(parent) {  // This is here, as it might be the method to remove all of the nodes in the div element when clearing the 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// stuff with the slider
const grid = document.querySelector("#grid");
let gridNumberOutput = document.querySelector("#rangeOutput");
let slider = document.querySelector("#slider")

gridNumberOutput.innerHTML = `${slider.value} x ${slider.value}` // outputs the sliders initial value and grid
makeGrid(32);
let ahhhh;


// changes the sliders value when the sliders value gets changed
slider.oninput = function() {
    gridNumberOutput.innerHTML = `${this.value} x ${this.value}`
}

slider.onchange = function() {
    removeAllChildNodes(grid);
    makeGrid(this.value);

    let divGridStyle = document.querySelectorAll(".divGrid");

    divGridStyle.forEach( div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
        });
    });
}

let divGridStyle = document.querySelectorAll(".divGrid");

divGridStyle.forEach( div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});



//stuff with the buttons
const button = document.querySelectorAll(".button")

button.forEach( btn => { // changes the button that is clicked so that it is black
    btn.addEventListener('click', () => {
        scorchedEarth();
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    })
})




    

