// Initialize variable and constants
const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");
let gridSize;

// Make grids with the grid size 16 by 16
makeBoxes(gridSize = 16);

let boxes = document.querySelectorAll(".square");

hoverBoxes();

clearBtn.addEventListener('click', clearBoxes);

function makeBoxes () { 
  let gridArea = gridSize * gridSize;

    for (let j = 0; j < gridArea; j++)
    {
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
  container.style.setProperty('--element-gridSize', gridSize);
};  

  // For each element if mouseover turn individual element 'black'
    function hoverBoxes () { 
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "black";
    })})};
    
    function clearBoxes() {
    getGridSize(); 
    removeBoxes();
    makeBoxes();
    boxes = document.querySelectorAll(".square");
    hoverBoxes();
    };
    
    // Open prompt to find out what user would like to size the grid
    function getGridSize () {
        let gridString = prompt("Please enter the gride size: ", "16");
        gridSize = parseInt(gridString);
        if (gridSize < 0)
        {
            return getGridSize();
        }
    };

    function removeBoxes() {
        while (container.lastChild) {
        container.removeChild(container.lastChild);
        }
    }
   
           