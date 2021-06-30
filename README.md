# etchAndSketch
The Odin Project Etch a Sketch Project


This project was made in following with The Odin Project.

This project helped me to better learn:
1) Creating and setting up functions
2) Implementing logic
3) Manipulating the DOM
4) Using -webkits
5) Flexbox

The Explanation for the JS code is following:

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
***256 is the square root of 16 which is the starting grid size



Each iteration up to 256 will create a div container that will get the classlist 'cell' added to it. Each of those div cells will have an eventlistener waiting for a mouseover event to occur. When that event happens, the target of that event (the div cell being hovered over) will change its color to black. 
.appendChild(div) is what actually adds the 16x16 grids with the accompanying created/styled div cells to the .screen container.

2) Make a function that will generate a random color.

```JavaScript
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
```
The characters chosen for letters are chosen because those digits and letters are what are used to create color codes. Other letters are not needed because no colors are made using them. So we can stop at F.
The for loop only iterates to 6 because 6 is the amount of spaces that make up a regular hexcode: #ffffff (can be shortened to #fff)
For each of the 6 iterations of the for loop, there will be either a letter(a-f) or a number(0-9) chosen and added to the # symbol.
Return color returns the 6 randomly generated #'s and letters.

3) Create a function to remove all the settings from the grid so that new dimensions can be specified (new grids of different sizes built)

```JavaScript
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
```
This function removes all of the parent settings (like grid-template-rows and columns) of whatever it is called on - so when we want to remake our grid to a new size this function must be included so we can erase the CSS settings that are hardcodes in the styles file which dictate the grid be 16x16. So if we want to change that, we need to be able to eliminate those specifications and start over. This function does that. 

4) Target every button and interactive element in the DOM and assign eventlisteners.
a)
```JavaScript
const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++){
        cell[i].style.backgroundColor = '#ddffbc';
    }
});
```
grid.children are the div cells. For every div cell in the grid, which is determined by val which is the number below the slider. So val*val will equal ALL the div cells inside the grid so on each iteration cell[i] of that grid we change the background color back to its starting color at the same time. 
b)
```JavaScript
 const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});
 ```
 
 Each cell gets a listener event added and whenever a mouse hovers then the div cell will call the gretRandomColor() function on itself which will change its background color on each event(hover).
 c)
```JavaScript
 const black = document.querySelector('#black');
black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

 ```
 
 d)
 ```JavaScript
 const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});
 ```
 This function selects the color input according to what the user specifies in the input box
 
 e)
 ```JavaScript
 const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');

slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for(let i = 0; i < val*val; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }

});
 ```
This function is what remakes the grid lines according to the value specified by the slider
val is what changes the # dynamically and removeAllChildNodes(grid) is what removes the old grid-template-col/row settings that are hardcoded in the style.css file.  The new grid.setAtrribute uses template literals ${val} to specifiy the number of coloumns and rows according to the user input on the slider.
The createElement div is what creates and fills this new grid with the correct number of cells
The mouseover event listener then gives those cells there starting default behavior of changing to black when hovered over. 
