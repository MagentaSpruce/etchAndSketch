# etchAndSketch
The Odin Project Etch a Sketch Project


This project was made in following with The Odin Project.

This project helped me to better learn:
1) Creating and setting up functions
2) Implementing logic
3) Manipulating the DOM
4) Using -webkits
5) Flexbox

//There are no slated improvements or changes for this project// -- It is marked as finished. The Explanation for the JS code is following:

1) Make a function that will create a grid that is 16x16.

```JavaScript 
const grid = document.querySelector('.screen');

const createGrid = () => {
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
};
createGrid();
```
