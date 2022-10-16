function scorchedEarth() { // makes all buttons white when its not the button selected
    elements = document.querySelectorAll(".button")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'black';
    }
}

function makeDiv(rowNum) {
    let rowClass = "row" + rowNum;
    let divRow = document.createElement("div");
    divRow.classList.add(rowClass);
    return divRow;
};

function makeSpan() {
    let spanElement = document.createElement("span");
    spanElement.classList.add.apply("sketch");
}

function makeGrid(dimensions) { // makes the overall grid by printing out a row, but during that row, prints out the appropriate amount of spans/divs
    let currentDiv;
    for (let i = 1; i <= dimensions, i++;) {
        currentDiv = makeDiv(i);
        for (let j = 0; j < dimensions; j++) {
            currentDiv.append(makeSpan);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// stuff with the slider
let gridNumberOutput = document.querySelector("#rangeOutput");
let slider = document.querySelector("#slider")

gridNumberOutput.innerHTML = `${slider.value} x ${slider.value}` // outputs the sliders initial value

const grid = document.querySelector("#grid");

slider.oninput = function() {
    gridNumberOutput.innerHTML = `${this.value} x ${this.value}`
     // changes the sliders value when the sliders value gets changed
}

//stuff with the buttons
const button = document.querySelectorAll(".button")

button.forEach( btn => { // changes the button that is clicked so that it is black
    btn.addEventListener('click', () => {
        scorchedEarth();
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    })
})




    

