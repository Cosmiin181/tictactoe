const nrOfCells = 9
let isGameOver = false;
let lastClickedCell;

registerCellsEvent()

function registerCellsEvent(){
    for(let i =1;i<=nrOfCells;i++){
        const constructedClassName = "cell-" + i
        const htmlCell = document.getElementsByClassName(constructedClassName)[0]
        
        htmlCell.addEventListener('click', (event)=> {
            const clickedClassName = event.srcElement.className
            lastClickedCell = clickedClassName.match(/\d+/)[0]
        })
    }
}

function gameInit(){   
    var player = "X";
    var ai = "O";
    var cells = array.from(document.querySelectorAll("cell-"));
    var currentPlayer = player;
    var winner = "";
}

function main(){
}


