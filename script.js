//VARIABLES
//understand how is current player 
let currentPlayer = "";

//GET ELEMENTS FROM DOM
//player buttons 
let btnPlayer = document.querySelectorAll(".btnPlayer");
let btnPlayer1 = document.getElementById("btn-player1");
let btnPlayer2 = document.getElementById("btn-player2");
//cells
let cells = document.querySelectorAll(".cell");

//FUNCTIONS
//current player1
/* function currentPlayer1(){
    currentPlayer = "X";
    console.log("Start Player1 (" + currentPlayer + ")");  
} */

//current player2
/* function currentPlayer2(){
    currentPlayer = "O";
    console.log("Start Player2 (" + currentPlayer + ")");  
} */

function setCurrentPlayer(event){
    let buttonPlayer = event.target.id;
    console.log(buttonPlayer);
    
    if (buttonPlayer === "btn-player1"){
        currentPlayer = "x";
        console.log("Start Player1 (" + currentPlayer + ")"); 
    }else{
        currentPlayer = "o";
    console.log("Start Player2 (" + currentPlayer + ")");
    }
    btnPlayer1.disabled = true;
    btnPlayer2.disabled = true;
}

//add "x" or "o" into cell
function cellElement(){
    //for each cell
    cells.forEach(cell => {
        //on click on the cell
        cell.onclick = function(event) {
            //take the specific cell from the event
            let cell = event.target;
            /* console.log(cell); */
            /* console.log('The clicked cell has id: ' + cell.id); */
            //if the cell is empty
            if(cell.textContent === ""){
                //if the variable currentPlayer === "x"
                if(currentPlayer === "x"){
                    cell.textContent = "x";
                    currentPlayer = "o";
                //else
                }else{
                    cell.textContent = "o";
                    currentPlayer = "x";
                }
            //if the cell isn't empty
            }else{
                console.log("The cell is already occupied");
            }
            // call the function for verify if there is a victory
            chekWin();
        };
    });
    
}

//ONCLICK
btnPlayer1.onclick = function(event){
    setCurrentPlayer(event);
    cellElement();
}

btnPlayer2.onclick = function(event){
    setCurrentPlayer(event);
    cellElement();
}

function chekWin(){
    //winning combinations
    const winningCombinations = [
        [1, 2, 3],  
        [4, 5, 6],  
        [7, 8, 9],  
        [1, 4, 7],  
        [2, 5, 8],  
        [3, 6, 9],  
        [1, 5, 9],  
        [3, 5, 7]   
    ];
    //for cycle for iterate on winning combinations
    for (let i = 0; i<winningCombinations.length; i++){
        //winning conbinations by index
        let combination = winningCombinations[i];

        //tTake the cells from Dom for ID; The numerical part of each ID is the same as each element from the combination variable
        let cellA = document.getElementById("cell-" + combination[0]);
        let cellB = document.getElementById("cell-" + combination[1]);
        let cellC = document.getElementById("cell-" + combination[2]);
        // if the textContet of each cell(A,B,C) is the same, there is a victory
        if(cellA.textContent !== "" &&
            cellA.textContent === cellB.textContent &&
            cellB.textContent === cellC.textContent){
            console.log("vinto da:", cellA.textContent);
            break;
        }          
    }
}

//players buttons
/* 
una volta premuti, si aggiunge una classe css che li fa sparire
*/

//restart button
/* 
al click del bottone, le celle si svuotano e riappaiono i pulsanti di selezione del player
*/

