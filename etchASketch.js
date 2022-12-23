const gridContainer= document.querySelector('.gridContainer');
createGrid(10);


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
            newDiv.style.borderStyle='solid';
            newDiv.style.flexGrow = 1;
            //newDiv.style.height='200px';
            //newDiv.style.width='200px';
            newContainer.appendChild(newDiv);
        }
    }
}