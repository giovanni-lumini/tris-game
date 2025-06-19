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
function currentPlayer1(){
    currentPlayer = "X";
    console.log("Start Player1 (" + currentPlayer + ")");  
}

//current player2
function currentPlayer2(){
    currentPlayer = "O";
    console.log("Start Player2 (" + currentPlayer + ")");  
}

//add "x" or "o" into cell
function cellElement(){
    //for each cell
    cells.forEach(cell => {
        //on click on the cell
        cell.onclick = function(event) {
            //take the specific cell from the event
            let cell = event.target;
            console.log(cell);
            console.log('The clicked cell has id: ' + cell.id);
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
        };
    });
}

//TEST
btnPlayer1.onclick = function(){
    currentPlayer1();
    cellElement();
}

btnPlayer2.onclick = function(){
    currentPlayer2();
    cellElement();
}

