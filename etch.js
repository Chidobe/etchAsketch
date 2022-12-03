//ETCH A SKETCH

const gridContainer = document.querySelector('.grid-container');
let containerSize = gridContainer.clientWidth
const blackGridColor = document.querySelector('.black-grid-color');
const resetBtn = document.querySelector('.reset');
let squares;
let slider = document.querySelector('.slider');
sliderValueOutput = document.querySelector('.slider-value');


window.onload = createDefaultGridSize(slider.value);
createNewGrid();
resetGridToDefault();

// Creates a 16 x 16 grid of squares; the default grid setting.
function createDefaultGridSize(numOfSq) {
    for (let i = 0; i < (numOfSq ** 2); i++) {
        squares = document.createElement('div');

        squares.setAttribute('class', 'grid');
        squares.setAttribute('style', `height:${containerSize / numOfSq}px;width:${containerSize / numOfSq}px`);
        gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${numOfSq}, 1fr)`);
        gridContainer.appendChild(squares);

    };
    // Adds an event listener to each square in the grid and sets its style value when the mouse enters the div
    let allSquares = document.querySelectorAll('.grid');
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = `rgb(${randomRgbValue()})`
        })
    });
};


// Resets the num of squares per side to default
function resetGridToDefault() {
    resetBtn.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        createDefaultGridSize(20);
    });
};

// Generates random rgb() color values
function randomRgbValue() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return [r, g, b];
};

//Allows user to choose number of squares per side of the grid
function createNewGrid() {
    slider.addEventListener('input', () => {
        gridContainer.innerHTML = '';
        createDefaultGridSize(slider.value);
        sliderValueOutput.textContent = `Grid: ${slider.value} X ${slider.value}`
    })
};


//Allows user to choose number of squares per side of the grid
// function createNewGrid() {
//     gridSizeBtn.addEventListener('click', () => {
//         gridContainer.innerHTML = '';
//         createDefaultGridSize(slider.value)
//     })
// }; find something else to do with this button!!!!!