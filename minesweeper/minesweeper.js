document.addEventListener('DOMContentLoaded', startGame)


// Define your `board` object here!
var board = {
  cells: [
    {
    row: 0,
    col: 0,
    isMine: true,
    hidden: true
 //  isMarked: false,
 //   surroundingMines: 0
    }, 
    {
    row: 0,
    col: 1,
    isMine: false,
    hidden: true
 //   isMarked: false,
 //   surroundingMines: 0
    }, 
    {
    row: 0,
    col: 2,
    isMine: true,
    hidden: true
 //   isMarked: false,
 //   surroundingMines: 0
    },
    {
    row: 1,
    col: 0,
    isMine: false,
    hidden: true,
 //   isMarked: false,
 //   surroundingMines: 0
    },
    {
    row: 1,
    col: 1,
    isMine: false,
    hidden: true
  //  isMarked: false,
  //  surroundingMines: 0
    },
    {
    row: 1,
    col: 2,
    isMine: true,
    hidden: true
  //  isMarked: false,
  //  surroundingMines: 0
    },
    {
    row: 2,
    col: 0,
    isMine: true,
    hidden: true
  //  isMarked: false,
  //  surroundingMines: 0
    },
    {
    row: 2,
    col: 1,
    isMine: false,
    hidden: true
  //  isMarked: false,
  //  surroundingMines: 0
   },
   {
   row: 2,
   col: 2,
   isMine: false,
   hidden: true
 //  isMarked: false,
 //surroundingMines: 0
  }
]
}

const mapSize = 18;

function generateMap() {

}

function generateMines () {
  for (i = 0; i < board.cells.length; i++) {

  }
}


function startGame () {
  // Don't remove this function call: it makes the game work!
 for (i = 0; i < board.cells.length; i++) {
 // let whatcell = board.cells[i]
 // let informationcells = countSurroundingMines(whatcell)
 // board.cells[i].surroundingMines.push = informationcells;

 board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);  
  lib.initBoard();
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
// if everything is unhidden in board object and every bomb is marked then complete you win!
// winning logic, if that person has flagged the mine instead of everything is unhidden and mines haven't been set off count score +1
function checkForWin () {
let countedCells = board.cells.length //9
let countMine = 0
let countMineMarked = 0
let NotMineHidden = 0

const countedMines = board.cells.map(Mines => {
  if (Mines.isMine == true) {
    countMine++
  }
  });

const countedMinesMarked = board.cells.map(Miners => {
if (Miners.isMine == true && Miners.isMarked == true) {
  countMineMarked++
}
});

const countedHNM = board.cells.map(mineHNM => {
  if (mineHNM.isMine !== true && mineHNM.hidden == false) {
    NotMineHidden++
}
});

let deadCells = (countedCells - countMine)

if (countMineMarked == countMine && NotMineHidden == deadCells) {  //if all cells not mines are not hidden
lib.displayMessage('You win!')
}

/*for (let i = 0; i < board.cells.length; i++) {
console.log(countMine)

}*/

}

 // if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
 //   console.log("Bomb marked!")
 //   return;
 // } else if (board.cells[i].hidden == true) {
 //    console.log("Haven't won yet!!1")
 //  } else if (board.cells[i].hidden === true && board.cells[i].isMine === true && board.cells[i].isMarked === true) {
 // console.log('You win!')
 // lib.displayMessage('You win!')
  //} 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
   
 


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
//  get the amount of cell.isMine is true and the amount that isn't then 


function countSurroundingMines (cell) {
var count = 0;
var surrounding = lib.getSurroundingCells(cell.row, cell.col)

for (let i = 0; i < surrounding.length; i++) {

  if (surrounding[i].isMine == true) {
  count++;
}

}
return count
}

