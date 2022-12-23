const container= document.querySelector('.container');
createGrid(16);


function createGrid(size){
    let newDiv;
    for(let i = 0; i < size; i++){
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}