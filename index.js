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
            console.log(constructedClassName)
        })
    }
}

//create and save into variable the current user turn, and initialize how is "x" or "o";
//based on who will go first
if(confirm("Does X want to go first?") == true)
{
    var player = 'X';
}
else
{
    var player = 'O';
}

//create an array for the squares using the regular methodology
var squares = new Array();
    squares[0] = 0;
    squares[1] = 1;
    squares[2] = 2;
    squares[3] = 3;
    squares[4] = 4;
    squares[5] = 5;
    squares[6] = 6;
    squares[7] = 7;
    squares[8] = 8;
// win combinations
var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];