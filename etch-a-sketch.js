let DEFAULT_DIMENSIONS = 16
let BOX_SIZE = 30

let container = document.querySelector(".container")
let button = document.querySelector(".options > button")



function initializeContainer(dimension) {
    for (let i = 0; i < dimension * dimension; i++) {
        const box = document.createElement("div")
        box.style.width = `${BOX_SIZE}px`
        box.style.height = `${BOX_SIZE}px`
        box.style.backgroundColor = "black"
        box.classList.add("pixel")
        container.appendChild(box)
    }

    container.style.width = dimension * BOX_SIZE + "px"
    container.style.height = dimension * BOX_SIZE + "px"
}



// Turns the opacity of the hovered square to 0.
document.addEventListener("mouseover", e => {
    let box = e.target.closest(".pixel")
    if (!box) {return}
    let op = window.getComputedStyle(box).opacity
    if (op > 0) {
        console.log("HA")
        box.style.opacity = op - 0.1
    }

    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    
})

// Prompts for adjusting the dimensions of the etch-a-sketch.
button.addEventListener("click", () => {
    let dim
    do {
        let text = prompt("How many squares per side? (Must not be more than 100)")
        if (text == null) { return }
        dim = parseInt(text)
    } while (dim == NaN || dim > 100)
    
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child)
        child = container.lastElementChild
    }

    initializeContainer(dim)
})



// Initialize the container for the first time.
initializeContainer(DEFAULT_DIMENSIONS)