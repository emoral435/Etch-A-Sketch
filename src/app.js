let gridOutput = document.querySelector("#rangeOutput");
let slider = document.querySelector("#slider")

gridOutput.innerHTML = `${slider.value} x ${slider.value}`

slider.oninput = function() {
    gridOutput.innerHTML = `${this.value} x ${this.value}`
}

