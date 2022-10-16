function scorchedEarth() { // makes all buttons white when its not the button selected
    elements = document.querySelectorAll(".button")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'black';
    }
}

function makeGrid(dimensions) {
    let e = document.querySelector("#grid");
    for (let i = 1; i <= dimensions; i++) {
        let currentRow = document.createElement("div");
        currentRow.className = "row" + i;
        for (let j = 1; j <= dimensions; j++) {
            let cell = document.createElement("span");
            cell.className = "gridsquare bg-sky-300";
            cell.innerText = (i * dimensions) + j
            currentRow.append(cell);
        }
        e.appendChild(currentRow)
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
makeGrid(32);
removeAllChildNodes(grid);
//stuff with the buttons
const button = document.querySelectorAll(".button")

button.forEach( btn => { // changes the button that is clicked so that it is black
    btn.addEventListener('click', () => {
        scorchedEarth();
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    })
})




    

