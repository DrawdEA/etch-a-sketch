let dimension = 16
let container = document.querySelector(".container")

for (let i = 0; i < dimension * dimension; i++) {
    const box = document.createElement("div")
    
    box.style.width = "5px"
    box.style.height = "5px"
    box.style.backgroundColor = "black"
    box.style.margin = "1px"
    container.appendChild(box)
}