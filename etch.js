

const gridContainer = document.querySelector('.grid-container');
let containerSize = gridContainer.clientWidth
const gridSizeBtn = document.querySelector('.grid-size-btn');
const resetBtn = document.querySelector('.reset');
//let squares = document.createElement('div');


window.onload = createDefaultGridSize(16);
createNewGrid();
resetGridToDefault();

function createDefaultGridSize(n){
    for (let i = 0; i < (n ** 2); i++) {
                squares = document.createElement('div');
                squares.setAttribute('class', 'grid');
                //400px is the width and height of the grid container
                squares.setAttribute('style', `height:${400 / n}px;width:${400 / n}px`);
                gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${n}, 1fr)`);
                gridContainer.appendChild(squares);
    };
    
};


function createNewGrid(){
    gridSizeBtn.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        createDefaultGridSize(prompt('how many squares per side?'))
    })
};


function resetGridToDefault (){
    resetBtn.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        createDefaultGridSize(16);
    });
};




// // Etch A Sketch 


// //1. Get the nummber of sides the grids should have
// let gridValue = function () {
//     return prompt('How many squares per side do you want?')
// };


// //2. An 
// const gridSizeBtn = document.querySelector('.grid-size-btn');
// gridSizeBtn.addEventListener('click', () => { createGrid(gridValue()); });


// //3. Creates the grid and sets its styling

// function createGrid(n) {
//     let squares;
//     const gridContainer = document.querySelector('.grid-container');

//     for (let i = 0; i < (n ** 2); i++) {
//         squares = document.createElement('div');
//         squares.setAttribute('class', 'grid');
//         //400px is the width and height of the grid container
//         squares.setAttribute('style', `height:${400 / n}px;width:${400 / n}px`);
//         gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${n}, 1fr)`)
//         gridContainer.appendChild(squares)    

       
//     };
   
// };



   
    
    