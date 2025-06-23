//VARIABLES
let currentPlayer = "";
let gameFinished = false;
let win = false;
let countCellsClicked = 0;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

//GET ELEMENTS FROM DOM
//player buttons 
let btnPlayer = document.querySelectorAll(".btnPlayer");
let btnPlayer1 = document.getElementById("btn-player1");
let btnPlayer2 = document.getElementById("btn-player2");
//cells
let cells = document.querySelectorAll(".cell");
//restart button
let btnRestart = document.getElementById("btn-restart");
//score
let scorePlayer1 = document.getElementById("score-player1");
let scorePlayer2 = document.getElementById("score-player2");

//FUNCTIONS
//check how is current player 
function setCurrentPlayer(event){
    let buttonPlayer = event.target.id;
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

//add "x" or "o" into cells
function cellElement(){
    //for each cell
    cells.forEach(cell => {
        //on click on the cell
        cell.onclick = function(event) {
            //take the specific cell from the event
            let cell = event.target;
            /* console.log(cell); */
            /* console.log('The clicked cell has id: ' + cell.id); */
            //message if a player clicks on a cell before choosing a current player
            if (currentPlayer === "") {
                console.log("Choose a player to start the game");
                return;
            }
            //if the cell is empty
            if(cell.textContent === ""){
                //if the variable currentPlayer === "x"
                if(currentPlayer === "x"){
                    cell.textContent = "x";
                    currentPlayer = "o";
                //else
                }else {
                    cell.textContent = "o";
                    currentPlayer = "x";
                }
                //to understand how many cells have been clicked
                countCellsClicked++;
            //if the cell isn't empty
            }else{
                console.log("The cell is already occupied");
            }
            // call the function for verify if there is a victory
            checkWin();
            //
            draw();
        };
    });
}

//check if there is a winner
function checkWin(){
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
        //take the cells from Dom for ID; The numerical part of each ID is the same as each element from the combination variable
        let cellA = document.getElementById("cell-" + combination[0]);
        let cellB = document.getElementById("cell-" + combination[1]);
        let cellC = document.getElementById("cell-" + combination[2]);
        // if the textContet of each cell(A,B,C) is the same, there is a victory
        if(cellA.textContent !== "" &&
            cellA.textContent === cellB.textContent &&
            cellB.textContent === cellC.textContent){
            win = true;
            gameFinished = true;
            console.log("The winner is:", cellA.textContent);
            cellA.classList.add("winner");
            cellB.classList.add("winner");
            cellC.classList.add("winner");
            if(gameFinished === true){
                for(let i = 0; i< cells.length; i++){
                    if(cells[i].textContent === ""){
                        cells[i].onclick = null;
                    }
                }
            }
            if(cellA.textContent === "x"){
                pointPlayer1++;
                scorePlayer1.textContent = pointPlayer1;
            }else{
                pointPlayer2++;
                scorePlayer2.textContent = pointPlayer2;
            }
            break;
        }
    }
}

//check if there is a draw
function draw(){
    if(countCellsClicked === 9 && win === false){
        console.log("Draw");
        gameFinished = true;
    }
}

//restart the game
function restart(){
    //restore their original values
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
    currentPlayer = "";
    gameFinished = false;
    win = false;
    countCellsClicked = 0;
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("winner")
    })
    //reactivate clicks
    cellElement();
}

//EVENT HANDLERS
cellElement();

btnPlayer1.onclick = function(event){
    setCurrentPlayer(event);
}

btnPlayer2.onclick = function(event){
    setCurrentPlayer(event);
}

btnRestart.onclick = function(){
    restart();
}

