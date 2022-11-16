// Etch A Sketch 

let gridValue = function () {
    return prompt('How many squares per side do you want?')
};

const gridSizeBtn = document.querySelector('.grid-size-btn');
gridSizeBtn.addEventListener('click', () => gridValue());



let n = 50;

const gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style',`display: grid; grid-template-columns: repeat(${n}, 1fr)`)



let squares;

// 400px is the width and height of the grid container

for (let i = 0; i < (n ** 2); i++) {
    squares = document.createElement('div');
    squares.setAttribute('class', 'grid')
    squares.setAttribute('style', `height:${400/n}px;width:${400/n}px`);
    gridContainer.appendChild(squares)
};