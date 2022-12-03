//ETCH A SKETCH

const gridContainer = document.querySelector('.grid-container');
const blackGridColorBtn = document.querySelector('.black-grid-color');
const resetBtn = document.querySelector('.reset');
let containerSize = gridContainer.clientWidth;
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
    styleGridRandomColor();
};


//Allows user to choose number of squares per side of the grid
function createNewGrid() {
    slider.addEventListener('input', () => {
        gridContainer.innerHTML = '';
        createDefaultGridSize(slider.value);
        sliderValueOutput.textContent = `Grid Size: ${slider.value} X ${slider.value}`
    })
};


// Adds an event listener to each square in the grid and sets a random background color value when the mouse enters the div
function styleGridRandomColor() {
    let allSquares = document.querySelectorAll('.grid');
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = `rgb(${randomRgbValue()})`
        })
    });
};


// Generates random rgb() color values
function randomRgbValue() {
    let rgbValue = [255, 255, 255];
    let randomRgb = rgbValue.map(val => Math.round(Math.random() * val));
    return randomRgb;
};



// // Adds an event listener to each square in the grid and sets a shade of black background color value when the mouse enters the div
// function styleGridBlack() {
//     let allSquares = document.querySelectorAll('.grid');
//     allSquares.forEach(square => {
//         square.addEventListener('mouseenter', () => {
//             square.style.backgroundColor = `rgb(${shadesOfBlack()})`
//         })
//     });
// };

// // Generates shades of black rgb() color values
// function shadesOfBlack(){
//     let rgbValue = [255, 255, 255];
    
//     let shadeOfBlackRgb = rgbValue.map(val => val - 25);
//     while (val > 25){
//     rgbValue = shadeOfBlackRgb;
//     return shadeOfBlackRgb;
//     };
//  };




// Resets the num of squares per side to default
function resetGridToDefault() {
    resetBtn.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        slider.value = 20;
        sliderValueOutput.textContent = `Grid Size: ${slider.value} X ${slider.value}`
        createDefaultGridSize(slider.value);
    });
};