'use strict';

//Functions Methods


//query selectors
const container = document.querySelector('.gridBox__container');
const clearScreen = document.querySelector('.clearScreen');


//function to create grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = '';
      container.appendChild(cell).className = "grid-item";
    };
    hoverColor();
  };
  
  makeRows(10, 10);


//Function to create random color
let randomColor = function(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//function that changes div color upon being hovered
function hoverColor(){
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    })
}


clearScreen.addEventListener('click', function(){
    const userInput = Number(prompt(`How many squares per side?`));
    if(userInput > 100) prompt('🛑 Error! More than 100 is not allowed!');
    if(userInput < 100){
        makeRows(userInput,userInput);
        
    }
})
