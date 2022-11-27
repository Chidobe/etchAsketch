//ETCH A SKETCH

const gridContainer = document.querySelector('.grid-container');
let containerSize = gridContainer.clientWidth
const gridSizeBtn = document.querySelector('.grid-size-btn');
const resetBtn = document.querySelector('.reset');
let squares;


window.onload = createDefaultGridSize(16);
createNewGrid();
resetGridToDefault();


function createDefaultGridSize(numOfSq){
    for (let i = 0; i < (numOfSq ** 2); i++) {
                squares = document.createElement('div');
                squares.setAttribute('class', 'grid');
                squares.setAttribute('style', `height:${containerSize / numOfSq}px;width:${containerSize / numOfSq}px`);
                gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${numOfSq}, 1fr)`);
                gridContainer.appendChild(squares);

                squares.addEventListener('mouseleave', () => {
                    squares.setAttribute('style', `background-color: rgb(150, 10, 10)`)
                })
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



   
    
    