//initialize DOM variables and event handler
let sliderItem = document.querySelector(".slider");
sliderItem.addEventListener('input',sliderChange);

let SIZE = sliderItem.value;

let clearButton = document.querySelector('button');
clearButton.addEventListener('click',clearGrid);

let sliderTextItem = document.querySelector('#sliderText');
sliderTextItem.textContent=SIZE.toString();

//initial creation of grid 
const gridContainer= document.querySelector('.gridContainer');
createGrid(SIZE);


//functions:
function createGrid(size){
    let newDiv;
    let newRow;
    for(let containers=0; containers<size;containers++){
        newRow = document.createElement("div");
        newRow.className = 'row';
        newRow.style.display = 'flex';
        newRow.style.flexGrow = 1;
        gridContainer.appendChild(newRow);

        for(let i = 0; i < size; i++){
            newDiv = document.createElement("div");
            newDiv.className = 'gridItem';
            newDiv.addEventListener('mouseover',changeBackgroundColor);
            newDiv.style.flexGrow = 1;
            newRow.appendChild(newDiv);
        }
    }
}

//event functions:
function changeBackgroundColor(){
    this.style.backgroundColor = 'black';
}

function clearGrid(gridContainer) {
    let rows = document.querySelectorAll(".row");
    rows.forEach(
        function(node){
            node.remove();
        }
    )
    createGrid(SIZE);
}

function sliderChange(){
    SIZE = this.value;
    let sliderTextItem = document.querySelector('#sliderText');
    sliderTextItem.textContent=SIZE.toString();
    clearGrid(gridContainer);
}