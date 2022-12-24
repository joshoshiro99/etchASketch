const gridContainer= document.querySelector('.gridContainer');
createGrid(200);


function createGrid(size){
    let newDiv;
    let newContainer;
    for(let containers=0; containers<size;containers++){
        newContainer = document.createElement("div");
        newContainer.className = 'container';
        newContainer.style.display = 'flex';
        newContainer.style.flexGrow = 1;
        gridContainer.appendChild(newContainer);

        for(let i = 0; i < size; i++){
            newDiv = document.createElement("div");
            newDiv.className = 'gridItem';
            newDiv.addEventListener('mouseover',changeBackgroundColor);
            newDiv.style.flexGrow = 1;
            newContainer.appendChild(newDiv);
        }
    }
}

function changeBackgroundColor(){
    this.style.backgroundColor = 'black';
}