/* 
-Impostare una condizione che se l’utente clicca sul bottone player 1, l’unico carattere che si può inserire nei quadrati è X; dopo che ha cliccato, l’unico carattere che si può inserire è O.

1-Impostare la variabile:
let currentPlayer = “”;

2-Impostare una funzione che cliccando su player 1: 
let currentPlayer = “x”;

3-Impostare una funzione che cliccando su player 2:
let currentPlayer = “o”;

4-Impostare una funzione che cliccando su una cella:
Se currentPlayer = “X”; 
Viene inserito il testo X
Poi impostato currentPlayer = “O”;
Altrimenti
Viene inserito il testo O
let currentPlayer = “X”;
*/

//variable for understand how is current player 
let currentPlayer = "";

//get elements from dom
//player bottuns 
let btnPlayer1 = document.getElementById("btn-player1");
let btnPlayer2 = document.getElementById("btn-player2");
//cells
let cells = document.querySelectorAll(".cell");

//functions
//current player
function currentPlayer1(){
    currentPlayer = "x";
    console.log("Start Player1 (" + currentPlayer + ")");  
}

function currentPlayer2(){
    currentPlayer = "o";
    console.log("Start Player2 (" + currentPlayer + ")");
}

//add "x" or "o" into cell
function cellElement(){
    cells.forEach(cell => {
        cell.onclick = function(event) {
            let cell = event.target;
            console.log(cell);
            console.log('The clicked cell has id: ' + cell.id);
            if(cell.textContent === ""){
                if(currentPlayer === "x"){
                    cell.textContent = "x";
                    currentPlayer = "o";
                }else{
                    cell.textContent = "o";
                    currentPlayer = "x";
                }
            }else{
                console.log("The cell is already occupied");
            }
        };
    });
}

//test
btnPlayer1.onclick = function(){
    currentPlayer1();
    cellElement();
}

btnPlayer2.onclick = function(){
    currentPlayer1();
    cellElement();
}






